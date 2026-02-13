import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // 1. Import Image component

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <Hero />

      {/* About Snippet */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Curating Elegance & Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Marellies, we believe every event tells a story. Whether it's the romance of a wedding, the triumph of a corporate milestone, or the joy of a private celebration, we weave together design, logistics, and creativity to craft moments that linger in memory.
          </p>
          <Button variant="link" className="text-primary text-lg" asChild>
            <Link href="/about">Read Our Story <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive planning and design for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Weddings"
              description="From intimate ceremonies to grand receptions, we handle everything so you can cherish your special day. Full planning, coordination, and design."
              image="https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              delay={0}
            />
            <ServiceCard
              title="Corporate Events"
              description="Product launches, galas, conferences, and team building. We deliver professional events that align with your brand's vision and goals."
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
              delay={0.2}
            />
            <ServiceCard
              title="Private Parties"
              description="Birthdays, anniversaries, and bespoke gatherings using our network of top-tier vendors to create the perfect atmosphere."
              image="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              delay={0.4}
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview / Gallery Strip */}
      <section className="py-20 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary">
            Visual Perfection
          </h2>
          
          {/* FIXED SECTION STARTS HERE */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {/* Image 1 */}
            <div className="relative h-64 w-full overflow-hidden rounded-md">
                <Image 
                    src="https://images.unsplash.com/photo-1759124649699-010eeb1f69f8?q=80&w=1469&auto=format&fit=crop" 
                    alt="Gallery 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>

            {/* Image 2 */}
            <div className="relative h-64 w-full overflow-hidden rounded-md">
                <Image 
                    src="https://plus.unsplash.com/premium_photo-1674027290746-a54ed7de32b5?q=80&w=687&auto=format&fit=crop" 
                    alt="Gallery 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>

            {/* Image 3 */}
            <div className="relative h-64 w-full overflow-hidden rounded-md">
                <Image 
                    src="https://images.unsplash.com/photo-1768776182889-607915c299a6?q=80&w=687&auto=format&fit=crop" 
                    alt="Gallery 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>

            {/* Image 4 */}
            <div className="relative h-64 w-full overflow-hidden rounded-md">
                <Image 
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" 
                    alt="Gallery 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
          </div>
          {/* FIXED SECTION ENDS HERE */}

          <Button variant="default" className="mt-8" asChild>
            <Link href="/portfolio">Explore Our Portfolio</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Client Love</h2>
          <p className="text-muted-foreground">What people are saying about their Marellies experience.</p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold">Ready to Celebrate?</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            Let's turn your vision into an unforgettable reality.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

    </main>
  );
}