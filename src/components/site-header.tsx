import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NewQuestionDialog } from './new-question-dialog';

const LIVE_LINK = 'https://silver-tongue-topaz.vercel.app';
const GITHUB_LINK = 'https://github.com/Mr-Moosa-official/SilverTongue';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center gap-3">
        <div className="mr-4 hidden md:flex md:items-center md:gap-3">
          <Link href="/" className="flex items-center space-x-2">
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

          <a
            href={LIVE_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Link
          </a>

          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the SilverTongue GitHub repository — Made by Mr Moosa"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-2.5 py-1.5 transition-colors hover:bg-muted"
          >
            <Image
              src="/mr-moosa-official-monogram.png"
              alt="Made by Mr Moosa logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80 sm:inline">
              Made by Mr Moosa
            </span>
            <Github className="h-3.5 w-3.5" />
          </a>
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
