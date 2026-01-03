'use server';

/**
 * @fileOverview Summarizes the top answers for a given question.
 *
 * - summarizeTopAnswers - A function that summarizes the top answers.
 * - SummarizeTopAnswersInput - The input type for the summarizeTopAnswers function.
 * - SummarizeTopAnswersOutput - The return type for the summarizeTopAnswers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTopAnswersInputSchema = z.object({
  question: z.string().describe('The question being asked.'),
  topAnswers: z.array(z.string()).describe('The top answers to the question.'),
});
export type SummarizeTopAnswersInput = z.infer<typeof SummarizeTopAnswersInputSchema>;

const SummarizeTopAnswersOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the top answers.'),
});
export type SummarizeTopAnswersOutput = z.infer<typeof SummarizeTopAnswersOutputSchema>;

export async function summarizeTopAnswers(input: SummarizeTopAnswersInput): Promise<SummarizeTopAnswersOutput> {
  return summarizeTopAnswersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTopAnswersPrompt',
  input: {schema: SummarizeTopAnswersInputSchema},
  output: {schema: SummarizeTopAnswersOutputSchema},
  prompt: `Summarize the following top answers to the question: {{{question}}}.\n\nTop Answers:\n{{#each topAnswers}}- {{{this}}}\n{{/each}}\n\nSummary: `,
});

const summarizeTopAnswersFlow = ai.defineFlow(
  {
    name: 'summarizeTopAnswersFlow',
    inputSchema: SummarizeTopAnswersInputSchema,
    outputSchema: SummarizeTopAnswersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
