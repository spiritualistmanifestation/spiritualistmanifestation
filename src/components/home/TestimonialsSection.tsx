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

const testimonials = [
    {
      name: "Jessica L.",
      rating: 5,
      profileIcon: "https://picsum.photos/id/1011/100/100",
      dataAiHint: "woman portrait",
      timestamp: "2 weeks ago",
      story: "I was skeptical, but my heart was broken. After the 'Reunite Lovers' spell, my ex reached out the very next day. We're talking again and healing. I'm amazed and so grateful!",
    },
    {
      name: "David M.",
      rating: 5,
      profileIcon: "https://picsum.photos/id/1005/100/100",
      dataAiHint: "man portrait",
      timestamp: "1 month ago",
      story: "The 'Attract New Love' spell worked wonders. I felt a shift in my energy and soon met someone truly special. It felt like destiny. Thank you for opening this new chapter for me.",
    },
    {
      name: "Sophia K.",
      rating: 4,
      profileIcon: "https://picsum.photos/id/1027/100/100",
      dataAiHint: "woman face",
      timestamp: "3 days ago",
      story: "There was a third party causing so much pain in my relationship. The 'Strengthen Relationship' spell brought peace and clarity. We're stronger than ever now. Highly recommend.",
    },
    {
      name: "Carlos R.",
      rating: 5,
      profileIcon: "https://picsum.photos/id/1012/100/100",
      dataAiHint: "man face",
      timestamp: "5 days ago",
      story: "My marriage was on the verge of divorce. I was desperate. The 'Stop Divorce' spell saved us. It calmed the storms and reminded us of our love. I can't thank you enough.",
    }
  ]

export function TestimonialsSection() {
    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Stories of Rekindled Love</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
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
                        {testimonials.map((testimonial, index) => (
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
                        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            Read More Stories & Generate Yours
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
