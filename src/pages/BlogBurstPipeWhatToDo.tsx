import React from 'react';
import { Clock, Tag, ArrowLeft, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function BlogBurstPipeWhatToDo() {
  return (
    <>
      <SEO
        title="What to Do If You Have a Burst Pipe | Emergency Plumbing Liverpool"
        description="A burst pipe can cause serious damage in minutes. Liverpool plumber Paul Scott explains exactly what to do first, what to avoid, and when to call for help."
        keywords="burst pipe what to do, burst pipe liverpool, emergency plumber knowsley, frozen pipe burst, stop water leak, plumber near me emergency"
        canonical="https://liverpoolsplumber.co.uk/blog/burst-pipe-what-to-do"
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                  <Tag className="h-3 w-3" /> Emergency
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                  <Clock className="h-4 w-4" /> 5 min read
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                What to do if you have a burst pipe
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
                A burst pipe is one of those things that can go from "bit of a drip" to "water pouring through the ceiling" in no time at all. I've been called out to homes across Liverpool and Knowsley where the damage could've been cut in half if the homeowner had done the right things in the first five minutes. So here's what you need to know — before it happens, and what to do the second it does.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Step 1: Turn off the water — right now</h2>
              <p>
                This is the most important thing you can do. Every second that water is flowing, it's soaking into your floors, walls, and ceilings. Go straight to your stopcock and turn it off. In most homes around Liverpool, you'll find it under the kitchen sink. Some older properties have it near the front door or in a downstairs cupboard.
              </p>
              <p>
                If you don't know where yours is, stop reading this and go find it today. Seriously. When a pipe bursts at 2am and the kitchen's flooding, that's not the time to be hunting around with a torch.
              </p>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm my-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4 mt-0">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  Stopcock stuck?
                </h3>
                <p className="mb-0">
                  This is really common, especially in older houses in Huyton and Prescot. If nobody has turned the stopcock in years, it can seize up completely. Don't force it with pliers — you'll snap the spindle and make things ten times worse. If it won't turn, call a plumber straight away and in the meantime try to contain the water with towels and buckets.
                </p>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Step 2: Turn on the taps to drain the system</h2>
              <p>
                Once the stopcock is off, open all the cold taps in the house. This drains the remaining water sitting in the pipes above the burst and reduces the pressure. If the burst is on a hot water pipe, turn on the hot taps too and switch your boiler off — there's no point heating water that's going straight through a hole in the pipe.
              </p>
              <p>
                Flush the toilets as well. The cisterns hold a fair amount of water and you want to get as much out of the system as possible.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Step 3: Deal with the electrics</h2>
              <p>
                If water is anywhere near your electrics — light fittings, plug sockets, the fuse board — switch off the electricity at the consumer unit. Water and electrics don't mix, and this isn't something to take a chance on. If water is actively dripping onto your fuse board, don't touch it yourself. Call an electrician or your energy supplier's emergency line.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Step 4: Contain the damage</h2>
              <p>
                Grab whatever you've got — towels, buckets, washing-up bowls, old bedsheets. Mop up standing water as quickly as you can. If the ceiling is bulging with water, poke a small hole in it with a screwdriver and catch the water in a bucket underneath. I know that sounds mad, but a controlled release is far better than the whole ceiling collapsing under the weight. I've seen it happen more than once.
              </p>
              <p>
                Move furniture, electronics, and anything valuable away from the wet area. Open windows to get air circulating — it helps with drying out and stops damp and mould setting in later.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">What NOT to do</h2>
              <p>
                People panic, and that's understandable. But here are a few mistakes I see time and time again:
              </p>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Don't ignore a small leak and "wait until morning".</strong> A trickle at 10pm can be a flood by 6am. Water doesn't stop. If a pipe has gone, it's only getting worse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Don't try to bodge it with tape or filler.</strong> I've turned up to jobs where someone's wrapped half a roll of duct tape around a burst copper pipe. It doesn't work. You might slow it down for an hour, but you're not fixing anything — and the water damage is still happening behind the wall.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Don't use a hairdryer on frozen pipes.</strong> If the burst was caused by a frozen pipe, people sometimes try to thaw it with a hairdryer or a heat gun. That can cause a sudden rush of water through a pipe that's already split. Thaw slowly with warm (not boiling) water wrapped in a cloth, and keep the stopcock off.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Don't forget to take photos.</strong> If you're going to claim on your home insurance, they'll want evidence. Take photos and videos of the damage as soon as it's safe to do so — before you start cleaning up.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">Why do pipes burst in the first place?</h2>
              <p>
                The most common cause around here is freezing. When water freezes inside a pipe, it expands by about 10%. Copper and plastic pipes can't stretch that much, so they crack or split. This is especially common in unheated spaces — lofts, garages, outside walls, and under floorboards in rooms that don't get used much.
              </p>
              <p>
                But it's not always the cold. Old pipework corrodes over time. Joints weaken. Solder fails. I've seen pipes in some of the older terraced houses in Liverpool that are 40 or 50 years old and held together by willpower. Age catches up eventually.
              </p>
              <p>
                High water pressure can also cause pipes to fail, especially if there's a weak joint somewhere. If you notice your taps seem overly forceful or your washing machine hoses bulge when they fill, it's worth getting the pressure checked.
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">How to stop it happening again</h2>

              <ul className="list-none pl-0 space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Insulate exposed pipes:</strong> Foam lagging is cheap and easy to fit. Cover any pipes in the loft, garage, or along outside walls. Takes half an hour and could save you thousands.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Keep the heating ticking over:</strong> If you're away during winter, don't turn the heating off completely. Set it to at least 12–14°C. That's enough to stop the pipes freezing without running up a massive bill.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Know where your stopcock is:</strong> I've said it already, but I'm saying it again. The number one thing you can do to limit damage from a burst pipe is be able to stop the water quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Get old pipework checked:</strong> If you've moved into an older property and you've no idea what state the plumbing is in, it's worth getting someone to take a look. A quick inspection now is a lot cheaper than an emergency call-out at 3am.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">When to call a plumber</h2>
              <p>
                If you've turned the water off and mopped things up, it's tempting to think you've sorted it. But a burst pipe always needs a proper repair. Even if it looks like a small split, the pipe has been weakened and it'll go again — probably at the worst possible time.
              </p>
              <p>
                If the burst is behind a wall, under the floor, or in the loft, you definitely need a plumber in to find exactly where the damage is and fix it properly. Don't guess and don't put it off. The longer you leave wet plaster and timber, the more likely you are to end up with rot and mould — and that's a whole different headache.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-blue-600 p-10 sm:p-12 text-center shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-black text-white">Got a burst pipe right now?</h3>
                <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">
                  If you're in Liverpool or Knowsley and you've got water coming in where it shouldn't, give me a ring. I do emergency call-outs and I'll get to you as fast as I can.
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
