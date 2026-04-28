import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const homeFaqs = [
  {
    question: "Is PJS Plumbing Gas Safe registered?",
    answer: "Yes. Paul Scott is Gas Safe registered under number 221708. You can verify this on the Gas Safe Register website. He carries his Gas Safe ID card on every job and is happy to show it when he arrives."
  },
  {
    question: "What areas do you cover?",
    answer: "I cover Liverpool, Knowsley, Huyton, Prescot, Whiston, Rainhill, Kirkby, Halewood, St Helens, and most of Merseyside. If you're not sure, give me a ring on 0151 440 2614 and I'll let you know."
  },
  {
    question: "Do you do emergency callouts?",
    answer: "Yes. I operate a 24/7 emergency service for burst pipes, major leaks, and gas issues across Liverpool and Knowsley. Call 0151 440 2614 — you'll speak to me directly, not a call centre."
  },
  {
    question: "How quickly can you get to me?",
    answer: "For emergencies, I aim to be with you within the hour if I'm not already on another emergency. For booked jobs, I give you a specific time slot — none of this 'between 9 and 5' rubbish."
  },
  {
    question: "Do you install and repair boilers?",
    answer: "Yes. I repair all makes and models and install new boilers. I'll talk you through your options honestly — I won't push an expensive boiler if a repair will sort it. I'm Gas Safe registered (221708) so all gas work is done legally and safely."
  },
  {
    question: "Can you provide a Gas Safety Certificate for my rental property?",
    answer: "Yes. I carry out CP12 gas safety inspections for landlords across Liverpool and Knowsley. I'll check all your gas appliances, issue the certificate on the day, and give you a copy for your records. Turnaround is fast — usually within a few days of booking."
  },
  {
    question: "How do I get a quote?",
    answer: "Call me on 0151 440 2614 or fill in the form on the contact page. For small jobs like a leaky tap or toilet repair, I can often price it over the phone. For bigger work like a boiler install, I'll come out and give you a free, no-obligation quote."
  },
  {
    question: "Do you work weekends?",
    answer: "Yes. I work seven days a week when needed. Emergencies don't wait for Monday, and I know a lot of people find it easier to have work done at the weekend. Just call and I'll fit you in."
  },
  {
    question: "What's your callout process?",
    answer: "You call me, I answer (or call you back within minutes). We have a quick chat about the problem. If I need to come out, I give you a time and I stick to it. I diagnose the issue, tell you the cost upfront, and only start work once you've agreed. No surprises."
  },
  {
    question: "Are you insured?",
    answer: "Yes. I carry full public liability insurance. In 40 years I've rarely needed it, but it's there for your peace of mind and mine. I'm happy to provide proof if you need it."
  }
];

function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-blue-600"
      >
        <span className="text-lg font-bold text-gray-900 pr-4">{question}</span>
        {isOpen ? <Minus className="h-5 w-5 shrink-0 text-blue-600" /> : <Plus className="h-5 w-5 shrink-0 text-gray-400" />}
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

export default function HomeFAQ() {
  return (
    <section className="bg-gray-50 py-24" id="faq">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">Common Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Straight answers to the questions Liverpool homeowners ask me most.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {homeFaqs.map((faq, i) => (
            <div key={i}>
              <FAQAccordionItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
