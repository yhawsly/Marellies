import Image from "next/image"; // 1. Import Image

export default function PortfolioPage() {
    const images = [
        "https://images.unsplash.com/photo-1765947384834-3bdcffcaffff?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
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
                            {/* 2. Replaced <img> with <Image /> */}
                            <Image
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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