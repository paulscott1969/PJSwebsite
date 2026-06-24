import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

// ---------------------------------------------------------------------------
// Frontmatter types
// ---------------------------------------------------------------------------
interface Frontmatter {
  title: string;
  description: string;
  category: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonical: string;
  ctaHeading: string;
  ctaBody: string;
}

// ---------------------------------------------------------------------------
// Tiny browser-safe frontmatter parser
// Handles the --- delimited YAML block at the top of a .md file.
// Only supports simple key: value pairs (no nested objects / arrays).
// ---------------------------------------------------------------------------
function parseFrontmatter(raw: string): { frontmatter: Partial<Frontmatter>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };

  const yamlBlock = match[1];
  const body = match[2];

  const frontmatter: Record<string, string> = {};
  for (const line of yamlBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    if (key) frontmatter[key] = value;
  }

  return { frontmatter: frontmatter as Partial<Frontmatter>, body };
}

// ---------------------------------------------------------------------------
// Category colour map (matches Blog.tsx)
// ---------------------------------------------------------------------------
const categoryColours: Record<string, string> = {
  Heating: 'bg-orange-100 text-orange-700',
  Boilers: 'bg-blue-100 text-blue-700',
  'Gas Safety': 'bg-green-100 text-green-700',
  Emergency: 'bg-red-100 text-red-700',
  Tips: 'bg-purple-100 text-purple-700',
};

// ---------------------------------------------------------------------------
// Custom renderers for react-markdown
// These map markdown elements to the same styled HTML used in the old TSX files.
// ---------------------------------------------------------------------------
const markdownComponents: React.ComponentProps<typeof ReactMarkdown>['components'] = {
  // Headings
  h2: ({ children }) => (
    <h2 className="text-3xl font-black tracking-tight text-gray-900 mt-12 mb-6">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="mb-5 leading-relaxed text-gray-700">{children}</p>
  ),

  // Blockquotes — used for callout boxes
  blockquote: ({ children }) => (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm my-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
      <div className="relative">{children}</div>
    </div>
  ),

  // Unordered lists
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-3 my-6 text-gray-700">{children}</ul>
  ),

  // Ordered lists
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-3 my-6 text-gray-700">{children}</ol>
  ),

  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),

  // Bold
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),

  // Emphasis
  em: ({ children }) => <em className="italic">{children}</em>,

  // Inline code
  code: ({ children }) => (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">
      {children}
    </code>
  ),

  // Links
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-blue-600 font-bold hover:underline"
    >
      {children}
    </a>
  ),

  // Horizontal rule
  hr: () => <hr className="my-10 border-gray-200" />,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
type LoadState = 'loading' | 'ready' | 'not-found' | 'error';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [state, setState] = useState<LoadState>('loading');
  const [frontmatter, setFrontmatter] = useState<Partial<Frontmatter>>({});
  const [body, setBody] = useState('');

  useEffect(() => {
    if (!slug) {
      navigate('/blog', { replace: true });
      return;
    }

    setState('loading');
    setBody('');
    setFrontmatter({});

    fetch(`/blogs/${slug}.md`)
      .then((res) => {
        if (res.status === 404) {
          setState('not-found');
          return null;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!text) return;
        const parsed = parseFrontmatter(text);
        setFrontmatter(parsed.frontmatter);
        setBody(parsed.body);
        setState('ready');
      })
      .catch(() => setState('error'));
  }, [slug, navigate]);

  // ------ Loading ------
  if (state === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent shadow-lg" />
      </div>
    );
  }

  // ------ Not found ------
  if (state === 'not-found') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <p className="mb-2 text-6xl font-black text-gray-200">404</p>
        <h1 className="mb-4 text-2xl font-black text-gray-900">Article not found</h1>
        <p className="mb-8 text-gray-500">
          This article doesn't exist or may have been moved.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    );
  }

  // ------ Error ------
  if (state === 'error') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900">Something went wrong</h1>
        <p className="mb-8 text-gray-500">Unable to load this article. Please try again.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    );
  }

  // ------ Ready ------
  const {
    seoTitle = frontmatter.title ?? '',
    seoDescription = frontmatter.description ?? '',
    seoKeywords = '',
    canonical = '',
    category = '',
    readTime = '',
    title = '',
    ctaHeading = 'Got a question?',
    ctaBody = "Give Paul a call — he'll give you a straight answer.",
  } = frontmatter;

  const categoryColour = categoryColours[category] ?? 'bg-gray-100 text-gray-600';

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={canonical}
        ogType="article"
      />

      <article className="bg-gray-50 pb-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">

            {/* ---- Header / Meta ---- */}
            <div className="mb-8">
              <Link
                to="/blog"
                className="mb-8 font-bold text-blue-600 hover:underline flex items-center gap-2 w-fit"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                {category && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${categoryColour}`}
                  >
                    <Tag className="h-3 w-3" />
                    {category}
                  </span>
                )}
                {readTime && (
                  <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                    <Clock className="h-4 w-4" />
                    {readTime}
                  </span>
                )}
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                {title}
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

            {/* ---- Markdown content ---- */}
            <div className="prose prose-lg prose-blue max-w-none text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {body}
              </ReactMarkdown>
            </div>

            {/* ---- CTA ---- */}
            <div className="mt-16 rounded-3xl bg-blue-600 p-10 sm:p-12 text-center shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-black text-white">{ctaHeading}</h3>
                <p className="mb-8 text-blue-100 text-lg max-w-xl mx-auto">{ctaBody}</p>
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

            {/* ---- Back link ---- */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 font-bold text-gray-500 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to blog
              </Link>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
