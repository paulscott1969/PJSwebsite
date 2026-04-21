import React from 'react';
import { Phone, Clock, AlertTriangle, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can you get to Prescot in an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul is local to this part of Merseyside and aims to reach genuine emergencies in Prescot within the hour. Call him directly on 0151 440 2614 — you'll get him, not a booking system."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover Rainhill and Whiston as well as Prescot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Paul covers Prescot, Rainhill, Whiston, Eccleston, and the surrounding areas. He knows the roads and the housing well, so he can get to you without any messing around finding the address."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a call-out fee for emergency plumbing in Prescot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul tells you the price before he comes out — he won't show up and then hit you with unexpected fees. Ring him and he'll give you a straight answer on what it'll cost."
      }
    },
    {
      "@type": "Question",
      "name": "What counts as a plumbing emergency in Prescot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burst pipes, severe leaks, no hot water in winter, flooding, and gas smells all qualify. If you're unsure, ring Paul on 0151 440 2614 — he'll tell you whether it needs dealing with straight away or can wait until morning."
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
    { "@type": "City", "name": "Prescot" },
    { "@type": "City", "name": "Rainhill" },
    { "@type": "City", "name": "Whiston" },
    { "@type": "City", "name": "Knowsley" }
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
    "Emergency Plumbing",
    "Boiler Repair",
    "Boiler Servicing",
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

const emergencyTypes = [
  { title: 'Burst pipes', desc: "A burst pipe in an older Prescot property can cause serious damage fast. Turn off your stopcock and ring Paul straight away on 0151 440 2614." },
  { title: 'Major leaks', desc: "Water coming through a ceiling, seeping down a wall, or pooling on the floor — these need urgent attention before the damage spreads." },
  { title: 'Boiler failure in winter', desc: "No heating or hot water with children or elderly people in the house isn't something you leave until Monday. Paul gets these sorted as quickly as he can." },
  { title: 'Flooding', desc: "Whether from a pipe, an appliance, or a blocked drain — if it's coming in fast, don't wait. Call Paul." },
  { title: 'Gas smell', desc: "Leave the property, open windows, and call the National Gas Helpline on 0800 111 999 first. Then ring Paul once everyone's safe." },
  { title: 'No water at all', desc: "A total loss of water supply can indicate a serious issue. Paul will diagnose it and get things moving again." },
];

const prescotAreas = ['Prescot', 'Rainhill', 'Whiston', 'Eccleston', 'Cronton', 'Knowsley Village', 'Tarbock', 'Huyton'];

export default function EmergencyPlumberPrescot() {
  return (
    <>
      <SEO
        title="Emergency Plumber Prescot | 24/7 Local Response | PJS Plumbing"
        description="Emergency plumber in Prescot available 24/7. Paul Scott covers Prescot, Rainhill, Whiston and all of Knowsley. Gas Safe registered, fast local response. Call 0151 440 2614."
        keywords="emergency plumber prescot, 24 hour plumber prescot, burst pipe prescot, plumber prescot knowsley, emergency plumbing rainhill whiston"
        canonical="https://liverpoolsplumber.co.uk/emergency-plumber-prescot"
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-bold text-red-300 ring-1 ring-red-400/30">
              <Clock className="h-4 w-4" />
              24/7 in Prescot & Surrounding Areas
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Emergency Plumber in Prescot — Available Around the Clock
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Burst pipe or flooding in Prescot? Paul Scott provides fast emergency plumbing throughout Prescot, Rainhill, Whiston, and the wider Knowsley area. Call him directly — no call centres, no waiting.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:01514402614"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-500 px-8 py-5 text-xl font-black text-white transition-all hover:bg-red-600 active:scale-95 shadow-2xl shadow-red-500/30"
              >
                <Phone className="h-6 w-6 fill-current" />
                Call Now — 0151 440 2614
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-300">
              PJS Plumbing & Heating Services, Liverpool & Knowsley, Merseyside. Tel: 0151 440 2614
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Covers Prescot & surrounding areas</h3>
                <p className="text-sm text-gray-600 mt-1">Paul is based locally and covers Prescot, Rainhill, Whiston, and all of Knowsley — he's not being dispatched from the other side of the city.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Gas Safe — Reg #221708</h3>
                <p className="text-sm text-gray-600 mt-1">Every job done legally, safely, and properly. You can verify Paul's registration at gassaferegister.co.uk.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Direct line to Paul</h3>
                <p className="text-sm text-gray-600 mt-1">When you ring 0151 440 2614, you get Paul. Not a booking agent, not a receptionist — the man who's coming out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of emergency */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Plumbing emergencies Paul handles in Prescot</h2>
            <p className="text-lg text-gray-600">These are the situations that don't wait for a weekday appointment:</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {emergencyTypes.map((type, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas & what to do */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Areas around Prescot that Paul covers</h2>
              <p className="mb-8 text-gray-600">
                Paul covers Prescot and the surrounding Knowsley villages and suburbs. If you're in any of these areas, he's your local emergency plumber:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {prescotAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 font-semibold text-gray-700">
                    <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">Not sure if he covers you? Call 0151 440 2614 — if he can get there, he will.</p>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">While you wait for Paul</h2>
              <div className="space-y-4">
                {[
                  "Turn off the stopcock — usually under the kitchen sink or where the main enters the property",
                  "Gas smell? Get everyone out and call 0800 111 999 before anything else",
                  "Turn off electricity in any area where there's water near sockets or fittings",
                  "Use towels and buckets to limit water spread while you wait",
                  "Take a quick photo or short video — helps Paul arrive prepared with the right parts",
                ].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Paul in Prescot */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-blue-900 p-12 text-white">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-black">Why Prescot residents use Paul</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Paul Scott has been serving Prescot and Rainhill for years. He's familiar with the older terraced homes and Victorian properties in the town centre, as well as the newer housing developments on the outskirts. That local knowledge matters — he arrives knowing what to expect.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  He gets a lot of his Prescot work through word of mouth. A customer in Rainhill mentions him to a neighbour in Whiston. That doesn't happen if you do a shoddy job or charge double at the end.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  '40 years on the tools across Liverpool and Knowsley',
                  'Gas Safe registered — Reg #221708',
                  'Fully insured — public liability covered',
                  'Price agreed upfront — no shock invoices',
                  '24/7 emergency response for Prescot residents',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300 shrink-0" />
                    <span className="text-blue-100">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Emergency plumbing in Prescot — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Plumbing emergency in Prescot?</h2>
          <p className="mb-8 text-xl text-blue-100">Call Paul directly — he'll be on his way as soon as he can.</p>
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
