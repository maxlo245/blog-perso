import { NextResponse } from "next/server";

export const runtime = "nodejs";

const supabaseUrl =
  process.env.SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://rnptwwjlwicfworhjmwr.supabase.co";
const publishableKey =
  process.env.SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_JZVK9oQMCSIAz99AvM09Ww_tTGqHCVE";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Champ leurre anti-spam : répondre avec succès sans enregistrer le message.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 1 || name.length > 100 || !validEmail || email.length > 254 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Vérifie les champs du formulaire." }, { status: 400 });
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${publishableKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, message }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase contact insert failed with status", response.status);
      return NextResponse.json({ error: "Le message n’a pas pu être enregistré." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Le service de contact est momentanément indisponible." }, { status: 502 });
  }
}
