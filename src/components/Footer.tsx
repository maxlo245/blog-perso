import Link from "next/link";
import SocialLinks from "./SocialLinks";
import CustomAudioPlayer from "./CustomAudioPlayer";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] pb-40">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-extrabold text-brand-500">Mon Blog Perso</h2>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-text-muted)]">
            Blog personnel de Maxime : articles, playlists, souvenirs et un compagnon VRChat
            fait maison.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)]">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-500">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/livre-dor" className="hover:text-brand-500">
                Livre d&apos;or
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/playlists" className="hover:text-brand-500">
                Playlists
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-brand-500">
                Catégories
              </Link>
            </li>
            <li>
              <Link href="/app-vrchat" className="hover:text-brand-500">
                App VRChat
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)]">
            Me suivre
          </h3>
          <SocialLinks variant="footer" />

          <a
            href="https://guns.lol/maxlo24"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
          >
            ❤ Faire un don
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} — Blog personnel par Maxime
      </div>

      {/* Lecteur audio fixe */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-500/40 bg-[#111]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-3">
          <CustomAudioPlayer />
          <div className="flex flex-wrap items-center justify-center gap-6">
            <iframe
              className="rounded-xl"
              src="https://open.spotify.com/embed/playlist/06succq5Lndt6TcyplVAsn?utm_source=generator"
              width="320"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist Spotify"
            />
            <iframe
              className="rounded-xl"
              width="280"
              height="80"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=EnSIkaIECMiOmarE&controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
