import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsPage() {
    return (
        <div className="bg-secondary py-16 sm:py-24">
            <div className="container max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Heartfelt Stories of Transformation</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We are honored to have touched lives across the globe. Here are some of the stories our clients have shared about their journey with us, from rekindling love to manifesting their deepest desires.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
}
