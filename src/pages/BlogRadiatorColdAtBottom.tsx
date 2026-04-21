import React from 'react';
import { Clock, Tag, ArrowLeft, ArrowRight, Share2, CheckCircle2, AlertTriangle, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function BlogRadiatorColdAtBottom() {
  return (
    <>
      <SEO
        title="Why is my radiator cold at the bottom? | Heating Tips Liverpool"
        description="A radiator that is cold at the bottom but warm at the top usually means sludge or debris has built up inside. Find out how to fix it with PJS Plumbing."
        keywords="radiator cold at bottom, fix cold radiator, radiator sludge, power flush liverpool, heating repair knowsley"
        canonical="https://liverpoolsplumber.co.uk/blog/radiator-cold-at-bottom"
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  <Tag className="h-3 w-3" /> Heating
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                  <Clock className="h-4 w-4" /> 4 min read
                </span>
              </div>
              
              <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Why is my radiator cold at the bottom?
              </h1>
              
              <div className="flex items-center gap-4 border-b border-gray-200 pb-8">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                  P
                </div>
                <div>
                  <p className="font-bold text-gray-900">Paul Scott</p>
                  <p className="text-sm text-gray-500">PJS Plumbing & Heating</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-blue max-w-none text-gray-700">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                It's one of the most common calls I get across Liverpool and Knowsley during the winter months. You turn the heating on, the top of the radiator gets piping hot, but the bottom stays stone cold. 
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">The short answer: It's usually sludge</h2>
              <p>
                When a radiator is cold at the bottom but hot at the top, the culprit is almost always a build-up of <strong>heating sludge</strong> (also known as magnetite). 
              </p>
              <p>
                Over time, the water circulating inside your central heating system reacts with the steel inside your radiators. This chemical reaction creates a black, mud-like substance. Because this sludge is heavier than water, it naturally sinks and settles at the bottom of the radiators, preventing the hot water from circulating fully.
              </p>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm my-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4 mt-0">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  Is it dangerous?
                </h3>
                <p className="mb-0">
                  No, a cold bottom on a radiator isn't immediately dangerous. However, if left untreated, that sludge forces your boiler to work much harder to pump water around your home. This severely reduces your heating efficiency, spikes your gas bills, and can eventually lead to the boiler breaking down completely.
                </p>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">How do you fix it?</h2>
              
              <p>Depending on how severe the sludge build-up is, there are a few ways to tackle it:</p>

              <div className="space-y-6 my-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mt-0 mb-2">Bleeding the radiator? (Probably won't work!)</h4>
                    <p className="text-base text-gray-600 m-0">
                      I mention this first because it's what most people try. Bleeding a radiator is fantastic when the <em>top</em> is cold (which means trapped air), but it won't do anything for a cold <em>bottom</em>. Air rises, sludge sinks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mt-0 mb-2">Chemical flush</h4>
                    <p className="text-base text-gray-600 m-0">
                      If the sludge is light and fresh, a chemical flush might do the trick. A chemical cleanser is poured into the system, left to circulate for a few days to break down the grime, and then flushed out with clean water.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mt-0 mb-2">Power Flushing (The best solution)</h4>
                    <p className="text-base text-gray-600 m-0">
                      If the radiator is completely hard-packed with magnetite, you need a Power Flush. This involves connecting a powerful machine to your heating system that pumps water and chemicals through your pipes and radiators at high velocity, blasting away the stubborn sludge. 
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">How to stop the sludge coming back</h2>
              <p>
                Once your system is clean, the last thing you want is for the sludge to return in a few years. Whenever I clear a system out for my customers in Liverpool, I always recommend two key preventative measures:
              </p>
              
              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Adding Inhibitor:</strong> This is a chemical liquid mixed into your heating water that coats the inside of your radiators, stopping the rusting process that creates the sludge in the first place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Installing a Magnetic Filter (e.g. MagnaClean):</strong> This is a brilliant little device fitted to the pipework near your boiler. It acts like a trap, using a powerful magnet to catch any tiny bits of rust roaming around your system before they can settle into the bottom of a radiator.</span>
                </li>
              </ul>

            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-blue-600 p-10 sm:p-12 text-center shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-black text-white">Radiator still playing up?</h3>
                <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                  If you're in the Liverpool or Knowsley area and you can't get your heating working efficiently, give me a call. I can diagnose the problem properly and give you a straight-talking quote to get it sorted.
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
                    Send a message
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
