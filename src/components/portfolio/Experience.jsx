import React from 'react';
import { motion } from 'framer-motion';
import avantifaiLogo from '../../img/logo_transparen.png';
import kbcLogo from '../../img/kbc.webp';
import pwcLogo from '../../img/pwc.png';
import belfiusLogo from '../../img/belfius.png';
import emergentLogo from '../../img/emergent.png';
import tejoLogo from '../../img/tejo.webp';
import thinkELogo from '../../img/think-E.jpg';

const experiences = [
  {
    period: 'Mar 2026 — present',
    year: '2026',
    role: 'CTO & Co-founder',
    company: 'AvantifAI',
    location: 'Europe',
    logo: avantifaiLogo,
    initials: 'A',
    link: 'avantifai.com',
    bullets: [
      'Running an AI consultancy designing automation solutions that save employees multiple hours per week.',
      'Built DocAI: agentic AI documentation manager with multi-tenancy, Auth0, vector search, rate limiting, and version control — serving real enterprise clients.',
    ],
  },
  {
    period: 'Jul 2025 — present',
    year: '2025',
    role: 'Infrastructure Software Engineer',
    company: 'KBC',
    location: 'Leuven, Belgium',
    logo: kbcLogo,
    initials: 'KBC',
    bullets: [
      'Built reusable IaC frameworks automating Compute, Storage, Firewall, DNS, and Load Balancing provisioning with AI-assisted decision making.',
      'Team lead on KBC draining tool (Netscaler, F5) — organizing sprints and managing agile delivery.',
      'Integrated Microsoft Copilot and Power Automate to streamline internal banking workflows.',
    ],
  },
  {
    period: 'Feb — May 2025',
    year: '2025',
    role: 'Technology Consultant',
    company: 'PwC',
    location: 'Brussels, Belgium',
    logo: pwcLogo,
    initials: 'PwC',
    bullets: [
      'Co-organized a NATO hackathon with Microsoft on maritime safety — informing NATO MARCOM protocols.',
      'Built Power BI dashboards from complex defense datasets for NATO analysts and leadership.',
      'Automated a multi-Excel workflow with Python/Pandas, saving 20+ engineering hours per month.',
    ],
  },
  {
    period: 'Mar 2024 — Mar 2025',
    year: '2024',
    role: 'Lead IT & Analytics',
    company: 'Emergent',
    location: 'Leuven, Belgium',
    logo: emergentLogo,
    initials: 'EM',
    bullets: [
      'Led digital strategy for a student-run AI & Data Science org, partnering with McKinsey, KBC, AWS, and Deloitte.',
      'Grew community engagement by 30% through analytics-driven content planning and scalable web solutions.',
    ],
  },
  {
    period: 'Oct — Dec 2024',
    year: '2024',
    role: 'Software Engineer',
    company: 'Tejo',
    location: 'Hybrid',
    logo: tejoLogo,
    initials: 'T',
    bullets: [
      'Designed and built a full event payment pipeline — Stripe integration with automated QR-code confirmation emails.',
      '100% digital payment processing with zero manual intervention on event day.',
    ],
  },
  {
    period: 'Sep — Dec 2024',
    year: '2024',
    role: 'Software Engineer (Product Owner)',
    company: 'Belfius',
    location: 'Brussels, Belgium',
    logo: belfiusLogo,
    initials: 'BF',
    bullets: [
      'Coordinated go-to-market readiness for internal product modernization, improving system performance by 50%.',
      'Deployed scalable microservices with .NET Core and REST APIs; contributed to Angular/React front-end.',
    ],
  },
  {
    period: 'Jan — Sep 2024',
    year: '2024',
    role: 'Software Engineer',
    company: 'SunnySet',
    location: 'Hybrid',
    logo: null,
    initials: 'SS',
    bullets: [
      'Built and deployed a cross-platform mobile app in Flutter and Java for real-time tourist safety alerts.',
      'Led app logic, UI, and hosting with CI/CD pipelines ensuring smooth performance across iOS and Android.',
    ],
  },
  {
    period: 'Jul — Sep 2023',
    year: '2023',
    role: 'Software Engineer Intern',
    company: 'Think-E',
    location: 'Leuven, Belgium',
    logo: thinkELogo,
    initials: 'TE',
    bullets: [
      'Developed IoT smart home energy monitoring connecting sensors via Raspberry Pi using C++, JavaScript, and SQL.',
      'Built responsive energy tracking dashboards and maintained codebase with GitHub version control.',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function CompanyCircle({ logo, initials }) {
  return (
    <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden border border-border bg-white flex items-center justify-center">
      {logo ? (
        <img src={logo} alt={initials} className="w-full h-full object-contain p-1.5" />
      ) : (
        <span className="text-xs font-bold text-foreground tracking-tight">{initials}</span>
      )}
    </div>
  );
}

function TimelineCard({ exp, side }) {
  const isLeft = side === 'left';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`pb-16 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}
    >
      {/* Header */}
      <div className={`flex items-start gap-3 mb-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
        <CompanyCircle logo={exp.logo} initials={exp.initials} />
        <div className={isLeft ? 'text-right' : 'text-left'}>
          <h3 className="text-base font-semibold text-foreground leading-snug">{exp.role}</h3>
          <p className="text-sm text-foreground/55 mt-0.5">{exp.company}</p>
          <p className="text-xs text-foreground/35 mt-0.5">{exp.location} · {exp.period}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-4" />

      {/* Bullets */}
      <ul className={`space-y-2 ${isLeft ? 'text-right' : 'text-left'}`}>
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-foreground/50 leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>

      {exp.link && (
        <a
          href={`https://${exp.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-xs text-foreground/35 hover:text-foreground/70 transition-colors mt-3 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <span>{exp.link}</span>
          <span>↗</span>
        </a>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-xs uppercase tracking-[0.12em] text-foreground/50 font-medium mb-16">
        Experience
      </div>

      {/* Desktop timeline (md+) */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 pointer-events-none" />

        {experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-2 relative">
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10" style={{ top: '14px' }}>
              <div className="w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />
              <span className="text-[10px] font-mono text-foreground/40 mt-1.5 whitespace-nowrap">
                {exp.year}
              </span>
            </div>

            {i % 2 === 0 ? (
              <>
                <TimelineCard exp={exp} side="left" />
                <div />
              </>
            ) : (
              <>
                <div />
                <TimelineCard exp={exp} side="right" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Mobile timeline */}
      <div className="md:hidden">
        <div className="relative pl-8">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border pointer-events-none" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative mb-10"
            >
              <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />

              <div className="flex items-start gap-3 mb-3">
                <CompanyCircle logo={exp.logo} initials={exp.initials} />
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">{exp.role}</h3>
                  <p className="text-sm text-foreground/55 mt-0.5">{exp.company}</p>
                  <p className="text-xs text-foreground/35 mt-0.5">{exp.location} · {exp.period}</p>
                </div>
              </div>

              <div className="h-px bg-border mb-3" />

              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-foreground/50 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {exp.link && (
                <a
                  href={`https://${exp.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-foreground/35 hover:text-foreground/70 transition-colors mt-2"
                >
                  {exp.link} ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
