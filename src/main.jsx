import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const links = {
  aiCv: asset("Kedist_Shegute_AI_Graph_Systems_Engineer_CV.pdf"),
};

const languageTools = [
  ["Python", `${devicon}/python/python-original.svg`],
  ["Java", `${devicon}/java/java-original.svg`],
  ["C++", `${devicon}/cplusplus/cplusplus-original.svg`],
  ["JavaScript", `${devicon}/javascript/javascript-original.svg`],
  ["Dart", `${devicon}/dart/dart-original.svg`],
  ["PHP", `${devicon}/php/php-original.svg`],
];

const courseLinks = [
  ["Supervised Machine Learning", "https://coursera.org/share/b7106cf994ab5c0c3efb5bfd4743cfec"],
  ["Object-Oriented Design", "https://coursera.org/share/06085cf6ef4a2a20a1615620d5287aba"],
  ["Neural Networks and Deep Learning", "https://coursera.org/share/f3125b75cd813d2654900e0ed4719a27"],
  ["Mathematics for Machine Learning", "https://coursera.org/share/dc2f6d71ca97883f307382732d7ca177"],
];

const portfolio = {
    role: "AI & Graph Systems Engineer",
    eyebrow: "AI & Graph Systems Engineer · Graph Mining · LLM Systems",
    title: "Building AI systems that turn complex graphs into interpretable insight.",
    intro:
      "I build graph-based AI systems across knowledge graphs, neural subgraph mining, LLM interpretation, visual analytics, and deployable AI product interfaces. My project examples use scientific and plant data, but the tooling is domain-agnostic.",
    cvUrl: links.aiCv,
    cvLabel: "AI/Graph CV",
    identity:
      "UAE residency visa holder · twofour54 Software Developer license · Addis Ababa, Ethiopia",
    marquee: ["Knowledge graphs", "Neural graph mining", "LLM interpretation", "Graph analytics", "UAE work-ready"],
    systemsTitle: "AI systems from graph data to interpretation.",
    systemsIntro:
      "Neural mining, knowledge graphs, LLM-based pattern explanation, visual exploration, and AI applications built on production-aware backends.",
    timeline: ["NeuroGraph", "SPMiner", "BioCypher KG", "TFLink", "STRING PPI", "Coffee AI"],
    projects: [
      {
        title: "NeuroGraph AI Assistant",
        period: "iCog Labs",
        text:
          "Led an end-to-end AI platform for graph ingestion, neural motif mining, LLM-powered interpretation, interactive KG visualization, annotation workflows, and downloadable results.",
        chips: ["LLM interpretation", "Graph mining", "AI platform"],
        repo: "https://github.com/iCog-Labs-Dev/NeuroGraph-AI-Assistant",
      },
      {
        title: "Neural Subgraph Matcher Miner",
        period: "Rejuve.Bio · iCog Labs",
        text:
          "Worked with GNN-based neural subgraph matching and frequent subgraph mining inspired by NeuroMatch and SPMiner, including semantic label embeddings and interactive motif visualizations.",
        chips: ["GNNs", "SPMiner", "MiniLM"],
        repo: "https://github.com/rejuve-bio/neural-subgraph-matcher-miner",
      },
      {
        title: "Knowledge Graph Infrastructure & Analysis",
        period: "Rejuve.Bio · iCog Labs",
        text:
          "Built and analyzed knowledge graph infrastructure for a large scientific dataset, then used graph mining workflows to surface recurring graph motifs and relationship patterns.",
        chips: ["BioCypher", "Neo4j", "Graph analytics"],
        repo: "https://github.com/rejuve-bio/biocypher-kg",
      },
      {
        title: "Coffee Plant Disease Classification",
        period: "Final Year Project · 2023-2024",
        text:
          "Built an end-to-end plant disease classification workflow for coffee leaves, including dataset collection, labeling, model training, evaluation, API integration, and frontend delivery.",
        chips: ["Computer vision", "ML pipeline", "API"],
      },
      {
        title: "Campus PC Authentication",
        period: "Personal Project · 2023",
        text:
          "Flutter QR verification app for device ownership workflows, included here as practical product-building experience beyond research systems.",
        chips: ["Flutter", "QR codes", "Mobile"],
      },
      {
        title: "Lounge Management System",
        period: "Personal Project · 2022-2023",
        text:
          "Java Swing desktop application for inventory, ordering, and real-time order tracking.",
        chips: ["Java Swing", "Desktop", "Tracking"],
      },
    ],
    researchTitle: "Research and Analysis",
    researchIntro:
      "Graph-mining reports using scientific networks as the evaluation domain, with methods that apply to recurring structures in many graph datasets.",
    research: [
      {
        number: "20M edges",
        label: "Knowledge graph · 2026",
        title: "Large knowledge graph motif analysis",
        text:
          "Analyzed a large knowledge graph built from heterogeneous entity and relationship sources, using sampled neighborhoods to identify recurring graph structures.",
        metrics: ["150,619 nodes", "20,000 neighborhoods", "11,311 instances"],
      },
      {
        number: "503 instances",
        label: "TFLink · 2026",
        title: "Directed network hierarchy report",
        text:
          "Studied directed relationships to identify recurring hierarchical structures and convergence points in a dense network.",
        metrics: ["78,686 genes", "6,393,993 edges", "374 motif genes"],
      },
      {
        number: "14,877 instances",
        label: "STRING PPI · 2026",
        title: "Interaction network motif report",
        text:
          "Mapped structural patterns in a large interaction network, highlighting recurring modules and motif types.",
        metrics: ["53,356 proteins", "6,612,766 links", "18 motif types"],
      },
    ],
    skillGroups: [
      {
        title: "AI & Graph Mining",
        note: "GNN-style mining, semantic labels, graph search, and motif discovery.",
        tools: [
          ["TensorFlow", `${devicon}/tensorflow/tensorflow-original.svg`],
          ["Keras", `${devicon}/keras/keras-original.svg`],
          ["SPMiner", null, "SP"],
          ["NeuroMatch", null, "NM"],
          ["MiniLM", null, "ML"],
          ["R-GCN", null, "RG"],
        ],
      },
      {
        title: "Knowledge Graphs",
        note: "Graph modeling, graph databases, and multi-format KG output.",
        tools: [
          ["Neo4j", `${devicon}/neo4j/neo4j-original.svg`],
          ["BioCypher", null, "BC"],
          ["NetworkX", null, "NX"],
          ["MeTTa", null, "MT"],
          ["Prolog", null, "PL"],
          ["KGX", null, "KG"],
        ],
      },
      {
        title: "AI Backend",
        note: "APIs and deployment surfaces that make AI systems usable.",
        tools: [
          ["FastAPI", `${devicon}/fastapi/fastapi-original.svg`],
          ["Python", `${devicon}/python/python-original.svg`],
          ["Docker", `${devicon}/docker/docker-original.svg`],
          ["REST", null, "API"],
          ["CI/CD", null, "CI"],
          ["Linux", `${devicon}/linux/linux-original.svg`],
        ],
      },
      {
        title: "Applications",
        note: "Interfaces, ML applications, mobile apps, and product delivery.",
        tools: [
          ["React", `${devicon}/react/react-original.svg`],
          ["Flutter", `${devicon}/flutter/flutter-original.svg`],
          ["Node.js", `${devicon}/nodejs/nodejs-original.svg`],
          ["Java", `${devicon}/java/java-original.svg`],
          ["Vision", null, "CV"],
          ["LLMs", null, "AI"],
        ],
      },
    ],
    footerEyebrow: "Available for AI, graph AI, and knowledge graph roles",
    footerTitle: "Let’s make complex graphs easier to understand.",
    footerText:
      "Knowledge graph pipelines, neural graph mining, LLM pattern interpretation, visual analytics, plant disease classification, and deployable AI product interfaces.",
    footerRole: "AI & Graph Systems Engineer",
};

