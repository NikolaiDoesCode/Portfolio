import React from 'react';
import { ArrowDown } from 'lucide-react';

const stats = [
  { value: '3+',    label: 'Years experience' },
  { value: '5',     label: 'AI products shipped' },
  { value: '20hrs', label: 'Saved per automation' },
];

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      {/* Tag line */}
      <div className="reveal flex items-center gap-4 mb-6" style={{ transitionDelay: '0ms' }}>
        <div className="w-6 h-[1px] bg-foreground/40" />
        <span className="text-xs uppercase tracking-[0.12em] text-foreground/60 font-medium">
          Software Engineer &amp; CTO
        </span>
      </div>

      {/* Heading */}
      <h1
        className="reveal text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] font-semibold text-foreground max-w-3xl mb-6"
        style={{ transitionDelay: '100ms' }}
      >
        Building AI systems that{' '}
        <em className="not-italic italic">actually work</em>{' '}
        in production.
      </h1>

      {/* Subtext */}
      <p
        className="reveal text-base sm:text-lg leading-relaxed text-foreground/60 max-w-2xl mb-10"
        style={{ transitionDelay: '200ms' }}
      >
        I engineer AI platforms at KBC and run AvantifAI — an AI consultancy
        helping enterprises automate the work nobody wants to do manually.
      </p>

      {/* Buttons */}
      <div
        className="reveal flex items-center gap-6 mb-16"
        style={{ transitionDelay: '300ms' }}
      >
        <a
          href="#experience"
          onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="cursor-pointer bg-foreground text-background text-sm font-medium px-6 py-3 rounded-sm border border-foreground hover:bg-background hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background inline-flex items-center gap-2 min-h-[44px]"
        >
          View work
          <ArrowDown size={14} />
        </a>
        <a
          href="/Nikolai_Daelemans_CV_Public.pdf"
          download
          className="cursor-pointer text-sm text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors min-h-[44px] inline-flex items-center"
        >
          Download CV
        </a>
      </div>

      {/* Stats */}
      <div
        className="reveal border-t border-border pt-8"
        style={{ transitionDelay: '400ms' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-border">
          {stats.map((stat, i) => (
            <div key={i} className={`${i > 0 ? 'sm:pl-8' : ''} ${i < stats.length - 1 ? 'sm:pr-8' : ''}`}>
              <div className="text-3xl sm:text-4xl font-semibold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.12em] text-foreground/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
