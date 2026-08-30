import React from 'react';

export default function GalleryGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-1">
                {item.category}
              </span>
              <h4 className="text-white text-sm font-medium line-clamp-2">{item.title}</h4>
            </div>
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}