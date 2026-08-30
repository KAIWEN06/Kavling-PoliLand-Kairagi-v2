import React from 'react';
import { Building2, Plane, Hospital, ShoppingBag, GraduationCap, Compass } from 'lucide-react';

export default function SiteplanSection() {
  const nearbyPlaces = [
    { icon: <Building2 className="w-4 h-4 text-blue-600" />, name: 'Pusat Kota Manado', time: '± 20 menit' },
    { icon: <Plane className="w-4 h-4 text-blue-600" />, name: 'Bandara Sam Ratulangi', time: '± 25 menit' },
    { icon: <Hospital className="w-4 h-4 text-blue-600" />, name: 'RSUP Prof. Kandou', time: '± 20 menit' },
    { icon: <ShoppingBag className="w-4 h-4 text-blue-600" />, name: 'Mega Mall Manado', time: '± 18 menit' },
    { icon: <GraduationCap className="w-4 h-4 text-blue-600" />, name: 'Universitas Sam Ratulangi', time: '± 15 menit' },
  ];

  return (
    <section id="siteplan" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Lokasi Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Lokasi</h2>
              <p className="text-xs text-slate-500 mt-1">Kairagi Dua, Kecamatan Mapanget, Kota Manado, Sulawesi Utara</p>
            </div>

            {/* Map Placeholder Box */}
            <div className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 relative flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto mb-1 shadow-md">
                  📍
                </div>
                <span className="text-xs font-semibold text-slate-700">PoliLand Kairagi</span>
              </div>
            </div>

            {/* Nearby Access List */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 divide-y divide-slate-100">
              {nearbyPlaces.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 text-xs">
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span className="font-semibold text-slate-800">{item.name}</span>
                  </div>
                  <span className="text-slate-400 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Siteplan Interaktif */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Siteplan Interaktif</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative min-h-[360px] flex flex-col justify-between">
              
              {/* Siteplan Visual Representation (Simulated Layout) */}
              <div className="w-full h-64 bg-slate-100 rounded-lg border border-slate-200 p-4 relative flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-6 gap-2 w-full max-w-md">
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">1</div>
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">2</div>
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">3</div>
                  <div className="h-10 bg-amber-400 rounded flex items-center justify-center text-[10px] text-white font-bold">4</div>
                  <div className="h-10 bg-rose-500 rounded flex items-center justify-center text-[10px] text-white font-bold">5</div>
                  <div className="h-10 bg-rose-500 rounded flex items-center justify-center text-[10px] text-white font-bold">6</div>
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">7</div>
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">8</div>
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">9</div>
                  <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-bold">10</div>
                  <div className="h-10 bg-rose-500 rounded flex items-center justify-center text-[10px] text-white font-bold">11</div>
                  <div className="h-10 bg-rose-500 rounded flex items-center justify-center text-[10px] text-white font-bold">12</div>
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded shadow text-[10px] text-slate-600 font-semibold">
                  <Compass className="w-4 h-4 text-blue-600" /> U
                </div>
              </div>

              {/* Status Indicators & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span>Tersedia</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span>Booking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span>Terjual</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <button className="px-5 py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs rounded-lg shadow transition-colors">
                    Lihat Detail Kavling
                  </button>
                  <span className="text-[10px] text-slate-400 mt-1">Klik pada kavling untuk melihat detail informasi, luas, dan status.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}