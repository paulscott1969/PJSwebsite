import React from 'react';
import { Plus, Minus, Phone, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '@/components/SEO';

const faqs = [
  {
    question: "How fast can you get here if I've got an emergency?",
    answer: "If it's a burst pipe or something serious, I'll do my best to get to you within the hour. I'm based locally, so I can usually get across Liverpool or Knowsley pretty quick. Just give me a bell on 0151 440 2614 and I'll let you know how far away I am."
  },
  {
    question: "Are you actually Gas Safe registered?",
    answer: "I am indeed. It's the law for a reason—you shouldn't let anyone touch your boiler or gas pipes if they aren't on the register. I'm happy to show you my ID card when I turn up so you know you're in safe hands."
  },
  {
    question: "Do you only work in Liverpool?",
    answer: "Mostly Liverpool and Knowsley, yeah. I'm often out in Huyton, Prescot, Whiston, and Kirkby. I'll also head out to St Helens or Halewood if needed. If you're nearby, just ask."
  },
  {
    question: "What's it going to cost me?",
    answer: "I keep my prices fair and honest. I don't believe in hidden fees or charging you just to turn up and look at a dripping tap. For most small jobs, I can give you a price over the phone. For bigger stuff, I'll come out and give you a proper quote for free."
  },
  {
    question: "Will you leave a mess in my house?",
    answer: "Absolutely not. I've got my own dust sheets and I'll tidy up after myself. I treat every home like it's my own—I wouldn't want a mess left in mine, so I won't leave one in yours."
  },
  {
    question: "Do you charge just to come and look at a job?",
    answer: "No. I'll come out and give you a proper quote for free. If it's a small job I can price over the phone, I'll do that too. I don't believe in 'call-out charges' just for turning up."
  },
  {
    question: "Can I call you at night if a pipe bursts?",
    answer: "Yes, that's what the emergency service is for. If your house is flooding at 3am, don't wait—call me. I'd rather get it sorted before it ruins your carpets."
  },
  {
    question: "Do you fit new boilers as well?",
    answer: "I do. I can recommend a good, reliable boiler that won't break the bank and will save you a bit on your heating bills. I'll handle the whole thing from start to finish."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-blue-600"
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        {isOpen ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Plumbing & Heating FAQs | Liverpool & Knowsley Homeowners"
        description="Honest answers to common plumbing and heating questions from Liverpool and Knowsley homeowners. Expert advice from Paul Scott — Gas Safe registered engineer with 40 years experience."
        keywords="plumbing faq liverpool, heating advice liverpool, boiler maintenance tips, gas safe engineer faq, plumber knowsley"
        canonical="https://liverpoolsplumber.co.uk/faq"
      />

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-gray-900 sm:text-7xl">Plumbing & Heating Questions — Liverpool & Knowsley Answered</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Questions Liverpool and Knowsley homeowners ask Paul most often — answered straight, without the waffle.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl">Still have questions?</h2>
          <p className="mb-10 text-xl text-blue-100">Paul is happy to provide expert advice over the phone.</p>
          <a
            href="tel:01514402614"
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-blue-600 transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-6 w-6 fill-current" />
            Call Paul: 0151 440 2614
          </a>
        </div>
      </section>
    </>
  );
}
