import Image from "next/image";

const programs = [
  {
    title: "Languages",
    body: "English, French, Spanish, German, Italian, Arabic, translation and communication practice.",
  },
  {
    title: "Digital + AI",
    body: "AI tools for students, digital marketing, social media, platforms, productivity, and technical fluency.",
  },
  {
    title: "Employability",
    body: "CV writing, interviews, public speaking, leadership, teamwork, and professional confidence.",
  },
  {
    title: "Entrepreneurship",
    body: "Startup development, innovation workshops, grants, events, networks, and project thinking.",
  },
];

const stats = [
  { value: "3", label: "pilot tracks" },
  { value: "10+", label: "competitors mapped" },
  { value: "1", label: "campus beachhead" },
  { value: "4", label: "growth phases" },
];

const phases = [
  "Validate with free and low-cost workshops",
  "Convert demand into paid cohorts",
  "Launch the platform MVP around real usage",
  "Expand through partners, certificates, and new campuses",
];

const competitors = [
  "GOMYCODE",
  "Beeform",
  "Dawarate",
  "CNFEPD",
  "UNICOM",
  "TKAWEN",
  "Classe Passerelle",
  "Performa",
];

export default function IGSTALandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#06111f] text-white">
      <section className="relative px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,#06111f_0%,#0f1f3a_52%,#06111f_100%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
              <span className="h-2 w-2 rounded-full bg-teal-300" />
              Startup Lab Ready • Algeria EdTech
            </div>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              IGSTA turns university students into job-ready global talent.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              The International Global Skills Training Academy is a campus-first academy and digital platform for languages, employability, AI skills, entrepreneurship, and certified training pathways.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#mvp" className="rounded-full bg-teal-400 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300">
                Explore the MVP
              </a>
              <a href="#strategy" className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10">
                View strategy
              </a>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-teal-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
              <Image
                src="/igsta/hero-students.jpg"
                alt="IGSTA students collaborating in a modern university training room"
                width={1400}
                height={788}
                priority
                className="h-auto w-full rounded-[1.45rem] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-teal-200">University launchpad → skills community → scalable app-supported academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <div className="text-3xl font-black text-teal-300">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="mvp" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-300">Focused first offer</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Start with proof, not a bloated app.</h2>
            <p className="mt-5 max-w-2xl text-slate-300">
              IGSTA should validate demand through three paid learning tracks before expanding into a full platform. The app should organize proven operations: course catalog, registration, QR attendance, feedback, trainer profiles, certificates, and dashboards.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {programs.map((program) => (
                <div key={program.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{program.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-8 rounded-full bg-teal-400/25 blur-3xl" />
            <Image
              src="/igsta/app-mockup.jpg"
              alt="IGSTA Academy mobile app mockup"
              width={900}
              height={1600}
              className="relative rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50"
            />
          </div>
        </div>
      </section>

      <section id="strategy" className="bg-slate-950/55 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-300">Honest positioning</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Competition exists. The niche is campus-first trust.</h2>
            <p className="mt-5 text-slate-300">
              Algeria already has e-learning and training players. IGSTA wins by being the student-first university launchpad: low-cost, community-led, blended offline/online, partner-backed, and focused on employability outcomes.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {competitors.map((name) => (
              <span key={name} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-300">
                {name}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-teal-300/20 bg-teal-300/10 p-7">
              <h3 className="text-2xl font-black text-teal-100">Differentiation</h3>
              <p className="mt-3 text-sm leading-6 text-teal-50/80">Not just courses: campus acquisition, community, trainer network, certificates where legally backed, and a scalable platform.</p>
            </div>
            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-7">
              <h3 className="text-2xl font-black text-amber-100">Risk</h3>
              <p className="mt-3 text-sm leading-6 text-amber-50/80">Avoid claiming university-recognized or medical certificates until written legal authorization and partners are secured.</p>
            </div>
            <div className="rounded-3xl border border-blue-300/20 bg-blue-300/10 p-7">
              <h3 className="text-2xl font-black text-blue-100">Startup Lab ask</h3>
              <p className="mt-3 text-sm leading-6 text-blue-50/80">Pilot authorization, professor supervision, a small training room, digital equipment, and access to credible partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-300">Execution roadmap</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white">Four phases to become a real EdTech startup.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {phases.map((phase, index) => (
                <div key={phase} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </div>
                  <p className="text-lg font-bold text-white">{phase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-teal-400 to-cyan-300 p-8 text-slate-950 shadow-2xl shadow-teal-950/30 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-800/70">IGSTA Academy</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">From university club to scalable Algerian skills platform.</h2>
              <p className="mt-4 max-w-2xl text-slate-800">A credible Startup Lab story: narrow the beachhead, prove paid demand, secure legal certificate partners, then scale with software.</p>
            </div>
            <a href="mailto:contact@igsta.academy" className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-slate-800">
              Partner with IGSTA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
