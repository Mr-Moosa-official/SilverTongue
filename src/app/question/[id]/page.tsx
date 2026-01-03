import { getAnswersForQuestion, getQuestionById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/lib/utils';
import AnswerItem from '@/components/answer-item';
import AnswerForm from '@/components/answer-form';
import SummarizeAnswers from '@/components/summarize-answers';

export default async function QuestionPage({ params }: { params: { id: string } }) {
  const question = await getQuestionById(params.id);

  if (!question) {
    notFound();
  }
  
  const answers = await getAnswersForQuestion(params.id);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <SiteHeader />
      <main className="flex-1 p-4 md:py-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">
                {question.topic.name}
              </Badge>
              <CardTitle className="text-3xl font-bold leading-tight">
                {question.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 pt-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={question.author.avatarUrl} alt={question.author.name} />
                  <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>
                  Asked by {question.author.name} &middot;{' '}
                  <time dateTime={question.createdAt.toISOString()}>
                    {formatDate(question.createdAt)}
                  </time>
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none text-foreground/80">
                <p>{question.body}</p>
              </div>
            </CardContent>
          </Card>

          <SummarizeAnswers question={question.title} answers={answers.map(a => a.body)} />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{answers.length} Answer{answers.length !== 1 && 's'}</h2>
            <Separator />
            {answers.map((answer) => (
              <AnswerItem key={answer.id} answer={answer} />
            ))}
          </div>

          <Separator />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Answer</h2>
            <AnswerForm />
          </div>

        </div>
      </main>
    </div>
  );
}
