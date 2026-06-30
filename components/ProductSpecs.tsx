import { Droplet, FlaskConical, Leaf } from 'lucide-react';

const specs = [
  { icon: Droplet, label: 'Volume', value: '30ml', sub: '1 fl oz · ~600 drops' },
  { icon: FlaskConical, label: 'CBD Concentration', value: '6000mg', sub: 'Full spectrum, high potency' },
  { icon: Leaf, label: 'THC Content', value: '0.2%', sub: 'Within legal limit' }
];

export default function ProductSpecs() {
  return (
    <section className="container-x -mt-10 sm:-mt-14">
      <div className="rounded-3xl border border-leaf-700/10 bg-white/90 p-6 shadow-card backdrop-blur sm:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {specs.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-start gap-4 rounded-2xl border border-leaf-700/5 bg-cream-50/60 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf-700 text-cream-50">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-leaf-700/70">
                    {s.label}
                  </div>
                  <div className="mt-1 font-display text-3xl font-bold text-leaf-900">{s.value}</div>
                  <div className="mt-1 text-sm text-leaf-900/70">{s.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
