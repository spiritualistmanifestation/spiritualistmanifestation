import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { Button } from "../ui/button";

const faqs = [
    {
        question: "How do I know if a spell is right for me?",
        answer: "If you feel a deep longing for change, a pull towards a specific desire (be it love, healing, or success), or a sense that unseen barriers are holding you back, spiritual work can provide the clarity and push you need. Our spells are designed to align your energy with your highest intentions. Trust your intuition; it's often the first sign that you're ready for transformation."
    },
    {
        question: "Are your spells safe? What about karma?",
        answer: "Absolutely. Our practice is built on a foundation of ethical, positive energy. We only perform 'white magic,' which means all our rituals are focused on love, light, and healing. There are no negative karmic consequences because our work aims to restore natural harmony and happiness, never to cause harm or manipulate free will."
    },
    {
        question: "How quickly will I see results?",
        answer: "The universe works on its own timeline, but the energies of our spells begin to work immediately. Some clients feel a shift within hours, while for others, results unfold over weeks. The key is to maintain faith and be open to the signs. Our commitment to you includes post-spell support to help you navigate this period."
    },
    {
        question: "Is my situation too difficult or complicated?",
        answer: "There is no situation too complex for spiritual intervention. We have successfully helped clients facing immense challenges, from reuniting after years of separation to overcoming generational blockages. Every ritual is customized to the unique energies of your situation. Don't lose hope—let us be your spiritual ally."
    },
    {
        question: "What if I'm skeptical?",
        answer: "A healthy dose of curiosity is natural. You don't need to be a seasoned believer, only open to the possibility of change. Many of our most satisfied clients started with uncertainty. Let our work speak for itself. The first step is the hardest, but it's also the most rewarding."
    }
];


export function FaqSection() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Your Questions, Answered with Clarity</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        We understand you may have questions. Find your answers below and feel confident in taking the next step.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-12 text-center">
                    <p className="text-lg text-muted-foreground mb-4">Have more questions or ready to start?</p>
                    <Link href="/book">
                        <Button size="lg">Book Your Confidential Consultation</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
