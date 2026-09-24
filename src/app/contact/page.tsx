"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [state, setState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const values = new FormData(form);
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          message: values.get("message"),
          website: values.get("website"),
        }),
      });

      if (!response.ok) throw new Error("Le message n’a pas pu être envoyé.");
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="contact-page animate-fade-in">
      <div className="contact-intro">
        <p className="eyebrow">Un projet, une question ?</p>
        <h1>Parlons-en.</h1>
        <p>Écris-moi un message. Il sera transmis directement et je pourrai te répondre par email.</p>
        <a href="mailto:maximelaurent090@gmail.com">maximelaurent090@gmail.com <span aria-hidden="true">↗</span></a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Ton nom
          <input name="name" type="text" autoComplete="name" maxLength={100} placeholder="Comment tu t’appelles ?" required />
        </label>
        <label>
          Ton adresse email
          <input name="email" type="email" autoComplete="email" maxLength={254} placeholder="toi@exemple.fr" required />
        </label>
        <label>
          Ton message
          <textarea name="message" rows={6} minLength={10} maxLength={5000} placeholder="Explique-moi ce que tu as en tête…" required />
          <span className="field-hint">10 caractères minimum</span>
        </label>

        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Ne pas remplir ce champ</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button className="button button-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Envoi en cours…" : "Envoyer le message"}
          {state !== "sending" && <span aria-hidden="true">↗</span>}
        </button>
        <p className={`form-feedback ${state}`} role="status" aria-live="polite">
          {state === "sent" && "Message envoyé, merci ! Je te répondrai dès que possible."}
          {state === "error" && "L’envoi a échoué. Réessaie dans un instant ou écris-moi directement par email."}
        </p>
        <p className="privacy-note">Ton adresse email sert uniquement à répondre à ton message. Elle n’est pas publiée.</p>
      </form>
    </section>
  );
}
