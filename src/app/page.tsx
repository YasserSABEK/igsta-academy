import Image from "next/image";

const tracks = [
  {
    title: "English for Employability",
    desc: "Job-ready communication, interviews, CV writing, and professional English that employers want.",
  },
  {
    title: "AI Tools for Students",
    desc: "Practical AI, productivity platforms, digital marketing, and technical fluency for the modern workplace.",
  },
  {
    title: "Public Speaking & Career",
    desc: "Confidence, presentations, leadership, teamwork, and professional readiness for your first role.",
  },
];

const steps = [
  { n: "01", title: "Join a cohort", desc: "Register for a 4-week structured track at your campus." },
  { n: "02", title: "Learn by doing", desc: "Attend blended workshops with experienced trainers." },
  { n: "03", title: "Get certified", desc: "Complete your track and earn a partner-backed certificate." },
];

export default function IGSTALanding() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            IGSTA
          </span>
          <a
            href="#join"
            className="cursor-pointer rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0F766E] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
          >
            Join waitlist
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-[var(--color-primary)]">
              Campus-first skills academy · Algeria
            </p>
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              From student to job-ready in one semester.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted)]" style={{ fontFamily: "'Crimson Text', serif" }}>
              IGSTA is a university-based academy that gives Algerian students the languages, digital skills, and professional confidence employers actually want.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#join"
                className="cursor-pointer rounded-lg bg-[var(--color-accent)] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#B45309] focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
              >
                Join the next cohort
              </a>
              <a
                href="#tracks"
                className="cursor-pointer rounded-lg border border-[var(--color-border)] bg-white px-7 py-3.5 text-center text-sm font-semibold text-[var(--color-foreground)] transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                View learning tracks
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-[var(--color-border)] bg-white px-6 py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-[var(--color-muted)]">
          <span>University-supervised</span>
          <span>Blended offline + online</span>
          <span>Partner-backed certificates</span>
          <span>Student-friendly pricing</span>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-primary)]">Learning tracks</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Three focused programs to start.
          </h2>
          <p className="mt-4 max-w-lg text-[var(--color-muted)]" style={{ fontFamily: "'Crimson Text', serif", fontSize: '1.1rem' }}>
            Each track is a 4-week blended program — real trainers, real practice, a certificate at the end. No fluff.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="rounded-xl border border-[var(--color-border)] bg-white p-7 transition-all duration-200 hover:border-[var(--color-secondary)] hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{track.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[var(--color-border)] bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-primary)]">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple path. Real results.
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n}>
                <span className="text-3xl font-bold text-[var(--color-secondary)]" style={{ fontFamily: "'EB Garamond', serif" }}>
                  {step.n}
                </span>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-primary)]">Who this is for</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for ambitious Algerian students.
            </h2>
            <ul className="mt-8 space-y-5 text-[var(--color-foreground)]">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>Students who want to graduate with real skills, not just a diploma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>Recent graduates preparing for their first job or interview</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>Anyone who needs better English, digital fluency, or public speaking confidence</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/igsta/hero-students.jpg"
              alt="IGSTA students in a training session"
              width={800}
              height={500}
              className="rounded-xl border border-[var(--color-border)] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="border-t border-[var(--color-border)] bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mt-4 text-[var(--color-muted)]" style={{ fontFamily: "'Crimson Text', serif", fontSize: '1.1rem' }}>
            The next cohort starts soon. Join the waitlist and be the first to know.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/213696699378?text=Hi%20IGSTA%2C%20I%20want%20to%20join%20the%20next%20cohort"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#B45309] focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
            >
              Message us on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-[var(--color-muted)]">Free to join. No commitment until you register for a track.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-sm font-semibold" style={{ fontFamily: "'EB Garamond', serif" }}>
            IGSTA Academy
          </span>
          <p className="text-xs text-[var(--color-muted)]">
            International Global Skills Training Academy · Algeria
          </p>
        </div>
      </footer>
    </div>
  );
}
