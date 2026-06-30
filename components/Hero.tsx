import Image from 'next/image';
import { Star, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 -z-10 opacity-70 mix-blend-soft-light">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-leaf-300/40 blur-[120px]" />
        <div className="absolute -right-32 top-60 h-[32rem] w-[32rem] rounded-full bg-gold-400/30 blur-[120px]" />
      </div>

      <div className="container-x relative grid grid-cols-1 items-center gap-12 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-24">
        {/* Copy column */}
        <div className="relative z-10 animate-fade-up lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="eyebrow">
              <Sparkles className="h-3 w-3" /> Full Spectrum · 6000 mg
            </span>
            <div className="rule" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-ink-900/60">
              Crafted in USA
            </span>
          </div>

          <h1 className="mt-7 font-display text-[2.6rem] font-medium leading-[0.98] tracking-[-0.025em] text-ink-900 sm:text-6xl lg:text-[5.25rem]">
            A daily ritual
            <span className="block italic text-leaf-700">for steady calm.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-900/70 sm:text-lg">
            Premium full-spectrum CBD tincture, carefully blended with organic carrier oils and
            naturally occurring terpenes. Made in America, third-party tested, and trusted by
            thousands.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#product" className="btn-ink">
              Order BIOTERP — $60
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#benefits" className="btn-outline">
              How it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-cream-50 ring-1 ring-ink-900/5"
                  style={{
                    background:
                      i % 2
                        ? 'linear-gradient(135deg,#86b8e6,#0e498f)'
                        : 'linear-gradient(135deg,#efe7d5,#bf9d5b)'
                  }}
                />
              ))}
            </div>
            <div className="text-sm text-ink-900/80">
              <div className="flex items-center gap-1 text-leaf-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-leaf-500 text-leaf-500" />
                ))}
                <span className="ml-1 font-semibold text-ink-900">4.9</span>
                <span className="text-ink-900/60">/ 5</span>
              </div>
              <div className="text-xs text-ink-900/60">
                Loved by 5,000+ customers worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Product column */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[640px]">
            {/* radial product backdrop */}
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-leaf-100 via-cream-50 to-cream-100" />
            <div className="absolute inset-x-8 bottom-10 -z-10 h-24 rounded-full bg-ink-900/30 blur-3xl" />

            <Image
              src="/bottles-trio.png"
              alt="BIOTERP CBD tincture — group of three bottles"
              fill
              priority
              sizes="(min-width:1024px) 640px, 90vw"
              className="bottle-shadow object-contain p-8 animate-float"
            />

            {/* floating spec cards */}
            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-ink-900/10 bg-white/85 px-4 py-3 text-xs font-semibold text-ink-900 shadow-soft backdrop-blur sm:block">
              <div className="text-[10px] uppercase tracking-[0.18em] text-leaf-700">Potency</div>
              <div className="mt-1 font-display text-xl font-bold leading-none">6000 mg</div>
              <div className="text-[10px] text-ink-900/60">CBD per bottle</div>
            </div>
            <div className="absolute -left-2 bottom-14 hidden rounded-2xl border border-ink-900/10 bg-white/85 px-4 py-3 text-xs font-semibold text-ink-900 shadow-soft backdrop-blur sm:block">
              <div className="text-[10px] uppercase tracking-[0.18em] text-leaf-700">Volume</div>
              <div className="mt-1 font-display text-xl font-bold leading-none">30 ml · 1 fl oz</div>
              <div className="text-[10px] text-ink-900/60">~600 drops</div>
            </div>
            <div className="absolute right-6 bottom-6 hidden rounded-full border border-gold-500/40 bg-gold-400 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-900 shadow-soft sm:inline-flex">
              0.2% THC · Legal
            </div>
          </div>

          {/* signature */}
          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-900/50">
            <span className="h-px w-8 bg-ink-900/20" />
            Sawyer Labs · Utah
            <span className="h-px w-8 bg-ink-900/20" />
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative border-y border-ink-900/10 bg-ink-900 py-4 text-cream-50">
        <div className="marquee flex gap-12 overflow-hidden whitespace-nowrap text-xs uppercase tracking-[0.34em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 animate-shimmer gap-12">
              <span>Full Spectrum</span><span>·</span>
              <span>6000 mg CBD</span><span>·</span>
              <span>0.2% THC</span><span>·</span>
              <span>Made in USA</span><span>·</span>
              <span>Lab Tested</span><span>·</span>
              <span>Third-Party Verified</span><span>·</span>
              <span>cGMP Certified</span><span>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
