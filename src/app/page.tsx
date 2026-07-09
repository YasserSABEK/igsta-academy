"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Globe2,
  HeartPulse,
  Languages,
  Menu,
  MessageCircle,
  Mic2,
  Sparkles,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "English & Communication",
    description: "Speak with clarity, write professionally, and feel ready for interviews, presentations, and international opportunities.",
    modules: ["Professional English", "Public speaking", "Interview practice"],
    icon: Languages,
    color: "blue",
  },
  {
    title: "Digital & AI Skills",
    description: "Use modern tools to research, create, collaborate, and solve real problems—not just watch tutorials.",
    modules: ["Practical AI tools", "Digital productivity", "Content & marketing"],
    icon: BrainCircuit,
    color: "violet",
  },
  {
    title: "Career & Leadership",
    description: "Turn academic potential into workplace confidence through practical projects, teamwork, and career preparation.",
    modules: ["CV & career readiness", "Leadership", "Project teamwork"],
    icon: BriefcaseBusiness,
    color: "orange",
  },
  {
    title: "Health & Life Skills",
    description: "Build the personal habits, awareness, and resilience that help ambitious students perform sustainably.",
    modules: ["Healthy habits", "Stress awareness", "First-aid basics"],
    icon: HeartPulse,
    color: "teal",
  },
];

const steps = [
  { n: "01", title: "Choose your pathway", text: "Start with the skill gap that matters most to your study, work, or personal growth." },
  { n: "02", title: "Learn through practice", text: "Join guided workshops, real exercises, and peer learning—online and in person." },
  { n: "03", title: "Build proof", text: "Complete practical work that demonstrates what you can do, not only what you attended." },
  { n: "04", title: "Move forward", text: "Use your new confidence and skills for university, employment, entrepreneurship, and life." },
];

const faqs = [
  ["Who is IGSTA for?", "IGSTA is designed for university students, recent graduates, and ambitious young people in Algeria who want practical skills for education, work, and life."],
  ["Are programs online or in person?", "The academy is designed for blended learning: focused in-person workshops supported by useful online resources and community follow-up."],
  ["Do I need previous experience?", "No. Each pathway is structured to start from your current level and move toward practical, visible progress."],
  ["When does the next cohort begin?", "Cohort dates and registration details will be announced to the priority list first. Join below to receive the launch information."],
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark-light" : ""}`} aria-label="IGSTA Academy">
      <Image
        src="/android-chrome-192x192.png"
        alt=""
        width={44}
        height={44}
        className="brand-logo"
      />
      <span className="brand-wordmark">IGSTA</span>
    </span>
  );
}

