import React from 'react';
import { Phone, CheckCircle2, Flame, ShieldCheck, Wrench, Calendar, AlertTriangle } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does boiler repair cost in Liverpool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the fault. Paul will diagnose what's wrong and give you a clear price before any work starts — no hidden fees, no surprises. Ring 0151 440 2614 and he'll give you a straight answer."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a boiler repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most boiler repairs are done in a single visit. If a part needs ordering, Paul will tell you upfront and get back as quickly as possible — he won't leave you without heating any longer than necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Should I repair or replace my boiler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the boiler is under 10 years old and the repair is less than half the cost of a new one, repair usually makes sense. Paul will give you his honest take — he's not going to push you into an expensive job if it's not needed."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get my boiler serviced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once a year, ideally in September or October before the cold hits. It keeps your boiler safe, your warranty valid, and catches small faults before they become expensive breakdowns."
      }
    },
    {
      "@type": "Question",
      "name": "What does a boiler service include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul checks the heat exchanger, burner, flue, seals, gas pressure, safety devices, and thermostat controls. If he spots anything that needs attention, he'll tell you before doing any extra work."
      }
    },
    {
      "@type": "Question",
      "name": "Is Paul Gas Safe registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul Scott is Gas Safe registered under number 221708. You can verify this at gassaferegister.co.uk. He's been working on boilers across Liverpool and Knowsley for 40 years."
      }
    }
  ]
};

const commonFaults = [
  { title: 'No hot water or heating', desc: 'Usually a diverter valve, broken pump, or thermostat issue. Paul can diagnose it quickly and tell you straight what it needs.' },
  { title: 'Boiler keeps cutting out', desc: 'Low water pressure, a faulty flame sensor, or a blocked condensate pipe. Each one has a different fix — Paul will find it.' },
  { title: 'Strange noises — banging or whistling', desc: 'Kettling, trapped air, or limescale buildup. More common in older Liverpool properties. Uncomfortable but usually fixable.' },
  { title: 'Boiler showing an error code', desc: "Paul's seen most error codes after 40 years on the job. Give him a ring and he'll tell you what it means before he even arrives." },
  { title: 'Pilot light keeps going out', desc: 'Often a thermocouple fault — a common fix for an experienced gas engineer. Rarely as serious as it looks.' },
  { title: 'Radiators not heating up properly', desc: 'Could be the boiler, the pump, or air in the system. Paul will trace the cause without guessing.' },
];

const serviceChecklist = [
  'Visual inspection of the boiler and its components',
  'Clean the heat exchanger and burner',
  'Check and test all safety devices',
  'Flue inspection and combustion analysis',
  'Gas pressure and flow rate check',
  'Inspect seals, gaskets, and joints for wear',
  'Test the thermostat and heating controls',
  'Check for corrosion or early signs of trouble',
];

const whyService = [
  { title: 'Catch problems before they bite', desc: 'Small faults spotted in a service cost a fraction of what they do when the boiler packs in mid-January at 10pm.' },
  { title: 'Keep your warranty valid', desc: 'Most manufacturers require annual servicing by a Gas Safe engineer. Paul is registered, so your warranty stays intact.' },
  { title: 'Lower your gas bills', desc: 'A clean, well-maintained boiler runs more efficiently. That adds up over a heating season.' },
  { title: 'Carbon monoxide safety', desc: "A fault you can't see or smell can be dangerous. An annual service is the best way to stay on top of it." },
];

