import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white stroke-emerald-500" />
    </a>
  );
}