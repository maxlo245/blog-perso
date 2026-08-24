import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VRChat AI Companion — Télécharger l'app",
  description:
    "Découvre et télécharge VRChat AI Companion, un compagnon vocal IA pour VRChat basé sur CharacterAI, avec détection AFK, gestion des amis et bien plus.",
};

const REPO_URL = "https://github.com/tuckerisapizza/VRChat-AI-Bot";
const REPO_RELEASES_URL = `${REPO_URL}/releases`;

const features = [
  {
    title: "Compagnon vocal CharacterAI",
    description:
      "Discute à la voix avec un personnage CharacterAI directement connecté à ton compte, pour une vraie présence pendant tes sessions VRChat.",
    icon: "💬",
  },
  {
    title: "Activation automatique quand tu es AFK",
    description:
      "Détection OSC + détection d'inactivité clavier/souris : le bot prend le relais dès que tu t'absentes dans VRChat.",
    icon: "🛰️",
  },
  {
    title: "Connexion VRChat sécurisée",
    description:
      "Connexion explicite à ton compte VRChat avec support de la 2FA et session persistante, sans re-saisir tes identifiants à chaque lancement.",
    icon: "🔐",
  },
  {
    title: "Gestion amis & modération façon VRCX",
    description:
      "Suivi des amis, des notifications et outils de modération inspirés de VRCX pour garder le contrôle sur ton instance.",
    icon: "🧑‍🤝‍🧑",
  },
  {
    title: "Voix & reconnaissance vocale",
    description:
      "Retour vocal (TTS) et reconnaissance vocale (STT) pour interagir naturellement, mains libres, en VR.",
    icon: "🎙️",
  },
  {
    title: "Interface complète à onglets",
    description:
      "Une interface graphique CustomTkinter avec plusieurs onglets pour configurer chaque fonctionnalité en quelques clics.",
    icon: "🖥️",
  },
];

export default function AppVRChat() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* Hero */}
      <section className="animate-fade-in-up text-center">
        <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-500">
          Projet en développement actif
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl">
          VRChat AI <span className="text-brand-500">Companion</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
          Un compagnon de bureau en Python (CustomTkinter) qui garde vie à ton avatar VRChat
          quand tu es AFK : conversation vocale avec CharacterAI, détection d&apos;inactivité,
          gestion des amis et bien plus.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REPO_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-brand-500 px-10 py-3.5 text-center text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
          >
            ⬇️ Télécharger / Voir les releases
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border-2 border-[var(--color-border)] px-10 py-3.5 text-center text-lg font-bold transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-500 sm:w-auto"
          >
            Voir le code sur GitHub
          </a>
        </div>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          Développement en cours sur la branche{" "}
          <code className="rounded bg-[var(--color-surface-muted)] px-1.5 py-0.5 text-xs">
            maxlo245-vrchat-afk-ai-bot-app
          </code>{" "}
          — pas encore mergée sur <code>main</code>.
        </p>
      </section>

      {/* Fonctionnalités */}
      <section className="mt-20">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-[var(--color-text)]">
          Fonctionnalités
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/10"
            >
              <div className="mb-3 text-3xl">{feature.icon}</div>
              <h3 className="font-bold text-[var(--color-text)]">{feature.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-extrabold text-[var(--color-text)]">Installation</h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-sm sm:p-8">
          <p className="mb-4 text-[var(--color-text-muted)]">
            L&apos;app est distribuée en tant que projet Python. Le plus simple pour l&apos;instant
            est de cloner le dépôt et de lancer le script directement :
          </p>
          <pre className="scrollbar-thin overflow-x-auto rounded-xl bg-[#0e0b0b] p-4 text-sm text-brand-300">
            <code>{`git clone ${REPO_URL}.git
cd VRChat-AI-Bot
git checkout maxlo245-vrchat-afk-ai-bot-app
pip install -r requirements.txt
python main.py`}</code>
          </pre>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Prérequis : Python 3.10+ recommandé, une clé/session CharacterAI et un compte VRChat.
            Consulte le README du dépôt pour la configuration détaillée (OSC, clés API, etc.).
          </p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <p className="text-[var(--color-text-muted)]">
          Une question, un bug à signaler ?{" "}
          <Link href="/contact" className="link-underline font-semibold text-brand-500">
            Contacte-moi
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
