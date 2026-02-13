import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-muted/30 pt-16 pb-8 border-t">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-heading font-bold">MARELLIES</h3>
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
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
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
                        <div className="flex gap-2">
                            <Input placeholder="Enter your email" className="bg-background" />
                            <Button size="icon" className="shrink-0">
                                <Mail size={18} />
                            </Button>
                        </div>
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
