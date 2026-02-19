"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    description: string;
    mainImage: string;
    gallery: string[];
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Royal Gardens Wedding",
        category: "Wedding",
        description: "A breathtaking outdoor ceremony surrounded by blooming florals and elegant decor. We transformed the garden into a fairytale setting with crystal chandeliers hanging from ancient oaks.",
        mainImage: "https://images.unsplash.com/photo-1765947384834-3bdcffcaffff?q=80&w=1471&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1765947384834-3bdcffcaffff?q=80&w=1471&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Tech Summit Gala",
        category: "Corporate",
        description: "An immersive corporate gala featuring futuristic lighting, interactive installations, and a sleek, modern aesthetic that perfectly aligned with the client's brand identity.",
        mainImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
        ]
    },
    {
        id: 3,
        title: "Sunset Beach Party",
        category: "Private Party",
        description: "A relaxed yet luxurious beachside celebration. Guests enjoyed a custom tiki bar, fire dancers, and a dining experience under the stars.",
        mainImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: 4,
        title: "Elegant Estate Reception",
        category: "Wedding",
        description: "Classic elegance defined this estate reception. White roses, gold accents, and a live jazz band created a timeless atmosphere.",
        mainImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: 5,
        title: "Product Launch 2025",
        category: "Corporate",
        description: "A high-energy launch event for a leading tech firm. We managed the stage design, AV production, and guest logistics for 500 attendees.",
        mainImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
        ]
    },
    {
        id: 6,
        title: "Golden Anniversary",
        category: "Private Party",
        description: "Celebrating 50 years of love with a golden-themed dinner party. Custom centerpieces and a retrospective photo display were the highlights.",
        mainImage: "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=687&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=687&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
        ]
    }
];

export const metadata = {
    title: "Gallery",
    description: "Explore our portfolio of stunning weddings, corporate events, and private celebrations planned and designed by Marellies.",
};

export default function GalleryPage() {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    return (
        <main className="min-h-screen bg-background">

            <section className="pt-32 pb-12 container mx-auto px-4 text-center">
                <h1 className="text-5xl font-heading font-bold mb-4">Our work speaks for itself</h1>
                <p className="text-xl text-muted-foreground">
                    A glimpse into the magical moments we've created. Click on any event to explore.
                </p>
            </section>

            <section className="pb-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={item.mainImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-white/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
                                    <div className="mt-4 bg-white/20 backdrop-blur-sm p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        <ZoomIn className="text-white w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-none">
                    {selectedItem && (
                        <div className="flex flex-col md:flex-row h-full max-h-[80vh] md:max-h-[70vh]">

                            {/* Image Carousel Section (Left/Top) */}
                            <div className="w-full md:w-2/3 bg-black relative flex items-center justify-center min-h-[300px]">
                                <Carousel className="w-full h-full">
                                    <CarouselContent>
                                        {selectedItem.gallery.map((src, index) => (
                                            <CarouselItem key={index} className="relative h-full flex items-center justify-center">
                                                <div className="relative w-full aspect-video md:aspect-auto md:h-full">
                                                    {/* We use standard img for carousel to avoid some Next/Image sizing complexity in dynamic containers, 
                                                         or we can use Next/Image with 'contain' object-fit */}
                                                    <Image
                                                        src={src}
                                                        alt={`${selectedItem.title} - Image ${index + 1}`}
                                                        fill
                                                        className="object-contain"
                                                        priority={index === 0}
                                                        unoptimized
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-4 bg-black/50 text-white border-transparent hover:bg-black/70" />
                                    <CarouselNext className="right-4 bg-black/50 text-white border-transparent hover:bg-black/70" />
                                </Carousel>
                            </div>

                            {/* Details Section (Right/Bottom) */}
                            <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col overflow-y-auto">
                                <DialogHeader className="mb-4 text-left">
                                    <div className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">{selectedItem.category}</div>
                                    <DialogTitle className="text-3xl font-heading font-bold mb-2">{selectedItem.title}</DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="text-base leading-relaxed text-muted-foreground mb-6">
                                    {selectedItem.description}
                                </DialogDescription>

                                <div className="mt-auto pt-4 border-t">
                                    <Button className="w-full" onClick={() => setSelectedItem(null)}>Close Gallery</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </main>
    );
}