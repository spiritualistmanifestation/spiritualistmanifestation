import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services, type Spell } from '@/lib/services';
import Link from 'next/link';

function SpellCard({ spell }: { spell: Spell }) {
    return (
        <Card className="flex flex-col h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                        {spell.icon}
                    </div>
                    <div>
                        <CardTitle className="text-xl font-headline text-primary">{spell.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">Delivery: {spell.delivery}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription>{spell.description}</CardDescription>
                 <ul className="text-sm text-muted-foreground mt-4 space-y-2">
                    <li className="flex items-center gap-2">✓ Personalized consultation</li>
                    <li className="flex items-center gap-2">✓ Custom ritual (name & photo)</li>
                    <li className="flex items-center gap-2">✓ Post-spell follow-up support</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t pt-6 mt-4">
                <p className="text-2xl font-bold font-headline text-foreground">{spell.price}</p>
                <Link href={`/book?spell=${encodeURIComponent(spell.name)}`}>
                    <Button variant="default">Book Spell</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}


export default function ServicesPage() {
    return (
        <div className="bg-background">
            <div className="container max-w-7xl py-16 sm:py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Spell Casting Services</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Welcome to our powerful and personalized spell casting services. All spells are performed with intention, confidentiality, and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(spell => (
                        <SpellCard key={spell.name} spell={spell} />
                    ))}
                </div>

                 <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-headline font-bold text-primary">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8 mt-6 text-left">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-2">1</div>
                            <h3 className="font-semibold text-foreground">Choose Your Spell</h3>
                            <p className="text-sm text-muted-foreground mt-1">Select the spell that aligns with your needs from our list of services.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-2">2</div>
                            <h3 className="font-semibold text-foreground">Complete Booking</h3>
                            <p className="text-sm text-muted-foreground mt-1">Fill out the booking form with your details and situation.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-2">3</div>
                            <h3 className="font-semibold text-foreground">Spell is Cast</h3>
                            <p className="text-sm text-muted-foreground mt-1">Your custom ritual will be performed within 24-48 hours.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-2">4</div>
                            <h3 className="font-semibold text-foreground">Receive Confirmation</h3>
                            <p className="text-sm text-muted-foreground mt-1">You will receive updates and confirmation as the process unfolds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
