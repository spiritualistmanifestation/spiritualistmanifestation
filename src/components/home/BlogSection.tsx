import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

const featuredPost = blogPosts[0];

export function BlogSection() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">From Our Book of Secrets</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Gain insights into the world of spell casting, love, and manifestation with our collection of articles.
                    </p>
                </div>
                <Card className="overflow-hidden md:grid md:grid-cols-2 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <div className="relative h-64 md:h-full">
                         <Link href={`/blog/${featuredPost.slug}`}>
                            <Image
                                src={featuredPost.imageUrl}
                                alt={featuredPost.title}
                                data-ai-hint={featuredPost.dataAiHint}
                                fill
                                className="object-cover"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline text-primary">
                                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/blog/${featuredPost.slug}`}>
                                <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </div>
                </Card>
                 <div className="mt-12 text-center">
                    <Link href="/blog">
                        <Button size="lg" variant="default">
                            Explore All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
