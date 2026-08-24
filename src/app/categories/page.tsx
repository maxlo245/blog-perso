import Link from "next/link";

const categories = [
  {
    name: "Photos",
    description: "Galerie de mes plus belles photos.",
    url: "/categories/photos",
  },
  {
    name: "Vidéos",
    description: "Mes vidéos préférées et souvenirs.",
    url: "/categories/videos",
  },
  {
    name: "Articles",
    description: "Tous mes articles de blog.",
    url: "/categories/articles",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-3xl animate-fade-in-up px-4 py-16 sm:px-6">
      <h1 className="mb-10 text-4xl font-extrabold text-[var(--color-text)] sm:text-5xl">
        Catégories
      </h1>
      <div className="grid gap-5 sm:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.url}
            className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/10"
          >
            <h2 className="text-xl font-bold text-[var(--color-text)] group-hover:text-brand-500">
              {cat.name}
            </h2>
            <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
              {cat.description}
            </p>
            <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-brand-500">
              Voir →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
