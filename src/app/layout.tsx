import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import { ExternalLink, Github } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const LIVE_LINK = 'https://silver-tongue-topaz.vercel.app';
const GITHUB_LINK = 'https://github.com/Mr-Moosa-official/SilverTongue';

export const metadata: Metadata = {
  title: 'SilverTongue',
  description: 'A sleek, interactive community Q&A platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background')}>
        {children}
        <footer className="border-t border-border/40 bg-background/95">
          <div className="container flex flex-col items-center justify-between gap-3 py-4 text-center sm:flex-row sm:text-left">
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
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                Made by Mr Moosa
              </span>
              <Github className="h-3.5 w-3.5" />
            </a>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
