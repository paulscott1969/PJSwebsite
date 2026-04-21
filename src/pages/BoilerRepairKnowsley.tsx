import React from 'react';
import { Phone, CheckCircle2, Flame, ShieldCheck, Wrench, Calendar, AlertTriangle, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a boiler repair cost in Knowsley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on what's wrong. Paul will diagnose the fault and give you a clear price before he does anything — no ambiguous estimates that triple by the time the invoice arrives. Ring 0151 440 2614 for a straight answer."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair all boiler makes and models in Knowsley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul works on all makes and models — Worcester Bosch, Vaillant, Ideal, Baxi, Potterton, you name it. After 40 years on the job, there's very little he hasn't come across."
      }
    },
    {
      "@type": "Question",
      "name": "Can you service my boiler and issue a certificate in Knowsley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul carries out annual boiler servicing across Knowsley and is Gas Safe registered (Reg #221708), so any gas work he does is legal and properly certified."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a boiler repair take in Knowsley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most repairs are done in a single visit — usually a few hours. If a part needs ordering, Paul will tell you straight away and come back as soon as it arrives. He won't leave you without heating for any longer than necessary."
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
    { "@type": "City", "name": "Knowsley" },
    { "@type": "City", "name": "Huyton" },
    { "@type": "City", "name": "Prescot" },
    { "@type": "City", "name": "Kirkby" },
    { "@type": "City", "name": "Halewood" }
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
  { title: 'No heating or hot water', desc: "Often a diverter valve, thermostat, or pump issue. Paul will diagnose it quickly and tell you what it needs before he starts." },
  { title: 'Boiler keeps locking out', desc: "Low pressure, a faulty flame sensor, or a blocked condensate pipe. Common across older Knowsley housing stock." },
  { title: 'Banging or whistling noises', desc: "Kettling from limescale, trapped air, or a struggling pump. Usually fixable — Paul has heard every noise a boiler makes." },
  { title: 'Error code showing on display', desc: "After 40 years, Paul knows most error codes by heart. Ring him and he can often tell you what it is before he even arrives." },
  { title: 'Radiators not heating up fully', desc: "Could be the boiler, the pump, or sludge in the system. Paul will trace the source without guessing." },
  { title: 'Boiler pressure dropping regularly', desc: "Usually a leak in the system — could be a radiator valve, fitting, or the expansion vessel. Paul will track it down." },
];

const knowsleyAreas = ['Huyton', 'Prescot', 'Kirkby', 'Whiston', 'Halewood', 'Rainhill', 'Cronton', 'Tarbock', 'Stockbridge Village', 'Knowsley Village'];

export default function BoilerRepairKnowsley() {
  return (
    <>
      <SEO
        title="Boiler Repair Knowsley | Gas Safe Engineer | PJS Plumbing"
        description="Boiler repair and servicing across Knowsley by Gas Safe engineer Paul Scott. Covers Huyton, Prescot, Kirkby, Whiston, Halewood and all of Knowsley. Honest pricing. Call 0151 440 2614."
        keywords="boiler repair knowsley, boiler service knowsley, gas safe engineer knowsley, boiler repair huyton, boiler repair prescot, boiler repair kirkby"
        canonical="https://liverpoolsplumber.co.uk/boiler-repair-knowsley"
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
              Boiler Repair & Servicing Across Knowsley
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Boiler broken down in Knowsley? Paul Scott has been repairing and servicing boilers across Knowsley — in Huyton, Prescot, Kirkby, Whiston, and Halewood — for the best part of 40 years. Gas Safe registered, honest pricing, same-day repair where possible.
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

      {/* Common faults */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Boiler faults Paul repairs across Knowsley</h2>
            <p className="text-lg text-gray-600">Most boiler breakdowns come down to the same handful of faults. Here's what Paul deals with most often in Knowsley homes.</p>
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

      {/* About Paul in Knowsley + service process */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Why Knowsley homeowners call Paul</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Paul Scott was raised in this part of Merseyside and started his apprenticeship locally at 16. He knows Knowsley's housing stock — the council-built semis in Kirkby, the older terraces in Huyton, the newer developments in Halewood. He's seen the same boiler problems in these properties dozens of times and knows what to look for.
                </p>
                <p>
                  When you call Paul, you speak to Paul. There's no call centre taking your details and passing them on. He'll ask what's happening with the boiler, give you an honest idea of what it's likely to be, and come out prepared.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'Gas Safe registered — Reg #221708 (verifiable online)',
                  '40 years working on boilers across Knowsley',
                  'All makes repaired — Worcester, Vaillant, Baxi, Ideal, and more',
                  'Fixed price agreed before any work starts',
                  'Same-day repair where possible',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">What happens when Paul comes out</h2>
              <div className="space-y-6">
                {[
                  { step: '1', text: "You call Paul on 0151 440 2614 — you get him directly, not a booking system or a receptionist." },
                  { step: '2', text: "He'll ask a few questions about the fault so he can arrive with the right tools and most likely parts." },
                  { step: '3', text: "He diagnoses the problem and gives you a fixed price before he touches anything." },
                  { step: '4', text: "He repairs the boiler and tests it fully before he leaves — no coming back in a week because it's still not right." },
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

      {/* Areas in Knowsley */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Knowsley areas Paul covers for boiler work</h2>
              <p className="mb-8 text-gray-600 leading-relaxed">
                Paul covers the entire Knowsley borough for boiler repair and servicing. If you're in any of these areas, he's your local Gas Safe engineer:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {knowsleyAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 font-semibold text-gray-700">
                    <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">Not on the list? Call 0151 440 2614 — Paul likely covers your postcode too.</p>
            </div>
            <div className="rounded-3xl bg-blue-50 p-10">
              <Calendar className="mb-4 h-8 w-8 text-blue-600" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Annual boiler servicing in Knowsley</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A yearly service keeps your boiler safe, your warranty valid, and catches small problems before they turn into an expensive winter breakdown. Paul recommends booking in September or October — before every other Knowsley boiler decides to pack in at once.
              </p>
              <a
                href="tel:01514402614"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
              >
                <Phone className="h-5 w-5 fill-current" />
                Book a Service — 0151 440 2614
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Boiler repair in Knowsley — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Boiler playing up in Knowsley?</h2>
          <p className="mb-8 text-xl text-blue-100">Call Paul — he'll diagnose it honestly, price it fairly, and get it fixed properly.</p>
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
