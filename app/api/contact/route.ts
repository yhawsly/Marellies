import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactFormSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    eventType: z.string().min(1, { message: "Please select an event type." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(req: NextRequest) {
    if (!resend) {
        console.error('RESEND_API_KEY is missing');
        return NextResponse.json({ success: false, error: 'Internal Server Configuration Error' }, { status: 500 });
    }

    try {
        const body = await req.json();
        const { firstName, lastName, email, eventType, message } = contactFormSchema.parse(body);

        const data = await resend.emails.send({
            from: 'Marellies Contact Form <onboarding@resend.dev>', // Update this with your verified domain
            to: 'delivered@resend.dev', // Update this to the owner's email
            replyTo: email,
            subject: `New Inquiry: ${eventType} - ${firstName} ${lastName}`,
            html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Contact form error:', error);
        if (error instanceof ZodError) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return NextResponse.json({ success: false, errors: (error as any).errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
