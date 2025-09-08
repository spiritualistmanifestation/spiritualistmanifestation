'use server';

/**
 * @fileOverview A client story generator AI agent.
 *
 * - generateClientStory - A function that handles the client story generation process.
 * - ClientStoryInput - The input type for the generateClientStory function.
 * - ClientStoryOutput - The return type for the generateClientStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClientStoryInputSchema = z.object({
  name: z.string().describe('The name of the client.'),
  rating: z.number().min(1).max(5).describe('The star rating given by the client (1-5).'),
  profileIcon: z.string().optional().describe('Data URI for the client profile icon.'),
  timestamp: z.string().optional().describe('The timestamp of the story.'),
  storyType: z.string().describe('The type of client story (e.g., love, healing, financial).'),
  additionalDetails: z.string().optional().describe('Any additional context or details to include in the story.'),
});
export type ClientStoryInput = z.infer<typeof ClientStoryInputSchema>;

const ClientStoryOutputSchema = z.object({
  story: z.string().describe('The generated client story.'),
});
export type ClientStoryOutput = z.infer<typeof ClientStoryOutputSchema>;

export async function generateClientStory(input: ClientStoryInput): Promise<ClientStoryOutput> {
  return generateClientStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'clientStoryPrompt',
  input: {schema: ClientStoryInputSchema},
  output: {schema: ClientStoryOutputSchema},
  prompt: `You are a creative marketing assistant tasked with creating engaging client stories for a spiritual website.

  Based on the following input, generate a client story that sounds authentic and heartfelt.

  Name: {{{name}}}
  Rating: {{{rating}}} stars
  Timestamp: {{{timestamp}}}
  Story Type: {{{storyType}}}
  Additional Details: {{{additionalDetails}}}

  Write a compelling client story that highlights the positive impact of the services provided. The story should be approximately 100-150 words.
  `,
});

const generateClientStoryFlow = ai.defineFlow(
  {
    name: 'generateClientStoryFlow',
    inputSchema: ClientStoryInputSchema,
    outputSchema: ClientStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
