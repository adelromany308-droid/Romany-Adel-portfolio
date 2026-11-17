import { useEffect, useMemo, useState } from "react";
import portrait from "../romany-photo.png";
import { portfolioData as fallbackData } from "../shared/portfolio.js";

const filters = ["All", "React & Backend", "AI & NLP", "Machine Learning", "Data Engineering"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}

function App() {
  const [data, setData] = useState(fallbackData);
  const [apiStatus, setApiStatus] = useState("connecting");
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/portfolio")
      .then((response) => {
        if (!response.ok) throw new Error("Portfolio API is unavailable.");
        return response.json();
      })
      .then((payload) => {
        if (active && payload?.profile && Array.isArray(payload.projects)) {
          setData(payload);
          setApiStatus("online");
        }
      })
      .catch(() => {
        if (active) setApiStatus("offline");
      });

    return () => {
      active = false;
    };
  }, []);

  const projects = useMemo(() => {
    if (activeFilter === "All") return data.projects;
    return data.projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, data.projects]);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Romany Adel home">
          <span className="brand-mark">RA</span>
          <span>Romany Adel</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-shell">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className={apiStatus === "online" ? "status-dot online" : "status-dot"} />
              <span>{apiStatus === "online" ? "Portfolio API online" : "AI · React · Backend"}</span>
            </div>
            <p className="eyebrow">AI & Full-Stack Developer · Minya, Egypt</p>
            <h1>{data.profile.headline}</h1>
            <p className="hero-intro">{data.profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <Arrow /></a>
              <a className="button button-quiet" href="#contact">Get in touch</a>
            </div>
            <div className="hero-tech">
              <span>React</span><span>Node.js</span><span>Machine Learning</span><span>NLP</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Romany Adel">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-frame">
              <img src={portrait} alt="Romany Adel" />
            </div>
            <div className="floating-label label-top"><span>01</span> Build useful things</div>
            <div className="floating-label label-bottom"><span>02</span> Learn continuously</div>
            <div className="visual-glow" />
          </div>
          <a className="scroll-hint" href="#about"><span /> Scroll to explore</a>
        </section>

        <section id="about" className="section page-shell">
          <SectionHeading
            eyebrow="About"
            title="From intelligent models to polished products."
            description="I like working where data, useful interfaces, and practical engineering meet."
          />
          <div className="about-layout">
            <p className="about-lead">
              I'm an Artificial Intelligence student building practical projects across machine learning,
              NLP, data engineering, and full-stack web development. UniQueue brings that work together:
              a React experience backed by a Node.js and Express API.
            </p>
            <div className="about-facts">
              <div><span>Focus</span><strong>AI + Full-Stack</strong></div>
              <div><span>Location</span><strong>{data.profile.location}</strong></div>
              <div><span>Availability</span><strong>{data.profile.status}</strong></div>
              <div><span>API status</span><strong>{apiStatus === "online" ? "Connected" : "Using local content"}</strong></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-soft">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Capabilities"
              title="A practical, full-stack toolkit."
              description="The technologies below reflect the projects and training shown in this portfolio."
            />
            <div className="skill-grid">
              {data.skills.map((group, index) => (
                <article className="skill-card" key={group.name}>
                  <div className="skill-card-top"><span>0{index + 1}</span><span className="skill-mark">✳</span></div>
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                  <div className="tag-list">
                    {group.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section page-shell">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that connect the interface to the system."
            description="Explore a full-stack university application alongside AI, machine-learning, and data projects."
          />
          <div className="filter-row" role="group" aria-label="Filter projects by area">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-chip active" : "filter-chip"}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.featured ? "project-card featured" : "project-card"} key={project.name}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-flow" aria-hidden="true">
                  {(project.name === "UniQueue" ? ["React", "REST API", "MongoDB"] : project.stack.slice(0, 3)).map((item, index) => (
                    <span key={item}>{index > 0 && <i>→</i>}{item}</span>
                  ))}
                </div>
                <div className="project-content">
                  <p className="eyebrow">{project.subtitle}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
                  </div>
                  {project.href ? (
                    <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                      View project <Arrow />
                    </a>
                  ) : (
                    <span className="project-note">Training project</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-soft">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Experience"
              title="Learning by building and reviewing."
              description="Training and applied work that continue to shape my engineering practice."
            />
            <div className="timeline">
              {data.experience.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-marker" />
                  <div className="timeline-meta"><span>{item.date}</span><span>{item.organization}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="education-block">
              <p className="eyebrow">Education & training</p>
              <div className="education-grid">
                {data.education.map((item) => (
                  <article className="education-card" key={item.title}>
                    <span>{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.organization}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-shell contact-content">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Have a useful problem to solve?</h2>
              <p>I'm open to AI, React, backend, and data projects. Reach out and tell me what you're building.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href={"mailto:" + data.profile.email}>Email Romany <Arrow /></a>
              <a className="button button-quiet" href={data.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a className="button button-quiet" href={data.profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="brand" href="#top"><span className="brand-mark">RA</span><span>Romany Adel</span></a>
        <span>Built with React · Node.js · Vercel Functions</span>
        <span>© {new Date().getFullYear()} Romany Adel</span>
      </footer>
    </>
  );
}

export default App;
