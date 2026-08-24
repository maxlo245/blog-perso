export default function Photos() {
  return (
    <section className="mx-auto max-w-3xl animate-fade-in-up px-4 py-16 sm:px-6">
      <h1 className="mb-10 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
        Galerie Photos
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {/* Placez ici vos images */}
        {[
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
        ].map((src, idx) => (
          <div
            key={src}
            className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-sm transition-transform hover:-translate-y-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- photos de démo hébergées sur Unsplash (domaine externe non configuré dans images.remotePatterns) */}
            <img
              src={src}
              alt={`Photo ${idx + 1}`}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
