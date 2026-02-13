"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm() {
    return (
        <Card className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-muted shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">Get in Touch</CardTitle>
                <CardDescription className="text-center">
                    Let's start planning your event. Fill out the form below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" placeholder="Jane" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" placeholder="Doe" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="jane@example.com" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type">Event Type</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="wedding">Wedding</SelectItem>
                                <SelectItem value="corporate">Corporate Event</SelectItem>
                                <SelectItem value="party">Private Party</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us about your event (date, location, vision)..."
                            className="min-h-[100px]"
                        />
                    </div>

                    <Button type="submit" className="w-full font-bold text-lg py-6 mt-2">
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
