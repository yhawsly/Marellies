"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    delay?: number;
}

export function ServiceCard({ title, description, image, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-card/50 backdrop-blur-sm">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <CardHeader>
                    <CardTitle className="text-2xl font-heading">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base line-clamp-3">
                        {description}
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" className="group/btn p-0 hover:bg-transparent hover:text-primary">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
