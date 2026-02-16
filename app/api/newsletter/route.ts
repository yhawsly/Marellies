import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const newsletterSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
});

export async function POST(req: NextRequest) {
    if (!resend) {
        console.error('RESEND_API_KEY is missing');
        return NextResponse.json({ success: false, error: 'Internal Server Configuration Error' }, { status: 500 });
    }

    try {
        const body = await req.json();
        const { email } = newsletterSchema.parse(body);

        // Send welcome email to the user
        await resend.emails.send({
            from: 'Marellies Newsletter <onboarding@resend.dev>', // Update with verified domain
            to: 'delivered@resend.dev', // In production, this would be the 'email' variable
            replyTo: 'hello@marellies.com',
            subject: 'Welcome to Marellies Newsletter',
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #4B0082;">Welcome to Marellies!</h1>
          <p>Thank you for subscribing to our newsletter. We are thrilled to have you with us.</p>
          <p>You'll recall us for your next big event!</p>
          <br />
          <p>Best regards,</p>
          <p>The Marellies Team</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Newsletter error:', error);
        // Simplified error handling to avoid build issues with Zod types
        if (error?.name === 'ZodError') {
            return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: 'Failed to subscribe' }, { status: 500 });
    }
}
