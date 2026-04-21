import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ShieldCheck, Clock, CheckCircle2, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '@/components/SEO';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setFormState('submitting');
    
    try {
      await emailjs.sendForm(
        'paulsbackend',
        'pjsform',
        formRef.current,
        'X-Mp_dS5vF2tP4hhU'
      );
      setFormState('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormState('error');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Paul Scott | Local Plumber Liverpool & Knowsley"
        description="Get in touch with Paul Scott at PJS Plumbing — Liverpool's trusted local plumber and Gas Safe engineer. Available 24/7 for emergencies across Liverpool and Knowsley."
        keywords="contact plumber liverpool, plumber knowsley contact, emergency plumber number liverpool, pjs plumbing contact"
        canonical="https://liverpoolsplumber.co.uk/contact"
      />

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-6 text-5xl font-black tracking-tight text-gray-900 sm:text-7xl">Get in Touch — Liverpool &amp; Knowsley Plumber</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Need a repair sorted or just want a straight answer on a quote? Call Paul directly or drop a message below.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8 text-3xl font-black text-gray-900">Call me directly</h2>
              <div className="space-y-8">
                <a
                  href="tel:01514402614"
                  className="group flex items-center gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white transition-transform group-hover:scale-110">
                    <Phone className="h-7 w-7 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Speak to Paul (24/7)</p>
                    <p className="text-3xl font-black text-blue-600">0151 440 2614</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-gray-600">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Office Address</p>
                    <p className="text-xl font-bold text-gray-900">48 Archway Rd, Liverpool L36 9XE</p>
                    <p className="mt-1 text-sm text-gray-500">I cover Liverpool, Knowsley &amp; surrounding areas.</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-blue-50 p-8">
                  <h4 className="mb-4 flex items-center gap-2 font-bold text-blue-900">
                    <Clock className="h-5 w-5" />
                    I'll be there fast
                  </h4>
                  <p className="text-sm leading-relaxed text-blue-800/80">
                    If it's an emergency, don't mess about with forms—just call. I'm usually on a job but I'll answer if I can, or call you right back.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-8">
                  <a
                    href="https://www.facebook.com/TheHuytonPlumber/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-all hover:scale-110 active:scale-95"
                  >
                    <Facebook className="h-6 w-6 fill-current" />
                  </a>
                  <a
                    href="https://www.instagram.com/paulyplumb1969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white shadow-md transition-all hover:scale-110 active:scale-95"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5 lg:p-12">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mb-4 text-3xl font-black text-gray-900">Got it!</h3>
                  <p className="text-gray-600">Got your message. I&apos;ll give you a shout back as soon as I&apos;m off this job.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-8 font-bold text-blue-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="mb-8 text-2xl font-bold text-gray-900">Ask for a Quote</h3>
                  
                  {formState === 'error' && (
                    <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-600 border border-red-100 flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Something went wrong sending your message.</p>
                        <p className="text-sm mt-1">Please try again or call Paul directly on 0151 440 2614.</p>
                      </div>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Who am I speaking to?</label>
                        <input
                          required
                          type="text"
                          name="from_name"
                          className="w-full rounded-xl bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Best number to reach you on?</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          className="w-full rounded-xl bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">What&apos;s gone wrong?</label>
                      <select name="service_type" className="w-full rounded-xl bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Emergency Leak</option>
                        <option>Boiler Repair / Service</option>
                        <option>New Boiler Quote</option>
                        <option>Heating Issue</option>
                        <option>General Plumbing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">A bit more detail...</label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className="w-full rounded-xl bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell me what's going on..."
                      />
                    </div>
                    <button
                      disabled={formState === 'submitting'}
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
                    >
                      {formState === 'submitting' ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
