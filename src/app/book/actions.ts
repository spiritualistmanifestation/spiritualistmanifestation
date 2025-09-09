'use server';
require('dotenv').config();
import * as z from 'zod';

const bookingSchema = z.object({
  fullName: z.string().min(2),
  whatsappNumber: z.string().min(10),
  email: z.string().email(),
  spellType: z.string(),
  targetName: z.string().optional(),
  message: z.string().min(10),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
export type BookingFormState = {
    success: boolean;
    message: string;
};

// A simpler, more targeted escape function for Telegram's MarkdownV2
const escapeMarkdown = (text: string | undefined) => {
    if (!text) return '';
    // Main characters to escape for MarkdownV2
    const charsToEscape = /[_*[\]()~`>#+\-=|{}.!]/g;
    return text.replace(charsToEscape, '\\$&');
};


export async function sendBookingNotification(
    values: BookingFormValues
): Promise<BookingFormState> {
    const validatedFields = bookingSchema.safeParse(values);

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
        console.error("Telegram environment variables (TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID) are not set.");
        return {
            success: false,
            message: "Server configuration error: Could not find Telegram credentials."
        };
    }

    const notificationMessage = `
🔔 *New Notification from SpiritualManifestation* 🔔

A new spell has been booked\\.

*Client Details:*
- *Full Name:* ${escapeMarkdown(fullName)}
- *WhatsApp:* ${escapeMarkdown(whatsappNumber)}
- *Email:* ${escapeMarkdown(email)}

*Spell Details:*
- *Spell Type:* ${escapeMarkdown(spellType)}
- *Target Name:* ${targetName ? escapeMarkdown(targetName) : 'N/A'}

*Client's Situation:*
\`\`\`
${escapeMarkdown(message)}
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
                parse_mode: 'MarkdownV2',
            }),
        });

        const result = await response.json();
        
        if (!result.ok) {
            // Log the specific error from Telegram for debugging
            console.error("Telegram API Error:", result.description);
            // Return a more informative error message
            return { success: false, message: `Failed to send notification to Telegram: ${result.description}` };
        }
        
        return { success: true, message: 'Booking sent successfully!' };

    } catch (error) {
        console.error('Error sending Telegram notification:', error);
        return { success: false, message: 'An unexpected network error occurred while contacting Telegram.' };
    }
}
