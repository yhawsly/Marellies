import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
        

            {/* Hero */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop"
                        alt="Team Meeting"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white drop-shadow-lg">
                        Our Story
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Passion, Precision, Perfection.
                    </p>
                </div>
            </section>

            {/* Narrative */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-heading font-bold text-primary">From Vision to Reality</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Founded in 2018, Marellies began with a simple mission: to transform ordinary gatherings into extraordinary experiences. What started as a small passion project has grown into a premier event planning agency known for its meticulous attention to detail and creative flair.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that every client is unique, and so every event must be too. Our team of dedicated planners, designers, and coordinators work tirelessly to ensure that your personality shines through in every element of your celebration.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                                alt="Event Setup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-4xl font-heading font-bold text-center mb-16">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-card border-none shadow-md text-center py-8">
                            <CardContent className="space-y-4">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">Client-Centric</h3>
                                <p className="text-muted-foreground">Your happiness is our priority. We listen, adapt, and deliver beyond expectations.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-none shadow-md text-center py-8">
                            <CardContent className="space-y-4">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">Excellence</h3>
                                <p className="text-muted-foreground">We settle for nothing less than perfection in every detail, big or small.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-none shadow-md text-center py-8">
                            <CardContent className="space-y-4">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Heart className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">Passion</h3>
                                <p className="text-muted-foreground">We love what we do, and that energy is poured into every event we create.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            
        </main>
    );
}
