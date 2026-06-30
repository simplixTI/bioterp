'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ShoppingBag } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#product', label: 'Product' },
  { href: '#faq', label: 'FAQ' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-cream-50/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Bioterp"
            width={140}
            height={32}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink-900/75 transition hover:text-ink-900"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-leaf-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#product" className="btn-ink">
            <ShoppingBag className="h-4 w-4" /> Buy now
          </a>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/70 text-ink-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/5 bg-cream-50 lg:hidden">
          <div className="container-x flex flex-col gap-2 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink-900 hover:bg-cream-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#product"
              onClick={() => setOpen(false)}
              className="btn-ink mt-2"
            >
              <ShoppingBag className="h-4 w-4" /> Buy now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
