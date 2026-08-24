# Mon Blog Perso

Blog personnel de Maxime, construit avec [Next.js](https://nextjs.org) 16 (App Router), React 19,
TypeScript et Tailwind CSS v4. Le site inclut un livre d'or, une page contact, des playlists,
des catégories (photos/vidéos/articles), un lecteur audio, un thème clair/sombre, une section
réseaux sociaux, une section don, et une page de présentation/téléchargement de l'app compagnon
**VRChat AI Companion**.

## Stack technique

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (design system basé sur des tokens CSS : couleurs de marque, neutres, dark mode)
- Export statique (`output: 'export'`) — aucune API route ni logique serveur n'est utilisée

## Développement

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Le site est exporté en statique dans le dossier `out/`.

## Lint

```bash
npm run lint
```

## Déploiement

Le site est hébergé sur **Vercel**, avec déploiement automatique à chaque push :

- **Production** : https://maxlo245-legendary-engine.vercel.app (le projet Vercel s'appelle
  `blog-perso`, sous le compte `maxlo245`).
- Le projet Vercel est connecté au dépôt GitHub `maxlo245/blog-perso` — chaque push sur une branche
  génère un déploiement de preview, et chaque push sur `main` déploie en production
  automatiquement (aucune action manuelle requise).
- Pour redéployer manuellement en local : `npx vercel --prod` (nécessite d'être connecté avec
  `npx vercel login`).
- Aucune variable d'environnement n'est requise : le site n'a ni API route ni logique serveur.

### Alternative : GitHub Pages

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) est aussi fourni pour déployer le site
en export statique (`output: 'export'`) sur **GitHub Pages**, si tu préfères cette option à la
place de Vercel :

1. Le workflow installe les dépendances, build le site en export statique
   (`GITHUB_PAGES=true npm run build`, ce qui active le `basePath`/`assetPrefix` adaptés à GitHub
   Pages dans `next.config.ts`), puis publie le contenu du dossier `out/` via
   `actions/deploy-pages`.
2. Active GitHub Pages sur le repo avec la source **GitHub Actions** (Settings → Pages → Build and
   deployment → Source: GitHub Actions).
3. Le site sera alors disponible à `https://<owner>.github.io/blog-perso/`.

Tu peux aussi importer le repo toi-même sur Vercel via ce bouton :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maxlo245/blog-perso)

## Structure

- `src/app/` — pages (App Router) : accueil, `livre-dor`, `contact`, `playlists`, `categories`
  (+ sous-catégories), `app-vrchat`.
- `src/components/` — composants partagés : `Header`, `Footer`, `SocialLinks`, `CustomAudioPlayer`.

## Réseaux sociaux & don

Les liens vers les réseaux sociaux sont centralisés dans `src/components/SocialLinks.tsx`. Le lien
de don mis en avant (`https://guns.lol/maxlo24`) apparaît sur la page d'accueil et dans le footer.
