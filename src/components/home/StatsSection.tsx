import { Users, Globe, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: '1200+',
    label: 'Happy Clients',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    value: '20+',
    label: 'Countries Worldwide',
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    value: '24/7',
    label: 'WhatsApp Support',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                {stat.icon}
                <p className="text-4xl font-bold text-foreground font-headline">{stat.value}</p>
                <p className="text-muted-foreground font-body">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
