export default function Videos() {
  return (
    <section className="mx-auto max-w-3xl animate-fade-in-up px-4 py-16 sm:px-6">
      <h1 className="mb-10 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
        Vidéos
      </h1>
      <div className="flex flex-col gap-6">
        {/* Placez ici vos vidéos */}
        {["dQw4w9WgXcQ", "3JZ_D3ELwOQ"].map((videoId, idx) => (
          <div
            key={videoId}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4 shadow-sm"
          >
            <iframe
              width="100%"
              height="215"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Vidéo ${idx + 1}`}
              className="rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
