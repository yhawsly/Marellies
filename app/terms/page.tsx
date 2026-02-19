import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Terms of Service | Marellies",
    description: "Read the terms and conditions for using Marellies event planning services.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Terms of Service</h1>

                <Card className="border-none shadow-lg">
                    <CardContent className="p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using the Marellies website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Services Offered</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Marellies provides professional event planning services, including weddings, corporate events, and private parties. Specific service details and pricing will be outlined in individual contracts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to provide accurate and complete information when contacting us or booking services. You are responsible for maintaining the confidentiality of any account details provided.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Marellies strives for excellence but cannot be held liable for unforeseen circumstances, vendor failures, or event outcomes beyond our reasonable control.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These terms are governed by the laws of the jurisdiction in which Marellies is registered.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