function currentPortfolio() {
  return portfolio;
}

function useVisibleSections() {
  const [active, setActive] = useState("systems");

  useEffect(() => {
    const sections = [...document.querySelectorAll("[data-section]")];
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    const track = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.65] }
    );

    sections.forEach((section) => {
      reveal.observe(section);
      if (section.id) track.observe(section);
    });

    requestAnimationFrame(() => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08) {
          section.classList.add("is-visible");
        }
      });
    });

    return () => {
      reveal.disconnect();
      track.disconnect();
    };
  }, []);

  return active;
}

function Header({ active }) {
  const navLinks = ["systems", "research", "lab", "contact"];

  const handleNav = (event, link) => {
    event.preventDefault();
    window.history.pushState(null, "", `#${link}`);
    if (link === "contact") {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      return;
    }
    document.querySelector(`#${link}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kedist Shegute Dimore home">
        <span>K</span>
        <strong>Kedist</strong>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            aria-current={active === link ? "true" : undefined}
            onClick={(event) => handleNav(event, link)}
          >
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ content }) {
  return (
    <section className="hero section-panel is-visible" id="top" data-section="top" aria-labelledby="hero-title">
      <div className="graph-stage" aria-hidden="true">
        <svg className="graph-lines" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
          <line className="graph-edge edge-one" x1="10" y1="34" x2="22" y2="20" />
          <line className="graph-edge edge-two" x1="22" y1="20" x2="44" y2="46" />
          <line className="graph-edge edge-three" x1="44" y1="46" x2="72" y2="31" />
          <line className="graph-edge edge-four" x1="72" y1="31" x2="88" y2="68" />
        </svg>
        {[1, 2, 3, 4, 5].map((n) => <span key={`n${n}`} className={`node n${n}`} />)}
      </div>

      <div className="hero-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id="hero-title">{content.title}</h1>
        <p className="intro">{content.intro}</p>
        <div className="hero-actions">
          <a className="button primary" href="#systems">Explore work</a>
          <a className="button ghost external-link" href={content.cvUrl} target="_blank" rel="noreferrer">{content.cvLabel}</a>
        </div>
      </div>

      <aside className="identity-card" aria-label="Kedist profile">
        <div className="profile-mark" aria-hidden="true">K</div>
        <div className="identity-copy">
          <p className="role">{content.role}</p>
          <h2>Kedist Shegute Dimore</h2>
          <p>{content.identity}</p>
        </div>
      </aside>
    </section>
  );
}

function Systems({ content }) {
  return (
    <section className="section system-section section-panel" id="systems" data-section="systems">
      <div className="section-kicker"><span>01</span></div>
      <div className="section-head">
        <h2>{content.systemsTitle}</h2>
        <p>{content.systemsIntro}</p>
      </div>

      <div className="work-grid">
        {content.projects.map((item) => (
          <article className="work-card" key={item.title}>
            <div className="work-card-top">
              <p className="case-label">{item.period}</p>
              {item.repo && <a className="repo-link" href={item.repo} target="_blank" rel="noreferrer">GitHub</a>}
            </div>
            <div className="work-card-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <div className="work-chips">
              {item.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="timeline-strip" aria-label="Career timeline">
        {content.timeline.map((item) => (
          <div key={item}>
            <span />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Research({ content }) {
  return (
    <section className="section research-section section-panel" id="research" data-section="research">
      <div className="section-kicker"><span>02</span></div>
      <div className="section-head">
        <h2>{content.researchTitle}</h2>
        <p>{content.researchIntro}</p>
      </div>
      <div className="research-board">
        {content.research.map((item) => (
          <article key={item.title}>
            <div className="research-number">{item.number}</div>
            <p className="case-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="metric-pills">
              {item.metrics.map((metric) => <span key={metric}>{metric}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="course-strip">
        <p className="case-label">Coursera coursework</p>
        <div>
          {courseLinks.map(([title, url]) => (
            <a key={title} href={url} target="_blank" rel="noreferrer">{title}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoTile({ tool }) {
  const [label, src, fallback] = tool;
  return (
    <span className={src ? "logo-tile" : "logo-tile text-logo"}>
      {src ? <img src={src} alt="" aria-hidden="true" /> : <b>{fallback}</b>}
      <small>{label}</small>
    </span>
  );
}

function Lab({ content }) {
  return (
    <section className="section lab-section section-panel" id="lab" data-section="lab">
      <div className="section-kicker"><span>03</span></div>
      <div className="lab-intro">
        <h2>{content.role} toolkit.</h2>
        <p>{content.skillGroups.map((group) => group.title).join(", ")}.</p>
      </div>

      <div className="toolkit-board">
        <article className="skill-card language-card">
          <div className="skill-card-head"><h3>Languages</h3></div>
          <p className="skill-tagline">Core languages for AI systems, backend services, automation, and product delivery.</p>
          <div className="language-grid">
            {languageTools.map((tool) => <LogoTile key={tool[0]} tool={tool} />)}
          </div>
        </article>

        {content.skillGroups.map((group) => (
          <article className="skill-card feature-skill" key={group.title}>
            <div className="skill-card-head"><h3>{group.title}</h3></div>
            <p className="skill-tagline">{group.note}</p>
            <div className="logo-cloud">
              {group.tools.map((tool) => <LogoTile key={tool[0]} tool={tool} />)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ content }) {
  return (
    <footer className="contact-section section-panel" id="contact" data-section="contact">
      <div className="footer-wave" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="eyebrow">{content.footerEyebrow}</p>
          <h2>{content.footerTitle}</h2>
          <p>{content.footerText}</p>
        </div>

        <nav className="footer-column" aria-label="Project links">
          <h3>Projects</h3>
          <a className="external-link" href="https://github.com/rejuve-bio/biocypher-kg" target="_blank" rel="noreferrer">BioCypher KG</a>
          <a className="external-link" href="https://github.com/rejuve-bio/neural-subgraph-matcher-miner" target="_blank" rel="noreferrer">Miner</a>
          <a className="external-link" href="https://github.com/iCog-Labs-Dev/NeuroGraph-AI-Assistant" target="_blank" rel="noreferrer">NeuroGraph</a>
        </nav>

        <nav className="footer-column" aria-label="Portfolio links">
          <h3>Explore</h3>
          <a href="#systems">Selected Projects</a>
          <a href="#research">Research</a>
          <a href="#lab">Toolkit</a>
          <a className="external-link" href={content.cvUrl} target="_blank" rel="noreferrer">{content.cvLabel}</a>
        </nav>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <a href="mailto:kedistkid723@gmail.com">kedistkid723@gmail.com</a>
          <a href="tel:+971521775993">+971 52 177 5993</a>
          <a href="tel:+251901946736">+251 901 946 736</a>
          <div className="footer-social" aria-label="Social links">
            <a className="external-link" href="https://github.com/kedistS" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img className="github-icon" src={`${devicon}/github/github-original.svg`} alt="" aria-hidden="true" />
            </a>
            <a className="external-link" href="https://www.linkedin.com/in/kedist-shegute-387a64287/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img className="linkedin-icon" src={`${devicon}/linkedin/linkedin-original.svg`} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Kedist Shegute Dimore</span>
        <span>UAE residency visa holder</span>
        <span>{content.footerRole}</span>
      </div>
    </footer>
  );
}

function App() {
  const active = useVisibleSections();
  const content = currentPortfolio();

  useEffect(() => {
    document.title = `Kedist Shegute Dimore | ${content.role}`;
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => {
      if (window.location.hash === "#contact") {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "auto" });
        return;
      }
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [content]);

  return (
    <>
      <Header active={active} />
      <main>
        <Hero content={content} />
        <section className="marquee" aria-label="Core strengths">
          {content.marquee.map((item) => <p key={item}>{item}</p>)}
        </section>
        <Systems content={content} />
        <Research content={content} />
        <Lab content={content} />
        <Contact content={content} />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
