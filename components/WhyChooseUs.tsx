import { Award, Users, HeartHandshake } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Choose Marellies?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We don't just plan events; we create experiences that resonate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Award-Winning Excellence</h3>
                        <p className="text-muted-foreground">
                            Recognized for our attention to detail and creative vision. We bring a high standard of quality to every event, no matter the size.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <HeartHandshake className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
                        <p className="text-muted-foreground">
                            Your story is unique, and your event should be too. We tailor every aspect of the design and logistics to reflect your personality and goals.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Trusted Vendor Network</h3>
                        <p className="text-muted-foreground">
                            Access our exclusive list of the best florists, caterers, and venues. We've built strong relationships to ensure you get the best quality and value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
