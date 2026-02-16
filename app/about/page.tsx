import Image from "next/image"; // Make sure this is imported
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">

            {/* Hero */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop"
                        alt="Team Meeting"
                        fill
                        className="object-cover brightness-50"
                        priority // Optional: Prioritizes loading the hero image
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

                        {/* FIXED: Replaced <img> with <Image /> */}
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                                alt="Event Setup"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Planner */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 relative h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
                                alt="Lead Planner"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
                            <h2 className="text-4xl font-heading font-bold text-primary">Meet Your Planner</h2>
                            <h3 className="text-2xl font-semibold">Marellies Founder & Lead Coordinator</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                With over a decade of experience in the event industry, I founded Marellies with a passion for storytelling through design. My approach is personal and detail-oriented—I don't just plan events; I curate experiences that reflect the unique personalities of my clients.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From the initial concept to the final toast, I am dedicated to making the planning process as joyful as the event itself. When I'm not coordinating weddings or corporate galas, you can find me exploring new culinary trends or seeking inspiration in art and nature.
                            </p>
                            <div className="pt-4">
                                <p className="font-handwriting text-3xl text-primary transform -rotate-2">XOXO, Marellies</p>
                            </div>
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