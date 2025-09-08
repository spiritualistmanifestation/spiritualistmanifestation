import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsappButton } from '@/components/WhatsappButton';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enchanting Heart Spells - Restore Love & Manifest Your Desires',
  description:
    'Powerful, ethical spell casting for love, relationships, and personal growth. Reunite with a lover, attract a soulmate, or strengthen your bond. 100% confidential.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', 'bg-background')}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
