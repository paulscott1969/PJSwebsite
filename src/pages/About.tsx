import React from 'react';
import { Phone, Award, ShieldCheck, Clock, CheckCircle2, User } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '@/components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Paul Scott | Local Plumber Liverpool & Knowsley — 40 Years Experience"
        description="Meet Paul Scott, owner of PJS Plumbing & Heating. He's been a Gas Safe registered plumber across Liverpool and Knowsley for 40 years — proper trade, honest pricing, no call centres."
        keywords="about pjs plumbing, paul scott plumber liverpool, gas safe engineer liverpool, experienced plumber knowsley, local plumber merseyside"
        canonical="https://liverpoolsplumber.co.uk/about"
      />

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-black tracking-tight text-gray-900 sm:text-7xl">40 Years Experience in Liverpool</h1>
            <p className="text-xl leading-relaxed text-gray-600 sm:text-2xl">
              I've been on the tools since I was 16. No corporate talk, just 40 years of experience fixing Liverpool's pipes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="prose prose-lg text-gray-600">
                <h2 className="text-3xl font-black text-gray-900">A proper local service</h2>
                <p>
                  I started my journey in the plumbing trade as a young lad back in the day. I didn't do one of those "fast-track" courses you see now—I did a proper, traditional apprenticeship. That's where I learned that if a job's worth doing, it's worth doing right.
                </p>
                <p>
                  Over the last 40 years, I've worked in thousands of homes across Liverpool and Knowsley. I've seen every type of leak, every type of boiler, and every type of "DIY disaster" you can imagine.
                </p>
                <p>
                  When I set up PJS Plumbing &amp; Heating, I wanted to do things differently. I don&apos;t have a fancy office or a call center. When you call, you speak to me. I&apos;ll give you an honest answer, a fair price, and I&apos;ll turn up when I say I will.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-6">
                  <Award className="mb-4 h-8 w-8 text-blue-600" />
                  <h4 className="mb-2 font-bold text-gray-900">Properly Trained</h4>
                  <p className="text-sm text-gray-600">I did a full apprenticeship, not a weekend course. I know my trade inside out.</p>
                </div>
                <div className="rounded-2xl bg-blue-50 p-6">
                  <ShieldCheck className="mb-4 h-8 w-8 text-blue-600" />
                  <h4 className="mb-2 font-bold text-gray-900">Gas Safe Registered</h4>
                  <p className="text-sm text-gray-600">Safety is everything. I&apos;m fully qualified to work on your gas and heating.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img src="/images/owner/paul-plumbing-expert-standing-by-company-van-pjs-uk.webp"
                  alt="Paul Scott owner and Gas Safe engineer of PJS Plumbing and Heating Services standing by his van in Liverpool"
                  className="h-full w-full object-cover rounded-3xl"
                  loading="lazy"
                  decoding="async"
                width="1536" height="2048" />
              </div>
              <div className="absolute -bottom-8 -left-8 rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
                <p className="text-4xl font-black">40+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I do what I do */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl">Why I&apos;m still on the tools</h2>
              <p className="mb-6 text-lg text-gray-400">
                I've been doing this for 40 years, and I still enjoy it. There's nothing better than turning up to a house where someone's stressed because of a leak, and being able to sort it out and see them relax.
              </p>
              <p className="mb-8 text-lg text-gray-400">
                I've seen Liverpool change a lot over the years, but one thing that hasn't changed is that people just want a fair job for a fair price. They want someone who'll turn up, do the work properly, and not try to pull the wool over their eyes.
              </p>
              <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="font-bold text-blue-100">I treat every home like it&apos;s my own. If I wouldn&apos;t have it in my house, I won&apos;t put it in yours.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-blue-600/20 p-8 text-center ring-1 ring-white/10">
                <p className="text-4xl font-black text-blue-400">40+</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-400">Years Experience</p>
              </div>
              <div className="rounded-3xl bg-blue-600/20 p-8 text-center ring-1 ring-white/10">
                <p className="text-4xl font-black text-blue-400">100%</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-400">Local Service</p>
              </div>
              <div className="col-span-2 rounded-3xl bg-blue-600/20 p-8 text-center ring-1 ring-white/10">
                <p className="text-4xl font-black text-blue-400">Gas Safe</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-400">Fully Registered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">Want it done properly? Give me a ring.</h2>
          <a
            href="tel:01514402614"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-xl font-black text-white transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-6 w-6 fill-current" />
            Call Paul: 0151 440 2614
          </a>
        </div>
      </section>
    </>
  );
}
