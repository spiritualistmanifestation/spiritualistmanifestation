export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="container max-w-4xl">
                <div className="prose lg:prose-xl max-w-none mx-auto text-foreground">
                    <h1 className="font-headline text-primary">Privacy Policy</h1>
                    <p className="lead font-body">
                        Your privacy is sacred to us at Spiritual Manifestation. This policy outlines how we handle your personal information with the utmost care and confidentiality.
                    </p>

                    <h2 className="font-headline text-primary">Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us when you book a spell or contact us for support. This may include:
                    </p>
                    <ul>
                        <li>Your full name</li>
                        <li>Your email address</li>
                        <li>Your WhatsApp number</li>
                        <li>Information about your situation that you choose to share</li>
                        <li>Names or photos you provide for the spell casting ritual</li>
                    </ul>

                    <h2 className="font-headline text-primary">How We Use Your Information</h2>
                    <p>
                        Your information is used exclusively for the following purposes:
                    </p>
                    <ul>
                        <li>To perform the spell casting service you requested.</li>
                        <li>To communicate with you regarding your booking, the ritual process, and follow-up support.</li>
                        <li>To provide customer service and answer your inquiries.</li>
                    </ul>
                    <p>
                        <strong>We will never use your personal details for marketing purposes without your explicit consent.</strong>
                    </p>

                    <h2 className="font-headline text-primary">Data Confidentiality and Security</h2>
                    <p>
                        We are deeply committed to protecting your data.
                    </p>
                    <ul>
                        <li><strong>100% Confidentiality:</strong> All communications between you and our practitioners are strictly confidential. The details of your situation and the services you receive will never be shared with any third party.</li>
                        <li><strong>No Data Selling:</strong> We will never sell, rent, or trade your personal information, including your name, email address, or WhatsApp number, to any third party for any reason.</li>
                        <li><strong>Secure Storage:</strong> We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access. Any sensitive details are handled with extreme care and stored securely.</li>
                    </ul>

                    <h2 className="font-headline text-primary">Your Rights</h2>
                    <p>
                        You have the right to request access to the personal information we hold about you. You may also request that we correct or delete your personal information at any time. To make such a request, please contact us at hello@spiritualmanifestation.com.
                    </p>

                     <h2 className="font-headline text-primary">Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>

                    <p className="mt-8 text-sm text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
}
