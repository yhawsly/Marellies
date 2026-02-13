import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Wedding Planning",
            description: "Full-service planning for your big day.",
            price: "Starting at $3,000",
            features: ["Venue Selection", "Vendor Management", "Timeline Creation", "Day-of Coordination", "Design & Decor"],
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Corporate Events",
            description: "Professional events that impress.",
            price: "Custom Quote",
            features: ["Conference Logistics", "Brand Activation", "Catering & Menu Design", "AV & Lighting", "Guest Management"],
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
        },
        {
            title: "Social Gatherings",
            description: "Parties, Anniversaries, and Baby Showers.",
            price: "Starting at $1,500",
            features: ["Theme Development", "Entertainment Booking", "Custom Invitations", "On-site Coordination", "Interactive Stations"],
            image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-background">

            <section className="pt-32 pb-12 bg-muted/20 text-center">
                <h1 className="text-5xl font-heading font-bold mb-4">Our Services</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tailored packages to meet your specific needs.
                </p>
            </section>

            <section className="py-16 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card">
                            <div className="h-48 overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold font-heading mb-2">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                                <div className="text-xl font-semibold text-primary mb-6">{service.price}</div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full">Get a Quote</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
