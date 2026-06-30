'use client';

import Image from 'next/image';
import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const quick = [
  { label: 'About', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Product', href: '#product' },
  { label: 'FAQ', href: '#faq' }
];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Contact', href: '#' }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer className="relative isolate overflow-hidden bg-ink-900 text-cream-50/85">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-leaf-500 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-cream-50 p-3 inline-flex">
              <Image
                src="/logo.png"
                alt="Bioterp"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed">
              Premium full-spectrum CBD tincture, crafted in the USA. Designed to support
              balance, restful sleep, and everyday wellbeing.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="mt-7 flex max-w-md gap-2 rounded-full border border-cream-50/15 bg-cream-50/5 p-1"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-cream-50 placeholder:text-cream-50/40 focus:outline-none"
              />
              <button className="btn-gold !py-2.5" type="submit">
                {done ? 'Subscribed' : 'Join'}
                {!done && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>

            <div className="mt-7 flex flex-wrap items-center gap-2 text-[11px]">
              {['Premium American Quality', 'Lab Tested', 'FDA Standards', 'cGMP'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cream-50/15 bg-cream-50/5 px-3 py-1 font-semibold uppercase tracking-wider text-cream-50/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-1 transition hover:text-cream-50">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50">Legal</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-1 transition hover:text-cream-50">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/80 transition hover:bg-cream-50 hover:text-ink-900"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-[11px] text-cream-50/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} BIOTERP. All rights reserved. Manufactured by Sawyer Labs (Utah, USA).
          </p>
          <p className="max-w-md sm:text-right">
            Statements on this site have not been evaluated by the FDA. Not intended to diagnose,
            treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
