import { lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { profile, experience, certificates, skills, projects } from "./data.js";

const Scene = lazy(() => import("./components/Scene.jsx"));

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function Nav() {
  const links = ["experience", "certificates", "skills", "projects", "contact"];
  return (
    <nav className="nav">
      <a href="#top" className="logo">
        {profile.name.split(" ").map((w) => w[0]).join("")}
        <span>.</span>
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l} href={`#${l}`}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-canvas">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
      <div className="hero-content">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Hi, I'm
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
          {profile.name}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          {profile.role} <span className="at">@</span> {profile.company}
        </motion.h2>
        <motion.p className="tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          {profile.tagline}
        </motion.p>
        <motion.div className="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a className="btn primary" href="#experience">View my work</a>
          <a className="btn" href="#contact">Get in touch</a>
        </motion.div>
      </div>
      <a href="#experience" className="scroll-hint" aria-label="Scroll down"><span /></a>
    </header>
  );
}

function SectionTitle({ index, children }) {
  return (
    <motion.div className="section-title" {...reveal}>
      <span className="num">{index}</span>
      <h3>{children}</h3>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle index="01">Experience</SectionTitle>
      <div className="timeline">
        {experience.map((job, i) => (
          <motion.article key={i} className="job" {...reveal}>
            <div className="dot" />
            <div className="job-head">
              <div>
                <h4>{job.role}</h4>
                <p className="company">
                  {job.company}
                  {job.client && <span className="client"> · Client: {job.client}</span>}
                </p>
              </div>
              <span className="period">{job.period}</span>
            </div>
            <ul>
              {job.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
            <div className="tags">
              {job.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// Card that tilts in 3D following the mouse
function TiltCard({ cert, i }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateZ(10px)`;
    ref.current.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    ref.current.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => (ref.current.style.transform = "");
  const Inner = (
    <div ref={ref} className="cert" style={{ "--accent": cert.accent }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="cert-glow" />
      <div className="cert-badge">✦</div>
      <h4>{cert.title}</h4>
      <p className="issuer">{cert.issuer}</p>
      <div className="cert-foot">
        <span>{cert.date}</span>
        {cert.link && <span className="verify">Verify →</span>}
      </div>
    </div>
  );
  return (
    <motion.div className="cert-wrap" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
      {cert.link ? <a href={cert.link} target="_blank" rel="noreferrer">{Inner}</a> : Inner}
    </motion.div>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section">
      <SectionTitle index="02">Certificates</SectionTitle>
      <div className="cert-grid">
        {certificates.map((c, i) => <TiltCard key={i} cert={c} i={i} />)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle index="03">Skills</SectionTitle>
      <div className="skill-groups">
        {Object.entries(skills).map(([group, list]) => (
          <motion.div key={group} className="skill-group" {...reveal}>
            <h4>{group}</h4>
            <div className="tags">
              {list.map((s) => <span key={s} className="tag big">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle index="04">Projects</SectionTitle>
      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.article key={i} className="project" {...reveal}>
            <span className="status">{p.status}</span>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div className="tags">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            <div className="project-links">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
              {p.code && <a href={p.code} target="_blank" rel="noreferrer">GitHub ↗</a>}
              {!p.live && !p.code && <span className="soon">Links coming soon</span>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionTitle index="05">Contact</SectionTitle>
      <motion.div {...reveal}>
        <p className="contact-lead">Open to new opportunities and conversations about SAP and web development.</p>
        <a className="email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="socials">
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
          {profile.resume && <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>}
        </div>
      </motion.div>
      <footer>© {new Date().getFullYear()} {profile.name} · Built with React & Three.js</footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Experience />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
