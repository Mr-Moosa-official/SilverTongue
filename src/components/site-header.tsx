import Link from 'next/link';
import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NewQuestionDialog } from './new-question-dialog';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm56-88a56,56,0,0,0-56-56,8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0Z" />
            </svg>
            <span className="hidden font-bold sm:inline-block text-lg">
              SilverTongue
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <NewQuestionDialog>
            <Button>
              <Pencil className="mr-2 h-4 w-4" />
              Ask Question
            </Button>
          </NewQuestionDialog>
        </div>
      </div>
    </header>
  );
}
