import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? 'bg-background/75 backdrop-blur-md'
          : 'bg-background/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="cursor-pointer text-xs font-medium uppercase tracking-[0.12em] text-foreground hover:text-foreground/70 transition-colors"
        >
          Nikolai Daelemans
        </a>

        {/* Center links — desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="cursor-pointer text-sm text-foreground/70 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded-sm min-h-[44px] flex items-center"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="cursor-pointer hidden sm:inline-flex bg-foreground text-background border border-foreground text-xs font-medium px-5 py-2.5 rounded-sm hover:bg-background hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background min-h-[44px] items-center"
          >
            Get in touch
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer sm:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-border px-6 py-4 space-y-1 bg-background">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="cursor-pointer block w-full text-left text-sm py-3 text-foreground/70 hover:text-foreground transition-colors min-h-[44px]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="cursor-pointer block w-full text-left text-sm py-3 font-medium text-foreground min-h-[44px]"
          >
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
}
