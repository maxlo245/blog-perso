import type { ReactNode } from "react";

export type SocialLink = {
  name: string;
  href: string;
  description: string;
  icon: ReactNode;
};

/**
 * Liste centralisée des réseaux sociaux / liens externes de Maxime.
 * Source unique de vérité utilisée par le footer ET la section "Me suivre" de l'accueil.
 */
export const socialLinks: SocialLink[] = [
  {
    name: "Twitter / X",
    href: "https://twitter.com/maxlo425",
    description: "@maxlo425",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.89 4.1 7.13 1.671 4.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@maxlo245",
    description: "@maxlo245",
    icon: (
      <svg viewBox="0 0 256 256" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M216.4 128.6a88.4 88.4 0 0 1-88.4 88.4c-48.8 0-88.4-39.6-88.4-88.4s39.6-88.4 88.4-88.4c48.8 0 88.4 39.6 88.4 88.4zm-88.4-72.4c-40 0-72.4 32.4-72.4 72.4s32.4 72.4 72.4 72.4 72.4-32.4 72.4-72.4-32.4-72.4-72.4-72.4zm36.8 72.4c0 20.3-16.5 36.8-36.8 36.8s-36.8-16.5-36.8-36.8 16.5-36.8 36.8-36.8 36.8 16.5 36.8 36.8z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/vj763nyyje953ae9bpf1hzg7e",
    description: "Écoute mes playlists",
    icon: (
      <svg viewBox="0 0 168 168" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="84" cy="84" r="84" className="fill-current" />
        <path
          fill="#fff"
          d="M120.1 116.2c-1.6 2.6-5 3.4-7.6 1.8-20.8-12.7-47-15.6-77.7-8.6-3 0.7-6-1.2-6.7-4.2-0.7-3 1.2-6 4.2-6.7 33.2-7.5 62.2-4.2 85.1 9.9 2.6 1.6 3.4 5 1.8 7.8zm10.9-21.7c-2 3.2-6.2 4.2-9.4 2.2-23.8-14.6-60.2-18.8-88.4-10.4-3.6 1-7.4-1-8.4-4.6-1-3.6 1-7.4 4.6-8.4 31.7-9.1 71.1-4.5 98.2 11.2 3.2 2 4.2 6.2 2.2 9.4zm11.2-23.2c-28.2-17.1-75.1-18.7-102.2-10.3-4.1 1.2-8.4-1.1-9.6-5.2-1.2-4.1 1.1-8.4 5.2-9.6 30.2-8.9 81.2-7.1 113.2 11.2 4 2.4 5.3 7.7 2.9 11.7-2.4 4-7.7 5.3-11.7 2.9z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/maxime_larnt",
    description: "@maxime_larnt",
    icon: (
      <svg viewBox="0 0 448 512" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9C388.7 9.9 357.3 1.7 322 0 285.7-1.7 162.3-1.7 126 0 90.7 1.7 59.3 9.9 33.1 36.2 6.9 62.4-1.7 93.8 0 129.1c1.7 36.3 1.7 159.7 0 196-1.7 35.3 9.9 66.7 36.2 92.9 26.2 26.2 57.6 34.4 92.9 36.2 36.3 1.7 159.7 1.7 196 0 35.3-1.7 66.7-9.9 92.9-36.2 26.2-26.2 34.4-57.6 36.2-92.9 1.7-36.3 1.7-159.7 0-196zm-48.5 262c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.5 9s-103.1 2.6-132.5-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.5s-2.6-103.1 9-132.5c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.5-9s103.1-2.6 132.5 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.5s2.6 103.1-9 132.5z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/RcdajSBECj",
    description: "Rejoindre le serveur",
    icon: (
      <svg viewBox="0 0 71 55" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.104 4.552A58.36 58.36 0 0 0 46.852.8a.117.117 0 0 0-.123.06c-2.048 3.614-4.096 8.29-5.616 12.06-6.656-.99-13.312-.99-19.968 0-1.52-3.77-3.568-8.446-5.616-12.06A.117.117 0 0 0 15.148.8a58.36 58.36 0 0 0-13.252 3.752.105.105 0 0 0-.05.043C.356 9.06-.213 13.46.066 17.82c.01.14.12.28.26.32 6.788 2.13 13.34 5.24 19.5 9.44a.12.12 0 0 0 .13.01c1.52-1.14 3.04-2.29 4.52-3.43a.12.12 0 0 1 .14 0c1.48 1.14 3 2.29 4.52 3.43a.12.12 0 0 0 .13-.01c6.16-4.2 12.71-7.31 19.5-9.44a.12.12 0 0 0 .26-.32c.28-4.36-.29-8.76-1.83-13.225a.105.105 0 0 0-.05-.043z" />
      </svg>
    ),
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/maxlo425",
    description: "maxlo425",
    icon: (
      <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 0L0 96v416h144v96h96l96-96h96l96-96V0H80zm384 384h-96l-96 96v-96H80V96h384v288zm-64-160h-32v96h32v-96zm-96 0h-32v96h32v-96z" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    href: "https://reddit.com/user/Key-Ask-3385/",
    description: "u/Key-Ask-3385",
    icon: (
      <svg viewBox="0 0 512 512" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="256" className="fill-current" />
        <ellipse fill="#fff" cx="256" cy="256" rx="192" ry="128" />
        <circle fill="#ff4500" cx="176" cy="256" r="32" />
        <circle fill="#ff4500" cx="336" cy="256" r="32" />
        <ellipse fill="#fff" cx="256" cy="320" rx="80" ry="32" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/maxlo245",
    description: "@maxlo245",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Ko-fi",
    href: "https://ko-fi.com/maxlo24",
    description: "Un café virtuel",
    icon: (
      <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M477.5 186.5c-13.5-13.5-31.5-21-50.5-21H80c-44.2 0-80 35.8-80 80s35.8 80 80 80h347c19 0 37-7.5 50.5-21 13.5-13.5 21-31.5 21-50.5s-7.5-37-21-50.5zM80 306c-22.1 0-40-17.9-40-40s17.9-40 40-40h347c22.1 0 40 17.9 40 40s-17.9 40-40 40H80z" />
      </svg>
    ),
  },
  {
    name: "Patreon",
    href: "https://patreon.com/u66868989",
    description: "Devenir membre",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="6.5" r="6.5" />
        <rect x="1" y="1" width="6" height="22" rx="3" />
      </svg>
    ),
  },
  {
    name: "stats.fm",
    href: "https://stats.fm/metalindustrial",
    description: "Mes stats d'écoute",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="17" width="2" height="5" />
        <rect x="6" y="13" width="2" height="9" />
        <rect x="10" y="9" width="2" height="13" />
        <rect x="14" y="5" width="2" height="17" />
        <rect x="18" y="1" width="2" height="21" />
      </svg>
    ),
  },
];

type SocialLinksProps = {
  variant?: "footer" | "grid";
};

export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  if (variant === "grid") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
              {link.icon}
            </span>
            <span className="font-semibold text-[var(--color-text)]">{link.name}</span>
            <span className="text-xs text-[var(--color-text-muted)]">{link.description}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-500"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
