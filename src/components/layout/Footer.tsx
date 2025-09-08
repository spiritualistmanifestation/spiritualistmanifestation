import Link from 'next/link';
import { Sprout, Mail, Phone } from 'lucide-react';
import { DMCABadge } from '../icons/DMCABadge';
import { SSLBadge } from '../icons/SSLBadge';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Booking' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/refund-policy', label: 'Refund Policy' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">
                Spiritual<br/>Manifestation
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ethical & confidential spell casting to restore love and manifest your desires.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:hello@spiritualmanifestation.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  hello@spiritualmanifestation.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">24/7 Remote Spell Work</span>
              </li>
            </ul>
          </div>
           <div className="space-y-4">
             <h3 className="text-lg font-headline font-semibold text-foreground">Trust & Safety</h3>
             <div className="flex items-center gap-4">
                <DMCABadge className="h-12" />
                <SSLBadge className="h-12" />
             </div>
             <p className="text-xs text-muted-foreground mt-2">
                Your privacy and security are our top priorities. All communications are confidential.
             </p>
           </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SpiritualManifestation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
