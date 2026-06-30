'use client';

import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#product', label: 'Product' },
  { href: '#faq', label: 'FAQ' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-leaf-700/10 bg-cream-50/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-700 text-cream-50">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-leaf-900 sm:text-2xl">
            BIOTERP
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-leaf-900/80 transition hover:text-leaf-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#product" className="hidden btn-primary lg:inline-flex">
          Get my BIOTERP now
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-leaf-700/20 bg-white/70 text-leaf-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-leaf-700/10 bg-cream-50 lg:hidden">
          <div className="container-x flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-leaf-900 hover:bg-cream-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#product"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get my BIOTERP now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
