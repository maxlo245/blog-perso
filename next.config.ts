import type { NextConfig } from "next";

// Le site est déployé en export statique sur GitHub Pages (voir .github/workflows/deploy.yml).
// GitHub Pages sert le repo sous /blog-perso, on ajoute donc un basePath uniquement en CI.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "blog-perso";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
