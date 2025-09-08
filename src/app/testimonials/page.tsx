import ClientStoryGenerator from "./ClientStoryGenerator";

export default function TestimonialsPage() {
    return (
        <div className="bg-secondary py-16 sm:py-24">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Client Stories & Testimonials</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Read heartfelt stories from our clients and use our AI tool to generate a sample story based on your needs. See the power of our spells for yourself.
                    </p>
                </div>
                <ClientStoryGenerator />
            </div>
        </div>
    );
}
