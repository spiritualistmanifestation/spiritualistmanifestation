import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Mystical background with candles and stars"
        data-ai-hint="mystical spiritual background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center gap-6 p-4">
        <h1 className="text-4xl font-headline md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Restore Your Love Today 🌹
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 font-body">
          Harness ancient energies to reunite with your soulmate, strengthen your connection, and manifest the love you deserve.
        </p>
        <Link href="/book">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Book Your Spell Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
