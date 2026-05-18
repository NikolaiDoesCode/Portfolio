import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const contactLinks = [
  { label: 'nikolai@daelemans-experts.eu', href: 'mailto:nikolai@daelemans-experts.eu' },
  { label: 'linkedin.com/in/nikolai-daelemans', href: 'https://linkedin.com/in/nikolai-daelemans' },
  { label: 'avantifai.com', href: 'https://avantifai.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="border-t border-border pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
          {/* Left */}
          <div className="reveal" style={{ transitionDelay: '0ms' }}>
            <h2 className="text-[28px] sm:text-[36px] font-semibold leading-tight text-foreground mb-4">
              Let's build something.
            </h2>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-sm">
              Open to remote contracts in AI engineering, infrastructure, or technical leadership.
            </p>
          </div>

          {/* Right */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="text-xs uppercase tracking-[0.12em] text-foreground/50 font-medium mb-6">
              Contact
            </div>
            <div className="divide-y divide-border">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between py-4 text-sm text-foreground/70 hover:text-foreground transition-colors group min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
