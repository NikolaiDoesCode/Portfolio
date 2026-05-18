import React from 'react';
import kbcLogo from '../../img/kbc.webp';
import pwcLogo from '../../img/pwc.png';
import belfiusLogo from '../../img/belfius.png';
import natoLogo from '../../img/NATO.png';
import microsoftLogo from '../../img/microsoft.webp';
import deloitteLogo from '../../img/deloitte.jpg';
import mckinseyLogo from '../../img/mckinsey.png';
import awsLogo from '../../img/aws.png';
import thinkELogo from '../../img/think-E.jpg';
import emergentLogo from '../../img/emergent.png';
import tejoLogo from '../../img/tejo.webp';

const companies = [
  { name: 'KBC',       logo: kbcLogo       },
  { name: 'PwC',       logo: pwcLogo       },
  { name: 'Belfius',   logo: belfiusLogo   },
  { name: 'NATO',      logo: natoLogo      },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Deloitte',  logo: deloitteLogo  },
  { name: 'McKinsey',  logo: mckinseyLogo  },
  { name: 'AWS',       logo: awsLogo       },
  { name: 'Think-E',   logo: thinkELogo    },
  { name: 'Emergent',  logo: emergentLogo  },
  { name: 'Tejo',      logo: tejoLogo      },
];

export default function Collaborations() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-xs uppercase tracking-[0.12em] text-foreground/50 font-medium">
          Companies &amp; organisations I've collaborated with
        </div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee items-center gap-6 w-max py-2">
          {doubled.map((company, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-20 w-36 bg-white rounded-xl shadow-sm border border-black/5 px-4 py-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300">
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
