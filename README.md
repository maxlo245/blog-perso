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

Le site est déployé automatiquement sur **GitHub Pages** via GitHub Actions
(`.github/workflows/deploy.yml`) à chaque push sur `main` :

1. Le workflow installe les dépendances, build le site en export statique
   (`GITHUB_PAGES=true npm run build`, ce qui active le `basePath`/`assetPrefix` adaptés à GitHub
   Pages dans `next.config.ts`), puis publie le contenu du dossier `out/` via
   `actions/deploy-pages`.
2. Active GitHub Pages sur le repo avec la source **GitHub Actions** (Settings → Pages → Build and
   deployment → Source: GitHub Actions).
3. Le site sera disponible à `https://<owner>.github.io/blog-perso/`.

### Alternative : déployer sur Vercel

Si tu préfères un hébergement avec rendu serveur (SSR/ISR) plutôt que l'export statique, ce projet
reste 100% compatible avec [Vercel](https://vercel.com), créateur de Next.js :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maxlo245/blog-perso)

Il suffit de retirer `output: 'export'` de `next.config.ts` si tu utilises Vercel, puis de
connecter le repo sur [vercel.com/new](https://vercel.com/new).

## Structure

- `src/app/` — pages (App Router) : accueil, `livre-dor`, `contact`, `playlists`, `categories`
  (+ sous-catégories), `app-vrchat`.
- `src/components/` — composants partagés : `Header`, `Footer`, `SocialLinks`, `CustomAudioPlayer`.

## Réseaux sociaux & don

Les liens vers les réseaux sociaux sont centralisés dans `src/components/SocialLinks.tsx`. Le lien
de don mis en avant (`https://guns.lol/maxlo24`) apparaît sur la page d'accueil et dans le footer.
