import { SiteHeader } from '@/components/site-header';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function QuestionLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SiteHeader />
      <main className="flex-1 p-4 md:py-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-24 mb-2 rounded-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-8 w-3/4" />
              <div className="flex items-center gap-2 pt-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-5 w-48" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>

          <Skeleton className="h-12 w-full rounded-lg" />
          
          <div className="space-y-6">
            <Skeleton className="h-8 w-32" />
            <Separator />
            {[...Array(2)].map((_, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between">
                       <Skeleton className="h-5 w-32" />
                       <Skeleton className="h-5 w-24" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
