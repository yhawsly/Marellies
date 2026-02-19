import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with the Marellies team to start planning your next unforgettable event.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">

            <section className="pt-32 pb-12 bg-primary text-primary-foreground text-center">
                <h1 className="text-5xl font-heading font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-primary-foreground/80">
                    Ready to start planning? We'd love to hear from you.
                </p>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-heading font-bold">Get In Touch</h2>
                        <p className="text-muted-foreground text-lg">
                            Fill out the form, or reach out to us directly using the contact information below.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Visit Us</h3>
                                    {/* Updated address to match the map location found */}
                                    <p className="text-muted-foreground">Oko Okine St, Accra, Ghana</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Call Us</h3>
                                    <p className="text-muted-foreground">+233 55 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">hello@marellies.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Integration */}
                        <div className="w-full h-64 bg-muted rounded-lg overflow-hidden border border-border">
                            <iframe
                                title="Marellies Location"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://maps.google.com/maps?q=MARELLIES%20Oko%20Okine%20St%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <ContactForm />
                    </div>

                </div>
            </section>


        </main>
    );
}