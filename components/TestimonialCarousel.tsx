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
            name: "Sarah & Mike",
            role: "Ideally Married Couple",
            content: "Marellies made our dream wedding a reality. Every detail was perfect, and the team was incredibly supportive throughout the process.",
            rating: 5,
        },
        {
            name: "Acme Corp",
            role: "Corporate Client",
            content: "Professional, efficient, and creative. Our annual gala was a huge success thanks to their expertise.",
            rating: 5,
        },
        {
            name: "Jessica T.",
            role: "Birthday Host",
            content: "The best party ever! My guests are still talking about the decor and entertainment. Highly recommend!",
            rating: 5,
        },
    ];

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="bg-muted/50 border-none shadow-sm">
                                    <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <blockquote className="text-xl italic font-medium text-foreground/80">
                                            "{testimonial.content}"
                                        </blockquote>
                                        <div>
                                            <cite className="font-bold not-italic text-lg">{testimonial.name}</cite>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground md:hidden">
                {current} / {count}
            </div>
        </div>
    );
}
