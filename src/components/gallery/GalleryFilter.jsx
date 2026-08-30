import React from 'react';

const categories = [
  'Semua',
  'Area Kavling',
  'Fasilitas',
  'Akses Jalan',
  'Lingkungan',
  'Progress',
  'Event'
];

export default function GalleryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 my-8">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${
              isActive
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
            aria-label={`Filter berdasarkan ${category}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}