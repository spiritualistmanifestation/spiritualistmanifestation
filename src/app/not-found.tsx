import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sprout } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary text-center px-4">
      <Sprout className="w-24 h-24 text-primary opacity-30 mb-4" />
      <h1 className="text-6xl md:text-8xl font-bold text-primary font-headline">404</h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground font-headline">Page Not Found</h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        It seems the path you sought has vanished into the ether. Let us guide you back to familiar grounds.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button size="lg">Return to Homepage</Button>
        </Link>
      </div>
    </div>
  );
}
