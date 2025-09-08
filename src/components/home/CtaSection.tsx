import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Ready to Change Your Destiny?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Don&apos;t let fate decide. Take control of your love life and manifest the happiness you deserve. Our spells are cast with care, confidentiality, and powerful intent.
        </p>
        <div className="mt-8">
          <Link href="/book">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book Your Transformative Spell Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
