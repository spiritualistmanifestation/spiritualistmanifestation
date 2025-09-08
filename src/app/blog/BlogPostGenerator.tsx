'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateBlogPost, type GenerateBlogPostOutput } from '@/ai/flows/blog-posts-generator';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const blogSchema = z.object({
  titleOrRequest: z.string().min(5, 'Request must be at least 5 characters.'),
});

export default function BlogPostGenerator() {
  const [generatedPost, setGeneratedPost] = useState<GenerateBlogPostOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      titleOrRequest: 'How the Full Moon Affects Spell Energy',
    },
  });

  async function onSubmit(values: z.infer<typeof blogSchema>) {
    setIsGenerating(true);
    setGeneratedPost(null);
    try {
      const result = await generateBlogPost(values);
      setGeneratedPost(result);
    } catch (error) {
      console.error('Failed to generate blog post:', error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'There was an error generating the blog post. Please try again.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">Generate an Article</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="titleOrRequest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title or Topic Request</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 5 Signs You Need a Love Spell" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isGenerating} className="w-full">
                {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Article
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          {isGenerating && (
            <div className="flex flex-col justify-center items-center min-h-[200px]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">Generating your article...</p>
            </div>
          )}
          {!isGenerating && generatedPost && (
            <div className="prose prose-lg max-w-none font-body text-foreground">
                <h2 className='font-headline text-primary'>{form.getValues('titleOrRequest')}</h2>
                {generatedPost.article.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
          )}
          {!isGenerating && !generatedPost && (
            <div className="text-center min-h-[200px] flex flex-col justify-center items-center">
              <p className="text-muted-foreground">Your generated article will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
