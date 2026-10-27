import { lazy, Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  profile, experience, certificates, skills, projects, capabilities, itYears,
} from "./data.js";

const Scene = lazy(() => import("./components/Scene.jsx"));

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const calm =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// A block that comes "alive" under the cursor: it lifts, zooms a little,
// leans towards the pointer and a soft light follows the mouse.
function Block({ as: Tag = "div", className = "", strength = 6, children, ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el || calm || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-6px) scale(1.03)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => ref.current && (ref.current.style.transform = "");
  return (
    <Tag ref={ref} className={`block ${className}`} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      <span className="block-light" aria-hidden="true" />
      {children}
    </Tag>
  );
}

const Download = () => (
  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12" /><path d="m6 11 6 6 6-6" /><path d="M5 20h14" /></svg>
);
const Arrow = () => (
  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);

const ICONS = {
  workflow: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M8 7.5 11 16" /><path d="M16 7.5 13 16" /></>,
  rap: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" /></>,
  odata: <><path d="M4 7h10" /><path d="m11 4 3 3-3 3" /><path d="M20 17H10" /><path d="m13 14-3 3 3 3" /></>,
  cds: <><ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" /><path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" /></>,
  interface: <><rect x="2.5" y="8" width="6" height="8" rx="1.5" /><rect x="15.5" y="8" width="6" height="8" rx="1.5" /><path d="M8.5 12h7" /><path d="m13 9.5 2.5 2.5-2.5 2.5" /></>,
  migrate: <><path d="M4 8a3 3 0 0 1 3-3h10" /><path d="m14 2 3 3-3 3" /><path d="M20 16a3 3 0 0 1-3 3H7" /><path d="m10 22-3-3 3-3" /></>,
};
const Icon = ({ name }) => (
  <span className="icon">
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[name] || ICONS.cds}</svg>
  </span>
);

