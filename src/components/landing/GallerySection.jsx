import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg from '../../assets/images/hero.jpg';

export default function GallerySection() {
  const galleryItems = [
    { title: 'Area Depan Kavling', img: heroImg },
    { title: 'Gerbang Utama', img: heroImg },
    { title: 'Lahan Siap Bangun', img: heroImg },
    { title: 'Infrastruktur Jalan', img: heroImg },
    { title: 'Pemandangan Sekitar', img: heroImg },
    { title: 'Akses Utama', img: heroImg },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Slider Nav */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Gallery</h2>
          <a href="#gallery" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
            Lihat Semua
          </a>
        </div>

        {/* Carousel / Image Strip */}
        <div className="relative flex items-center">
          <button 
            className="absolute -left-4 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Previous Gallery Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full overflow-x-auto scrollbar-none flex gap-4 py-2">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="min-w-[200px] sm:min-w-[240px] h-[140px] rounded-xl overflow-hidden relative flex-shrink-0 group shadow-sm border border-slate-100"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button 
            className="absolute -right-4 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Next Gallery Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}