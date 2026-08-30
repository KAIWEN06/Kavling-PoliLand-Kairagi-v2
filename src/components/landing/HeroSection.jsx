import React from 'react';
import { MapPin, FileCheck, LayoutGrid, Tag, PhoneCall, CheckCircle2, Home as HomeIcon, Award, ShieldCheck, Navigation } from 'lucide-react';
import heroBg from '../../assets/images/hero.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="PoliLand Kairagi Aerial View" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-950/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                KAVLING PREMIUM • SHM
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Investasi Tanah <br className="hidden sm:inline" />
              Masa Depan Anda
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Miliki kavling strategis di kawasan berkembang dengan legalitas jelas, akses jalan yang baik, dan prospek investasi jangka panjang yang terus meningkat.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#siteplan"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-600/30"
              >
                Lihat Siteplan
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold text-xs sm:text-sm transition-all duration-200"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Floating Quick Info Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm space-y-5 text-slate-800">
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Lokasi Strategis</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Kairagi Dua, Manado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Legalitas</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Sertifikat Hak Milik (SHM)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-rose-50 text-rose-500">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Total Kavling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">120 Unit Kavling</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Harga Mulai</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Hubungi Kami</p>
                </div>
              </div>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Sekarang</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Banner Floating */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 md:mt-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-slate-100">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:border-r border-slate-100 last:border-r-0">
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-600">
              <HomeIcon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-xl font-black text-slate-900">120+</span>
              <span className="text-xs text-slate-500 font-medium">Total Kavling</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:border-r border-slate-100 last:border-r-0">
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-600">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-xl font-black text-slate-900">80+</span>
              <span className="text-xs text-slate-500 font-medium">Terjual</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:border-r border-slate-100 last:border-r-0">
            <div className="p-2 rounded-full bg-blue-50 text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-xl font-black text-slate-900">SHM</span>
              <span className="text-xs text-slate-500 font-medium">Legalitas</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-600">
              <Navigation className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-xl font-black text-slate-900">100%</span>
              <span className="text-xs text-slate-500 font-medium">Akses Jalan</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}