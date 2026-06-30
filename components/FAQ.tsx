'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is CBD?',
    a: 'CBD (cannabidiol) is a naturally occurring compound found in the hemp plant. It interacts with the body\u2019s endocannabinoid system, which helps regulate functions such as mood, sleep, and inflammation. Unlike THC, CBD is non-intoxicating.'
  },
  {
    q: 'Is BIOTERP legal?',
    a: 'BIOTERP is formulated to contain no more than 0.2% THC, in line with hemp-derived CBD regulations in many jurisdictions. We recommend checking the laws of your country or state before ordering.'
  },
  {
    q: 'Does BIOTERP have side effects?',
    a: 'Most people tolerate CBD well. Some users report mild effects such as dry mouth or drowsiness, especially at higher doses. If you have a health condition or take medication, consult a healthcare provider before use.'
  },
  {
    q: 'What is the recommended dosage?',
    a: 'A common starting point is half a dropper (about 0.5 ml) once or twice daily. Adjust gradually based on how you feel. Each 30 ml bottle delivers roughly 600 drops of full-spectrum tincture.'
  },
  {
    q: 'Can BIOTERP interact with my medications?',
    a: 'CBD can interact with some medications, particularly those metabolized by the liver. Always speak with your doctor before adding CBD if you take prescription medication.'
  },
  {
    q: 'Is BIOTERP safe for pregnant or nursing women?',
    a: 'We do not recommend using BIOTERP during pregnancy or while breastfeeding. Please consult your healthcare provider for guidance.'
  },
  {
    q: 'Is BIOTERP addictive?',
    a: 'No. CBD is non-intoxicating and is not associated with dependence or addiction in current research.'
  },
  {
    q: 'Will BIOTERP show up on a drug test?',
    a: 'Most workplace drug tests look for THC. Although BIOTERP stays within the legal THC limit, trace amounts may still appear on sensitive tests. If you are routinely tested, please factor this in before use.'
  },
  {
    q: 'What is the difference between full-spectrum, broad-spectrum, and isolate?',
    a: 'Full-spectrum contains the complete profile of plant compounds including trace THC. Broad-spectrum is similar but THC-free. Isolate is pure CBD only. BIOTERP is a full-spectrum tincture designed to deliver the entourage effect.'
  },
  {
    q: 'How should I store the bottle?',
    a: 'Keep BIOTERP in a cool, dry place out of direct sunlight. Make sure the cap is closed tightly between uses to preserve potency.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-x py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow mx-auto">Frequently asked</span>
        <h2 className="section-title mt-5">Everything you wanted to know</h2>
        <p className="section-sub mx-auto">
          Practical answers about CBD and the BIOTERP tincture, written in plain language.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-leaf-700/10 bg-white shadow-soft"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-sm font-semibold text-leaf-900 sm:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-leaf-700 transition ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-leaf-900/75 sm:px-6 sm:text-base">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
