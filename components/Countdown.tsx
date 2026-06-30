'use client';

import { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

function getTarget() {
  const t = new Date();
  t.setHours(t.getHours() + 23);
  t.setMinutes(t.getMinutes() + 45);
  t.setSeconds(t.getSeconds() + 27);
  return t.getTime();
}

export default function Countdown() {
  const [target, setTarget] = useState<number | null>(null);
  const [now, setNow] = useState<number>(0);

  useEffect(() => {
    setTarget(getTarget());
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, (target ?? 0) - now);
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);

  const cell = (n: number, label: string) => (
    <div className="flex w-20 flex-col items-center rounded-2xl border border-cream-50/20 bg-cream-50/10 px-4 py-4 sm:w-24 sm:py-5">
      <div className="font-display text-3xl font-bold text-cream-50 sm:text-4xl">
        {String(n).padStart(2, '0')}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-cream-100/80">
        {label}
      </div>
    </div>
  );

  return (
    <section className="bg-leaf-950">
      <div className="container-x py-14 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
          <Timer className="h-3.5 w-3.5" /> Limited time offer
        </span>
        <h3 className="mt-4 font-display text-2xl text-cream-50 sm:text-3xl">
          Save on your first BIOTERP order
        </h3>
        <div className="mt-7 flex justify-center gap-2 sm:gap-4">
          {cell(h, 'Hours')}
          {cell(m, 'Minutes')}
          {cell(s, 'Seconds')}
        </div>
      </div>
    </section>
  );
}
