import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Heart, Star, UserPlus, HandCoins, BookHeart, Users, Briefcase, Baby, ShieldBan, Scale, Shield } from 'lucide-react';

const spiritualSolutions = [
    { icon: <Heart className="h-5 w-5 text-accent" />, name: "Love Spells" },
    { icon: <Star className="h-5 w-5 text-accent" />, name: "Lottery & Wealth Attraction Spells" },
    { icon: <UserPlus className="h-5 w-5 text-accent" />, name: "Attraction & Charisma Enhancement" },
    { icon: <HandCoins className="h-5 w-5 text-accent" />, name: "Emotional & Spiritual Healing" },
    { icon: <BookHeart className="h-5 w-5 text-accent" />, name: "Marriage & Commitment Spells" },
    { icon: <Heart className="h-5 w-5 text-accent" />, name: "Reuniting Separated Lovers" },
    { icon: <Briefcase className="h-5 w-5 text-accent" />, name: "Job & Career Success Spells" },
    { icon: <Baby className="h-5 w-5 text-accent" />, name: "Fertility & Pregnancy Spells" },
    { icon: <ShieldBan className="h-5 w-5 text-accent" />, name: "Curse & Hex Removal" },
    { icon: <Users className="h-5 w-5 text-accent" />, name: "Third-Party Removal in Relationships" },
    { icon: <Scale className="h-5 w-5 text-accent" />, name: "Legal & Court Victory Spells" },
    { icon: <Shield className="h-5 w-5 text-accent" />, name: "Protection from Evil & Negative Energy" },
    { icon: <Sparkles className="h-5 w-5 text-accent" />, name: "...and many more customized rituals" },
];


export default function AboutPage() {
  return (
    <div className="bg-secondary py-16 sm:py-24">
      <div className="container max-w-4xl">
        <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-64 sm:h-80 w-full">
                <Image
                    src="https://picsum.photos/seed/spiritualist/1200/800"
                    alt="Spiritualist Onosetale"
                    fill
                    className="object-cover"
                    data-ai-hint="spiritual person portrait"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-headline">
                    🔮 About Me
                    </h1>
                     <p className="text-2xl text-white/90 font-headline mt-2">Spiritualist Onosetale</p>
                </div>
            </div>
          <CardContent className="p-8">
            <div className="prose lg:prose-xl max-w-none text-foreground">
                <p className="lead">
                Greetings, and welcome to a space of transformation, truth, and divine guidance.
                </p>
                <p>
                My name is Spiritualist Onosetale, a renowned spiritual psychic lord with over 25 years of experience in helping individuals from all walks of life overcome challenges and unlock their destinies. From matters of the heart to the deepest spiritual healing, I have been gifted with rare spiritual insight and ancestral power to bring clarity, balance, and real results to those who seek my help.
                </p>
                <h2 className="font-headline text-primary">I specialize in a wide range of powerful spellwork and spiritual solutions, including:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 not-prose p-0 m-0 list-none">
                    {spiritualSolutions.map((solution) => (
                        <li key={solution.name} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">{solution.icon}</div>
                            <span>{solution.name}</span>
                        </li>
                    ))}
                </ul>

                <p>
                Every service I offer is performed with discretion, sacred intention, and spiritual precision. Whether you're facing heartache, financial struggle, spiritual imbalance, or unseen attacks, I am here to guide you with honesty, compassion, and powerful ancestral wisdom.
                </p>
                <p className="font-bold">
                Let me know how I can assist you on your journey. Your breakthrough might just be a spell away.
                </p>
            </div>
            <div className="mt-8 text-center">
                <Link href="/book">
                    <Button size="lg">Book a Confidential Spell</Button>
                </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
