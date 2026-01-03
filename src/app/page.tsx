import Link from 'next/link';
import { getQuestions, getTopics } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { MessageSquare, Eye } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-8">
          <aside className="md:col-span-1">
            <Suspense fallback={<TopicListSkeleton />}>
              <TopicList />
            </Suspense>
          </aside>
          <div className="md:col-span-3">
            <Suspense fallback={<QuestionListSkeleton />}>
              <QuestionList />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}

async function TopicList() {
  const topics = await getTopics();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="flex flex-col gap-2">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <topic.icon className="h-5 w-5" />
              <span>{topic.name}</span>
            </Link>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}

async function QuestionList() {
  const questions = await getQuestions();
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <Card key={question.id} className="transition-all hover:bg-card/60">
          <Link href={`/question/${question.id}`} className="block">
            <CardHeader>
              <CardTitle className="text-xl">{question.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={question.author.avatarUrl} alt={question.author.name} />
                  <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{question.author.name}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="outline">{question.topic.name}</Badge>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{question.answers.length}</span>
                </div>
                <time dateTime={question.createdAt.toISOString()}>
                  {formatDate(question.createdAt)}
                </time>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}

function TopicListSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-24" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function QuestionListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
