import Image from 'next/image';
import { Check, Globe2, ShieldCheck, Truck, ArrowUpRight } from 'lucide-react';

const trust = [
  { icon: ShieldCheck, label: 'Made in USA' },
  { icon: Globe2, label: 'Worldwide delivery' },
  { icon: Truck, label: 'Free shipping over $80' }
];

const bullets = [
  'Full-spectrum hemp extract with naturally occurring terpenes',
  'Within the 0.2% THC legal limit — no psychoactive effects',
  'Independent third-party tested for purity and potency',
  'Produced under FDA cGMP standards by Sawyer Labs (USA)'
];

export default function BuySection() {
  return (
    <section id="product" className="container-x py-20 sm:py-28">
      <div className="overflow-hidden rounded-[2.25rem] border border-ink-900/10 bg-white shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product photo */}
          <div className="relative isolate flex items-center justify-center bg-gradient-to-br from-cream-50 via-cream-100 to-leaf-100 p-10 sm:p-16">
            <div className="absolute inset-0 -z-10 opacity-70 mix-blend-soft-light">
              <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-leaf-300/50 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold-400/30 blur-3xl" />
            </div>

            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-900 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-700" /> In stock
            </div>

            <div className="relative aspect-[3/4] w-full max-w-[420px]">
              <div className="absolute inset-x-12 bottom-8 h-16 rounded-full bg-ink-900/30 blur-2xl" />
              <Image
                src="/bottle-single.png"
                alt="BIOTERP CBD bottle"
                fill
                sizes="(min-width:1024px) 420px, 80vw"
                className="bottle-shadow object-contain"
              />
            </div>

            <div className="absolute bottom-6 right-6 rounded-2xl border border-gold-500/50 bg-gold-400 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-900 shadow-soft">
              6000 mg · 30 ml
            </div>
          </div>

          {/* Details */}
          <div className="p-8 sm:p-12 lg:p-14">
            <span className="eyebrow">Premium Tincture</span>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              BIOTERP Full Spectrum<br />
              <span className="italic text-leaf-700">CBD Tincture</span>
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">30 ml</span>
              <span className="rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">6000 mg CBD</span>
              <span className="rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">0.2% THC</span>
              <span className="rounded-full bg-gold-400/30 px-3 py-1 font-semibold text-leaf-900">Organic</span>
            </div>

            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-900/80 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-end gap-5 border-t border-ink-900/10 pt-6">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-900/60">
                  Price
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold leading-none text-ink-900">
                    $60
                  </span>
                  <span className="font-display text-2xl font-medium text-ink-900/50">.00</span>
                  <span className="text-xs uppercase tracking-widest text-ink-900/60">USD</span>
                </div>
                <div className="mt-1 text-xs text-ink-900/60">Free shipping over $80</div>
              </div>
              <a href="#" className="btn-ink flex-1 justify-center sm:flex-none">
                Buy Now — $60.00
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-5 border-t border-ink-900/10 pt-6">
              {trust.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 text-xs font-semibold text-ink-900/80"
                  >
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
