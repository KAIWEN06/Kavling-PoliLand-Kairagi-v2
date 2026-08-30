// src/components/landing/CTASection.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
        Siap Memiliki Kavling Impian?
      </h2>
      <p className="text-xs sm:text-sm text-blue-100 max-w-md mb-6 font-normal">
        Jangan lewatkan kesempatan emas untuk berinvestasi di lokasi terbaik di Manado.
      </p>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-emerald-600/30"
      >
        <MessageCircle className="w-4 h-4 fill-white stroke-emerald-500" />
        <span>Hubungi Kami via WhatsApp</span>
      </a>
    </div>
  );
}