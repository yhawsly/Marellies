import { MessageSquare, ClipboardList, Settings, PartyPopper } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Consultation",
            description: "We meet to understand your vision, budget, and requirements.",
            icon: MessageSquare
        },
        {
            id: 2,
            title: "Planning & Design",
            description: "We create a custom proposal, mood boards, and a roadmap.",
            icon: ClipboardList
        },
        {
            id: 3,
            title: "Coordination",
            description: "We handle vendor bookings, timelines, and logistics.",
            icon: Settings
        },
        {
            id: 4,
            title: "Celebration",
            description: "We execute the event flawlessly while you enjoy the moment.",
            icon: PartyPopper
        }
    ];

    return (
        <section className="py-24 bg-background fade-in-up">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">How It Works</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From the first coffee to the final toast, we’re with you every step of the way.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="bg-background pt-4 md:pt-0 relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-background">
                                        <step.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
