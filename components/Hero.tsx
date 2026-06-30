import { Star, ArrowRight } from 'lucide-react';
import BottleSVG from './BottleSVG';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-leaf-300/40 blur-3xl" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-cream-300/50 blur-3xl" />
      </div>

      <div className="container-x grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
            Premium American Quality
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-leaf-900 sm:text-5xl lg:text-6xl">
            A new daily ritual with{' '}
            <span className="italic text-leaf-700">BIOTERP</span> full-spectrum CBD tincture
          </h1>

          <p className="mt-6 max-w-xl text-base text-leaf-900/75 sm:text-lg">
            Carefully formulated in the United States and tested at every stage. A clean,
            potent blend designed to support balance, restful sleep, and everyday wellbeing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#product" className="btn-gold">
              Order BIOTERP
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#benefits" className="btn-outline">
              Learn more
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-cream-50"
                  style={{
                    background:
                      i % 2
                        ? 'linear-gradient(135deg,#bedac1,#3f7f48)'
                        : 'linear-gradient(135deg,#ecdfba,#d4a73a)'
                  }}
                />
              ))}
            </div>
            <div className="text-sm text-leaf-900/80">
              <div className="flex items-center gap-1 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
                <span className="ml-1 font-semibold text-leaf-900">4.9</span>
              </div>
              <div className="text-xs">Trusted by thousands of customers</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[280px] sm:h-[520px] sm:w-[340px]">
            <div className="absolute inset-x-10 bottom-10 h-10 rounded-full bg-leaf-950/30 blur-2xl" />
            <BottleSVG className="bottle-shadow relative h-full w-full animate-float" />
          </div>
          <div className="absolute -right-2 top-4 hidden rounded-2xl border border-leaf-700/15 bg-white/80 px-4 py-3 text-xs font-semibold text-leaf-900 shadow-soft backdrop-blur sm:block">
            <div className="text-[10px] uppercase tracking-widest text-leaf-700/70">Concentration</div>
            <div className="mt-1 text-lg font-bold">6000 mg CBD</div>
          </div>
          <div className="absolute -left-2 bottom-12 hidden rounded-2xl border border-leaf-700/15 bg-white/80 px-4 py-3 text-xs font-semibold text-leaf-900 shadow-soft backdrop-blur sm:block">
            <div className="text-[10px] uppercase tracking-widest text-leaf-700/70">Volume</div>
            <div className="mt-1 text-lg font-bold">30 ml · 1 fl oz</div>
          </div>
        </div>
      </div>
    </section>
  );
}
