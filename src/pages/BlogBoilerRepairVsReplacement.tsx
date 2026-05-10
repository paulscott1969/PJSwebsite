import React from 'react';
import { Clock, Tag, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function BlogBoilerRepairVsReplacement() {
  return (
    <>
      <SEO
        title="Boiler Repair vs Replacement — How to Decide | PJS Plumbing Liverpool"
        description="Not sure whether to repair or replace your boiler? Liverpool plumber Paul Scott explains the 50% rule, the age × cost formula, and when it's time to let go."
        keywords="boiler repair or replace, boiler replacement liverpool, new boiler cost, boiler repair knowsley, ECO4 boiler grant liverpool, when to replace boiler"
        canonical="https://liverpoolsplumber.co.uk/blog/boiler-repair-vs-replacement"
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  <Tag className="h-3 w-3" /> Boilers
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                  <Clock className="h-4 w-4" /> 5 min read
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Boiler repair vs replacement — how to decide
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
                Your boiler's packed in. It's freezing. You've got no hot water. And now you're staring down two options: pay for the repair, or rip the whole thing out and start fresh. I get this call every week across Liverpool and Knowsley, and the honest answer is — it depends. But there are a few solid rules that'll help you make a sensible decision without getting ripped off.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">When it makes sense to repair</h2>
              <p>
                If your boiler is under 10 years old and the fault is something straightforward — a dodgy fan, a faulty PCB, a leaking valve — then a repair is usually the way to go. Parts are still available, the boiler's got life left in it, and you're looking at a few hundred quid rather than a few thousand.
              </p>
              <p>
                Same goes if you've been getting it serviced regularly. A boiler that's been looked after will keep going. I've seen well-maintained boilers hit 15 years without any major drama. If it's had one breakdown in all that time, there's no reason to panic and replace it.
              </p>
              <p>
                The other thing to think about is the type of fault. If it's something like a thermocouple, a diverter valve, or a pressure sensor — these are wear-and-tear parts. They fail eventually on every boiler. Replacing the whole unit because of a £150 part doesn't make financial sense.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">When it's time to replace</h2>
              <p>
                Here's where I'll be straight with you. If your boiler is over 12–15 years old and it's breaking down every winter, you're throwing good money after bad. Those repair bills add up fast, and older boilers run at about 60–70% efficiency. That means for every pound you spend on gas, you're losing 30–40p straight up the flue.
              </p>
              <p>
                A new boiler runs at 90%+ efficiency. Over a year, that difference shows up on your gas bill — especially with energy prices the way they are now.
              </p>
              <p>
                There are also some faults where repair just isn't worth it. A cracked heat exchanger on a 14-year-old boiler? That part alone can cost £400–£500 fitted. At that point, you're paying half the price of a new boiler to patch up an old one that'll probably develop another fault within a year or two.
              </p>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm my-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4 mt-0">
                  <AlertTriangle className="h-6 w-6 text-blue-500" />
                  The 50% cost rule
                </h3>
                <p className="mb-0">
                  This is a rule I tell all my customers. If the repair is going to cost more than 50% of what a new boiler would cost, replace it. Simple as that. You're better off putting that money towards something with a fresh warranty and 15 years of life ahead of it, rather than propping up a boiler that's on its last legs.
                </p>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">The age × cost formula</h2>
              <p>
                There's another handy way to think about it. Multiply the age of your boiler (in years) by the cost of the repair. If the number comes out higher than the cost of a new boiler, it's telling you to replace.
              </p>
              <p>
                So say your boiler is 12 years old and the repair quote is £350. That's 12 × 350 = £4,200. A new combi boiler fitted usually starts around £2,000–£2,800 depending on the job. The maths is doing the talking for you there.
              </p>
              <p>
                It's not a perfect formula — nothing ever is — but it gives you a clear, no-nonsense way to weigh things up instead of just guessing.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">What about signs the boiler's on its way out?</h2>
              <p>
                Apart from repeated breakdowns, watch out for these:
              </p>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Strange noises:</strong> Banging, kettling, or gurgling that won't go away after bleeding the system. That usually points to limescale or internal damage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Yellow flame:</strong> A healthy boiler burns blue. If the flame is yellow or orange, the gas isn't burning cleanly and you should get it checked immediately — it could be producing carbon monoxide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Frequent pressure drops:</strong> If you're topping up the pressure every few days, there's a leak somewhere in the system, or the expansion vessel has failed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Rising gas bills:</strong> If your usage hasn't changed but the bills keep climbing, the boiler's efficiency has dropped off a cliff.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">A quick word on ECO4</h2>
              <p>
                If you're on certain benefits or a low income, you might qualify for a free or heavily subsidised boiler replacement through the government's ECO4 scheme. It's not something I handle directly, but I've had customers in Liverpool and Knowsley who've had their entire boiler replaced at no cost through it. It's worth checking your eligibility — you can do it online in a few minutes or ask your energy supplier.
              </p>
              <p>
                I mention it because a lot of people don't know it exists, and it can completely take the cost question off the table.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">The bottom line</h2>
              <p>
                If your boiler is young and the fault is minor, repair it. If it's old, inefficient, and breaking down regularly, replace it. Use the 50% rule and the age × cost formula to take the emotion out of the decision. And whatever you do, make sure whoever works on your boiler is Gas Safe registered — no exceptions.
              </p>
              <p>
                If you're not sure which way to go, give me a ring. I'll come out, take a proper look, and give you an honest answer. I'm not going to push you towards a new boiler if yours has got life in it, and I'm not going to keep patching one up if it's costing you more in the long run. That's not how I work.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-blue-600 p-10 sm:p-12 text-center shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-black text-white">Not sure whether to repair or replace?</h3>
                <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                  If you're in the Liverpool or Knowsley area and your boiler's playing up, give me a call. I'll give you a straight answer and a fair quote — no pressure, no sales pitch.
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
