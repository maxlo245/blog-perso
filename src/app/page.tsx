const projects = [
  {
    title: "JavaStock",
    type: "Application desktop · Java",
    description:
      "Application de gestion de stocks pour des épreuves sportives : articles, coureurs, réservations, alertes de rupture et historique des opérations.",
    stack: ["Java", "Swing", "PostgreSQL", "JDBC", "Maven"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/javastock" }],
  },
  {
    title: "Aventures Alpines",
    type: "Plateforme web · sports de montagne",
    description:
      "Plateforme pour découvrir ski, escalade, randonnée et VTT, avec des itinéraires, des articles et un parcours de réservation.",
    stack: ["JavaScript", "Node.js", "Vercel", "Render"],
    links: [
      { label: "Voir le site", href: "https://aventure-alpine.vercel.app/" },
      { label: "Code source", href: "https://github.com/maxlo245/Aventure-Alpine" },
    ],
  },
  {
    title: "Discord Bot Manager",
    type: "Application web et mobile",
    description:
      "Projet multiplateforme pour gérer des bots et des serveurs Discord, structuré autour d’une API, d’une interface web, d’une application mobile et de types partagés.",
    stack: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Redis", "Expo"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/app-discord" }],
  },
  {
    title: "Bot Discord Rock & Metal",
    type: "Bot Discord · veille musicale",
    description:
      "Bot de veille qui rassemble actualités, sorties d’albums et nouveautés de groupes depuis plus de 40 flux et plusieurs plateformes musicales.",
    stack: ["JavaScript", "Discord", "RSS", "Spotify", "Last.fm"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/bot-discord-rock-metal" }],
  },
  {
    title: "Aéroport",
    type: "Projet web · PHP",
    description:
      "Projet PHP autour du thème aéroportuaire, conservé dans mes dépôts publics. Le dépôt pourra être enrichi d’une présentation et d’une documentation détaillées.",
    stack: ["PHP"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/aeroport" }],
  },
  {
    title: "Démineur",
    type: "Jeu · C++",
    description:
      "Projet C++ autour du jeu du démineur. Le dépôt public contient le code source du projet.",
    stack: ["C++"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/demineur" }],
  },
  {
    title: "Thyrio",
    type: "Projet web",
    description:
      "Projet web réalisé en HTML et publié en ligne. Le code source et la démonstration sont accessibles ci-dessous.",
    stack: ["HTML"],
    links: [
      { label: "Voir le site", href: "https://thyrio.vercel.app" },
      { label: "Code source", href: "https://github.com/maxlo245/thyrio" },
    ],
  },
  {
    title: "Mindmap RGPD & cybersécurité",
    type: "Ressource interactive · BTS SIO",
    description:
      "Carte mentale interactive pour réviser le RGPD et la cybersécurité : notions clés, exemples, vidéos et détails accessibles en sélectionnant les thèmes.",
    stack: ["HTML", "CSS", "JavaScript", "RGPD", "Cybersécurité"],
    links: [
      { label: "Voir la mindmap", href: "https://maxlo245.github.io/mindmap-SLAM/" },
      { label: "Code source", href: "https://github.com/maxlo245/mindmap-SLAM" },
    ],
  },
  {
    title: "AS Olympique Saint-Rémy",
    type: "Application pédagogique · PHP / MySQL",
    description:
      "Application de gestion utilisée pour un exercice de cybersécurité BTS SIO sur les failles OWASP et leurs contre-mesures. Ce projet est prévu pour un environnement local uniquement.",
    stack: ["PHP", "MySQL", "OWASP", "BTS SIO SLAM"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/As-olympique" }],
  },
  {
    title: "Maison des Ligues",
    type: "Mission de formation",
    description:
      "Mission d’analyse et de développement dans le contexte d’une structure sportive régionale : étude des acteurs, des espaces et des besoins des ligues.",
    stack: ["Analyse", "Gestion de projet", "BTS SIO SLAM"],
    links: [{ label: "Détails et livrables", href: "https://portofolio-bts-slam.vercel.app/projets.html" }],
  },
];

const internships: Array<{
  number: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  href?: string;
}> = [
  {
    number: "01",
    title: "Automatisation documentaire",
    organization: "Stage BTS SIO SLAM · Saint-Denis",
    description:
      "Développement de scripts Python pour automatiser l’extraction de références depuis des documents Word et leur traitement avec des tableaux Excel. L’objectif : fiabiliser les données et réduire les tâches répétitives.",
    tags: ["Python", "Word", "Excel", "Automatisation"],
  },
  {
    number: "02",
    title: "Site web d’Armoni Solutions",
    organization: "Armoni Solutions",
    description:
      "Conception et développement d’un site vitrine pour une entreprise qui accompagne les professionnels de l’événementiel et de la restauration.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    href: "https://www.armoni-solutions.fr/",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="portfolio-home">
      <section className="home-hero">
        <div className="hero-inner">
          <p className="eyebrow"><span className="status-dot" /> BTS SIO · option SLAM</p>
          <h1>Bonjour, moi c’est <span>Maxime.</span></h1>
          <p className="hero-copy">
            Étudiant et développeur, je conçois des applications et des sites web.
            Ici, je partage mes projets, ce que j’apprends et les coulisses de mon parcours.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projets">Découvrir mes projets <Arrow /></a>
            <a className="button button-quiet" href="https://portofolio-bts-slam.vercel.app/index.html" target="_blank" rel="noreferrer">
              Mon portfolio BTS SIO <Arrow />
            </a>
          </div>
          <div className="hero-meta">
          <span><b>{String(projects.length).padStart(2, "0")}</b> projets présentés</span>
            <span><b>02</b> expériences de stage</span>
            <a href="https://github.com/maxlo245" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>ML</span><i>✳</i></div>
      </section>

      <section id="projets" className="content-section">
        <div className="section-heading">
          <div><p className="eyebrow">Ce que je construis</p><h2>Mes projets</h2></div>
          <a className="text-link" href="https://github.com/maxlo245?tab=repositories" target="_blank" rel="noreferrer">
            Tous mes dépôts <Arrow />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="card-topline"><span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><span>{project.type}</span></div>
              <h3>{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <ul className="tag-list">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="card-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <Arrow /></a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stages" className="content-section internship-section">
        <div className="section-heading">
          <div><p className="eyebrow">Du concret en entreprise</p><h2>Mes stages</h2></div>
          <a className="text-link" href="https://portofolio-bts-slam.vercel.app/stage.html" target="_blank" rel="noreferrer">
            Le détail sur mon portfolio <Arrow />
          </a>
        </div>
        <div className="internship-list">
          {internships.map((internship) => (
            <article className="internship-card" key={internship.number}>
              <span className="internship-number">{internship.number}</span>
              <div className="internship-content">
                <p className="eyebrow">{internship.organization}</p>
                <h3>{internship.title}</h3>
                <p className="card-description">{internship.description}</p>
                <ul className="tag-list">
                  {internship.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              {internship.href && <a className="round-link" href={internship.href} target="_blank" rel="noreferrer" aria-label="Visiter le site d’Armoni Solutions"><Arrow /></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div>
          <p className="eyebrow">En quelques mots</p>
          <h2>Curieux, créatif,<br />toujours en train d’apprendre.</h2>
        </div>
        <div className="about-copy">
          <p>
            Je m’appelle Maxime Laurent et je suis étudiant en BTS SIO, option
            Solutions Logicielles et Applications Métiers. Je m’intéresse au
            développement web, à la programmation et aux nouvelles technologies.
          </p>
          <div className="about-links">
            <a href="https://portofolio-bts-slam.vercel.app/index.html" target="_blank" rel="noreferrer">Voir mon portfolio <Arrow /></a>
            <a href="https://github.com/maxlo245" target="_blank" rel="noreferrer">Me retrouver sur GitHub <Arrow /></a>
            <a href="/contact">Me contacter <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="blog-invite">
        <div><p className="eyebrow">À suivre</p><h2>Le blog, c’est aussi le quotidien.</h2>
          <p>Retrouve mes articles, mes playlists et laisse un mot dans le livre d’or.</p>
        </div>
        <div className="invite-links">
          <a className="button button-primary" href="/categories">Lire les articles <Arrow /></a>
          <a className="button button-quiet" href="/livre-dor">Livre d’or <Arrow /></a>
        </div>
      </section>
    </div>
  );
}
