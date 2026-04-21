import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Wrench, Flame, Droplets, Thermometer, MapPin, Star, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '@/components/SEO';

export default function Home() {
  React.useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <SEO
        title="Emergency Plumber Liverpool & Knowsley | 24/7 Local Service"
        description="Need a reliable plumber in Liverpool or Knowsley? Paul Scott offers 24/7 emergency repairs, boiler servicing, and heating installations. 40 years experience, Gas Safe registered."
        keywords="emergency plumber liverpool, plumber knowsley, boiler repair liverpool, local plumber liverpool, gas safe engineer"
        canonical="https://liverpoolsplumber.co.uk/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-900 pt-20 pb-32 lg:pt-28 lg:pb-40 text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950 to-blue-900" />
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="w-full lg:w-[60%] lg:pr-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/30 px-4 py-1.5 text-sm font-bold text-blue-300 ring-1 ring-blue-400/30"
              >
                <Clock className="h-4 w-4" />
                Got a leak? Paul&apos;s on call 24/7 across Liverpool
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Emergency Plumber Liverpool &amp; Knowsley
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-10 text-xl text-blue-100/80 sm:text-2xl"
              >
                I&apos;ve been fixing pipes and boilers across Liverpool for 40 years. No call centres, no hidden fees—just a proper job from a local engineer who knows his stuff.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="tel:01514402614"
                  className="flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95"
                >
                  <Phone className="h-5 w-5 fill-current" />
                  Call Paul Directly
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 rounded-full bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
                >
                  Ask for a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            <div className="hidden lg:block lg:w-[40%] relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -4 }}
                    transition={{ delay: 0.4 }}
                    className="relative mt-8 aspect-[4/5] overflow-hidden rounded-2xl bg-blue-800 shadow-2xl ring-4 ring-white/10"
                  >
                    <img src="/images/gallery/boiler-installation-utility-room-heating-system.webp" alt="Professional boiler installation in a Liverpool home utility room" loading="eager" className="relative z-10 h-full w-full object-cover transition-opacity duration-300 hover:opacity-90" width="1536" height="2048" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 2 }}
                    animate={{ opacity: 1, y: 0, rotate: 3 }}
                    transition={{ delay: 0.5 }}
                    className="relative z-20 -mb-8 aspect-square overflow-hidden rounded-2xl bg-blue-700 shadow-2xl ring-4 ring-white/10"
                  >
                    <img src="/images/gallery/bathroom-renovation-near-completion.webp" alt="Luxury bathroom renovation project in Merseyside near completion" loading="lazy" className="relative z-10 h-full w-full object-cover transition-opacity duration-300 hover:opacity-90" width="1536" height="2048" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 3 }}
                    animate={{ opacity: 1, y: 0, rotate: 2 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-30 -mt-12 aspect-square overflow-hidden rounded-2xl bg-blue-700 shadow-2xl ring-4 ring-white/10 ml-4"
                  >
                    <img src="/images/gallery/radiator-installation-central-heating-home-service.webp" alt="New radiator installation for a central heating system in Liverpool" loading="lazy" className="relative z-10 h-full w-full object-cover transition-opacity duration-300 hover:opacity-90" width="1536" height="2048" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -3 }}
                    transition={{ delay: 0.7 }}
                    className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl bg-blue-800 shadow-2xl ring-4 ring-white/10 -ml-4"
                  >
                    <img src="/images/gallery/glass-shower-enclosure-installation-modern-bathroom.webp" alt="Modern glass shower enclosure installation service" loading="lazy" className="relative z-10 h-full w-full object-cover transition-opacity duration-300 hover:opacity-90" width="1536" height="2048" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            <a 
              href="https://www.gassaferegister.co.uk/checkbusiness?bid=HLlbZxceM%252fmirePRUTS9Cw%253d%253d&cp=X4%252f9g6W4dHiAXQ6u1cr%252bRul1hBObcEL30E%252bYedIZhds%253d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 transition-opacity hover:opacity-75"
            >
              <ShieldCheck className="h-10 w-10 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-black text-gray-900">Gas Safe Reg</p>
                <p className="text-xs text-gray-500">#221708 - Fully Vetted</p>
              </div>
            </a>
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <Award className="h-10 w-10 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-black text-gray-900">40 Years</p>
                <p className="text-xs text-gray-500">On the Tools</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <CheckCircle2 className="h-10 w-10 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-black text-gray-900">Properly Insured</p>
                <p className="text-xs text-gray-500">Total Peace of Mind</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <Clock className="h-10 w-10 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-black text-gray-900">Liverpool Lad</p>
                <p className="text-xs text-gray-500">Local &amp; Fast Response</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <Star className="h-10 w-10 shrink-0 fill-yellow-400 text-yellow-400" />
              <div>
                <p className="text-sm font-black text-gray-900">5-Star Rated</p>
                <p className="text-xs text-gray-500">Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">Professional Plumbing Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Whether it&apos;s a dripping tap or a full heating system overhaul, Paul&apos;s got the experience to get it sorted properly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Droplets, title: 'Emergency Repairs', desc: "Burst pipes, leaks, or blockages? I'll be there fast.", link: '/emergency-plumber-liverpool' },
              { icon: Flame, title: 'Boiler Work', desc: 'Servicing, repairs, or a brand new energy-saver.', link: '/boiler-repair-servicing' },
              { icon: Thermometer, title: 'Heating Systems', desc: "Cold radiators or noisy pumps? Let's get it warm again.", link: '/heating' },
              { icon: Wrench, title: 'General Plumbing', desc: 'Taps, toilets, showers—all the bits and bobs.', link: '/plumbing' },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
                  See service details <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Paul? Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                Sick of plumbers who don&apos;t show up?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                I&apos;ve heard it all before. Plumbers who promise to come and never turn up, or &quot;experts&quot; who make a mess and charge you double for the privilege. I don&apos;t work like that.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Proper Local Service</h3>
                    <p className="text-gray-600">I&apos;m based in Liverpool and I know the area like the back of my hand. I&apos;m not some faceless franchise.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">No Hidden Extras</h3>
                    <p className="text-gray-600">The price I say is the price you pay. No &quot;call-out fees&quot; added on at the end.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Apprenticeship Trained</h3>
                    <p className="text-gray-600">I learned the trade properly. 40 years on the tools means there&apos;s not much I haven&apos;t seen.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-12 text-white shadow-2xl">
              <h2 className="mb-6 text-3xl font-black">A bit about how I work</h2>
              <p className="mb-8 text-lg text-blue-100 leading-relaxed">
                I&apos;m not a big corporate firm with a fleet of vans. It&apos;s just me, Paul. That means when you call, you&apos;re talking to the person who&apos;s actually going to do the work. I care about my reputation in Liverpool, so I don&apos;t cut corners and I don&apos;t overcharge.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  <span className="font-medium">You speak to me directly—no middleman.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  <span className="font-medium">I&apos;ll give you a fair price and stick to it.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  <span className="font-medium">I&apos;ll turn up when I say I will.</span>
                </div>
              </div>
              <a
                href="tel:01514402614"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 text-lg font-bold text-blue-600 transition-transform hover:scale-105 active:scale-95"
              >
                Give Paul a Bell
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl">How the service works</h2>
              <p className="mb-6 text-lg text-gray-400">
                I don&apos;t have a team of receptionists or a fancy booking system. When you call, you&apos;re talking to the fella who&apos;s actually going to be under your sink.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">1</div>
                  <p className="text-gray-300">We&apos;ll have a quick chat about what&apos;s gone wrong. If it&apos;s something simple, I might even be able to tell you how to fix it yourself over the phone.</p>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">2</div>
                  <p className="text-gray-300">If I need to come out, I&apos;ll give you a time and I&apos;ll stick to it. No &quot;between 9 and 5&quot; nonsense.</p>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">3</div>
                  <p className="text-gray-300">I&apos;ll get the job sorted, tidy up after myself, and make sure you&apos;re happy before I head off to the next one.</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-3xl bg-blue-600/10 ring-1 ring-white/10" />
              <div className="relative p-12">
                <blockquote className="text-2xl italic text-blue-100">
                  &quot;I&apos;ve lived in Liverpool all my life. I know the houses here, I know the pipes, and I know how much people value a bit of honesty.&quot;
                </blockquote>
                <p className="mt-6 font-bold text-white">— Paul Scott</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">What Liverpool Residents Say</h2>
            <p className="mt-4 text-gray-600">
              Trusted by homeowners across Merseyside for honest advice and quality workmanship.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            {/* Elfsight Google Reviews | Untitled Google Reviews */}
            <div className="elfsight-app-df471c6e-7ee9-4117-b36b-94e5636b391e" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-12 text-center shadow-sm">
            <div className="mb-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(n => (
                <Star key={n} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="mb-3 text-2xl font-black text-gray-900">Happy with our plumbing work? Leave a review.</h2>
            <p className="mb-8 text-gray-600">
              Your feedback helps other Liverpool homeowners find a trustworthy local engineer.
            </p>
            <a
              href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJQXOVYKcfe0gRg3iUiHthno4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
            >
              <Star className="h-5 w-5 fill-current" />
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* Serving Liverpool & Beyond */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">Serving Liverpool &amp; Merseyside</h2>
              <p className="mb-8 text-lg text-gray-600">
                I cover the whole of Liverpool and Knowsley, including most of Merseyside. If you&apos;re not sure whether I reach you, just give me a bell.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Liverpool City', 'Knowsley', 'Huyton', 'Prescot', 'Whiston', 'Rainhill', 'St Helens', 'Halewood'].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 font-bold text-gray-900">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    {area}
                  </div>
                ))}
              </div>
              <Link to="/service-areas" className="mt-10 inline-flex items-center gap-2 font-bold text-blue-600 hover:underline">
                View all coverage areas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/owner/plumbing-service-van-branding-residential-driveway.webp"
                alt="PJS Plumbing and Heating service van parked at a residential property in Liverpool"
                className="h-full w-full object-cover rounded-3xl"
                loading="lazy"
              width="1200" height="1096" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-6xl">Need a Local Plumber Fast?</h2>
          <p className="mb-10 text-xl text-blue-100">Don&apos;t wait for a leak to become a disaster. Call Paul Scott now for honest advice.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:01514402614"
              className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-blue-600 transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="h-6 w-6 fill-current" />
              0151 440 2614
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 rounded-full bg-blue-900 px-10 py-5 text-xl font-black text-white transition-transform hover:scale-105 active:scale-95"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
