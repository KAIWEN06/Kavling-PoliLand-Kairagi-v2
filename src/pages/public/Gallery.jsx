import React, { useState } from 'react';

// Import Component Gallery
import GalleryFilter from '../../components/gallery/GalleryFilter';
import GalleryGrid from '../../components/gallery/GalleryGrid';
import VideoCard from '../../components/gallery/VideoCard';
import SectionTitle from '../../components/ui/SectionTitle';

const dummyPhotos = [
  { id: 1, title: 'Gerbang Utama & Akses Jalan', category: 'Akses Jalan', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Kavling Blok A Siap Bangun', category: 'Area Kavling', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Taman Asri & Area Hijau', category: 'Fasilitas', image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Pemandangan Lingkungan Kairagi', category: 'Lingkungan', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Pengecoran Jalan Utama Phase 1', category: 'Progress', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Acara Customer Gathering 2026', category: 'Event', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Kavling Sudut Hook Blok B', category: 'Area Kavling', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Instalasi Jaringan Listrik & Air', category: 'Progress', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
];

const dummyVideos = [
  {
    id: 1,
    title: 'Drone Flyover PoliLand Kairagi 2026',
    thumbnail: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    duration: '03:45',
    date: '15 Agustus 2026',
    videoUrl: 'https://youtube.com'
  },
  {
    id: 2,
    title: 'Progress Pembangunan Infrastruktur Tahap 2',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    duration: '02:10',
    date: '28 Juli 2026',
    videoUrl: 'https://youtube.com'
  },
  {
    id: 3,
    title: 'Suasana Senja di Kawasan PoliLand Kairagi',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    duration: '01:55',
    date: '10 Juli 2026',
    videoUrl: 'https://youtube.com'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredPhotos = activeCategory === 'Semua'
    ? dummyPhotos
    : dummyPhotos.filter(photo => photo.category === activeCategory);

  return (
    <div className="pb-16">
      {/* Hero Gallery Section (pt-32 memastikan teks tidak tertutup Navbar fixed) */}
      <section className="bg-slate-900 text-white pt-32 pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-800/50 inline-block mb-4">
            Dokumentasi Visual
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Galeri & Dokumentasi PoliLand Kairagi
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg">
            Jelajahi perkembangan kawasan, fasilitas, lingkungan asri, dan perkembangan fasilitas terkini di kawasan PoliLand Kairagi Manado.
          </p>
        </div>
      </section>

      {/* Section Statistik Dokumentasi */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">150+</p>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">Total Kavling</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">100%</p>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">Akses Bebas Banjir</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">85%</p>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">Progress Infrastruktur</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">24/7</p>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">Keamanan Sistem</p>
          </div>
        </div>
      </section>

      {/* Section Grid Gallery */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <SectionTitle
          title="Koleksi Foto Kawasan"
          subtitle="Filter foto berdasarkan bagian kawasan yang ingin Anda lihat secara detail"
          center
        />

        <GalleryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <GalleryGrid items={filteredPhotos} />
      </section>

      {/* Section Video Dokumentasi */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <SectionTitle
          title="Video Dokumentasi"
          subtitle="Saksikan tayangan langsung lingkungan kawasan dan pemantauan progress via udara"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {dummyVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Section CTA Survey Lokasi */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Tertarik Melihat Lokasi Secara Langsung?
            </h2>
            <p className="text-emerald-100 text-sm md:text-base">
              Jadwalkan kunjungan survey lokasi gratis bersama tim konsultansi profesional kami.
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20PoliLand%20Kairagi,%20saya%20ingin%20jadwal%20survey%20lokasi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Jadwalkan Survey WA
          </a>
        </div>
      </section>
    </div>
  );
}