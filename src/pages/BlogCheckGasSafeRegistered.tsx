import React from 'react';
import { Clock, Tag, ArrowLeft, CheckCircle2, AlertTriangle, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function BlogCheckGasSafeRegistered() {
  return (
    <>
      <SEO
        title="How to Check Your Plumber is Gas Safe Registered | PJS Plumbing Liverpool"
        description="Anyone can claim to be Gas Safe. Here's how to verify in 30 seconds — and why it matters more than you might think."
        keywords="gas safe register check, how to check gas safe, verify gas safe engineer, gas safe plumber liverpool, gas safe registered plumber knowsley"
        canonical="https://liverpoolsplumber.co.uk/blog/check-gas-safe-registered"
      />

      <article className="bg-gray-50 pb-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            {/* Header / Meta */}
            <div className="mb-8">
              <Link to="/blog" className="mb-8 font-bold text-blue-600 hover:underline flex items-center gap-2 w-fit">
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                  <Tag className="h-3 w-3" /> Tips
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                  <Clock className="h-4 w-4" /> 4 min read
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                How to check your plumber is Gas Safe registered
              </h1>

              <div className="flex items-center gap-4 border-b border-gray-200 pb-8">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                  P
                </div>
                <div>
                  <p className="font-bold text-gray-900">Paul Scott</p>
                  <p className="text-sm text-gray-500">PJS Plumbing &amp; Heating</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-blue max-w-none text-gray-700">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                It sounds like one of those things you'd never need to worry about — surely if someone says they're Gas Safe, they are? Unfortunately, it's not that simple. Every year, rogue traders carry out illegal gas work across the UK, putting families at serious risk. The good news is that checking takes about 30 seconds, and I'm going to show you exactly how.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">What is the Gas Safe Register?</h2>
              <p>
                The Gas Safe Register replaced CORGI back in 2009, and it's the official list of engineers who are legally allowed to work on gas appliances in the UK. If someone isn't on it, they shouldn't be touching your boiler, your gas cooker, your fire — nothing. It's that black and white.
              </p>
              <p>
                Every registered engineer carries a Gas Safe ID card and has a unique registration number. The register is managed by Capita on behalf of the Health and Safety Executive (HSE), and it's there to protect you and your family from unsafe work.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Why does it actually matter?</h2>
              <p>
                I know what you might be thinking: "He seemed like a decent bloke and charged a fair price — does it really matter if he's registered?" In a word, yes. Here's why:
              </p>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Carbon monoxide poisoning:</strong> Badly fitted or serviced gas appliances can leak carbon monoxide — an odourless, colourless gas that kills around 30 people a year in the UK and hospitalises hundreds more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Gas leaks and explosions:</strong> An improperly connected gas supply is a ticking time bomb. It's not dramatic to say that — it's just the reality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Invalid insurance:</strong> If unregistered gas work causes damage to your property, your home insurance may refuse to pay out. The same goes for landlord insurance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>No legal comeback:</strong> If something goes wrong and the person who did the work wasn't registered, you've got very little legal protection. It's a nightmare scenario.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">How to check online (the quickest way)</h2>
              <p>
                This is by far the easiest method, and it takes less than a minute:
              </p>

              <ol className="list-none pl-0 space-y-4 my-8 counter-reset-none">
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">1</span>
                  <span>Go to the <strong>Gas Safe Register website</strong> at <a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">gassaferegister.co.uk</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">2</span>
                  <span>Click <strong>"Find an engineer"</strong> and enter their registration number, name, or postcode.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">3</span>
                  <span>The results will show you whether they're currently registered, what types of gas work they're qualified to do, and when their registration expires.</span>
                </li>
              </ol>

              <p>
                That last point is important. Gas Safe registration isn't a blanket licence. An engineer might be qualified to work on boilers but not gas fires, or central heating but not cookers. The register shows you exactly what appliances they're certified to work on. If they're not listed for the work you need, they shouldn't be doing it — even if they're registered for other things.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">How to check their ID card</h2>
              <p>
                Every Gas Safe registered engineer carries an ID card. You're well within your rights to ask to see it before they start any work — and honestly, any decent engineer won't bat an eyelid. If someone gets defensive when you ask, that's a red flag in itself.
              </p>
              <p>
                Here's what to look for on the card:
              </p>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Their photo:</strong> Make sure it matches the person standing in front of you. It sounds obvious, but borrowed or stolen cards do get used.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>The expiry date:</strong> The card is only valid for 12 months. If it's expired, their registration has lapsed and they shouldn't be working on gas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>The hologram:</strong> Genuine cards have a holographic strip. It's hard to fake.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>The QR code on the back:</strong> You can scan this with your phone and it'll take you straight to their registration details on the Gas Safe website. This is probably the quickest check of all.</span>
                </li>
              </ul>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm my-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4 mt-0">
                  <Shield className="h-6 w-6 text-blue-500" />
                  Quick tip: snap a photo
                </h3>
                <p className="mb-0">
                  When an engineer shows you their Gas Safe card, take a quick photo of it on your phone. That way, you've got their registration number on file if you ever need it later — for an insurance claim, a complaint, or simply your own records. Most engineers are happy for you to do this.
                </p>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">What if they're not registered?</h2>
              <p>
                If you find out that someone who's done gas work in your home isn't on the Gas Safe Register, don't ignore it. Here's what you should do:
              </p>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-black text-red-600">!</span>
                  <span><strong>Stop using the appliance</strong> they worked on until it's been checked by a properly registered engineer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-black text-red-600">!</span>
                  <span><strong>Report them</strong> to the Gas Safe Register on <strong>0800 408 5500</strong> or through the <a href="https://www.gassaferegister.co.uk/report-illegal-gas-work/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Gas Safe website</a>. This isn't about being petty — it's about protecting the next person.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-black text-red-600">!</span>
                  <span><strong>Get the work inspected</strong> by a registered engineer as soon as possible. They'll be able to tell you whether it's safe or if anything needs to be put right.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">A note from Paul</h2>
              <p>
                I'll be honest — this is something I feel strongly about. I've seen the aftermath of dodgy gas work more times than I'd like, and it's always avoidable. Checking takes half a minute. It's free. And it could genuinely save a life.
              </p>
              <p>
                If you're ever unsure about an engineer, just check. And if you want to look me up, my Gas Safe registration number is on every invoice I send and on my ID card. I'd expect nothing less from anyone working in your home.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-blue-600 p-10 sm:p-12 text-center shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-black text-white">Need a Gas Safe Registered Plumber?</h3>
                <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                  I'm fully Gas Safe registered and cover Liverpool, Knowsley, and the surrounding areas. If you need any gas work done properly and safely, give me a call.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:01514402614"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-blue-600 transition-transform hover:scale-105 active:scale-95 shadow-md w-full sm:w-auto justify-center"
                  >
                    Call Paul — 0151 440 2614
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-800 w-full sm:w-auto justify-center"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Back link bottom */}
            <div className="mt-12 text-center">
              <Link to="/blog" className="inline-flex items-center justify-center gap-2 font-bold text-gray-500 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to blog
              </Link>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
