import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      {/* Hero */}
      <section className="animate-fade-in-up text-center">
        <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-500">
          Bienvenue 👋
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl">
          Le blog perso de{" "}
          <span className="text-brand-500">Maxime</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
          Articles, playlists, souvenirs et un compagnon VRChat maison. Découvre mes contenus,
          laisse-moi un message dans le{" "}
          <Link href="/livre-dor" className="link-underline font-semibold text-brand-500">
            livre d&apos;or
          </Link>{" "}
          ou{" "}
          <Link href="/contact" className="link-underline font-semibold text-brand-500">
            contacte-moi
          </Link>
          .
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/categories"
            className="w-full rounded-full bg-brand-500 px-8 py-3 text-center font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
          >
            Explorer les catégories
          </Link>
          <Link
            href="/app-vrchat"
            className="w-full rounded-full border-2 border-brand-500 px-8 py-3 text-center font-bold text-brand-500 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white sm:w-auto"
          >
            Découvrir l&apos;app VRChat
          </Link>
        </div>
      </section>

      {/* Liens rapides */}
      <section className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/livre-dor", title: "Livre d'or", desc: "Laisse-moi un petit mot" },
          { href: "/contact", title: "Contact", desc: "Envoie-moi un message" },
          { href: "/playlists", title: "Playlists", desc: "Mes sons du moment" },
          { href: "/categories", title: "Catégories", desc: "Photos, vidéos, articles" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/10"
          >
            <h2 className="font-bold text-[var(--color-text)] group-hover:text-brand-500">
              {item.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.desc}</p>
          </Link>
        ))}
      </section>

      {/* Me suivre */}
      <section className="mt-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-[var(--color-text)]">Me suivre</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Retrouve-moi sur mes réseaux préférés.
          </p>
        </div>
        <SocialLinks variant="grid" />
      </section>

      {/* Soutenir */}
      <section className="mt-24 rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent p-8 text-center sm:p-12">
        <h2 className="text-3xl font-extrabold text-[var(--color-text)]">
          Soutenir le projet ❤️
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">
          Si tu aimes ce que je fais (blog, app VRChat, contenus...), tu peux me soutenir. Chaque
          don compte énormément et m&apos;aide à continuer !
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://guns.lol/maxlo24"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-brand-500 px-10 py-3.5 text-center text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
          >
            💸 Faire un don — guns.lol/maxlo24
          </a>
          <div className="flex gap-3">
            <a
              href="https://ko-fi.com/maxlo24"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[var(--color-border)] px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-500"
            >
              Ko-fi
            </a>
            <a
              href="https://patreon.com/u66868989"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[var(--color-border)] px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-500"
            >
              Patreon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
