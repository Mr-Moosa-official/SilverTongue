'use server';

import { summarizeTopAnswers } from '@/ai/flows/summarize-top-answers';
import type { SummarizeTopAnswersInput } from '@/ai/flows/summarize-top-answers';

export async function getSummary(
  input: SummarizeTopAnswersInput
): Promise<{ summary: string } | { error: string }> {
  try {
    // Artificial delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (input.topAnswers.length === 0) {
      return { error: 'Not enough answers to generate a summary.' };
    }
    
    const result = await summarizeTopAnswers(input);
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate summary. Please try again later.' };
  }
}
