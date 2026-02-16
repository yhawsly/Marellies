"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/70 backdrop-blur-md border-b shadow-sm py-2"
                    : "bg-white py-3"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="relative w-28 h-10 md:w-40 md:h-14 shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Marellies Logo"
                        fill
                        className="object-contain object-left"
                        unoptimized
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="hidden lg:inline-flex" asChild>
                        <Link href="/contact">Book Now</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium py-2 border-b border-border/50 last:border-0 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-2" asChild>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Book an Event</Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
