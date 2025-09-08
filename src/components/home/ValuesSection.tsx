import { ShieldCheck, Lock, HeartHandshake, Award, BadgeCheck } from 'lucide-react';

const coreValues = [
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent" />,
    title: 'Ethical Spell Casting',
    description: 'Our practices are rooted in positive energy and goodwill, ensuring no harm is done.',
  },
  {
    icon: <Lock className="h-8 w-8 text-accent" />,
    title: '100% Confidentiality',
    description: 'Your privacy is sacred. All readings and spellwork are kept in absolute secrecy.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'No Black Magic',
    description: 'We strictly avoid any form of harmful intent, focusing only on light and love.',
  },
];

const certifications = [
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    text: 'Energy Healing License — Holistic Practitioner Board'
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" />,
    text: 'Spiritual Wellness Certification — Global Occult Council (G.O.C.)'
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    text: 'Registered Member — Spiritual Advisors Network (SAN)'
  }
];

export function ValuesSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-headline font-bold text-primary">Our Sacred Promise to You</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We operate under a strict code of ethics. Our mission is to facilitate healing, love, and positivity, guided by principles that protect you and honor the spiritual realm.
          </p>
          <div className="mt-8 space-y-6">
            {coreValues.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex-shrink-0 pt-1">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-headline font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
           <h3 className="text-2xl font-headline font-bold text-primary mb-6">Our Credentials</h3>
           <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start sm:items-center gap-4">
                  <div className="flex-shrink-0 pt-1 sm:pt-0">{cert.icon}</div>
                  <span className="text-foreground">{cert.text}</span>
                </li>
              ))}
           </ul>
        </div>
      </div>
    </section>
  );
}
