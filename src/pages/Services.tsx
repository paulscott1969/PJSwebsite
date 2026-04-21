import React from 'react';
import { Phone, CheckCircle2, Flame, Droplets, Thermometer, Wrench, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const servicesList = [
  {
    id: 'boiler',
    icon: Flame,
    color: 'bg-blue-50 text-blue-600',
    accentColor: 'bg-blue-600',
    cardBg: 'bg-blue-50',
    title: 'Boiler Repair & Servicing',
    path: '/boiler-repair-servicing',
    desc: 'Boiler broken or making a noise it shouldn\'t? Paul diagnoses and repairs all makes across Liverpool. Annual servicing also available — the best way to avoid a mid-winter breakdown.',
    features: ['All makes and models', 'Same-day repair where possible', 'Annual servicing', 'Gas Safe certified work'],
    quote: '"Paul came out the same day my boiler packed in. Sorted it in under an hour. Wouldn\'t use anyone else."',
  },
  {
    id: 'emergency',
    icon: Droplets,
    color: 'bg-red-50 text-red-600',
    accentColor: 'bg-red-600',
    cardBg: 'bg-red-50',
    title: 'Emergency Plumber',
    path: '/emergency-plumber-liverpool',
    desc: 'Burst pipe, serious leak, no water — Paul operates a 24/7 emergency service across Liverpool and Knowsley. You call, he comes. No call centre, no waiting.',
    features: ['Available 24/7', 'Burst pipes & major leaks', 'Flood prevention', 'Direct line to Paul'],
    quote: '"Rang Paul at 11pm on a Sunday with a burst pipe. He was at the house within the hour. Absolute legend."',
  },
  {
    id: 'heating',
    icon: Thermometer,
    color: 'bg-orange-50 text-orange-600',
    accentColor: 'bg-orange-600',
    cardBg: 'bg-orange-50',
    title: 'Central Heating',
    path: '/heating',
    desc: 'Cold radiators, noisy systems, or a full installation from scratch — Paul handles the lot. Powerflushing, pump repairs, radiator changes, smart thermostats.',
    features: ['Full system installation', 'Radiator fitting', 'Powerflushing', 'Smart controls & thermostats'],
    quote: '"Had a powerflush done. The difference in how the radiators heat up is night and day. Should have done it years ago."',
  },
  {
    id: 'plumbing',
    icon: Wrench,
    color: 'bg-green-50 text-green-600',
    accentColor: 'bg-green-600',
    cardBg: 'bg-green-50',
    title: 'General Plumbing',
    path: '/plumbing',
    desc: 'Taps, toilets, showers, blocked drains, bathroom suites, pipework — the full range of domestic plumbing. No job is too small and nothing gets bodged.',
    features: ['Leaks & drips', 'Tap & toilet repairs', 'Shower installation', 'Bathroom fitting'],
    quote: '"Fixed a dripping tap that three other plumbers said wasn\'t worth bothering with. Paul sorted it in 15 minutes."',
  },
  {
    id: 'gas',
    icon: ShieldCheck,
    color: 'bg-purple-50 text-purple-600',
    accentColor: 'bg-purple-600',
    cardBg: 'bg-purple-50',
    title: 'Gas Safety Certificates',
    path: '/gas-safety-certificate-liverpool',
    desc: 'Landlords — your CP12 certificate is a legal requirement. Paul carries out gas safety inspections across Liverpool and Knowsley with fast turnaround.',
    features: ['CP12 for landlords', 'Fast turnaround', 'All gas appliances checked', 'Gas Safe registered'],
    quote: '"Gets my gas safety done every year without fuss. Always on time and gives me the certificate the same day."',
  },
];

const knowsleyAreas = ['Huyton', 'Prescot', 'Whiston', 'Kirkby', 'Halewood', 'Rainhill', 'Cronton', 'Tarbock', 'Roby', 'Dovecot', 'Stockbridge Village', 'Tower Hill'];

export default function Services() {
  return (
    <>
      <SEO
        title="All Plumbing & Heating Services Liverpool | PJS Plumbing"
        description="Full range of plumbing and heating services across Liverpool and Knowsley. Boiler repair, emergency plumbing, central heating, gas safety certificates and more. Paul Scott — 40 years experience."
        keywords="plumbing services liverpool, boiler repair liverpool, emergency plumber liverpool, central heating liverpool, gas safety certificate liverpool, plumber knowsley"
        canonical="https://liverpoolsplumber.co.uk/services"
      />

      {/* Hero */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-7xl">Plumbing & Heating Services in Liverpool & Knowsley</h1>
            <p className="text-xl text-blue-100/80 sm:text-2xl">
              From a dripping tap to a full central heating installation — 40 years of plumbing and heating experience, serving Liverpool and Knowsley.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {servicesList.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col gap-16 lg:${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className="flex-1">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900">{service.title}</h2>
                  <p className="mb-8 text-xl leading-relaxed text-gray-600">{service.desc}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 font-bold text-gray-900">
                        <div className={`h-1.5 w-1.5 rounded-full ${service.accentColor}`} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.path}
                    className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Learn more about {service.title} →
                  </Link>
                </div>
                <div className="flex-1">
                  <div className={`rounded-3xl ${service.cardBg} p-12`}>
                    <p className="mb-6 text-lg font-bold text-gray-800 italic">{service.quote}</p>
                    <a
                      href="tel:01514402614"
                      className={`inline-flex items-center gap-3 rounded-full ${service.accentColor} px-8 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95`}
                    >
                      <Phone className="h-5 w-5 fill-current" />
                      Call Paul Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowsley Section */}
      <section className="bg-blue-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/30 px-4 py-1.5 text-sm font-bold text-blue-300 ring-1 ring-blue-400/30">
                <MapPin className="h-4 w-4" /> Covering All of Knowsley
              </div>
              <h2 className="mb-6 text-4xl font-black tracking-tight">Plumbing & heating across Knowsley</h2>
              <div className="space-y-4 text-blue-100/90 leading-relaxed">
                <p>
                  Paul Scott was born and raised in this part of Merseyside. He started his apprenticeship locally at 16 and has been serving Knowsley families ever since. He knows the estates, the typical boiler types, and the plumbing quirks that come with older Knowsley housing stock.
                </p>
                <p>
                  He's not a national company dispatching strangers — he's a local engineer who knows the area and knows his trade. Most of his Knowsley work comes through word of mouth, which says everything.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 font-bold text-white">Areas covered in Knowsley:</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {knowsleyAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-blue-100">
                      <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-blue-300">Not on the list? Give Paul a ring — he likely covers your postcode too.</p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                {
                  Icon: ShieldCheck,
                  title: 'Gas Safe Registered',
                  desc: 'Reg #221708 — verifiable at gassaferegister.co.uk. Never use an unregistered engineer for gas work.',
                },
                {
                  Icon: CheckCircle2,
                  title: 'Fully Insured',
                  desc: "Paul carries full public liability insurance. If anything goes wrong (rare after 40 years), you're covered.",
                },
                {
                  Icon: Wrench,
                  title: 'Honest Pricing',
                  desc: 'Paul gives you a price before he starts. No hidden call-out charges, no extras that weren\'t agreed.',
                },
                {
                  Icon: Phone,
                  title: '24/7 Emergency',
                  desc: 'For urgent plumbing emergencies in Knowsley, call 0151 440 2614. You speak to Paul directly, any time.',
                },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-blue-800/50 p-6 ring-1 ring-blue-700">
                  <Icon className="mb-3 h-7 w-7 text-blue-300" />
                  <h4 className="mb-1 font-bold text-white">{title}</h4>
                  <p className="text-sm text-blue-200">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-blue-400" />
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl">Gas Safe Registered &amp; Fully Insured</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Paul Scott has been a qualified plumber and gas engineer for 40 years. Every job is done legally, safely, and to a standard he'd be happy putting his name to.
          </p>
          <a
            href="tel:01514402614"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-xl font-black text-white transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-6 w-6 fill-current" />
            0151 440 2614
          </a>
        </div>
      </section>
    </>
  );
}
