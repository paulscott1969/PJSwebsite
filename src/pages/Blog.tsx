import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const posts = [
  {
    title: 'Why is my radiator cold at the bottom?',
    description: "A cold bottom but warm top usually means sludge or debris has built up inside. Here's what causes it and what to do about it.",
    category: 'Heating',
    slug: 'radiator-cold-at-bottom',
  },
  {
    title: 'Boiler repair vs replacement — how to decide',
    description: "When your boiler packs in, the question is always: fix it or replace it? This guide gives you a straight answer without the sales pitch.",
    category: 'Boilers',
    slug: 'boiler-repair-vs-replacement',
  },
  {
    title: 'What does a landlord gas safety check actually involve?',
    description: "A lot of landlords are unsure what the annual gas safety inspection covers. This explains the full process from start to certificate.",
    category: 'Gas Safety',
    slug: 'landlord-gas-safety-check',
  },
  {
    title: 'What to do if you have a burst pipe',
    description: "The first few minutes matter most. Here's exactly what to do — and what NOT to do — when a pipe bursts in your home.",
    category: 'Emergency',
    slug: 'burst-pipe-what-to-do',
  },
  {
    title: 'How to check your plumber is Gas Safe registered',
    description: `Anyone can claim to be Gas Safe. Here's how to verify in 30 seconds — and why it matters more than you might think.`,
    category: 'Tips',
    slug: 'check-gas-safe-registered',
  },
];

const categoryColours: Record<string, string> = {
  Heating: 'bg-orange-100 text-orange-700',
  Boilers: 'bg-blue-100 text-blue-700',
  'Gas Safety': 'bg-green-100 text-green-700',
  Emergency: 'bg-red-100 text-red-700',
  Tips: 'bg-purple-100 text-purple-700',
};

export default function Blog() {
  return (
    <>
      <SEO
        title="Plumbing & Heating Tips | Liverpool & Knowsley Homeowners"
        description="Straight-talking plumbing and heating advice for Liverpool and Knowsley homeowners and landlords. Boiler tips, emergency guides, gas safety — from Paul Scott at PJS Plumbing."
        keywords="plumbing blog liverpool, heating advice knowsley, boiler tips merseyside, landlord gas safety advice, local plumber blog"
        canonical="https://liverpoolsplumber.co.uk/blog"
      />

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl">
              Plumbing &amp; Heating Advice for Liverpool &amp; Knowsley Homeowners
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Straight-talking articles on plumbing, boilers, and heating — written for Liverpool homeowners and landlords. No jargon, no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => {
              const isPublished = post.slug === 'radiator-cold-at-bottom' || post.slug === 'boiler-repair-vs-replacement' || post.slug === 'landlord-gas-safety-check' || post.slug === 'burst-pipe-what-to-do';
              
              const CardContent = (
                <>
                  {!isPublished && (
                    <div className="absolute right-6 top-6 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Coming soon
                    </div>
                  )}

                  <div className="mb-6 mt-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${categoryColours[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>

                  <h2 className={`mb-3 text-xl font-black leading-tight transition-colors ${isPublished ? 'text-gray-900 group-hover:text-blue-600' : 'text-gray-900'}`}>
                    {post.title}
                  </h2>
                  <p className="mb-auto text-sm text-gray-600 leading-relaxed">
                    {post.description}
                  </p>

                  <div className={`mt-8 flex items-center gap-2 text-xs font-bold ${isPublished ? 'text-blue-600' : 'text-gray-400'}`}>
                    {isPublished ? (
                      <>
                        <span>Read article</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    ) : (
                      <>
                        <Clock className="h-3.5 w-3.5" />
                        <span>Article coming soon</span>
                      </>
                    )}
                  </div>
                </>
              );

              if (isPublished) {
                return (
                  <Link
                    key={i}
                    to={`/blog/${post.slug}`}
                    className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:scale-[1.02]"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={i}
                  className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl bg-blue-50 p-10 text-center">
            <h3 className="mb-3 text-2xl font-black text-gray-900">Got a plumbing question?</h3>
            <p className="mb-6 text-gray-600">
              Don&apos;t wait for the article. Call Paul directly and get an honest answer on the spot.
            </p>
            <a
              href="tel:01514402614"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
            >
              Call Paul — 0151 440 2614
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
