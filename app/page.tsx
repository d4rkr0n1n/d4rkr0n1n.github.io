"use client";

import { useState } from "react";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
const Spark = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /></svg>;

const work = [
  { title: "Cloud Platform", type: "AWS · Terraform · Kubernetes", year: "2024", className: "aster", mark: "CP" },
  { title: "Delivery Pipeline", type: "CI/CD · GitHub Actions · Docker", year: "2024", className: "moss", mark: "CI" },
  { title: "Observability Stack", type: "Prometheus · Grafana · Linux", year: "2023", className: "luma", mark: "OS" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <nav className="nav">
      <a className="wordmark" href="#top">mridul<span>roy</span></a>
      <div className={menuOpen ? "links active" : "links"}>
        <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <button className="menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
    </nav>

    <section className="hero" id="top">
      <div className="hero-intro"><span className="eyebrow"><Spark /> DevOps Engineer</span><span>(Building reliable systems / working worldwide)</span></div>
      <h1>Shipping software<br />with <em>confidence.</em></h1>
      <div className="hero-bottom"><p>I design reliable cloud infrastructure and delivery workflows that help engineering teams move faster, safely.</p><a className="round-link" href="#work" aria-label="See projects"><Arrow /></a></div>
      <div className="orb orb-one" /><div className="orb orb-two" />
    </section>

    <section className="work" id="work">
      <div className="section-head"><span className="index">01 / Selected projects</span><p>A selection of infrastructure and automation work built for teams that need to scale with confidence.</p></div>
      <div className="project-grid">
        {work.map((project) => <article className="project" key={project.title}>
          <div className={`project-visual ${project.className}`}><div className="visual-mark">{project.mark}</div><span className="view">Explore project <Arrow /></span></div>
          <div className="project-info"><div><h2>{project.title}</h2><p>{project.type}</p></div><span>{project.year}</span></div>
        </article>)}
      </div>
    </section>

    <section className="about" id="about">
      <span className="index">02 / About me</span>
      <div className="about-copy"><h2>I turn complex infrastructure into <em>calm, dependable</em> systems.</h2><p>I&apos;m Mridul Roy, a DevOps Engineer focused on automation, cloud platforms, and observability. I help teams build faster release cycles without compromising resilience.</p><a className="text-link" href="#contact">Let&apos;s connect <Arrow /></a></div>
      <div className="stamp">✦<br />BUILD<br />RUN<br />IMPROVE</div>
    </section>

    <section className="contact" id="contact">
      <span className="eyebrow"><Spark /> Have an infrastructure challenge?</span>
      <h2>Let&apos;s build systems<br /><em>that keep moving.</em></h2>
      <span className="email">Open to opportunities <Arrow /></span>
      <footer><span>© 2026 Mridul Roy</span><span>Built for reliability & scale</span><div><a href="#">GitHub</a><a href="#">LinkedIn</a></div></footer>
    </section>
  </main>;
}
