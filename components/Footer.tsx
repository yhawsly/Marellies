"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email();

export function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [touched, setTouched] = useState(false);

    const isValid = emailSchema.safeParse(email).success;
    const showError = touched && !isValid;

    async function handleSubscribe() {
        setTouched(true);
        if (!isValid) return;

        setStatus('loading');
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error('Failed to subscribe');

            setStatus('success');
            setEmail("");
            setTouched(false);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    }

    return (
        <footer className="bg-muted/30 pt-16 pb-8 border-t">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block relative w-32 h-11 md:w-44 md:h-16 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Marellies Logo"
                                fill
                                className="object-contain object-left"
                                unoptimized
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Crafting timeless memories for every occasion. From intimate gatherings to grand celebrations, we bring your vision to life with elegance and style.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 text-primary" />
                                <span>Oko Okine St, <br />Accra, Ghana</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-primary" />
                                <span>+233 20 656 1344</span>

                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-primary" />
                                <span>hello@marellies.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to get the latest trends and event tips.
                        </p>

                        {status === 'success' ? (
                            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md border border-green-200 animate-in fade-in slide-in-from-bottom-2">
                                <CheckCircle size={18} />
                                <span className="text-sm font-medium">Subscribed!</span>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Input
                                            placeholder="Enter your email"
                                            className={`bg-background transition-colors ${showError ? 'border-destructive ring-destructive/20 focus-visible:ring-destructive' : ''}`}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (status === 'error') setStatus('idle');
                                            }}
                                            onBlur={() => setTouched(true)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') handleSubscribe();
                                            }}
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                    <Button
                                        size="icon"
                                        className="shrink-0 transition-all"
                                        onClick={handleSubscribe}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Mail size={18} />}
                                    </Button>
                                </div>
                                {showError && (
                                    <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                                        <AlertCircle size={12} />
                                        Please enter a valid email.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-xs text-destructive">Something went wrong. Try again.</p>
                                )}
                            </div>
                        )}

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Marellies Events. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
