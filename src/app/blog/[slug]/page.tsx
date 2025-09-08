import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container max-w-4xl">
        <article>
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm text-accent hover:text-accent/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-4">{post.title}</h1>
          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.dataAiHint}
            />
          </div>
          <div
            className="prose lg:prose-xl max-w-none mx-auto text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 text-center border-t pt-12">
            <h2 className="text-2xl font-headline font-bold text-primary">Ready to Manifest Your Desires?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Your story of transformation is waiting to be written. If our articles resonate with you, the next step is to act.
            </p>
            <div className="mt-6">
                <Link href="/book">
                    <Button size="lg">Book a Confidential Spell</Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
