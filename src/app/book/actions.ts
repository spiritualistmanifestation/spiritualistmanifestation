'use server';

import * as z from 'zod';

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  whatsappNumber: z.string().min(10, "Please enter a valid WhatsApp number."),
  email: z.string().email("Please enter a valid email address."),
  spellType: z.string({ required_error: "Please select a spell." }),
  targetName: z.string().optional(),
  message: z.string().min(10, "Please describe your situation (min. 10 characters).").max(1000),
});

export type BookingFormState = {
    success: boolean;
    message: string;
};

export async function sendBookingNotification(
    prevState: BookingFormState,
    formData: FormData
): Promise<BookingFormState> {
    const validatedFields = bookingSchema.safeParse({
        fullName: formData.get('fullName'),
        whatsappNumber: formData.get('whatsappNumber'),
        email: formData.get('email'),
        spellType: formData.get('spellType'),
        targetName: formData.get('targetName'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Invalid form data. Please check your entries.',
        };
    }
    
    const { fullName, whatsappNumber, email, spellType, targetName, message } = validatedFields.data;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error("Telegram environment variables are not set.");
        return {
            success: false,
            message: "Server configuration error. Could not send booking."
        };
    }

    const notificationMessage = `
🔔 *New Notification from SpiritualManifestation* 🔔

A new spell has been booked.

*Client Details:*
- *Full Name:* ${fullName}
- *WhatsApp:* ${whatsappNumber}
- *Email:* ${email}

*Spell Details:*
- *Spell Type:* ${spellType}
- *Target Name:* ${targetName || 'N/A'}

*Client's Situation:*
\`\`\`
${message}
\`\`\`
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: notificationMessage,
                parse_mode: 'Markdown',
            }),
        });

        const result = await response.json();

        if (!result.ok) {
            console.error("Telegram API Error:", result.description);
            return { success: false, message: 'Failed to send notification to Telegram.' };
        }
        
        return { success: true, message: 'Booking sent successfully!' };

    } catch (error) {
        console.error('Error sending Telegram notification:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
