import React from 'react';
import { Clock, Tag, ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function BlogLandlordGasSafetyCheck() {
  return (
    <>
      <SEO
        title="What does a Landlord Gas Safety Check involve? | PJS Plumbing Liverpool"
        description="A lot of landlords are unsure what the annual gas safety inspection covers. This explains the full process from start to certificate."
        keywords="landlord gas safety check liverpool, gas safety certificate knowsley, cp12 certificate, what is a gas safety check, landlord requirements"
        canonical="https://liverpoolsplumber.co.uk/blog/landlord-gas-safety-check"
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  <Tag className="h-3 w-3" /> Gas Safety
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                  <Clock className="h-4 w-4" /> 4 min read
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                What does a landlord gas safety check actually involve?
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
                If you rent out a property, getting an annual gas safety check (often called a CP12) isn't just a good idea—it's the law. But a lot of landlords—and tenants, for that matter—aren't entirely sure what actually happens during the inspection. Let's clear up the confusion and look at exactly what I do when I come out to check your property.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Why is the check necessary?</h2>
              <p>
                First things first: the goal is to make sure every gas appliance in the property is safe to use. Faulty gas appliances can cause leaks, fires, explosions, and carbon monoxide poisoning. As a landlord, it's your legal responsibility to ensure your tenants are safe. If you don't have a valid certificate, you can face massive fines and even prison time. It's really not something to mess about with.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">What exactly gets checked?</h2>
              <p>
                When I turn up to do a gas safety check, I don't just wave a wand over the boiler. It's a rigorous process. Here's a breakdown of what I'm looking at:
              </p>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>The Boiler and Appliances:</strong> I check the boiler, gas cooker, gas fire, and any other gas appliances provided by the landlord. I'm making sure they're set up correctly and running at the right operating pressure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>The Gas Burn:</strong> I check that all appliances are burning the gas properly. A healthy flame is blue. If it's burning yellow or orange, that's a warning sign for incomplete combustion and potential carbon monoxide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Flues and Chimneys:</strong> Harmful gases need to escape safely. I check that flues and chimneys are clear, properly connected, and safely expelling fumes outside.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Ventilation:</strong> Gas appliances need a steady supply of fresh air to burn safely. I'll make sure there's adequate ventilation and that air vents haven't been blocked up.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Safety Devices:</strong> Finally, I check that all safety devices (like the ones that cut off the gas if the flame goes out) are working exactly as they should.</span>
                </li>
              </ul>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm my-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4 mt-0">
                  <AlertTriangle className="h-6 w-6 text-green-500" />
                  What about the tenant's appliances?
                </h3>
                <p className="mb-0">
                  You are only responsible for the appliances <strong>you</strong> provide. If the tenant brings their own gas cooker, you are responsible for the pipework leading up to it, but the appliance itself is their responsibility to maintain. However, I will still give it a visual once-over to make sure it's not a glaring hazard.
                </p>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">What happens after the check?</h2>
              <p>
                Once I've finished, I'll issue you with a Gas Safety Record (the certificate). It will list everything I've checked, the results of the tests, and detail any defects I've found. 
              </p>
              <p>
                If an appliance fails, I will classify it as either 'At Risk' or 'Immediately Dangerous'. I'll disconnect it, cap off the gas supply to it, and explain exactly what needs fixing. You cannot let your tenants use that appliance until it's been repaired by a Gas Safe engineer.
              </p>
              <p>
                You must give a copy of the new certificate to your existing tenants within 28 days of the check, or to new tenants before they move in. You also need to keep your copy on file for at least two years.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">A final word on timing</h2>
              <p>
                Don't leave it until the last day. You can actually get the check done up to two months before the current certificate expires, and the new certificate will run for 12 months from the expiry date of the old one. So there's no excuse for running over.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-blue-600 p-10 sm:p-12 text-center shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-black text-white">Need a Landlord Gas Safety Check?</h3>
                <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                  If you have a rental property in Liverpool or Knowsley, get in touch. I provide thorough, fully compliant CP12 certificates without the hassle.
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
                    Book your check
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
