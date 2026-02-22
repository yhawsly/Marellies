"use client";

import { useState } from "react";
import { motion, useMotionValue, PanInfo, animate } from "framer-motion";
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
    const [activeId, setActiveId] = useState(testimonials[0].id);

    const moveToEnd = (id: number) => {
        setCards((pv) => {
            const index = pv.findIndex((c) => c.id === id);
            if (index === -1) return pv;
            const newCards = [...pv];
            const moveItem = newCards.splice(index, 1)[0];
            newCards.push(moveItem);

            // Set new active ID based on the new front card
            setActiveId(newCards[0].id);
            return newCards;
        });
    };

    return (
        <div className="w-full max-w-lg mx-auto flex flex-col items-center">
            <div className="relative h-[420px] w-full flex items-center justify-center overflow-visible">
                {cards.map((testimonial, index) => {
                    const isTop = index === 0;
                    return (
                        <CardStackItem
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            isTop={isTop}
                            onRemove={() => moveToEnd(testimonial.id)}
                        />
                    );
                })}
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
                {testimonials.map((t) => (
                    <div
                        key={t.id}
                        className={`h-2 rounded-full transition-all duration-500 ${activeId === t.id ? "bg-[#2d3436] w-6" : "bg-neutral-300 w-2"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

function CardStackItem({
    testimonial,
    index,
    isTop,
    onRemove,
}: {
    testimonial: (typeof testimonials)[0];
    index: number;
    isTop: boolean;
    onRemove: () => void;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const zIndex = 10 - index;

    // Aesthetic stack parameters
    const scale = 1 - index * 0.05;
    const yOffset = index * 12;
    // Each index gets a distinct rotation for that "scattered paper" look
    const rotation = index === 0 ? 0 : index === 1 ? 2 : -2;

    const handleDragEnd = (_: unknown, info: PanInfo) => {
        const swipeThreshold = 50;
        const velocityThreshold = 500;

        const isSwipeLeft = info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold;
        const isSwipeRight = info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold;

        if (isSwipeLeft || isSwipeRight) {
            // Determine direction strictly based on the final movement/intent
            const direction = isSwipeRight ? 1 : -1;
            const flyTo = direction * 500;

            // 1. Smoothly fly the card out in the swiped direction
            animate(x, flyTo, {
                type: "spring",
                stiffness: 300,
                damping: 35,
                onComplete: () => {
                    // 2. State change: top card moves to the end of the array
                    onRemove();
                    // 3. Instead of jumping to 0, animate it back from the side it flew out to
                    // This creates the "Slide back to last card" effect
                    animate(x, 0, { type: "spring", stiffness: 200, damping: 25 });
                    animate(y, 0, { duration: 0.2 });
                }
            });
            // Slightly offset vertically for a more dynamic "toss"
            animate(y, 30, { duration: 0.2 });
        } else {
            // Snap back to center if threshold wasn't met
            animate(x, 0, { type: "spring", stiffness: 400, damping: 25 });
            animate(y, 0, { type: "spring", stiffness: 400, damping: 25 });
        }
    };

    return (
        <motion.div
            layout
            style={{
                zIndex,
                x,
                y,
            }}
            animate={{
                scale,
                y: yOffset,
                rotate: rotation,
                opacity: 1,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 25
            }}
            className="absolute w-full cursor-grab active:cursor-grabbing p-4"
        >
            <Card className={`${testimonial.color} border-none shadow-2xl min-h-[340px] p-8 flex flex-col relative overflow-hidden ring-1 ring-black/5`}>
                <div className="flex items-start gap-4 mb-auto">
                    <div className="w-14 h-14 rounded-full border-2 border-white/80 shrink-0 flex items-center justify-center overflow-hidden bg-white/30 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full border border-white/40" />
                    </div>
                    <div className="text-left pt-1">
                        <h4 className="font-serif font-black text-xl text-[#2d3436] leading-tight">
                            {testimonial.name}
                        </h4>
                        <p className="text-[#0984e3] font-bold text-sm">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                <blockquote className="mt-8 text-lg font-medium text-neutral-800 leading-relaxed text-left tracking-tight">
                    “{testimonial.content}”
                </blockquote>

                {/* Visual indicator for swiping */}
                {isTop && (
                    <div className="mt-auto pt-6 flex justify-end">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#2d3436]/40 font-bold">
                            Swipe to swap
                        </div>
                    </div>
                )}
            </Card>
        </motion.div>
    );
}
