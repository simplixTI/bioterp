'use client';

import { Leaf, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
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
    <footer className="bg-leaf-950 text-cream-100/80">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50 text-leaf-900">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold text-cream-50">BIOTERP</span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Premium full-spectrum CBD tincture, crafted in the USA. Designed to support
              balance, restful sleep, and everyday wellbeing.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="mt-6 flex max-w-md gap-2 rounded-full border border-cream-50/15 bg-cream-50/5 p-1"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-cream-50 placeholder:text-cream-100/50 focus:outline-none"
              />
              <button className="btn-gold !py-2.5" type="submit">
                {done ? 'Subscribed' : 'Join'}
                {!done && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cream-50/10 px-3 py-1 text-xs font-semibold text-cream-100">
                Premium American Quality
              </span>
              <span className="rounded-full bg-cream-50/10 px-3 py-1 text-xs font-semibold text-cream-100">
                Lab Tested
              </span>
              <span className="rounded-full bg-cream-50/10 px-3 py-1 text-xs font-semibold text-cream-100">
                FDA Standards
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream-50">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-cream-50">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream-50">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-cream-50">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 text-cream-100 transition hover:bg-cream-50 hover:text-leaf-900"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} BIOTERP. All rights reserved. Manufactured by Sawyer Labs (Utah, USA).</p>
          <p className="max-w-md">
            Statements on this site have not been evaluated by the FDA. Not intended to diagnose,
            treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
