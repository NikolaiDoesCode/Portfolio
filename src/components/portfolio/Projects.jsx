import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    name: 'FaceDetectorCNN',
    year: '2022 / 2026',
    desc: 'Real-time face detection from scratch. Custom CNN trained on 26,000 samples (LFW + generated negatives) achieving 99.89% accuracy and AUC-ROC of 1.0. Sliding window, image pyramid, and NMS all implemented without libraries.',
    tags: ['PyTorch', 'Computer Vision', 'CNN', 'Python'],
    link: { label: 'GitHub', href: 'https://github.com/NikolaiDoesCode/Face-Detection' },
  },
  {
    num: '02',
    name: 'DocAI / AvantifAI',
    year: '2026',
    desc: 'Enterprise documentation manager with agentic AI, multi-tenancy, Auth0, vector search, rate limiting, HTTPS, and version control. Production system serving real clients.',
    tags: ['RAG', 'Agentic AI', 'Auth0', 'SaaS'],
    link: { label: 'avantifai.com', href: 'https://avantifai.com' },
  },
  {
    num: '03',
    name: 'CampusAI',
    year: '2023',
    desc: 'Hybrid chatbot combining a custom-trained PyTorch intent classifier with DialoGPT fallback. Bag-of-words preprocessing pipeline, 5-layer MLP, deployed via Flask with a responsive frontend.',
    tags: ['PyTorch', 'NLP', 'Flask', 'Python'],
    link: { label: 'GitHub', href: 'https://github.com/NikolaiDoesCode/CampusAI' },
  },
  {
    num: '04',
    name: 'AI Questionnaire Generator',
    year: '2024',
    desc: 'Python and LLM-powered tool that generates tailored interview questions and analyzes candidate responses using NLP techniques.',
    tags: ['Python', 'LLMs', 'NLP'],
    link: null,
  },
  {
    num: '05',
    name: 'AI & Infrastructure Learning Platform',
    year: '2025',
    desc: 'Learning platform teaching infrastructure and AI theory — from designing personal models to hands-on IoT device experience. Includes a user feedback form for continuous improvement.',
    tags: ['IoT', 'Infrastructure', 'AI', 'Education'],
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20">
      <div className="reveal text-xs uppercase tracking-[0.12em] text-foreground/50 font-medium mb-12">
        Selected work
      </div>

      <ol className="divide-y divide-border">
        {projects.map((p, i) => (
          <li
            key={p.num}
            className="reveal group py-6 first:pt-0 last:pb-0 rounded-sm hover:bg-[rgba(26,26,26,0.03)] transition-colors duration-200 -mx-3 px-3"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs text-foreground/30 font-medium tabular-nums">{p.num}</span>
                  <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed mb-3 max-w-xl">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-[0.08em] text-foreground/40 border border-border rounded-sm px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 sm:pt-1">
                <span className="text-xs text-foreground/40 tabular-nums">{p.year}</span>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-xs text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1 min-h-[44px] sm:min-h-0"
                  >
                    {p.link.label}
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
