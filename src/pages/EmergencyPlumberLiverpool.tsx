import React from 'react';
import { Phone, Clock, AlertTriangle, CheckCircle2, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you respond to a plumbing emergency in Liverpool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul aims to respond to genuine emergencies across Liverpool and Knowsley within the hour. Call directly on 0151 440 2614."
      }
    },
    {
      "@type": "Question",
      "name": "What counts as a plumbing emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A burst pipe, severe leak, flooding, no hot water in winter, or a gas smell are all genuine emergencies. If you're not sure, just call Paul — he'll tell you straight."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge extra for emergency call-outs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul is upfront about pricing. He'll tell you the cost before he comes out — no nasty surprises on the bill."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does your emergency plumbing service cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul covers the whole of Liverpool and Knowsley, including Huyton, Prescot, Whiston, Rainhill, St Helens, and Halewood. If you're not sure whether he covers your area, just ring him."
      }
    }
  ]
};

const emergencyTypes = [
  { title: 'Burst pipes', desc: "A burst pipe can dump hundreds of litres of water into your home in minutes. Don't wait — turn off your stopcock and call Paul." },
  { title: 'Severe leaks', desc: "A drip is a drip. A gush is an emergency. If water's going somewhere it shouldn't, that's urgent." },
  { title: 'No heating in winter', desc: "If you've got young kids, elderly residents, or anyone vulnerable in the house, no heating is an emergency." },
  { title: 'Flooding', desc: "Whether from a pipe, appliance overflow, or drain back-up — flooding needs immediate attention." },
  { title: 'Gas smell', desc: "This is more than a plumbing emergency. Get everyone out, open windows, call the National Gas Helpline (0800 111 999) first, then Paul." },
  { title: 'Boiler complete failure', desc: "No heat, no hot water in the depths of a Liverpool winter. Paul gets these sorted as fast as physically possible." },
];

const beforePaulArrives = [
  'Turn off your stopcock (usually under the kitchen sink or where the water main enters the house)',
  'If there\'s a gas smell — get out of the house and call 0800 111 999 before anything else',
  'Turn off the electricity in the affected area if there\'s water near sockets',
  'Put towels or buckets under leaks to limit the damage',
  'Take a quick video or photo of what\'s happening — helps Paul know what to bring',
];

const areas = [
  { name: 'Liverpool City Centre', path: null },
  { name: 'Huyton', path: '/emergency-plumber-huyton' },
  { name: 'Prescot', path: '/emergency-plumber-prescot' },
  { name: 'Whiston', path: null },
  { name: 'Rainhill', path: null },
  { name: 'Halewood', path: null },
  { name: 'Knowsley', path: null },
  { name: 'St Helens', path: null },
  { name: 'Knotty Ash', path: null },
  { name: 'Old Swan', path: null },
];

export default function EmergencyPlumberLiverpool() {
  return (
    <>
      <SEO
        title="Emergency Plumber Liverpool | 24/7 Rapid Response"
        description="Burst pipe or sudden leak in Liverpool? Call Paul Scott directly. Fast 24/7 emergency plumbing response across Liverpool and Knowsley. Gas Safe registered."
        keywords="emergency plumber liverpool, 24 hour plumber, burst pipe repair, local emergency plumbing"
        canonical="https://liverpoolsplumber.co.uk/emergency-plumber-liverpool"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — urgent, direct */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-bold text-red-300 ring-1 ring-red-400/30">
              <Clock className="h-4 w-4" />
              Available 24/7 — No Answer Machines
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Emergency Plumber in Liverpool — Available 24/7
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              A burst pipe or severe leak can cause thousands in damage within hours. Paul Scott provides emergency plumbing across Liverpool and Knowsley. Call him directly on 0151 440 2614 — no call centres, no waiting, just fast local response.
            </p>
            <a
              href="tel:01514402614"
              className="inline-flex items-center gap-3 rounded-full bg-red-500 px-8 py-5 text-xl font-black text-white transition-all hover:bg-red-600 active:scale-95 shadow-2xl shadow-red-500/30"
            >
              <Phone className="h-6 w-6 fill-current" />
              Call Now — 0151 440 2614
            </a>
          </div>
        </div>
      </section>

      {/* What counts as emergency */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">What counts as a plumbing emergency?</h2>
            <p className="text-lg text-gray-600">Not every issue needs an emergency call-out. But these ones do:</p>
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

      {/* What to do before Paul arrives */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900">What to do while you wait</h2>
              <p className="mb-6 text-gray-600">Acting quickly can save you a fortune in water damage. Here&apos;s what to do before Paul arrives:</p>
              <div className="space-y-4">
                {beforePaulArrives.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas covered */}
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900">Areas covered</h2>
              <p className="mb-6 text-gray-600">Paul covers Liverpool and Knowsley in full, including:</p>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 font-semibold text-gray-700">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    {area.path ? (
                      <a href={area.path} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">{area.name}</a>
                    ) : (
                      area.name
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">Not on the list? Ring Paul anyway — if he can reach you, he will.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Emergency plumbing — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Don&apos;t wait. Call now.</h2>
          <p className="mb-8 text-xl text-blue-100">Every minute matters with a plumbing emergency. Paul picks up directly.</p>
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

