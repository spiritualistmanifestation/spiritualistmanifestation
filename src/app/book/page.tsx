import { BookingForm } from "./BookingForm";

export default function BookPage() {
  return (
    <div className="bg-secondary py-16 sm:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Book Your Spell</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Complete the form below to begin your journey. All information is 100% confidential. You will be contacted via WhatsApp within 12 hours to confirm your booking.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
