export default function Articles() {
  return (
    <section className="mx-auto max-w-3xl animate-fade-in-up px-4 py-16 sm:px-6">
      <h1 className="mb-10 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
        Articles
      </h1>
      <div className="flex flex-col gap-5">
        {/* Placez ici vos articles */}
        <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-bold text-[var(--color-text)]">Premier article</h2>
          <p className="text-[var(--color-text-muted)]">
            Bienvenue sur mon blog ! Ceci est un exemple d&apos;article. Vous pouvez ajouter vos
            propres textes ici.
          </p>
        </article>
      </div>
    </section>
  );
}
