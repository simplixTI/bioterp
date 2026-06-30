import { ShieldCheck, FlaskConical, BadgeCheck, Users } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'FDA Standards',
    desc: 'Produced under current Good Manufacturing Practices in a registered US facility.'
  },
  {
    icon: FlaskConical,
    title: 'Lab Tested',
    desc: 'Every batch screened by independent labs for purity, potency, and safety.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Certified',
    desc: 'Verified against strict American benchmarks before reaching your door.'
  },
  {
    icon: Users,
    title: 'Trusted by Thousands',
    desc: 'A growing community of customers who reorder month after month.'
  }
];

export default function Manufacturing() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow mx-auto">Quality you can verify</span>
        <h2 className="section-title mt-5">
          Manufactured by <span className="italic text-leaf-700">Sawyer Labs</span> in Utah, USA
        </h2>
        <p className="section-sub mx-auto">
          Each bottle is crafted in an American facility under tight quality controls, with
          independent testing and certified processes from start to finish.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="group rounded-2xl border border-leaf-700/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700 transition group-hover:bg-leaf-700 group-hover:text-cream-50">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-leaf-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-leaf-900/70">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
