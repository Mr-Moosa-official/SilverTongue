'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Sparkles, Bot, AlertTriangle } from 'lucide-react';
import { getSummary } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Skeleton } from './ui/skeleton';

type SummarizeAnswersProps = {
  question: string;
  answers: string[];
};

export default function SummarizeAnswers({ question, answers }: SummarizeAnswersProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);

    const result = await getSummary({
      question,
      topAnswers: answers.slice(0, 3), // Summarize top 3 answers
    });

    if ('error' in result) {
      setError(result.error);
      toast({
        title: 'Summarization Failed',
        description: result.error,
        variant: 'destructive',
      });
    } else {
      setSummary(result.summary);
    }
    setIsLoading(false);
  };
  
  if(answers.length < 2) {
    return null;
  }

  return (
    <div>
      <Button onClick={handleSummarize} disabled={isLoading} className="w-full">
        <Sparkles className="mr-2 h-4 w-4" />
        {isLoading ? 'Generating Summary...' : 'Summarize Top Answers with AI'}
      </Button>

      {isLoading && <SummarySkeleton />}
      
      {error && !isLoading && (
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && !isLoading && (
        <Alert className="mt-4 border-primary/50">
          <Bot className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary">AI Summary</AlertTitle>
          <AlertDescription>{summary}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

function SummarySkeleton() {
    return (
        <div className="mt-4 p-4 border rounded-lg space-y-3">
            <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </div>
    )
}
