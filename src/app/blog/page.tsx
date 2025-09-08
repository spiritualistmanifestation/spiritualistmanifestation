import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts, BlogPost } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block relative h-56 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.dataAiHint}
        />
      </Link>
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`}>
          <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}


export default function BlogPage() {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="container max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">From Our Book of Secrets</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Gain insights into the world of spell casting, love, and manifestation with our collection of articles written to guide you on your spiritual journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
