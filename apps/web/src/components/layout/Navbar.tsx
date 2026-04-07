'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS } from '@novastream/config';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container-ns h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-violet rounded-lg flex items-center justify-center text-white font-black text-sm">
            N
          </div>
          <span className="text-lg font-black text-white tracking-tight hidden sm:block">
            NovaStream
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
            className="text-sm text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-gradient-to-r from-brand-blue to-brand-violet text-white px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur-md px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link href="/login" className="flex-1 text-center text-sm text-neutral-300 border border-neutral-700 py-2 rounded-lg">
              Sign In
            </Link>
            <Link href="/register" className="flex-1 text-center text-sm font-semibold bg-gradient-to-r from-brand-blue to-brand-violet text-white py-2 rounded-lg">
              Start Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
