const projects = [
  {
    number: "01",
    title: "Aventure Alpine",
    type: "Site web",
    description:
      "Une expérience web immersive autour de l’alpinisme et des sports de montagne, pensée pour faire découvrir activités, conseils et destinations alpines.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Vite"],
    links: [
      { label: "Voir le site", href: "https://aventure-alpine.vercel.app/" },
      { label: "Code source", href: "https://github.com/maxlo245/Aventure-Alpine" },
    ],
  },
  {
    number: "02",
    title: "JavaStock",
    type: "Application desktop",
    description:
      "Une application de gestion de stock pour des épreuves sportives : articles, coureurs, réservations, alertes de stock et historique des opérations.",
    stack: ["Java 21", "Swing", "PostgreSQL", "JDBC", "Docker", "Maven"],
    links: [{ label: "Code source", href: "https://github.com/maxlo245/javastock" }],
  },
  {
    number: "03",
    title: "Maison des Ligues",
    type: "Mission de formation",
    description:
      "Une mission d’analyse et de développement dans le contexte d’une structure sportive régionale : étude des acteurs, des espaces et des besoins des ligues.",
    stack: ["Analyse", "Gestion de projet", "BTS SIO SLAM"],
    links: [
      {
        label: "Détails et livrables",
        href: "https://portofolio-bts-slam.vercel.app/projets.html",
      },
    ],
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
            <span><b>03</b> projets présentés</span>
            <span><b>02</b> expériences de stage</span>
            <a href="https://github.com/maxlo245" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>ML</span><i>✳</i></div>
      </section>

      <section id="projets" className="content-section">
        <div className="section-heading">
          <div><p className="eyebrow">Ce que je construis</p><h2>Projets sélectionnés</h2></div>
          <a className="text-link" href="https://github.com/maxlo245?tab=repositories" target="_blank" rel="noreferrer">
            Tous mes dépôts <Arrow />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="card-topline"><span>{project.number} / 03</span><span>{project.type}</span></div>
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
