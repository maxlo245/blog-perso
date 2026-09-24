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
  return <span className={`social-icon social-icon--${name}`} aria-hidden="true" />;
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
