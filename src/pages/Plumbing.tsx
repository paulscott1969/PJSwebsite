import React from 'react';
import { Phone, CheckCircle2, Droplets, ShieldCheck, Wrench, AlertTriangle } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you fix leaking pipes in Liverpool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Paul deals with pipe leaks regularly across Liverpool and Knowsley — from a slow drip under the sink to a pipe that's burst in the wall. He'll find it, fix it, and make sure it's not going to cause a problem again. Call 0151 440 2614."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair a dripping tap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Of course. A dripping tap wastes more water than people realise and can damage the tap seat over time. Paul replaces washers, cartridges, or the whole tap if needed. No job is too small."
      }
    },
    {
      "@type": "Question",
      "name": "What plumbing work do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pretty much everything — leaks, taps, toilets, blocked drains, shower installations, bathroom fitting, cylinder and tank work, and general pipework. If it involves water in your home, Paul can usually help. Ring him on 0151 440 2614."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you come out for a plumbing emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul offers a 24/7 emergency service for urgent plumbing problems across Liverpool and Knowsley. For non-emergencies, he'll find a time that suits you — usually within a few days."
      }
    },
    {
      "@type": "Question",
      "name": "Do you fit new bathrooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — from a like-for-like suite replacement to a full bathroom refit. Paul handles the plumbing side and can recommend good tilers and decorators if the job needs it."
      }
    }
  ]
};

const plumbingServices = [
  {
    icon: AlertTriangle,
    title: 'Leak detection & repair',
    desc: 'From a slow drip under the sink to water coming through a ceiling — Paul tracks down the source and fixes it properly rather than just patching it temporarily.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Droplets,
    title: 'Taps & mixers',
    desc: 'Dripping taps, stiff taps, taps that bang when you turn them off. Paul replaces washers, cartridges, or the whole unit — whichever actually solves the problem.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Toilets',
    desc: 'Constantly running, won\'t flush properly, or rocking on its base. Paul deals with all of it — cistern internals, pan replacements, and soil pipe work too.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Droplets,
    title: 'Blocked drains',
    desc: 'Slow-draining sinks, blocked toilets, or drains that back up in heavy rain. Paul clears them and, more importantly, works out why they blocked in the first place.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Shower installation & repair',
    desc: 'New shower trays and enclosures, electric shower fitting, power showers, or fixing the one that\'s lost its pressure — Paul handles the plumbing side of it.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Bathroom suites',
    desc: 'Replacing an old suite with a new one, or fitting out a new bathroom — Paul does the pipework and connections, working alongside your tiler if needed.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Droplets,
    title: 'Hot water cylinders & tanks',
    desc: 'Cylinder replacements, immersion heater repairs, unvented system work, cold water tanks. Paul\'s worked on all types across Liverpool\'s varied housing stock.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Pipework & general plumbing',
    desc: 'New pipework for extensions or kitchen moves, isolating old supplies, connecting appliances like dishwashers and washing machines — the everyday plumbing jobs that still need doing right.',
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function Plumbing() {
  return (
    <>
      <SEO
        title="Plumber Liverpool | Taps, Leaks, Toilets, Drains & More"
        description="General plumbing across Liverpool and Knowsley. Leaks, taps, toilets, blocked drains, showers, bathroom fitting — Paul Scott, local plumber, 40 years experience. Call 0151 440 2614."
        keywords="plumber liverpool, plumbing liverpool, tap repair liverpool, leak repair liverpool, blocked drain liverpool, bathroom plumber liverpool, local plumber knowsley"
        canonical="https://liverpoolsplumber.co.uk/plumbing"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/30 px-4 py-1.5 text-sm font-bold text-blue-300 ring-1 ring-blue-400/30">
              <ShieldCheck className="h-4 w-4" />
              Local Plumber — Serving Liverpool &amp; Knowsley
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Plumbing Services in Liverpool &amp; Knowsley
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              Dripping tap, leaking pipe, blocked drain, new bathroom — whatever the job, Paul at PJS Plumbing has been sorting plumbing problems across Liverpool and Knowsley for 40 years. You call him, he comes out, he fixes it. No fuss.
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
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">Plumbing jobs Paul covers</h2>
            <p className="text-lg text-gray-600">The full range of domestic plumbing work — nothing too small, nothing too complicated.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plumbingServices.map((service, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${service.color}`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Paul + Trust */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">A local plumber you can actually rely on</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Paul Scott has been a plumber in Liverpool since he was 16. He's worked on everything from 1930s terraces in Huyton to modern new-builds in Knowsley — he knows the area's housing stock and the problems that tend to come with it.
                </p>
                <p>
                  Most of Paul's work comes through recommendations. A customer in Prescot tells their neighbour, who tells their sister-in-law in Whiston. That's how it works when you do a decent job at a fair price and actually turn up when you say you will.
                </p>
                <p>
                  There's no call centre, no online booking system, no junior tradesman turning up instead. When you ring Paul, you get Paul. Tell him what's going on and he'll tell you straight whether it's something he can fix over the phone or if he needs to come and take a look.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                {
                  Icon: ShieldCheck,
                  title: 'Fully insured',
                  desc: 'Paul carries full public liability insurance. If anything goes wrong (it\'s rare after 40 years), you\'re covered.',
                },
                {
                  Icon: CheckCircle2,
                  title: 'Honest pricing',
                  desc: "He gives you a price before he starts. No hidden call-out fees, no extras added to the invoice that you didn't agree to.",
                },
                {
                  Icon: Wrench,
                  title: 'Proper workmanship',
                  desc: 'Paul fixes things to last, not to pass a quick inspection. If it needs replacing rather than repairing, he\'ll tell you — and why.',
                },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-blue-50 p-6">
                  <Icon className="mb-3 h-8 w-8 text-blue-600" />
                  <h4 className="mb-2 font-bold text-gray-900">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency vs Planned */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-red-600 p-10 text-white">
              <AlertTriangle className="mb-4 h-10 w-10" />
              <h3 className="mb-4 text-2xl font-black">Urgent plumbing problem?</h3>
              <p className="mb-6 text-red-100 leading-relaxed">
                Burst pipe, serious leak, no water — Paul operates a 24/7 emergency service across Liverpool and Knowsley. Don't wait until Monday.
              </p>
              <a
                href="tel:01514402614"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-red-600 transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="h-5 w-5 fill-current" />
                Call Now — 0151 440 2614
              </a>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
              <Wrench className="mb-4 h-10 w-10 text-blue-600" />
              <h3 className="mb-4 text-2xl font-black text-gray-900">Something to sort when it suits?</h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Not every plumbing job is an emergency. If you've got a dripping tap or a toilet that's been playing up for a while, Paul can arrange a time that works around you.
              </p>
              <a
                href="tel:01514402614"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="h-5 w-5 fill-current" />
                Book a Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Plumbing — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Got a plumbing job that needs sorting?</h2>
          <p className="mb-8 text-xl text-blue-100">Call Paul — fair price, proper fix, no messing about.</p>
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