function Nav() {
  const links = [
    ["work", "Work"],
    ["experience", "Experience"],
    ["skills", "Toolbox"],
    ...(projects.length ? [["projects", "Projects"]] : []),
    ["contact", "Contact"],
  ];
  return (
    <header className="nav">
      <nav aria-label="Primary" className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">{profile.name.split(" ").map((w) => w[0]).join("")}</span>
          <span className="logo-name">{profile.name}</span>
        </a>
        <div className="nav-links">
          {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          {profile.resume && (
            <a className="nav-resume" href={profile.resume} download>Résumé <Download /></a>
          )}
        </div>
      </nav>
    </header>
  );
}

function HeroStack() {
  const ref = useRef(null);
  const onMove = (e) => {
    if (calm || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--ry", `${-16 + x * 14}deg`);
    ref.current.style.setProperty("--rx", `${8 - y * 10}deg`);
  };
  const onLeave = () => {
    ref.current?.style.removeProperty("--ry");
    ref.current?.style.removeProperty("--rx");
  };
  return (
    <div className="stack-wrap" aria-hidden="true" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="stack-scene">
        <Suspense fallback={<div className="orb-fallback" />}>
          <Scene />
        </Suspense>
      </div>
      <div className="stack" ref={ref}>
        <div className="glass code-card float-a">
          <div className="code-bar">
            <i /><i /><i />
            <span>zcl_po_release.abap</span>
          </div>
          <pre>
<b>SELECT FROM</b> ekko{"\n"}
{"  "}<b>FIELDS</b> ebeln, lifnr, bedat{"\n"}
{"  "}<b>WHERE</b> bukrs = @lv_bukrs{"\n"}
{"  "}<b>INTO TABLE</b> @<em>DATA</em>(lt_po).{"\n\n"}
<b>LOOP AT</b> lt_po <b>INTO</b> <em>DATA</em>(ls_po).{"\n"}
{"  "}<small>" clean · testable · S/4-ready</small>{"\n"}
<b>ENDLOOP</b>.</pre>
        </div>
        <div className="glass years-card float-b">
          <div className="years">{itYears}<span> yrs</span></div>
          <p>in IT · Ford → Deloitte</p>
        </div>
        <div className="glass land-card float-a">
          <p className="mono-label">Landscape</p>
          <div className="land-row">
            <span>ECC</span><Arrow /><span className="accent">S/4HANA</span>
          </div>
          <div className="mini-tags">
            <span>RAP</span><span>OData</span><span>CDS</span><span>Fiori</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero wrap">
      <div className="hero-copy">
        <motion.span className="pill" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <i className="live-dot" /> {profile.role} · {profile.company}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}>
          {profile.headline} <span className="accent">{profile.headlineAccent}</span>
        </motion.h1>
        <motion.p className="tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {profile.tagline}
        </motion.p>
        <motion.div className="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          {profile.resume && <a className="btn primary" href={profile.resume} download><Download /> Download résumé</a>}
          <a className="btn" href="#work">See what I build <Arrow /></a>
        </motion.div>
      </div>
      <HeroStack />
    </section>
  );
}

function Stats() {
  if (!profile.stats) return null;
  return (
    <motion.section aria-label="At a glance" className="wrap stats-sec" {...reveal}>
      <dl className="stats glass">
        {profile.stats.map((s) => (
          <Block key={s.label} className="stat" strength={4}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </Block>
        ))}
      </dl>
    </motion.section>
  );
}

function SectionHead({ index, eyebrow, title, aside }) {
  return (
    <motion.div className="section-head" {...reveal}>
      <div>
        <span className="eyebrow">{index} — {eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {aside && <p>{aside}</p>}
    </motion.div>
  );
}

function Work() {
  return (
    <section id="work" className="wrap section">
      <SectionHead
        index="01" eyebrow="What I build"
        title="The back-end your Fiori apps quietly rely on."
        aside="From approval workflows to data services — built for S/4HANA, readable by the next developer."
      />
      <div className="cap-grid">
        {capabilities.map((c, i) => (
          <motion.div key={c.title} {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}>
            <Block as="article" className="glass card cap">
              <Icon name={c.icon} />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Block>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const VISIBLE_POINTS = 4;

function Points({ points }) {
  const [open, setOpen] = useState(false);
  const extra = points.length - VISIBLE_POINTS;
  const shown = open || extra <= 0 ? points : points.slice(0, VISIBLE_POINTS);
  return (
    <>
      <ul>{shown.map((p, j) => <li key={j}>{p}</li>)}</ul>
      {extra > 0 && (
        <button className="more" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Show less" : `Show ${extra} more`}
        </button>
      )}
    </>
  );
}

function Experience() {
  return (
    <section id="experience" className="wrap section">
      <SectionHead index="02" eyebrow="Experience" title={`From PL/SQL to S/4HANA — ${itYears} years and counting.`} />
      <div className="timeline">
        {experience.map((job, i) => (
          <motion.div key={i} className="tl-item" {...reveal}>
            <span className={`tl-dot ${job.current ? "now" : i === experience.length - 1 ? "first" : ""}`} aria-hidden="true" />
            <Block as="article" className="glass card job" strength={3}>
              <div className="job-meta">
                <span className="period">{job.period}</span>
                <h3>{job.company}</h3>
                <p className="role">{job.role}</p>
                {job.client && <p className="client">Client: {job.client}</p>}
                <div className="meta-row">
                  <span className="duration">{job.duration}</span>
                  {job.current && <span className="badge-now">Current</span>}
                </div>
              </div>
              <div className="job-body">
                {job.focus && <p className="focus">{job.focus}</p>}
                <Points points={job.points} />
                <div className="tags">{job.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            </Block>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="wrap section">
      <SectionHead index="03" eyebrow="Toolbox" title="What's in the transport." />
      {profile.core && (
        <div className="core">
          {profile.core.map((c, i) => (
            <motion.div key={c.name} {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.06 }}>
              <Block className="glass core-item">
                <strong>{c.name}</strong>
                <span>{c.note}</span>
              </Block>
            </motion.div>
          ))}
        </div>
      )}
      <div className="skill-groups">
        {Object.entries(skills).map(([group, list]) => (
          <motion.div key={group} {...reveal}>
            <Block className="glass card skill-group" strength={3}>
              <h3>{group}</h3>
              <div className="tags">{list.map((s) => <span key={s} className="tag big">{s}</span>)}</div>
            </Block>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="education" className="wrap section">
      <SectionHead index="04" eyebrow="Awards & education" title="Recognised along the way." />
      <div className="cert-grid">
        {certificates.map((c, i) => {
          const inner = (
            <Block className="glass card cert" strength={10} style={{ "--tint": c.accent }}>
              <div className="cert-top">
                <span className="cert-kind">{c.kind}</span>
                {c.date && <span className="cert-date">{c.date}</span>}
              </div>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
              {c.link && <span className="verify">Verify <Arrow /></span>}
            </Block>
          );
          return (
            <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
              {c.link ? <a href={c.link} target="_blank" rel="noreferrer">{inner}</a> : inner}
            </motion.div>
          );
        })}
        <motion.div {...reveal}>
          <Block className="card cert next">
            <div className="cert-top"><span className="cert-kind">Next up</span></div>
            <h3>SAP certification</h3>
            <p>In preparation</p>
          </Block>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  if (!projects.length) return null;
  return (
    <section id="projects" className="wrap section">
      <SectionHead index="05" eyebrow="Projects" title="Things I've built on my own." />
      <div className="cap-grid">
        {projects.map((p, i) => (
          <motion.div key={i} {...reveal}>
            <Block as="article" className="glass card project">
              <span className="badge-now">{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <div className="project-links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                {p.code && <a href={p.code} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {!p.live && !p.code && <span className="soon">Links coming soon</span>}
              </div>
            </Block>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="wrap contact-sec">
      <motion.div className="contact" {...reveal}>
        <span className="contact-ring" aria-hidden="true" />
        <span className="contact-moon" aria-hidden="true" />
        <div className="contact-copy">
          <h2>Need an ABAP developer who ships clean?</h2>
          <p>{profile.contactLine}</p>
        </div>
        <div className="contact-actions">
          <a className="btn light" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-row">
            {profile.linkedin && <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {profile.github && <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
          {profile.resume && <a className="btn ghost" href={profile.resume} download><Download /> Résumé (PDF)</a>}
        </div>
      </motion.div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">/nEX — thanks for visiting</span>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
