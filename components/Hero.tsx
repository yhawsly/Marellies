"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const videoUrl = "https://www.youtube.com/embed/GOZDDnF4k0c?autoplay=1&mute=1&loop=1&playlist=GOZDDnF4k0c&controls=0&showinfo=0&rel=0&iv_load_policy=3";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Video Container */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    {/* YouTube Embed as Background */}
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 object-cover"
                        src={videoUrl}
                        allow="autoplay; encrypted-media"
                        title="Background Video"
                    />

                    {/* Fallback & Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white drop-shadow-xl">
                        Unforgettable <span className="text-primary-foreground italic">Moments</span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We craft bespoke events that leave a lasting impression. Your vision, our expertise.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                        <Link href="/contact">Plan Your Event</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm border-white/20">
                        <Link href="/gallery">View Gallery</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {/* Replaced CSS scroll indicator with wedding.png logo */}
                <div className="relative w-24 h-24">
                    <Image
                        src="/wed.png"
                        alt="Wedding Logo"
                        fill
                        className="object-contain drop-shadow-lg"
                        unoptimized
                    />
                </div>
            </motion.div>
        </section>
    );
}