import React from 'react';
import { MapPin, ShieldCheck, Navigation, TrendingUp, CheckCircle2, Play } from 'lucide-react';
import heroImg from '../../assets/images/hero.jpg';

export default function FeatureSection() {
  const features = [
    {
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      title: 'Lokasi Strategis',
      desc: 'Berlokasi di kawasan berkembang dengan akses mudah ke pusat kota dan fasilitas umum.',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: 'Legalitas SHM',
      desc: 'Setiap kavling memiliki sertifikat Hak Milik (SHM) yang aman dan terpercaya.',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Navigation className="w-5 h-5 text-amber-600" />,
      title: 'Akses Mudah',
      desc: 'Jalan lebar, lingkungan nyaman, dan infrastruktur yang terus berkembang.',
      bgColor: 'bg-amber-50'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      title: 'Investasi Menguntungkan',
      desc: 'Nilai tanah terus meningkat seiring perkembangan kawasan dan permintaan yang tinggi.',
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <section id="tentang" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kenapa Memilih PoliLand?</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 flex flex-col items-start">
              <div className={`p-3 rounded-xl ${item.bgColor} mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tentang Kami Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">TENTANG POLILAND</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tentang Kami</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              PoliLand Kairagi hadir untuk memberikan solusi investasi tanah yang aman, nyaman, dan menguntungkan. Kami berkomitmen untuk menghadirkan kawasan hunian dan investasi terbaik di Manado.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">Kawasan berkembang dan potensial</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">Infrastruktur lengkap dan akses mudah</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">Dikelola secara profesional dan terpercaya</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs transition-colors duration-200"
              >
                Selengkapnya Tentang Kami
              </a>
            </div>
          </div>

          {/* Right Video / Banner Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
              <img 
                src={heroImg} 
                alt="PoliLand Land Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <button 
                  className="w-14 h-14 bg-white/90 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-110"
                  aria-label="Play Video"
                >
                  <Play className="w-6 h-6 fill-slate-900 ml-1" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}