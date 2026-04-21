import React from 'react';
import { Phone, Clock, AlertTriangle, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you get to Huyton for a plumbing emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul is based locally and covers Huyton all the time — he aims to be with you within the hour for genuine emergencies like burst pipes or flooding. Ring him direct on 0151 440 2614 and he'll tell you exactly how far away he is."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover Page Moss, Bowring Park, and Roby as well as Huyton itself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Paul covers all of Huyton including Page Moss, Bowring Park, Huyton-with-Roby, and the surrounding streets. He's been working in this part of Knowsley for years and knows the area well."
      }
    },
    {
      "@type": "Question",
      "name": "Are there extra charges for emergency call-outs in Huyton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul is upfront about his pricing before he comes out — no nasty surprises. He'll tell you the cost when you ring him, not after the work's done."
      }
    },
    {
      "@type": "Question",
      "name": "What plumbing emergencies do you handle in Huyton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burst pipes, severe leaks, flooding, boiler breakdowns, no hot water, and gas smells (ring 0800 111 999 first for gas). If you're not sure if it counts as an emergency, just call Paul and he'll tell you straight."
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
    { "@type": "City", "name": "Liverpool" },
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
  { title: 'Burst pipes', desc: "A burst pipe in a Huyton semi can dump hundreds of litres of water in minutes. Turn off your stopcock and ring Paul straight away." },
  { title: 'Severe leaks', desc: "Water going somewhere it shouldn't — through a ceiling, down a wall, or pooling on the floor. That needs sorting immediately." },
  { title: 'No heating or hot water', desc: "Especially in winter, if you've got children or elderly family members at home, a boiler breakdown is urgent. Paul gets these sorted fast." },
  { title: 'Flooding', desc: "From a burst pipe, appliance overflow, or blocked drain — if you're ankle-deep, don't wait until morning. Call Paul." },
  { title: 'Gas smell', desc: "Get out, open windows, ring the National Gas Helpline (0800 111 999) first. Then call Paul once it's safe." },
  { title: 'Blocked drains backing up', desc: "If multiple drains are blocked at once, there's usually something more serious going on. Paul will track down the cause." },
];

const huytonAreas = ['Huyton', 'Page Moss', 'Bowring Park', 'Huyton-with-Roby', 'Roby', 'Dovecot', 'Knotty Ash', 'Stockbridge Village', 'Whiston'];

export default function EmergencyPlumberHuyton() {
  return (
    <>
      <SEO
        title="Emergency Plumber Huyton | 24/7 Fast Response | PJS Plumbing"
        description="Need an emergency plumber in Huyton fast? Paul Scott covers Huyton and all of Knowsley 24/7. Local Gas Safe engineer — burst pipes, leaks, boiler breakdowns. Call 0151 440 2614."
        keywords="emergency plumber huyton, 24 hour plumber huyton, burst pipe huyton, plumber huyton knowsley, emergency plumbing knowsley"
        canonical="https://liverpoolsplumber.co.uk/emergency-plumber-huyton"
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
              Available 24/7 in Huyton — No Waiting, No Answer Machines
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Emergency Plumber in Huyton — 24/7 Local Response
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Burst pipe, flooding, or no heating in Huyton? Paul Scott provides emergency plumbing throughout Huyton and the wider Knowsley area. Call him directly — you'll speak to the man who's actually coming out, not a call centre.
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

      {/* Why Huyton residents call Paul */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Genuinely local</h3>
                <p className="text-sm text-gray-600 mt-1">Paul knows Huyton — the estates, the older properties, the common issues. He's not being routed here from miles away.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Gas Safe registered</h3>
                <p className="text-sm text-gray-600 mt-1">Reg #221708. Every job is done properly, legally, and safely — not a patch-up that needs redoing in six months.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">You speak to Paul</h3>
                <p className="text-sm text-gray-600 mt-1">No booking system, no call handler. You ring 0151 440 2614 and Paul answers — or calls you back within minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What counts as emergency */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Plumbing emergencies Paul deals with in Huyton</h2>
            <p className="text-lg text-gray-600">Not everything needs a 3am call-out — but these situations do:</p>
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

      {/* Areas in and around Huyton */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">Areas around Huyton that Paul covers</h2>
              <p className="mb-8 text-gray-600 leading-relaxed">
                Paul covers all of Huyton and the surrounding areas of Knowsley. If you're in one of these areas, you're in his patch:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {huytonAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 font-semibold text-gray-700">
                    <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">Not on the list? Ring Paul on 0151 440 2614 — if he can get to you, he will.</p>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">What to do before Paul gets there</h2>
              <div className="space-y-4">
                {[
                  "Turn off your stopcock — usually under the kitchen sink or where the main enters the house",
                  "If it's a gas smell: get everyone out, open windows, call 0800 111 999 before anything else",
                  "Switch off electricity in any area that's flooded or has water near sockets",
                  "Put towels or buckets down to limit the spread of water",
                  "Snap a quick photo or video — helps Paul know what to bring",
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

      {/* About Paul in Huyton */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-blue-900 p-12 text-white">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-black">A Huyton plumber who actually knows the area</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Paul Scott has been working in Huyton for decades. He knows the housing stock — the 1950s semi-detached houses on the estate, the older terraces in Roby, the more modern builds off the main roads. He's seen the same boiler faults and pipe issues come up again and again, and he fixes them properly rather than patching them up.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Most of his regular customers in Huyton found him through a recommendation from someone on their street. That's what happens when you do a good job for a fair price and don't mess people about.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  '40 years experience across Liverpool and Knowsley',
                  'Gas Safe registered — Reg #221708',
                  'Fully insured with public liability coverage',
                  'Upfront pricing — you know the cost before he starts',
                  '24/7 emergency response for Huyton residents',
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
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Emergency plumbing in Huyton — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Plumbing emergency in Huyton?</h2>
          <p className="mb-8 text-xl text-blue-100">Don't wait. Call Paul directly — he'll be on his way as fast as possible.</p>
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