function SectionIntro({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text: string; centered?: boolean }) {
  return (
    <motion.div {...reveal} className={centered ? "section-intro section-intro-centered" : "section-intro"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{text}</p>
    </motion.div>
  );
}

export default function IGSTALanding() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We could not complete your signup.");
      }

      form.reset();
      setStatus("success");
      setFormMessage("You’re on the priority list. We’ll send launch details as soon as enrollment opens.");
    } catch (error) {
      setStatus("error");
      setFormMessage(error instanceof Error ? error.message : "We could not complete your signup. Please try again.");
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo-link" aria-label="IGSTA home"><BrandMark /></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#programs">Programs</a>
            <a href="#method">How it works</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-primary button-small header-cta" href="#join">Join the next cohort <ArrowRight size={16} /></a>
          <a className="mobile-menu" href="#programs" aria-label="Open program navigation"><Menu size={22} /></a>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-wrap" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image src="/igsta/hero-brand.jpg" alt="" fill priority sizes="100vw" className="hero-image" />
          </div>
          <div className="hero-shade" />
          <div className="hero-ribbon hero-ribbon-one" />
          <div className="hero-ribbon hero-ribbon-two" />
          <div className="container hero-content">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="hero-copy">
              <div className="hero-kicker"><span className="live-dot" /> Algeria&apos;s practical skills academy</div>
              <h1 id="hero-title">Skills that move<br />you <span>forward.</span></h1>
              <p>IGSTA helps Algerian students and young professionals build the communication, digital, career, and life skills the real world demands.</p>
              <div className="hero-actions">
                <motion.a whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.98 }} className="button button-accent" href="#join">Join the next cohort <ArrowRight size={18} /></motion.a>
                <a className="button button-ghost" href="#programs">Explore programs</a>
              </div>
              <div className="hero-proof" aria-label="Program benefits">
                <span><Check size={15} /> Practice-first learning</span>
                <span><Check size={15} /> Blended experience</span>
                <span><Check size={15} /> Built for Algeria</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="promise-strip" aria-label="IGSTA promise">
          <div className="container promise-grid">
            <div><Globe2 /><span><strong>Local context</strong>Global ambition</span></div>
            <div><Users /><span><strong>Human learning</strong>Real trainers & peers</span></div>
            <div><Mic2 /><span><strong>Active practice</strong>Skills you can demonstrate</span></div>
            <div><BriefcaseBusiness /><span><strong>Career relevance</strong>Made for the next step</span></div>
          </div>
        </section>

        <section id="programs" className="section programs-section">
          <div className="container">
            <SectionIntro centered eyebrow="Learning pathways" title="One academy. Skills for the whole person." text="Clear pathways help you focus on what matters now while building a foundation that keeps paying off later." />
            <div className="program-grid">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }} className={`program-card card-${program.color}`} key={program.title}>
                    <div className="program-number">0{index + 1}</div>
                    <div className="program-icon"><Icon size={25} /></div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <ul>{program.modules.map((module) => <li key={module}><Check size={15} />{module}</li>)}</ul>
                    <a href="#join">Get cohort updates <ArrowRight size={16} /></a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="method" className="section method-section">
          <div className="container method-layout">
            <div className="method-visual">
              <Image src="/igsta/how-igsta-works.jpg" alt="IGSTA students learning practical skills together" fill sizes="(max-width: 900px) 100vw, 45vw" className="method-image" />
              <div className="method-quote"><Sparkles size={19} /><strong>Knowledge becomes power when you can use it.</strong></div>
            </div>
            <div className="method-content">
              <SectionIntro eyebrow="The IGSTA method" title="How IGSTA works" text="A simple journey designed around progress—not passive attendance." />
              <div className="steps-list">
                {steps.map((step) => (
                  <motion.div {...reveal} className="step" key={step.n}>
                    <span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section impact-section">
          <div className="container impact-grid">
            <motion.div {...reveal} className="impact-copy">
              <p className="eyebrow eyebrow-light">Our point of view</p>
              <h2>Built for Algeria.<br /><span>Ready for the world.</span></h2>
              <p>Talent is everywhere. Access to practical, relevant training is not. IGSTA exists to close that gap with learning that respects where students are—and expands where they can go.</p>
              <a href="#join" className="button button-light">Be first to hear about launch <ArrowRight size={17} /></a>
            </motion.div>
            <div className="impact-pillars">
              <div><span>01</span><h3>Practical over theoretical</h3><p>Every program is built around doing, feedback, and visible progress.</p></div>
              <div><span>02</span><h3>Accessible by design</h3><p>Clear pathways and blended delivery reduce barriers to participation.</p></div>
              <div><span>03</span><h3>Ambition without borders</h3><p>Local relevance meets communication and digital skills for a global future.</p></div>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <SectionIntro eyebrow="Good to know" title="Frequently asked questions" text="The essentials before you join the priority list." />
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<ChevronDown size={20} /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="join-section">
          <div className="container join-card">
            <div className="join-orbit" aria-hidden="true" />
            <motion.div {...reveal} className="join-copy">
              <p className="eyebrow eyebrow-light">Priority list now open</p>
              <h2>Join the next cohort</h2>
              <p>Get program dates, locations, pricing, and registration details as soon as enrollment opens.</p>
            </motion.div>
            <form className="signup-form" action="/api/signup" method="post" onSubmit={handleSignup}>
              <div className="signup-fields">
                <div className="signup-field">
                  <label htmlFor="signup-name">Your name</label>
                  <input id="signup-name" name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Full name" />
                </div>
                <div className="signup-field">
                  <label htmlFor="signup-email">Email address</label>
                  <input id="signup-email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" />
                </div>
                <div className="signup-honeypot" aria-hidden="true">
                  <label htmlFor="signup-website">Website</label>
                  <input id="signup-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
              </div>
              <button className="button button-accent signup-submit" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Joining…" : "Join the priority list"}
                {status !== "submitting" && <ArrowRight size={18} />}
              </button>
              <p className="signup-privacy"><MessageCircle size={15} /> No payment required. We’ll only use your details for IGSTA launch updates.</p>
              <p className={`signup-message ${status}`} aria-live="polite">
                {formMessage}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div><BrandMark light /><p>International Global Skills Training Academy<br />Algeria</p></div>
          <div className="footer-links"><a href="#programs">Programs</a><a href="#method">Method</a><a href="#about">About</a><a href="#faq">FAQ</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 IGSTA Academy</span><span>Learn. Practice. Move forward.</span></div>
      </footer>
    </div>
  );
}
