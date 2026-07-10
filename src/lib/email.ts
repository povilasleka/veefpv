interface ContactNotificationEmail {
  name: string;
  email: string;
  message?: string | null;
}

/**
 * TODO: not implemented yet. Should send a notification to contact@veefpv.com
 * whenever a new contact form submission comes in (e.g. via Resend/Postmark/SMTP).
 */
export async function sendContactNotificationEmail(_data: ContactNotificationEmail): Promise<void> {}
