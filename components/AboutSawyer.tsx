import { CheckCircle2 } from 'lucide-react';

const bullets = [
  'End-to-end production control from extraction to bottling',
  'Independent third-party testing on every production run',
  'Ethically sourced hemp grown to American agricultural standards',
  'Strict quality systems aligned with FDA cGMP guidelines'
];

export default function AboutSawyer() {
  return (
    <section id="about" className="bg-leaf-gradient text-cream-50">
      <div className="container-x grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cream-100" />
            About the manufacturer
          </span>

          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Sawyer Labs — a benchmark for American CBD craftsmanship
          </h2>

          <p className="mt-5 max-w-xl text-base text-cream-100/80 sm:text-lg">
            Based in Utah, Sawyer Labs pairs rigorous testing protocols with thoughtfully
            sourced ingredients and modern extraction equipment. The result is a consistent,
            premium product behind the BIOTERP promise of clean, dependable wellness.
          </p>

          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-cream-100/90 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cream-100" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-3xl border border-cream-50/15 bg-cream-50/10 p-6 backdrop-blur">
            <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-leaf-700 to-leaf-950 p-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-cream-100/70">
                  Facility
                </div>
                <div className="mt-2 font-display text-3xl">Sawyer Labs · UT</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '15+', l: 'Years experience' },
                  { v: '100%', l: 'Made in USA' },
                  { v: '3×', l: 'Lab tested' },
                  { v: 'cGMP', l: 'Certified' }
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-cream-50/10 p-4 backdrop-blur">
                    <div className="font-display text-2xl font-bold text-cream-50">{s.v}</div>
                    <div className="text-xs uppercase tracking-wider text-cream-100/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-gold-400 lg:block" />
          <div className="absolute -top-6 -right-6 hidden h-16 w-16 rounded-full bg-leaf-300 lg:block" />
        </div>
      </div>
    </section>
  );
}
