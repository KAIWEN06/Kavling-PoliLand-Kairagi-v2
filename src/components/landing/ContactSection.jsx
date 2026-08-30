// src/components/landing/ContactSection.jsx
import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    { icon: <MapPin className="w-4 h-4 text-emerald-600" />, title: 'Alamat', desc: 'Kairagi Dua, Kec. Mapanget, Kota Manado, Sulawesi Utara' },
    { icon: <Phone className="w-4 h-4 text-blue-600" />, title: 'Telepon', desc: '+62 812-3456-7890' },
    { icon: <MessageCircle className="w-4 h-4 text-emerald-600" />, title: 'WhatsApp', desc: '+62 812-3456-7890' },
    { icon: <Mail className="w-4 h-4 text-blue-600" />, title: 'Email', desc: 'info@poliland.co.id' },
    { icon: <Clock className="w-4 h-4 text-blue-600" />, title: 'Jam Operasional', desc: 'Senin - Sabtu\n08.00 - 17.00 WITA' },
  ];

  return (
    <section id="kontak" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Hubungi Kami</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {contacts.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-50 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 whitespace-pre-line leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}