import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { TestimonialCard } from "../TestimonialCard"
import Link from "next/link"
import { Button } from "../ui/button"
import { testimonials as allTestimonials } from "@/lib/testimonials"
import Image from "next/image"

const featuredTestimonials = allTestimonials.slice(0, 5);

export function TestimonialsSection() {
    return (
        <section className="py-16 sm:py-24 bg-secondary relative">
            <Image
                src="https://m.economictimes.com/thumb/msid-116685050,width-1200,height-1200,resizemode-4,imgsize-42538/bloodworm-love-spell-ritual-sparks-debate-in-singapore.jpg"
                alt="Rekindled Love"
                fill
                className="object-cover z-0"
                data-ai-hint="love background"
            />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="container max-w-7xl relative z-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Stories of Rekindled Love</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                        Hear from our clients who have found their way back to love and happiness through our spiritual guidance.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {featuredTestimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
                <div className="mt-12 text-center">
                    <Link href="/testimonials">
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                            Read More Stories
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
