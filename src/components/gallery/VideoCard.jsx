import React from 'react';

export default function VideoCard({ video }) {
  const { title, thumbnail, duration, date, videoUrl } = video;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
          <button
            aria-label={`Play video ${title}`}
            onClick={() => videoUrl && window.open(videoUrl, '_blank')}
            className="w-14 h-14 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-md font-mono backdrop-blur-sm">
          {duration}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <h3 className="font-semibold text-slate-800 text-base md:text-lg line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-400 mt-3">{date}</p>
      </div>
    </div>
  );
}