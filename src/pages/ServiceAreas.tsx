import React from 'react';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function ServiceAreas() {
  const areas = [
    {
      name: 'Liverpool',
      description: 'Full coverage across Liverpool city centre and all suburbs. Rapid emergency response available 24/7.',
      keywords: ['City Centre', 'Anfield', 'Everton', 'Aigburth', 'Speke', 'Walton'],
      links: [
        { title: 'Emergency Plumber in Liverpool', path: '/emergency-plumber-liverpool' },
        { title: 'Boiler Repair & Servicing', path: '/boiler-repair-servicing' }
      ]
    },
    {
      name: 'Knowsley',
      description: 'Covering the entire Knowsley borough — boiler repairs, heating installs, and general plumbing.',
      keywords: ['Kirkby', 'Stockbridge Village', 'Whiston', 'Halewood'],
      links: [
        { title: 'Boiler Repair Across Knowsley', path: '/boiler-repair-knowsley' },
        { title: 'Emergency Plumbing in Knowsley', path: '/emergency-plumber-huyton' }
      ]
    },
    {
      name: 'Huyton',
      description: 'Fast, local plumbing for Huyton residents — I know the houses round here inside out.',
      keywords: ['Huyton-with-Roby', 'Page Moss', 'Bowring Park'],
      links: [
        { title: 'Emergency Plumber Huyton', path: '/emergency-plumber-huyton' },
        { title: 'Boiler Repair Huyton', path: '/boiler-repair-huyton' }
      ]
    },
    {
      name: 'Prescot',
      description: 'Expert heating and gas services for the Prescot area, including emergency repairs.',
      keywords: ['Eccleston', 'Rainhill', 'Whiston'],
      links: [
        { title: 'Emergency Plumber Prescot', path: '/emergency-plumber-prescot' },
        { title: 'Boiler Repair Prescot', path: '/boiler-repair-knowsley' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Areas Covered | Liverpool & Knowsley Plumber & Heating Engineer"
        description="Paul Scott (PJS Plumbing) covers the whole of Liverpool and Knowsley — Huyton, Prescot, Whiston, Kirkby, Halewood and more. Local plumber, 40 years experience, Gas Safe registered."
        keywords="plumber liverpool, plumber knowsley, plumber huyton, plumber prescot, heating engineer merseyside, local plumbing services merseyside"
        canonical="https://liverpoolsplumber.co.uk/service-areas"
      />

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-black tracking-tight text-gray-900 sm:text-7xl">Plumbing &amp; Heating Services Across Liverpool &amp; Knowsley</h1>
            <p className="text-xl leading-relaxed text-gray-600 sm:text-2xl">
              Paul Scott has been fixing pipes and boilers across Liverpool and the surrounding Merseyside area for 40 years. If you&apos;re in Huyton, Prescot, Knowsley, or anywhere in between — he&apos;s local and he knows the area.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {areas.map((area, i) => (
              <div key={i} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl lg:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">{area.name}</h2>
                </div>
                <p className="mb-8 text-lg text-gray-600">
                  {area.name === 'Liverpool' && "I cover the whole of Liverpool, from the city centre out to the suburbs. If you're in Anfield, Speke, or anywhere in between, I can get to you fast."}
                  {area.name === 'Knowsley' && "I'm out in Knowsley all the time, helping folks in Kirkby, Whiston, and Halewood with everything from leaky taps to new boilers."}
                  {area.name === 'Huyton' && "Huyton is just down the road for me. I've got a lot of regular customers in Roby and Page Moss who know they can rely on me."}
                  {area.name === 'Prescot' && "I've been serving Prescot and Rainhill for years. I know the houses here well, which helps when it comes to fixing old heating systems."}
                </p>
                <div className="mb-10">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">Including:</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((k, j) => (
                      <span key={j} className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Local Service Links Hub */}
                <div className="mb-8 flex flex-col gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Local Services:</h3>
                  {area.links.map((link, j) => (
                    <Link 
                      key={j} 
                      to={link.path}
                      className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {link.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>

                <a
                  href="tel:01514402614"
                  className="mt-auto inline-flex items-center gap-2 rounded-xl bg-blue-50 px-6 py-3 font-bold text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  Call Paul in {area.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl">I&apos;m just around the corner</h2>
              <p className="mb-8 text-lg text-blue-100">
                Being local means I can get to you faster when things go wrong. I&apos;ve lived and worked in Liverpool all my life, so I know the houses here like the back of my hand.
              </p>
              <div className="overflow-hidden rounded-3xl shadow-2xl mb-8">
                <img src="/images/owner/plumbing-service-van-branding-residential-driveway.webp"
                  alt="PJS Plumbing and Heating service van parked at a residential property, serving Liverpool and Knowsley"
                  className="h-full w-full object-cover rounded-3xl"
                  loading="lazy"
                width="1200" height="1096" />
              </div>
              <ul className="space-y-4">
                {[
                  'No long travel charges—I\'m local',
                  'I know the pipes in Liverpool houses',
                  'Your neighbours have used me for 40 years',
                  'Rapid response for Merseyside emergencies'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-blue-900 p-12 shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold">Don&apos;t see your area?</h3>
              <p className="mb-8 text-blue-200">
                Paul often travels further for larger projects or scheduled maintenance. Give him a call to see if he can help.
              </p>
              <a
                href="tel:01514402614"
                className="flex items-center justify-center gap-3 rounded-full bg-white py-4 text-lg font-bold text-blue-600 transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="h-5 w-5 fill-current" />
                0151 440 2614
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
