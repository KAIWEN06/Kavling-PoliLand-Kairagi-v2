import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/landing/HeroSection';
import FeatureSection from '../../components/landing/FeatureSection';
import GallerySection from '../../components/landing/GallerySection';
import SiteplanSection from '../../components/landing/SiteplanSection';
import ProgressSection from '../../components/landing/ProgressSection';
import FAQSection from '../../components/landing/FAQSection';
import CTASection from '../../components/landing/CTASection';
import ContactSection from '../../components/landing/ContactSection';
import FloatingWhatsapp from '../../components/landing/FloatingWhatsapp';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <GallerySection />
        <SiteplanSection />
        <ProgressSection />
        
        {/* FAQ & CTA Combined Section Container */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <FAQSection />
            </div>
            <div className="lg:col-span-7">
              <CTASection />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <FloatingWhatsapp />
    </div>
  );
}