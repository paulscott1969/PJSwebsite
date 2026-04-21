import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyCallButton() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-6 right-6 z-40 sm:hidden"
    >
      <a
        href="tel:01514402614"
        className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-4 text-lg font-bold text-white shadow-xl ring-4 ring-white transition-transform active:scale-95"
      >
        <Phone className="h-6 w-6 fill-current" />
        Call Paul — 0151 440 2614
      </a>
    </motion.div>
  );
}

