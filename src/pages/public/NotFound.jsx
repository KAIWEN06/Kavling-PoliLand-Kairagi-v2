import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-4">
      <h1 className="text-6xl font-black text-slate-900">404</h1>
      <p className="text-lg text-slate-600 mt-2">Halaman yang Anda cari tidak ditemukan.</p>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

// Pastikan baris ini ada di paling bawah file:
export default NotFound;