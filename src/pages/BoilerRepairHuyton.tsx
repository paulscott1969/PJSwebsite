import React from 'react';
import { Phone, CheckCircle2, Flame, ShieldCheck, Wrench, Calendar, AlertTriangle, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you repair my boiler in Huyton today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul offers same-day boiler repair in Huyton where possible. Ring him on 0151 440 2614 and he'll let you know his availability — he won't keep you waiting any longer than necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Is Paul Gas Safe registered for boiler work in Huyton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul Scott is Gas Safe registered under number 221708. It's a legal requirement for anyone working on gas appliances. You can verify his registration at gassaferegister.co.uk."
      }
    },
    {
      "@type": "Question",
      "name": "My boiler keeps cutting out in Huyton — what's causing it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In older Huyton properties it's often low pressure, a faulty flame sensor, or a blocked condensate pipe. Paul will run through the usual causes with you on the phone before he comes out, so he arrives prepared."
      }
    },
    {
      "@type": "Question",
      "name": "How much does boiler servicing cost in Huyton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul is upfront about pricing before any work starts. Ring him on 0151 440 2614 and he'll give you a clear price for servicing. No hidden extras, no nasty surprises on the bill."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PlumbingBusiness",
  "name": "PJS Plumbing & Heating Services",
  "telephone": "0151 440 2614",
  "url": "https://liverpoolsplumber.co.uk",
  "areaServed": [
    { "@type": "City", "name": "Huyton" },
    { "@type": "City", "name": "Knowsley" },
    { "@type": "City", "name": "Liverpool" }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Gas Safe Registration",
    "credentialCategory": "Professional Certification",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Gas Safe Register",
      "url": "https://www.gassaferegister.co.uk/"
    },
    "identifier": "221708"
  },
  "knowsAbout": [
    "Boiler Repair",
    "Boiler Servicing",
    "Emergency Plumbing",
    "Central Heating",
    "Gas Safety Certificates",
    "General Plumbing"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liverpool",
    "addressRegion": "Merseyside",
    "postalCode": "L36 9XE",
    "addressCountry": "GB"
  }
};

const commonFaults = [
  { title: 'Boiler not firing up', desc: "Could be the ignition, thermostat, pilot light, or gas pressure. Paul runs through the likely causes and finds the problem fast." },
  { title: 'No hot water but heating works', desc: "Classic diverter valve fault on a combi boiler — fairly common and usually fixable same-day." },
  { title: 'Banging or kettling noise', desc: "Limescale on the heat exchanger is the main cause in Huyton's older properties. Paul can advise whether a powerflush or a part replacement is the right fix." },
  { title: 'Low boiler pressure', desc: "If the pressure keeps dropping, there's likely a slow leak somewhere in the system. Paul will find it rather than just topping it up and hoping for the best." },
  { title: 'Boiler showing a fault code', desc: "Paul knows the common fault codes for most boiler manufacturers. He can often help you over the phone before he even comes out." },
  { title: 'Radiators cold at the bottom', desc: "Sludge buildup — more common in older Huyton homes. Paul will check whether a powerflush is the right solution or if it's something else." },
];

const serviceChecklist = [
  'Visual inspection of the boiler body and casing',
  'Clean the burner and check combustion',
  'Inspect the heat exchanger for corrosion or leaks',
  'Test all safety devices and cut-offs',
  'Check the flue and ventilation',
  'Assess gas pressure and flow rate',
  'Inspect seals, gaskets, and connections',
  'Test the thermostat and heating controls',
];

export default function BoilerRepairHuyton() {
  return (
    <>
      <SEO
        title="Boiler Repair Huyton | Local Gas Safe Engineer | PJS Plumbing"
        description="Boiler broken in Huyton? Paul Scott provides boiler repair and servicing across Huyton and Knowsley. Gas Safe registered (#221708), 40 years experience. Same-day where possible. Call 0151 440 2614."
        keywords="boiler repair huyton, boiler service huyton, gas safe engineer huyton, boiler breakdown huyton, boiler repair knowsley, local boiler engineer huyton"
        canonical="https://liverpoolsplumber.co.uk/boiler-repair-huyton"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              Boiler Repair & Servicing in Huyton, Knowsley
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Boiler packed in in Huyton? Paul Scott has been repairing and servicing boilers in Huyton and the wider Knowsley area for decades. Gas Safe registered, fully insured, and honest about pricing before he starts any work.
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
            <p className="mt-6 text-sm text-blue-300">
              PJS Plumbing & Heating Services, Liverpool & Knowsley, Merseyside. Tel: 0151 440 2614
            </p>
          </div>
        </div>
      </section>

      {/* Quick trust strip */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-black text-gray-900">Boiler Broken?</h2>
                <p className="text-sm text-gray-500">Same-day repair where possible across Huyton</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-black text-gray-900">Annual Servicing</h2>
                <p className="text-sm text-gray-500">Keeps your warranty valid and your home safe</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-black text-gray-900">Gas Safe Certified</h2>
                <p className="text-sm text-gray-500">Reg #221708 — verifiable at gassaferegister.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common faults */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Boiler faults Paul fixes in Huyton</h2>
            <p className="text-lg text-gray-600">Most boiler problems in Huyton homes come down to the same handful of faults. Here's what Paul deals with most often.</p>
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

      {/* Honest take + Process */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Paul's honest take on Huyton boilers</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Huyton has a lot of older housing stock — plenty of 1960s and 70s semis with original pipework and boilers that have seen better days. Paul knows these properties well. He's worked on boilers across Page Moss, Bowring Park, Roby, and the surrounding streets for years.
                </p>
                <p>
                  He won't push you into an expensive replacement if a repair will do the job. But if the boiler's well past its best and repairs are starting to cost more than it's worth, he'll tell you that too — honestly, without the hard sell.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'All makes repaired — Worcester, Vaillant, Baxi, Ideal, Potterton',
                  'Honest assessment — repair vs replace, no pressure',
                  'Fixed price agreed before any work starts',
                  'Gas Safe registered — Reg #221708',
                  '40 years experience in Huyton and Knowsley',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Annual servicing — what Paul checks</h2>
              <div className="space-y-3 mb-8">
                {serviceChecklist.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-blue-50 p-6">
                <Calendar className="mb-3 h-6 w-6 text-blue-600" />
                <p className="font-bold text-blue-900">
                  Best time to book your Huyton boiler service: September or October — before the winter rush hits and boilers across Knowsley start acting up all at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Boiler repair in Huyton — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Boiler giving you grief in Huyton?</h2>
          <p className="mb-8 text-xl text-blue-100">Call Paul — he'll diagnose it, price it honestly, and get it sorted.</p>
          <a
            href="tel:01514402614"
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-blue-600 transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-6 w-6 fill-current" />
            0151 440 2614
          </a>
          <p className="mt-6 text-sm text-blue-200">PJS Plumbing & Heating Services, Liverpool & Knowsley, Merseyside. Tel: 0151 440 2614</p>
        </div>
      </section>
    </>
  );
}
