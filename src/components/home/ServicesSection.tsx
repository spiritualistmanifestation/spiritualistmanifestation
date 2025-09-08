import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Users } from 'lucide-react';
import { services } from '@/lib/services';

const featuredServices = services.slice(0, 3);

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Powerful Spells for Every Need</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you seek to reunite with a lost love, attract a new soulmate, or strengthen your current relationship, our spells are tailored to your unique situation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {service.icon}
                    </div>
                    <CardTitle className="text-xl font-headline text-primary">{service.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{service.description}</CardDescription>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <p className="text-2xl font-bold font-headline text-foreground">{service.price}</p>
                    <Link href="/book">
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            Book Now
                        </Button>
                    </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Link href="/services">
                <Button size="lg" variant="default">
                    Explore All Spells
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
