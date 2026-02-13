"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function TestimonialCarousel() {
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

    return (
        <Carousel className="w-full max-w-4xl mx-auto">
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
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
