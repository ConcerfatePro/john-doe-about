import { useState } from "react";
import { MOCK_PROJECTS } from "./data/mockProjects.js";

export default function App() {
  const [filter, setFilter] = useState("All");

  const tags = ["All", ...new Set(MOCK_PROJECTS.map((p) => p.tag))];
  const projects =
    filter === "All" ? MOCK_PROJECTS : MOCK_PROJECTS.filter((p) => p.tag === filter);

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <header className="border-b border-stone-200 bg-[#faf7f2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-red-900/80 bg-red-950 font-serif text-lg font-bold text-[#faf7f2]">
              JD
            </div>
            <div>
              <p className="font-serif text-lg font-semibold tracking-tight text-stone-900">John Doe</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-900/80">Fictional person · demo site</p>
            </div>
          </div>
          <nav className="hidden text-sm font-semibold text-stone-600 sm:flex sm:gap-8">
            <a href="#about" className="hover:text-red-900">
              About
            </a>
            <a href="#projects" className="hover:text-red-900">
              Projects
            </a>
            <a href="#timeline" className="hover:text-red-900">
              Path
            </a>
            <a href="#contact" className="hover:text-red-900">
              Hello
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[220px_1fr]">
        <aside className="hidden border-r border-stone-200 bg-[#f3ece4] lg:block">
          <div className="sticky top-0 flex min-h-screen flex-col justify-between p-6">
            <div>
              <p className="font-serif text-xs italic leading-relaxed text-stone-600">
                &ldquo;I like interfaces that feel like correspondence — margins, ink, and room to breathe.&rdquo;
              </p>
            </div>
            <p className="font-serif text-4xl font-light tracking-[0.2em] text-stone-300 [writing-mode:vertical-rl]">
              hello
            </p>
          </div>
        </aside>

        <main id="main" className="px-4 py-12 sm:px-10 sm:py-16">
          <section className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-red-900/70">Portwell, OR · demo locale</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
              I&apos;m John — I build small, serious web things.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-stone-700 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-red-900">
              This page is a personal-about template dressed up as a real human. I work at the intersection of tidy React code
              and slightly stubborn typography. When I&apos;m not shipping demos, I&apos;m sketching map UIs, reading about
              civic tech, or refining keyboard shortcuts nobody asked for.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 border-y border-stone-200 py-6">
              <span className="rounded-sm bg-stone-900 px-3 py-1 text-xs font-semibold text-[#faf7f2]">Frontend</span>
              <span className="rounded-sm border border-stone-400 px-3 py-1 text-xs font-semibold text-stone-700">Design-ish</span>
              <span className="rounded-sm border border-stone-400 px-3 py-1 text-xs font-semibold text-stone-700">Maps (pretend)</span>
            </div>
          </section>

          <section id="about" className="scroll-mt-20 mt-20 max-w-2xl">
            <h2 className="font-serif text-2xl font-semibold text-stone-900">About this mock</h2>
            <p className="mt-4 leading-relaxed text-stone-700">
              Replace every fact here with your own: schools, pets, playlists, the name of your rubber duck. The layout is
              intentionally editorial — serif headlines, warm paper, and a rail that whispers instead of shouting like a SaaS
              navbar.
            </p>
          </section>

          <section id="projects" className="scroll-mt-20 mt-20">
            <div className="flex flex-col gap-4 border-b border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-stone-900">Selected mock projects</h2>
                <p className="mt-2 max-w-xl text-sm text-stone-600">
                  Each row is fiction for portfolio layout. Filter chips only affect this list in memory.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilter(t)}
                    className={`border px-3 py-1 text-xs font-bold uppercase tracking-wider transition ${
                      filter === t ? "border-red-900 bg-red-900 text-[#faf7f2]" : "border-stone-300 bg-white text-stone-600 hover:border-red-900/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <ol className="mt-8 space-y-0 border-t border-stone-900">
              {projects.map((p, i) => (
                <li key={p.id} className="grid gap-4 border-b border-stone-200 py-8 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm font-bold text-red-900/60">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-serif text-xl font-semibold text-stone-900">{p.title}</h3>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">{p.year}</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-red-900/80">
                      {p.role} · {p.stack}
                    </p>
                    <p className="mt-3 leading-relaxed text-stone-700">{p.summary}</p>
                    <span className="mt-3 inline-block border border-dashed border-stone-400 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-stone-500">
                      {p.tag}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            {projects.length === 0 && <p className="py-8 text-sm text-stone-500">Nothing tagged that way — reset filters.</p>}
          </section>

          <section id="timeline" className="scroll-mt-20 mt-20 max-w-2xl">
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Path (illustrative)</h2>
            <ul className="mt-6 border-l-2 border-red-900/30 pl-6">
              {[
                { when: "2024", what: "Senior UI engineer — Nimbus Desk (fictional)" },
                { when: "2021", what: "Frontend at Harbor Studio — marketing + product" },
                { when: "2018", what: "B.A. Interactive Media — Northwind College (demo)" },
              ].map((row) => (
                <li key={row.when} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-red-900 bg-[#faf7f2]" />
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-red-900/70">{row.when}</p>
                  <p className="mt-1 text-stone-800">{row.what}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="contact" className="scroll-mt-20 mt-20 max-w-xl border-2 border-dashed border-stone-400 bg-white/60 p-6">
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Say hello</h2>
            <p className="mt-2 text-sm text-stone-600">
              john.doe@example.demo — placeholder inbox. Form is decorative; nothing is sent.
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your name" className="w-full border-b-2 border-stone-300 bg-transparent py-2 text-sm outline-none focus:border-red-900" />
              <input type="email" placeholder="Email" className="w-full border-b-2 border-stone-300 bg-transparent py-2 text-sm outline-none focus:border-red-900" />
              <textarea rows={3} placeholder="A note" className="w-full border-b-2 border-stone-300 bg-transparent py-2 text-sm outline-none focus:border-red-900" />
              <button type="submit" className="mt-2 bg-stone-900 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#faf7f2] transition hover:bg-red-950">
                Send (mock)
              </button>
            </form>
          </section>

          <footer className="mt-20 border-t border-stone-200 pt-8 text-center font-mono text-[10px] uppercase tracking-widest text-stone-500">
            © {new Date().getFullYear()} John Doe — fictional demo · swap every detail
          </footer>
        </main>
      </div>
    </div>
  );
}
