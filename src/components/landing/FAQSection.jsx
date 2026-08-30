// src/components/landing/FAQSection.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: 'Apakah kavling sudah bersertifikat?', a: 'Ya, seluruh kavling di PoliLand Kairagi sudah dilengkapi Sertifikat Hak Milik (SHM).' },
    { q: 'Bagaimana cara pembelian kavling?', a: 'Anda dapat menghubungi tim pemasaran kami via WhatsApp atau mengunjungi kantor pemasaran kami untuk memilih nomor kavling.' },
    { q: 'Apakah bisa dicicil?', a: 'Ya, kami menyediakan skema pembayaran cash bertahap maupun bantuan pengurusan KPR tanah.' },
    { q: 'Apakah ada biaya tambahan?', a: 'Biaya sudah mencakup pengurusan surat-surat hingga balik nama Sertifikat Hak Milik.' },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-slate-900 mb-4">FAQ</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full py-3 px-4 flex items-center justify-between text-left text-xs font-semibold text-slate-800"
          >
            <span>{faq.q}</span>
            {openIndex === idx ? <Minus className="w-3.5 h-3.5 text-slate-500" /> : <Plus className="w-3.5 h-3.5 text-slate-500" />}
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-3 text-[11px] text-slate-500 leading-relaxed border-t border-slate-50 pt-2">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}