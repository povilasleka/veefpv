import configPromise from "@payload-config";
import { getPayload } from "payload";
import { sendContactNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const payload = await getPayload({ config: configPromise });

  try {
    const submission = await payload.create({
      collection: "contact-submissions",
      data: {
        name: body.name,
        email: body.email,
        date: body.date || undefined,
        location: body.location,
        projectType: body.projectType,
        propStyle: body.propStyle,
        message: body.message,
      },
    });

    await sendContactNotificationEmail({
      name: submission.name,
      email: submission.email,
      message: submission.message,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Failed to submit inquiry." }, { status: 400 });
  }
}
