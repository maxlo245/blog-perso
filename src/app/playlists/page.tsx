import Link from "next/link";

const playlists = [
  {
    title: "Chill Vibes",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6",
    cover: "https://i.scdn.co/image/ab67706f00000002b1e7e2e2e2e2e2e2e2e2e2e2",
  },
  {
    title: "Années 2000 Hits",
    url: "https://open.spotify.com/playlist/37i9dQZF1DXaKIA8E7WcJj",
    cover: "https://i.scdn.co/image/ab67706f00000002c2c2c2c2c2c2c2c2c2c2c2c2",
  },
  {
    title: "Rock Français",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWVFeEut75IAL",
    cover: "https://i.scdn.co/image/ab67706f00000002d3d3d3d3d3d3d3d3d3d3d3d3",
  },
];

export default function Playlists() {
  return (
    <section className="mx-auto max-w-3xl animate-fade-in-up px-4 py-16 sm:px-6">
      <h1 className="mb-2 text-4xl font-extrabold text-[var(--color-text)] sm:text-5xl">
        Mes playlists Spotify préférées
      </h1>
      <p className="mb-10 text-[var(--color-text-muted)]">
        Retrouve-moi aussi sur{" "}
        <Link href="/" className="link-underline font-semibold text-brand-500">
          Spotify
        </Link>{" "}
        pour plus de sons.
      </p>
      <div className="flex flex-col gap-5">
        {playlists.map((pl) => (
          <div
            key={pl.title}
            className="flex flex-col items-center gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-sm transition-shadow hover:shadow-lg sm:flex-row"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- couvertures d'origine externe (Spotify CDN) */}
            <img
              src={pl.cover}
              alt={pl.title}
              className="h-24 w-24 rounded-xl border border-[var(--color-border)] object-cover shadow-md"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-[var(--color-text)]">{pl.title}</h2>
              <a
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-full bg-brand-500 px-6 py-2 font-bold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Écouter sur Spotify
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
