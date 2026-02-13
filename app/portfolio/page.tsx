import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
    const images = [
        "https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=2076&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507915977619-6ccfe8003ae3?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    ];

    return (
        <main className="min-h-screen bg-background">

            <section className="pt-32 pb-12 container mx-auto px-4 text-center">
                <h1 className="text-5xl font-heading font-bold mb-4">Our work speaks for itself</h1>
                <p className="text-xl text-muted-foreground">
                    A glimpse into the magical moments we've created.
                </p>
            </section>

            <section className="pb-20 container mx-auto px-4">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((src, index) => (
                        <div key={index} className="break-inside-avoid rounded-lg overflow-hidden group relative">
                            <img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-auto hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <span className="text-white text-lg font-bold">View Event</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
