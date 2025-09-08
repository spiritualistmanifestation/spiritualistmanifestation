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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { generateClientStory, type ClientStoryOutput } from '@/ai/flows/client-stories-generator';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const storySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  storyType: z.string({ required_error: 'Please select a story type.' }),
  rating: z.coerce.number().min(1).max(5),
  additionalDetails: z.string().optional(),
});

export default function ClientStoryGenerator() {
  const [generatedStory, setGeneratedStory] = useState<ClientStoryOutput | null>(null);
  const [formValues, setFormValues] = useState<z.infer<typeof storySchema> | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof storySchema>>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      name: 'A Happy Client',
      storyType: 'Reunite Lovers',
      rating: 5,
      additionalDetails: '',
    },
  });

  async function onSubmit(values: z.infer<typeof storySchema>) {
    setIsGenerating(true);
    setGeneratedStory(null);
    setFormValues(values);
    try {
      const result = await generateClientStory(values);
      setGeneratedStory(result);
    } catch (error) {
      console.error('Failed to generate story:', error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'There was an error generating the client story. Please try again.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <Card className="shadow-2xl">
        <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Generate a Sample Story</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Jane D." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="storyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Story Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Reunite Lovers">Reunite Lovers</SelectItem>
                        <SelectItem value="Attract New Love">Attract New Love</SelectItem>
                        <SelectItem value="Strengthen Relationship">Strengthen Relationship</SelectItem>
                        <SelectItem value="Financial Success">Financial Success</SelectItem>
                        <SelectItem value="Healing">Healing</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="additionalDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'after 2 years apart'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Star Rating (1-5)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isGenerating} className="w-full">
                {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Story
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="h-full">
      {isGenerating && (
        <Card className="h-full flex flex-col justify-center items-center bg-card-muted">
            <Loader2 className="h-8 w-8 animate-spin text-primary"/>
            <p className="mt-4 text-muted-foreground">Generating your story...</p>
        </Card>
      )}
      {!isGenerating && generatedStory && formValues && (
        <TestimonialCard
          name={formValues.name}
          rating={formValues.rating}
          profileIcon={`https://picsum.photos/seed/${formValues.name}/100/100`}
          dataAiHint="person portrait"
          timestamp="Just now"
          story={generatedStory.story}
        />
      )}
       {!isGenerating && !generatedStory && (
        <Card className="h-full flex flex-col justify-center items-center border-dashed border-2">
            <div className="text-center p-8">
                <p className="text-muted-foreground">Your generated story will appear here.</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Fill out the form and click "Generate Story" to see the magic!</p>
            </div>
        </Card>
      )}
      </div>
    </div>
  );
}
