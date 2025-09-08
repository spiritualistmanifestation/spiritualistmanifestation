export default function RefundPolicyPage() {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="container max-w-4xl">
                <div className="prose lg:prose-xl max-w-none mx-auto text-foreground">
                    <h1 className="font-headline text-primary">Refund Policy</h1>
                    <p className="lead font-body">
                        We are committed to providing authentic, high-quality spiritual services. Please read our refund policy carefully to understand the terms regarding our spell casting work.
                    </p>

                    <h2 className="font-headline text-primary">Nature of Spell Casting Services</h2>
                    <p>
                        Spell casting is a spiritual service that involves time, energy, and resources (such as herbs, candles, and other ritual components) that are dedicated exclusively to you. The moment you book a spell, we begin the process of preparation, which includes meditation, energy alignment, and sourcing materials for your specific ritual.
                    </p>

                    <h2 className="font-headline text-primary">No Refunds After Ritual Has Begun</h2>
                    <p>
                        Due to the spiritual nature of our work and the immediate allocation of resources and energy to your case, we have a strict no-refund policy.
                    </p>
                    <ul>
                        <li>
                            <strong>Once a ritual has begun, no refunds will be issued.</strong> The energies have been set in motion and the materials have been consecrated and used for your specific intent. This process is irreversible.
                        </li>
                        <li>
                            This policy applies to all our spell casting services, including custom work.
                        </li>
                    </ul>

                    <h2 className="font-headline text-primary">Our Commitment to You</h2>
                    <p>
                        While we cannot offer refunds, we are deeply committed to your satisfaction and to the ethical execution of our craft. If you have concerns about the process or your situation, we encourage you to communicate with us.
                    </p>
                    <ul>
                        <li>We provide post-spell follow-up support to answer your questions and offer guidance as the energies unfold.</li>
                        <li>Our goal is to provide you with a positive and empowering experience, and we will do our best to support you throughout your journey.</li>
                    </ul>

                    <h2 className="font-headline text-primary">Disclaimer on Results</h2>
                    <p>
                        Spiritual work and spell casting are based on faith, energy, and the intricate paths of fate. While we perform every ritual with the highest intent and skill, the universe's will and the free will of individuals play a role. Therefore, <strong>results are not guaranteed.</strong>
                    </p>
                    <p>
                        By booking a service with EnchantingHeartSpells, you acknowledge and agree that you have read, understood, and accepted the terms of this refund policy.
                    </p>

                    <p className="mt-8 text-sm text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
}
