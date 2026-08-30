import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowLeft, Clock, Sparkles } from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-4 py-12">
      <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-100 space-y-6">
        
        {/* Ikon Animasi/Pulse */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl shadow-inner">
          <Wrench className="w-10 h-10 animate-bounce" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
          </span>
        </div>

        {/* Badge Status */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/60 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Sedang Dalam Pengembangan
        </div>

        {/* Teks Utama */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Segera Hadir Kembali!
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Kami sedang melakukan peningkatan sistem dan pemeliharaan berkala untuk menghadirkan pengalaman yang lebih baik bagi Anda.
          </p>
        </div>

        {/* Estimasi/Info Tambahan */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-center gap-3 text-slate-600 text-xs font-medium">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Mohon kesediaannya, proses ini tidak lama.</span>
        </div>

        {/* Tombol Aksi */}
        <div className="pt-2">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

      </div>

      {/* Footer Kecil */}
      <p className="text-[11px] text-slate-400 mt-8">
        &copy; {new Date().getFullYear()} PoliLand Kairagi. All rights reserved.
      </p>
    </div>
  );
};

export default Maintenance;