export default function BoilerRepairServicing() {
  return (
    <>
      <SEO
        title="Boiler Repair & Servicing Liverpool | Gas Safe Engineer"
        description="Boiler broken or due a service in Liverpool? Paul Scott (Gas Safe #221708) repairs and services boilers across Liverpool and Knowsley. 40 years experience, honest pricing, same-day where possible."
        keywords="boiler repair liverpool, boiler servicing liverpool, boiler service liverpool, gas safe engineer liverpool, boiler repair knowsley"
        canonical="https://liverpoolsplumber.co.uk/boiler-repair-servicing"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <a
              href="https://www.gassaferegister.co.uk/checkbusiness?bid=HLlbZxceM%252fmirePRUTS9Cw%253d%253d&cp=X4%252f9g6W4dHiAXQ6u1cr%252bRul1hBObcEL30E%252bYedIZhds%253d"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/30 px-4 py-1.5 text-sm font-bold text-blue-300 ring-1 ring-blue-400/30 hover:bg-blue-600/50 transition-colors"
            >
              <ShieldCheck className="h-4 w-4" />
              Gas Safe Registered — Reg #221708
            </a>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Boiler Repair &amp; Servicing in Liverpool &amp; Knowsley
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Whether your boiler's broken down or just needs its annual check, Paul at PJS Plumbing takes care of it. He's been working on boilers across Liverpool and Knowsley for 40 years — Gas Safe registered, fully insured, and straight with his pricing.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:01514402614"
                className="flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
              >
                <Phone className="h-5 w-5 fill-current" />
                Call Paul — 0151 440 2614
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tab-style section intro */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg">Boiler Broken?</h3>
                <p className="text-sm text-gray-500">Same-day repairs where possible across Liverpool</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg">Annual Service</h3>
                <p className="text-sm text-gray-500">Keeps your warranty valid and your home safe</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg">Gas Safe Certified</h3>
                <p className="text-sm text-gray-500">Reg #221708 — verifiable at gassaferegister.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Faults */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Common boiler faults Paul fixes</h2>
            <p className="text-lg text-gray-600">Most boiler problems fall into a handful of the same categories. Here's what Paul comes across most often in Liverpool homes.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commonFaults.map((fault, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{fault.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{fault.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Repair or replace — Paul's honest take</h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                This comes up all the time. There's no single right answer, but here's a rough guide Paul uses when talking to customers:
              </p>
              <div className="space-y-4">
                {[
                  'Under 10 years old — repair is nearly always the right call.',
                  'Repair cost more than half of a new boiler — replacement starts making more sense.',
                  'Having different faults every few months — it might be time to cut your losses.',
                  'Older model with parts getting hard to source — repair costs creep up fast.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <p className="font-bold text-blue-900">
                  Paul will always give you his honest opinion. If the boiler's not worth fixing, he'll tell you — he won't charge you for a repair it doesn't need.
                </p>
              </div>
            </div>

            {/* What to expect */}
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">What happens when Paul comes out</h2>
              <div className="space-y-6">
                {[
                  { step: '1', text: 'You call Paul directly on 0151 440 2614 — you get him, not a call centre or booking system.' },
                  { step: '2', text: "He'll ask a few quick questions about the fault so he can arrive prepared." },
                  { step: '3', text: "He'll diagnose the problem and give you a fixed price before touching anything." },
                  { step: '4', text: 'He carries out the repair and fully tests the boiler before he leaves.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                      {item.step}
                    </div>
                    <p className="pt-2 text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Servicing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Annual boiler servicing — why it's worth doing</h2>
            <p className="text-lg text-gray-600">
              A yearly service isn't just ticking a box. Here's why it actually matters for Liverpool homeowners.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {whyService.map((r, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Wrench className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Paul checks */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900">What Paul checks during a service</h2>
              <div className="space-y-3">
                {serviceChecklist.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900">How to book a service</h2>
              <div className="space-y-6">
                {[
                  { step: '1', text: 'Ring Paul on 0151 440 2614 — he\'ll sort a date and time that works for you.' },
                  { step: '2', text: 'He turns up when he says he will. No four-hour waiting windows.' },
                  { step: '3', text: 'He services the boiler thoroughly and flags anything that needs attention — no hard sell.' },
                  { step: '4', text: 'You\'ve got peace of mind going into winter knowing the boiler\'s been properly checked.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                      {item.step}
                    </div>
                    <p className="pt-2 text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <Calendar className="mb-3 h-6 w-6 text-blue-600" />
                <p className="font-bold text-blue-900">
                  Best time to book: September or October — before the winter rush when everyone's boiler decides to play up at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Hub */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black tracking-tight text-gray-900">Local Boiler Services</h2>
            <p className="mt-2 text-gray-600">Paul covers all of Liverpool and Knowsley. See the local pages:</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/boiler-repair-knowsley" className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-3 font-bold text-blue-700 hover:bg-blue-100 transition-colors">
              Boiler Repair Knowsley
            </a>
            <a href="/boiler-repair-huyton" className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-3 font-bold text-blue-700 hover:bg-blue-100 transition-colors">
              Boiler Repair Huyton
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Boiler repair &amp; servicing — common questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="mb-3 font-black text-gray-900">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Boiler giving you grief?</h2>
          <p className="mb-8 text-xl text-blue-100">Call Paul — he'll diagnose it, price it honestly, and get it sorted.</p>
          <a
            href="tel:01514402614"
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-blue-600 transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-6 w-6 fill-current" />
            0151 440 2614
          </a>
        </div>
      </section>
    </>
  );
}
