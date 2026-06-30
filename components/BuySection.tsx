import { Check, Globe2, ShieldCheck, Truck } from 'lucide-react';
import BottleSVG from './BottleSVG';

const trust = [
  { icon: ShieldCheck, label: 'Made in USA' },
  { icon: Globe2, label: 'Worldwide delivery' },
  { icon: Truck, label: 'Fast tracked shipping' }
];

const bullets = [
  'Full-spectrum hemp extract with naturally occurring terpenes',
  'Within the 0.2% THC legal limit — no psychoactive effects',
  'Third-party tested for purity and potency',
  'Produced under FDA cGMP standards by Sawyer Labs (USA)'
];

export default function BuySection() {
  return (
    <section id="product" className="container-x py-20 sm:py-28">
      <div className="overflow-hidden rounded-[2rem] border border-leaf-700/10 bg-white shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center justify-center bg-hero-radial p-10 sm:p-16">
            <div className="absolute inset-0 -z-10 opacity-60">
              <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-leaf-300/40 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cream-300/50 blur-3xl" />
            </div>
            <div className="relative h-[420px] w-[270px] sm:h-[520px] sm:w-[340px]">
              <div className="absolute inset-x-10 bottom-8 h-10 rounded-full bg-leaf-950/30 blur-2xl" />
              <BottleSVG className="bottle-shadow relative h-full w-full" />
            </div>
          </div>

          <div className="p-8 sm:p-12 lg:p-14">
            <span className="eyebrow">Premium Tincture</span>
            <h2 className="mt-4 font-display text-3xl text-leaf-900 sm:text-4xl">
              BIOTERP Full Spectrum CBD Tincture
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">30 ml</span>
              <span className="rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">6000 mg CBD</span>
              <span className="rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">0.2% THC</span>
            </div>

            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-leaf-900/80 sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf-700" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-end gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-leaf-700/70">
                  Price
                </div>
                <div className="font-display text-5xl font-bold text-leaf-900">$60.00</div>
                <div className="text-xs text-leaf-900/60">USD · Free shipping over $80</div>
              </div>
              <a href="#" className="btn-gold flex-1 justify-center sm:flex-none">
                Buy Now — $60.00
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-4 border-t border-leaf-700/10 pt-6">
              {trust.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.label} className="flex items-center gap-2 text-xs font-semibold text-leaf-900/80">
                    <Icon className="h-4 w-4 text-leaf-700" />
                    {t.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
