"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function TestimonialCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const testimonials = [
        {
            name: "Prophetic Surf",
            role: "Client",
            content: "For stunning photos and amazing videos, I highly recommend Emmanuel Multimedia — they never disappoint!",
            rating: 5,
            color: "bg-[#fce4ec]", // Light Pink
            stackColors: ["bg-[#e3f2fd]", "#fce4ec"] // Blue and Pink layers
        },
        {
            name: "Sarah Johnstone",
            role: "Wedding Client",
            content: "Every detail was accounted for. The team went above and beyond to ensure our special day was absolutely perfect.",
            rating: 5,
            color: "bg-[#fff9c4]", // Light Yellow
            stackColors: ["bg-[#fce4ec]", "bg-[#e8f5e9]"]
        },
        {
            name: "David Chen",
            role: "Corporate Lead",
            content: "Professionalism at its finest. They handled our multi-day summit with grace and precision. Highly recommended.",
            rating: 5,
            color: "bg-[#e1f5fe]", // Light Blue
            stackColors: ["bg-[#f3e5f5]", "bg-[#fff3e0]"]
        },
    ];

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api]);

    return (
        <div className="w-full max-w-lg mx-auto px-4">
            <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <div className="py-12 px-6">
                                <div className="relative group">
                                    {/* Stacked background layers */}
                                    <div className="absolute inset-0 bg-blue-100/50 rounded-xl rotate-3 translate-y-3 translate-x-1 shadow-sm" />
                                    <div className="absolute inset-0 bg-rose-100/50 rounded-xl -rotate-2 translate-y-1.5 -translate-x-1 shadow-sm" />

                                    {/* Main Note Card */}
                                    <Card className={`${testimonial.color} border-none shadow-xl min-h-[400px] relative z-10 p-8 flex flex-col -rotate-1 transition-transform hover:rotate-0 duration-300`}>
                                        <div className="flex items-start gap-4 mb-auto">
                                            {/* Circular Avatar Placeholder */}
                                            <div className="w-14 h-14 rounded-full border-2 border-white/80 shrink-0 flex items-center justify-center overflow-hidden bg-white/20">
                                                <div className="w-12 h-12 rounded-full border border-white/40" />
                                            </div>
                                            <div className="text-left pt-1">
                                                <h4 className="font-serif font-black text-xl text-[#2d3436] leading-tight">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-[#0984e3] font-medium text-sm">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>

                                        <blockquote className="mt-8 text-lg font-medium text-neutral-800/90 italic leading-relaxed text-left">
                                            “{testimonial.content}”
                                        </blockquote>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === i
                            ? "bg-[#2d3436] w-6"
                            : "bg-[#dfe6e9] hover:bg-neutral-400"
                            }`}
                        onClick={() => api?.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
