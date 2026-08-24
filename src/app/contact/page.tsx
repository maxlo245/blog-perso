export default function Contact() {
  return (
    <section className="mx-auto max-w-xl animate-fade-in-up px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-xl">
        <h1 className="text-4xl font-extrabold text-[var(--color-text)] sm:text-5xl">Contact</h1>
        <p className="mb-8 mt-3 text-lg text-[var(--color-text-muted)]">
          Envoie-moi un message !
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Ton nom ou pseudo"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-medium text-[var(--color-text)] transition-colors focus:border-brand-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ton email"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-medium text-[var(--color-text)] transition-colors focus:border-brand-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Ton message"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-medium text-[var(--color-text)] transition-colors focus:border-brand-500 focus:outline-none"
            rows={4}
            required
          />
          <button
            type="submit"
            className="rounded-full bg-brand-500 px-8 py-3 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
