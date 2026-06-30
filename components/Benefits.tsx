import { HeartPulse, Moon, Sparkles, Shield, Smile, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: HeartPulse,
    title: 'Anxiety Reduction',
    tag: 'CBD + CBG + Linalool',
    desc: 'Helps soothe the nervous system to bring a calmer, steadier mood.'
  },
  {
    icon: Moon,
    title: 'Sleep Improvement',
    tag: 'Myrcene',
    desc: 'Supports relaxation so you can wind down naturally at the end of the day.'
  },
  {
    icon: Sparkles,
    title: 'Pain Relief',
    tag: 'Beta-caryophyllene',
    desc: 'Targets discomfort and inflammation through the body\u2019s own pathways.'
  },
  {
    icon: Shield,
    title: 'Natural Protection',
    tag: 'Antibacterial · Antiviral',
    desc: 'Plant compounds that contribute to your overall daily defense.'
  },
  {
    icon: Smile,
    title: 'Emotional Balance',
    tag: 'CBD + CBG + Limonene',
    desc: 'Promotes a clear, positive headspace throughout the day.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="container-x py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow mx-auto">Therapeutic benefits</span>
        <h2 className="section-title mt-5">Designed for everyday balance</h2>
        <p className="section-sub mx-auto">
          A full-spectrum formulation delivering the entourage effect — multiple plant compounds
          working together to support your body and mind.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <article
              key={b.title}
              className="group flex flex-col rounded-3xl border border-leaf-700/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-leaf-700/30 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700 transition group-hover:bg-leaf-700 group-hover:text-cream-50">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-leaf-900">
                {b.title}
              </h3>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-leaf-700/70">
                {b.tag}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-leaf-900/70">{b.desc}</p>
              <a
                href="#product"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-700 hover:text-leaf-900"
              >
                Try Now <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
