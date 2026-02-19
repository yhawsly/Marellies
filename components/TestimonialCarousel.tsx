"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Prophetic Surf",
        role: "Client",
        content: "For stunning photos and amazing videos, I highly recommend Emmanuel Multimedia — they never disappoint!",
        color: "bg-[#fce4ec]", // Light Pink
    },
    {
        id: 2,
        name: "Sarah Johnstone",
        role: "Wedding Client",
        content: "Every detail was accounted for. The team went above and beyond to ensure our special day was absolutely perfect.",
        color: "bg-[#fff9c4]", // Light Yellow
    },
    {
        id: 3,
        name: "David Chen",
        role: "Corporate Lead",
        content: "Professionalism at its finest. They handled our multi-day summit with grace and precision. Highly recommended.",
        color: "bg-[#e1f5fe]", // Light Blue
    },
];

export function TestimonialCarousel() {
    const [cards, setCards] = useState(testimonials);

    const moveToEnd = (from: number) => {
        setCards((pv) => {
            const newCards = [...pv];
            const moveItem = newCards.splice(from, 1)[0];
            newCards.push(moveItem);
            return newCards;
        });
    };

    return (
        <div className="relative h-[450px] w-full max-w-lg mx-auto flex items-center justify-center overflow-visible">
            {cards.map((testimonial, index) => {
                const isTop = index === 0;
                return (
                    <CardStackItem
                        key={testimonial.id}
                        testimonial={testimonial}
                        index={index}
                        isTop={isTop}
                        onRemove={() => moveToEnd(0)}
                    />
                );
            })}
        </div>
    );
}

function CardStackItem({
    testimonial,
    index,
    isTop,
    onRemove,
}: {
    testimonial: typeof testimonials[0];
    index: number;
    isTop: boolean;
    onRemove: () => void;
}) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-40, 40]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

    const handleDragEnd = (_: any, info: PanInfo) => {
        if (Math.abs(info.offset.x) > 100) {
            onRemove();
        }
    };

    return (
        <motion.div
            style={{
                zIndex: 10 - index,
                x: isTop ? x : 0,
                opacity: isTop ? opacity : 1,
                rotate: isTop ? rotate : 0,
            }}
            animate={{
                scale: 1 - index * 0.05,
                y: index * 15,
                opacity: index > 2 ? 0 : 1,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25} // Add resistance
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`absolute w-full cursor-grab active:cursor-grabbing ${index > 2 ? 'pointer-events-none' : ''}`}
        >
            <div className="relative group p-4">
                {/* Visual Stack Effects for top card only for extra depth, or maintain consistent sizing */}

                <Card className={`${testimonial.color} border-none shadow-xl min-h-[350px] relative z-10 p-8 flex flex-col`}>
                    <div className="flex items-start gap-4 mb-auto">
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

                    {isTop && (
                        <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-sans uppercase tracking-widest opacity-60">
                            Swipe
                        </div>
                    )}
                </Card>
            </div>
        </motion.div>
    );
}
