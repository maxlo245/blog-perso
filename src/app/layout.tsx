import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggleWrapper from "./ThemeToggleWrapper";
import CustomAudioPlayer from "../components/CustomAudioPlayer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxime Laurent | Développeur web & BTS SIO SLAM",
  description: "Projets, stages et parcours de Maxime Laurent, étudiant en BTS SIO option SLAM.",
};

const socials = [
  { label: "X", href: "https://x.com/maxlo425", icon: "x" },
  { label: "TikTok", href: "https://tiktok.com/@maxlo245", icon: "tiktok" },
  { label: "Spotify", href: "https://open.spotify.com/user/vj763nyyje953ae9bpf1hzg7e", icon: "spotify" },
  { label: "Instagram", href: "https://instagram.com/maxime_larnt", icon: "instagram" },
  { label: "Discord", href: "https://discord.gg/RcdajSBECj", icon: "discord" },
  { label: "Twitch", href: "https://twitch.tv/maxlo425", icon: "twitch" },
  { label: "Reddit", href: "https://reddit.com/user/Key-Ask-3385/", icon: "reddit" },
  { label: "GitHub", href: "https://github.com/maxlo245", icon: "github" },
  { label: "Ko-fi", href: "https://ko-fi.com/maxlo24", icon: "kofi" },
  { label: "Patreon", href: "https://patreon.com/u66868989", icon: "patreon" },
  { label: "stats.fm", href: "https://stats.fm/metalindustrial", icon: "stats" },
];

function SocialIcon({ name }: { name: string }) {
  const common = { fill: "currentColor", "aria-hidden": true as const };
  switch (name) {
    case "x":
      return <svg viewBox="0 0 24 24" {...common}><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.59L5.4 22H2.28l7.25-8.29L1.8 2h6.4l4.43 6.96L18.9 2Zm-1.1 17.87h1.73L7.27 4.02H5.41L17.8 19.87Z" /></svg>;
    case "tiktok":
      return <svg viewBox="0 0 24 24" {...common}><path d="M19.6 7.1a6.8 6.8 0 0 1-4.2-1.4v8.1a6.1 6.1 0 1 1-5.3-6.1v3.5a2.7 2.7 0 1 0 1.9 2.6V2h3.4c.2 2.1 1.9 3.8 4.2 4v1.1Z" /></svg>;
    case "spotify":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 1.5A10.5 10.5 0 1 0 12 22.5 10.5 10.5 0 0 0 12 1.5Zm4.8 15.2a.8.8 0 0 1-1.1.3c-2.9-1.8-6.5-2.2-10.8-1.2a.8.8 0 0 1-.4-1.6c4.7-1.1 8.7-.6 12 1.4.4.2.5.7.3 1.1Zm1.4-3.1a1 1 0 0 1-1.3.3c-3.3-2-8.3-2.6-12.2-1.4a1 1 0 0 1-.6-1.9c4.4-1.3 10- .7 13.8 1.6.5.3.6.9.3 1.4Zm.1-3.2C14.4 8.1 7.9 8 4.2 9.1a1.1 1.1 0 1 1-.6-2.1c4.3-1.3 11.5-1.1 16 1.5a1.1 1.1 0 0 1-1.2 1.9Z" /></svg>;
    case "instagram":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.7" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
    case "discord":
      return <svg viewBox="0 0 24 24" {...common}><path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.6 1.2a16 16 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.2.7 13.2 1.1 17.1a18 18 0 0 0 5.4 2.7l1.2-1.9-1.9-.9.5-.4c3.7 1.7 7.7 1.7 11.4 0l.5.4-1.9.9 1.2 1.9a18 18 0 0 0 5.4-2.7c.5-4.6-.8-8.5-3.2-12Zm-11 9.7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6.6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" /></svg>;
    case "twitch":
      return <svg viewBox="0 0 24 24" {...common}><path d="M4 2 2 5.5V21h5v3l3.2-3H15l7-7V2H4Zm16 11.2-4 4h-4l-3 2.8v-2.8H5V4h15v9.2ZM12 7h2v5h-2V7Zm5 0h2v5h-2V7Z" /></svg>;
    case "reddit":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.1 10.4a1.3 1.3 0 0 1-2.1 1 4.6 4.6 0 0 1 .1 1c0 2.3-1.8 4.1-4.1 4.1s-4.1-1.8-4.1-4.1c0-.3 0-.7.1-1a1.3 1.3 0 1 1 .8-1.2c.8-.6 1.8-.9 2.8-1l.7-3.2 2.2.5a1 1 0 1 1-.2.8l-1.5-.3-.5 2.3c1.1.1 2.1.4 2.9 1a1.3 1.3 0 0 1 2.9.1Zm-7.7 2.7c.4.4.9.6 1.6.6s1.2-.2 1.6-.6l.6.5c-.5.6-1.3.9-2.2.9s-1.7-.3-2.2-.9l.6-.5Z" /></svg>;
    case "github":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.6 10.6 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.2-5.1 5.5.4.3.7 1 .7 2v3c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" /></svg>;
    case "kofi":
      return <svg viewBox="0 0 24 24" {...common}><path d="M3 5h14a3 3 0 0 1 3 3v.5h1a2 2 0 0 1 0 4h-1V15a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5Zm14 2H5v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1Zm4 3.5h-1V11h1a.5.5 0 0 0 0-1Z" /><path d="M8 9c-1.7 0-2.4 2-.9 3.2L12 17l4.9-4.8C18.4 11 17.7 9 16 9c-1 0-1.7.6-2 1.2-.3-.6-1-1.2-2-1.2s-1.7.6-2 1.2C9.7 9.6 9 9 8 9Z" /></svg>;
    case "patreon":
      return <svg viewBox="0 0 24 24" {...common}><path d="M14.5 2a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM3 2h3v20H3z" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="14" width="3" height="7" rx="1" /><rect x="8" y="10" width="3" height="11" rx="1" /><rect x="13" y="6" width="3" height="15" rx="1" /><rect x="18" y="2" width="3" height="19" rx="1" /></svg>;
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="site-header">
          <div className="site-header-inner">
            <a href="/" className="site-brand">Maxime Laurent</a>
            <div className="site-header-controls">
              <nav className="site-nav" aria-label="Navigation principale">
                <a href="/">Accueil</a>
                <a href="/#projets">Projets</a>
                <a href="/#stages">Stages</a>
                <a href="/categories">Articles</a>
                <a href="/contact">Contact</a>
              </nav>
              <ThemeToggleWrapper />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-caption">© {new Date().getFullYear()} <strong>Maxime Laurent</strong> · projets, musique et idées.</p>
            <nav className="social-links" aria-label="Réseaux sociaux">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}>
                  <SocialIcon name={social.icon} />
                  <span>{social.label}</span>
                </a>
              ))}
            </nav>
            <div id="music-player" aria-label="Lecteur musical">
              <div className="music-player-content">
                <CustomAudioPlayer />
                <iframe
                  title="Playlist Spotify de Maxime"
                  src="https://open.spotify.com/embed/playlist/06succq5Lndt6TcyplVAsn?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
