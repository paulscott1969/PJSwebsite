import React from 'react';
import { Phone, CheckCircle2, Thermometer, ShieldCheck, Wrench, Droplets } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does central heating installation cost in Liverpool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the size of your property, the type of system, and whether any existing pipework can be kept. Paul gives you an honest upfront price after looking at the job — no estimates that double by the time the invoice arrives. Call 0151 440 2614 for a quote."
      }
    },
    {
      "@type": "Question",
      "name": "What is powerflushing and do I need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Powerflushing cleans sludge and debris out of your heating system — the stuff that causes cold spots at the bottom of radiators and makes your pump work harder than it should. If your radiators are cold at the bottom or your system is noisy, it's worth considering."
      }
    },
    {
      "@type": "Question",
      "name": "My radiators have cold spots — what's causing it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cold at the top usually means trapped air — a simple bleed sorts it. Cold at the bottom is typically sludge buildup, which needs a flush. Paul can check your system and tell you what's actually going on."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work on all types of heating systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul has 40 years of experience working on all types of central heating systems across Liverpool and Knowsley — from old gravity-fed systems to modern pressurised setups and underfloor heating."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fit smart thermostats and heating controls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul installs and sets up smart thermostats and zone controls. They make a real difference to how efficiently your heating runs, and they're not as complicated to use as people expect."
      }
    }
  ]
};

const heatingServices = [
  {
    icon: Thermometer,
    title: 'Central heating installation',
    desc: 'Full design and installation of efficient central heating systems. Whether it\'s a first-time fit or replacing an old system, Paul sorts it properly from start to finish.',
  },
  {
    icon: Wrench,
    title: 'Heating system repairs',
    desc: 'Pumps, valves, thermostats, zone controllers, pipework — Paul finds the fault and fixes it. He won\'t replace things that don\'t need replacing just to pad the bill.',
  },
  {
    icon: Droplets,
    title: 'Powerflushing',
    desc: 'Gets rid of the sludge and debris that builds up over time, reducing efficiency and causing cold spots. Makes a noticeable difference to how well the system heats your home.',
  },
  {
    icon: Thermometer,
    title: 'Radiator installation & replacement',
    desc: 'Old radiators that never quite get warm, or new ones for a room you\'re adding to the system. Paul swaps them over neatly with no mess left behind.',
  },
  {
    icon: Wrench,
    title: 'Smart thermostats & controls',
    desc: 'Nest, Hive, or standard programmable controls — Paul installs them and makes sure they\'re set up correctly before he leaves, so you\'re not left guessing.',
  },
  {
    icon: ShieldCheck,
    title: 'System health checks',
    desc: 'Not sure if your heating is running as it should? Paul can run through the whole system and tell you honestly what\'s working, what\'s worn, and what\'s not worth worrying about.',
  },
];

export default function Heating() {
  return (
    <>
      <SEO
        title="Central Heating Liverpool | Installation, Repair & Servicing"
        description="Central heating installation, repairs and powerflushing across Liverpool and Knowsley. Paul Scott — Gas Safe registered, 40 years experience, honest upfront pricing. Call 0151 440 2614."
        keywords="central heating liverpool, heating installation liverpool, radiator installation liverpool, powerflushing liverpool, heating repair knowsley, heating engineer liverpool"
        canonical="https://liverpoolsplumber.co.uk/heating"
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
              Central Heating in Liverpool &amp; Knowsley
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Cold radiators, noisy systems, or starting from scratch — Paul at PJS Plumbing handles all of it. Whether it's a new installation, a repair, or a powerflush to get your heating running properly again, he's been doing this across Liverpool and Knowsley for 40 years.
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

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">What we can help you with</h2>
            <p className="text-lg text-gray-600">From full system installations to individual repairs — here's the range of heating work Paul does across Liverpool.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {heatingServices.map((service, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Paul */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">A heating engineer who tells it straight</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Paul's been working on central heating systems in Liverpool since the mid-eighties. He knows the common problems with Merseyside housing stock, the boiler models that have always been trouble, and the shortcuts that cause bigger issues down the line. He doesn't cut corners because he's the one who ends up coming back to fix them.
                </p>
                <p>
                  When you call Paul, you speak to Paul. There's no job management system, no junior engineer being dispatched. He'll ask what's going on, tell you what he thinks it is, and give you a realistic idea of what it's going to cost before he even comes out.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  '40 years working on all types of central heating systems',
                  'Gas Safe registered (#221708) and fully insured',
                  'Fixed pricing agreed before work starts — no surprises',
                  'Local to Liverpool and Knowsley — quick response times',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-blue-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Signs your heating system needs attention</h3>
                <div className="space-y-3">
                  {[
                    'Radiators that are warm at the top but cold at the bottom',
                    'The boiler firing up but the house taking a long time to heat',
                    'A banging or gurgling noise from the pipes',
                    'Some rooms consistently colder than others',
                    'Your energy bills creeping up despite normal usage',
                  ].map((sign, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      <p className="text-gray-700 text-sm">{sign}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">Any of these sound familiar? Give Paul a ring — he'll tell you honestly what you're dealing with.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Central heating — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Heating not performing?</h2>
          <p className="mb-8 text-xl text-blue-100">Call Paul today — he'll find the problem and fix it properly.</p>
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
