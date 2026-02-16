"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    eventType: z.string().min(1, { message: "Please select an event type." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            eventType: "",
            message: "",
        },
    });

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-muted shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-heading text-center text-gradient">Get in Touch</CardTitle>
                <CardDescription className="text-center">
                    Let's start planning your event. Fill out the form below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {submitStatus === 'success' ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold">Message Sent!</h3>
                        <p className="text-muted-foreground">We'll get back to you shortly.</p>
                        <Button
                            variant="outline"
                            onClick={() => setSubmitStatus('idle')}
                            className="mt-4"
                        >
                            Send another message
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input
                                    id="firstName"
                                    {...form.register("firstName")}
                                    placeholder="Jane"
                                />
                                {form.formState.errors.firstName && (
                                    <p className="text-sm text-destructive">{form.formState.errors.firstName.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input
                                    id="lastName"
                                    {...form.register("lastName")}
                                    placeholder="Doe"
                                />
                                {form.formState.errors.lastName && (
                                    <p className="text-sm text-destructive">{form.formState.errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...form.register("email")}
                                placeholder="jane@example.com"
                            />
                            {form.formState.errors.email && (
                                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="eventType">Event Type</Label>
                            <Select
                                onValueChange={(value) => form.setValue("eventType", value)}
                                defaultValue={form.getValues("eventType")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select event type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Wedding">Wedding</SelectItem>
                                    <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                                    <SelectItem value="Private Party">Private Party</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            {form.formState.errors.eventType && (
                                <p className="text-sm text-destructive">{form.formState.errors.eventType.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                {...form.register("message")}
                                placeholder="Tell us about your event..."
                                className="min-h-[100px]"
                            />
                            {form.formState.errors.message && (
                                <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                            )}
                        </div>

                        {submitStatus === 'error' && (
                            <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full font-bold text-lg py-6 mt-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    );
}
