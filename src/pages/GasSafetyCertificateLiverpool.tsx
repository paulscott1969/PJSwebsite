import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, FileText, Clock } from 'lucide-react';
import SEO from '@/components/SEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often do landlords need a gas safety certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every 12 months. UK law requires landlords to carry out a gas safety check on every rental property annually and keep a copy of the certificate. Call Paul on 0151 440 2614 to book yours."
      }
    },
    {
      "@type": "Question",
      "name": "What does a landlord gas safety check involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul will inspect all gas appliances, flues, and pipework in the property. He checks for gas tightness, adequate ventilation, and correct operation of all appliances before issuing the CP12 certificate."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a landlord doesn't have a gas safety certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's illegal not to have one. Landlords can face fines and prosecution. It's also dangerous — a valid certificate protects your tenants and gives you peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to issue a gas safety certificate in Liverpool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paul can usually carry out the inspection and issue the certificate the same day. Most inspections take 30–60 minutes per property depending on the number of appliances."
      }
    }
  ]
};

const inspectionCovers = [
  'Gas boiler and associated controls',
  'Gas pipework throughout the property',
  'All gas appliances (hobs, fires, etc.)',
  'Flues and ventilation',
  'Gas pressure and flow rate',
  'Emergency controls and gas tightness',
];

export default function GasSafetyCertificateLiverpool() {
  return (
    <>
      <SEO 
        title="Gas Safety Certificate Liverpool | CP12 Landlord Safety"
        description="Need a Gas Safe certificate in Liverpool? Paul Scott provides professional CP12 inspections and safety checks for landlords and homeowners across Merseyside."
        keywords="gas safety certificate liverpool, landlord gas safety check, cp12 certificate, gas safe engineer"
        canonical="https://liverpoolsplumber.co.uk/gas-safety-certificate-liverpool"
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
              Landlord Gas Safety Certificates in Liverpool &amp; Knowsley
            </h1>
            <p className="mb-8 text-xl text-blue-100/90 leading-relaxed">
              UK law requires landlords to hold a valid Gas Safety Certificate (CP12) for every rental property. Paul at PJS Plumbing is Gas Safe registered and provides official certificates across Liverpool and Knowsley. Fast turnaround, no fuss.
            </p>
            <a
              href="tel:01514402614"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
            >
              <Phone className="h-5 w-5 fill-current" />
              Book a Certificate — 0151 440 2614
            </a>
          </div>
        </div>
      </section>

      {/* Legal requirement section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">What the law says</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Under the Gas Safety (Installation and Use) Regulations 1998, all landlords in the UK must have a gas safety check carried out every 12 months by a Gas Safe registered engineer.
                </p>
                <p>
                  You must keep a copy of the certificate and provide a copy to your tenants within 28 days of the check — and to any new tenant before they move in.
                </p>
                <p>
                  Failure to comply can result in prosecution, unlimited fines, and — more importantly — puts your tenants at risk of carbon monoxide poisoning or gas leaks.
                </p>
              </div>
              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <div className="flex gap-3">
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <p className="font-semibold text-blue-900">
                    Paul is fully Gas Safe registered (Reg #221708). Every certificate he issues is official, legally valid, and sent to you promptly after the visit.
                  </p>
                </div>
              </div>
            </div>

            {/* What's covered */}
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900">What the inspection covers</h2>
              <div className="space-y-3">
                {inspectionCovers.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <Clock className="mb-3 h-6 w-6 text-blue-600" />
                <h4 className="mb-2 font-bold text-gray-900">Quick turnaround</h4>
                <p className="text-sm text-gray-600">
                  Most inspections take 30–60 minutes. Paul will issue your certificate the same day in most cases. Ideal if you've got a tenant moving in shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">How to book your CP12</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: '1', title: 'Give Paul a ring', desc: 'Call 0151 440 2614. He\'ll sort a date and time that works for you and your tenants.' },
              { step: '2', title: 'Paul carries out the inspection', desc: 'A thorough check of all gas appliances, pipework, and flues. Usually done in under an hour.' },
              { step: '3', title: 'You get your certificate', desc: 'Paul issues the official CP12 certificate the same day so you stay fully compliant.' },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-black text-xl text-white">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-black tracking-tight text-gray-900">Gas safety certificates — common questions</h2>
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Need a gas safety certificate?</h2>
          <p className="mb-8 text-xl text-blue-100">Don&apos;t leave it to the last minute. Call Paul and get it booked in.</p>
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
