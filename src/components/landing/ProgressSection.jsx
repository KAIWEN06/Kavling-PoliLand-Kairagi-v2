import React from 'react';
import heroImg from '../../assets/images/hero.jpg';

export default function ProgressSection() {
  const steps = [
    { date: 'Jan 2024', title: 'Pembukaan Lahan', desc: 'Proses pembukaan lahan dan pembersihan area.', img: heroImg, active: true },
    { date: 'Mar 2024', title: 'Perataan & Jalan', desc: 'Perataan lahan dan pembuatan jalan utama.', img: heroImg, active: true },
    { date: 'Jun 2024', title: 'Drainase & Saluran', desc: 'Pembangunan drainase dan saluran air.', img: heroImg, active: true },
    { date: 'Sep 2024', title: 'Pemadatan Jalan', desc: 'Pemadatan jalan dan persiapan kavling.', img: heroImg, active: true },
    { date: 'Des 2024', title: 'Tahap Finishing', desc: 'Finishing jalan dan penataan kawasan.', img: heroImg, active: true },
  ];

  return (
    <section id="progress" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Progress Pembangunan</h2>
          <a href="#progress" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
            Lihat Semua Progress
          </a>
        </div>

        {/* Progress Timeline Grid */}
        <div className="relative">
          {/* Horizontal Line connecting items */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-0.5 bg-emerald-500 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-24 overflow-hidden">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-medium text-slate-400 block">{step.date}</span>
                    <h3 className="text-xs font-bold text-slate-900 mt-0.5">{step.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{step.desc}</p>
                  </div>
                </div>

                {/* Status Dot */}
                <div className="p-3 pt-0 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}