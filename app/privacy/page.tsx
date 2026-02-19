import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Privacy Policy | Marellies",
    description: "Learn how Marellies collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Privacy Policy</h1>

                <Card className="border-none shadow-lg">
                    <CardContent className="p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At Marellies, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We collect information that you provide directly to us, such as:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Contact information (name, email address, phone number).</li>
                                <li>Event details for planning purposes.</li>
                                <li>Newsletter subscription preferences.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use your information to provide our services, communicate with you about your events, send newsletters (if you've opted in), and improve our website experience. We do not sell your personal data to third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about our Privacy Policy, please contact us at hello@marellies.com.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
