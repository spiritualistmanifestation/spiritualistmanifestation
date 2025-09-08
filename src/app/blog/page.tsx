import BlogPostGenerator from "./BlogPostGenerator";

export default function BlogPage() {
    return (
        <div className="bg-secondary py-16 sm:py-24">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">AI-Powered Blog Generator</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Curious about a spiritual topic? Enter a title or a request, and our AI will write a blog post for you in seconds.
                    </p>
                </div>
                <BlogPostGenerator />
            </div>
        </div>
    );
}
