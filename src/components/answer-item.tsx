'use client';

import { useState } from 'react';
import type { Answer } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

type AnswerItemProps = {
  answer: Answer;
};

export default function AnswerItem({ answer }: AnswerItemProps) {
  const [upvoted, setUpvoted] = useState(false);
  const [voteCount, setVoteCount] = useState(answer.upvotes);

  const handleUpvote = () => {
    if (upvoted) {
      setVoteCount(voteCount - 1);
    } else {
      setVoteCount(voteCount + 1);
    }
    setUpvoted(!upvoted);
  };

  return (
    <Card>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="flex flex-col items-center gap-2">
          <Button
            variant={upvoted ? 'default' : 'outline'}
            size="icon"
            className={cn(
              "rounded-full h-10 w-10",
              upvoted && 'bg-primary text-primary-foreground'
            )}
            onClick={handleUpvote}
            aria-label="Upvote"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <span className="font-bold text-lg text-primary">{voteCount}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={answer.author.avatarUrl} alt={answer.author.name} />
                <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-sm">{answer.author.name}</span>
            </div>
            <time className="text-sm text-muted-foreground" dateTime={answer.createdAt.toISOString()}>
              {formatDate(answer.createdAt)}
            </time>
          </div>
          <div className="prose prose-invert max-w-none text-foreground/80">
            <p>{answer.body}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
