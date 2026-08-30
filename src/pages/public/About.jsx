import React from 'react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import CTASection from '../../components/landing/CTASection';
import FAQSection from '../../components/landing/FAQSection';
import heroImg from '../../assets/images/hero.jpg';
import { 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  MapPin, 
  Building2, 
  Target, 
  Award, 
  Lightbulb, 
  Check, 
  Phone, 
  Play, 
  FileText, 
  Clock, 
  Compass, 
  DollarSign, 
  Sparkles, 
  Share2, 
  Globe, 
  Mail,
  Home,        // <-- Diimport di sini agar tidak error
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, count: "120+", label: "Total Kavling" },
    { icon: Users, count: "80+", label: "Kavling Terjual" },
    { icon: FileText, count: "100%", label: "Legalitas SHM" },
    { icon: Award, count: "20+", label: "Partner & Mitra" },
    { icon: Calendar, count: "5+", label: "Tahun Pengembangan" },
  ];

  const values = [
    { icon: ShieldCheck, title: "Integritas", desc: "Kami menjunjung tinggi kejujuran dan keterbukaan dalam setiap proses." },
    { icon: Users, title: "Kepercayaan", desc: "Kepercayaan Anda adalah prioritas utama bagi kami." },
    { icon: Award, title: "Profesional", desc: "Dikelola oleh tim profesional dan berpengalaman di bidang properti." },
    { icon: Lightbulb, title: "Inovasi", desc: "Terus berinovasi untuk menciptakan kawasan yang lebih baik." }
  ];

  const timeline = [
    { year: "2024", title: "Mulai Pengembangan Kawasan Kairagi", icon: Sparkles, active: true },
    { year: "2024", title: "Pembukaan Tahap 1", icon: Compass, active: true },
    { year: "2024", title: "Terjual 80+ Kavling", icon: Users, active: true },
    { year: "2024", title: "Pembangunan Jalan Utama", icon: Building2, active: true },
    { year: "2024", title: "Pembangunan Drainase", icon: TrendingUp, active: true },
    { year: "2025+", title: "Target Pengembangan Tahap Berikutnya", icon: Target, active: false }
  ];

  const features = [
    { icon: FileText, title: "Legalitas SHM", desc: "Sertifikat hak milik yang aman & jelas." },
    { icon: MapPin, title: "Lokasi Strategis", desc: "Dekat fasilitas umum dan pusat kota." },
    { icon: DollarSign, title: "Harga Kompetitif", desc: "Harga terbaik dengan nilai investasi tinggi." },
    { icon: Compass, title: "Akses Mudah", desc: "Jalan lebar & lingkungan nyaman." },
    { icon: TrendingUp, title: "Potensi Investasi", desc: "Nilai tanah terus meningkat setiap tahun." },
    { icon: Award, title: "Layanan Profesional", desc: "Tim kami siap membantu kapan saja." }
  ];

  const teamMembers = [
    { name: "Andi Pratama", role: "Direktur Utama", desc: "Berpengalaman lebih dari 10 tahun di bidang pengembangan properti." },
    { name: "Sari Dewi", role: "Marketing Manager", desc: "Spesialis pemasaran properti fokus pada kepuasan pelanggan." },
    { name: "Rudi Hartono", role: "Surveyor", desc: "Ahli dalam analisis lokasi dan perencanaan kawasan." },
    { name: "Dinda Lestari", role: "Administrasi", desc: "Siap membantu kebutuhan administrasi dan informasi Anda." }
  ];

  return (
    <div className="pb-16">
      {/* 1. HERO ABOUT SECTION */}
      <section className="relative bg-slate-900 text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="PoliLand Kairagi Background" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                TENTANG POLILAND
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Membangun Investasi Masa Depan dengan Transparansi & Kepercayaan
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                PoliLand Kairagi hadir untuk memberikan solusi investasi tanah yang aman, nyaman, dan menguntungkan di Manado.
              </p>
              <div className="pt-2">
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Hubungi Kami via WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Berdiri sejak 2024</h4>
                    <p className="text-xs text-slate-300 mt-1">Berpengalaman dalam pengembangan kawasan strategis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Legalitas Terjamin</h4>
                    <p className="text-xs text-slate-300 mt-1">Seluruh kavling bersertifikat SHM dan aman.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Infrastruktur Berkembang</h4>
                    <p className="text-xs text-slate-300 mt-1">Jalan lebar, drainase, dan fasilitas terus dibangun.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Terjual 80+ Kavling</h4>
                    <p className="text-xs text-slate-300 mt-1">Dipercaya oleh banyak investor dan keluarga.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Lokasi Strategis</h4>
                    <p className="text-xs text-slate-300 mt-1">Akses mudah ke pusat kota dan fasilitas umum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img 
                  src={heroImg} 
                  alt="Kawasan PoliLand Kairagi" 
                  className="w-full h-72 sm:h-80 object-cover object-center" 
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                TENTANG KAMI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Mengenal PoliLand Kairagi
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                PoliLand Kairagi adalah kawasan kavling premium yang berlokasi di Kairagi Dua, Kecamatan Mapanget, Kota Manado. Kami berkomitmen menghadirkan kawasan investasi tanah yang legal, aman, dan memiliki nilai pertumbuhan tinggi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Legalitas lengkap & jelas",
                  "Investasi aman & menguntungkan",
                  "Infrastruktur dan fasilitas terus berkembang",
                  "Tim profesional & berpengalaman",
                  "Lokasi strategis di Kota Manado",
                  "Pelayanan transparan & terpercaya"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. STATISTIK PERUSAHAAN */}
      <section className="py-10 bg-slate-50 border-y border-slate-200/60">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200/80 text-center shadow-sm">
                  <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-xl mb-3">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{stat.count}</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. VISI & MISI */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/70 space-y-4">
              <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">VISI</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Menjadi pengembang kawasan hunian dan investasi tanah terpercaya di Sulawesi Utara yang memberikan nilai jangka panjang bagi masyarakat.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/70 space-y-4">
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">MISI</h3>
              <ul className="space-y-2.5">
                {[
                  "Menyediakan lahan dengan legalitas yang aman dan jelas.",
                  "Mengembangkan kawasan dengan infrastruktur berkualitas.",
                  "Menjaga transparansi dan kejujuran kepada setiap pelanggan.",
                  "Memberikan pelayanan terbaik dan profesional.",
                  "Mendukung pertumbuhan investasi dan ekonomi daerah."
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. NILAI PERUSAHAAN */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide">
              NILAI PERUSAHAAN
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 text-center shadow-sm space-y-3">
                  <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. TIMELINE PERJALANAN */}
      <section className="py-16 bg-white overflow-hidden">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide">
              PERJALANAN POLILAND KAIRAGI
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-7 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-200 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
              {timeline.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 mb-3 bg-white transition-all duration-300 ${
                      item.active ? 'border-blue-600 text-blue-600 shadow-md' : 'border-slate-300 text-slate-400'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-extrabold ${item.active ? 'text-blue-600' : 'text-slate-400'}`}>
                      {item.year}
                    </span>
                    <p className="text-xs font-semibold text-slate-700 mt-1 max-w-[120px] leading-tight">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. MENGAPA MEMILIH KAMI */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide">
              MENGAPA MEMILIH KAMI
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 text-center sm:text-left">
                  <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{feat.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8 & 9. LEGALITAS & LOKASI STRATEGIS */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                LEGALITAS TERJAMIN
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 flex justify-center">
                  <div className="w-40 h-48 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center p-3 text-center shadow-inner">
                    <div className="space-y-2">
                      <FileText className="w-10 h-10 text-emerald-600 mx-auto" />
                      <span className="text-[10px] font-bold text-emerald-800 uppercase block">
                        SERTIFIKAT HAK MILIK (SHM)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-7 space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    Investasi Aman, Legalitas Jelas
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seluruh kavling di PoliLand Kairagi memiliki sertifikat SHM yang sah dan tidak dalam sengketa. Aman untuk investasi jangka panjang Anda.
                  </p>
                  <ul className="space-y-1.5">
                    {["Sertifikat Hak Milik (SHM)", "Tidak dalam sengketa", "Dokumen lengkap", "Proses transparan"].map((l, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="text-xs py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700">
                    Lihat Dokumen Legalitas
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                LOKASI STRATEGIS
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 rounded-xl overflow-hidden border border-slate-200 relative min-h-[180px] bg-blue-50 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="w-8 h-8 text-red-500 mx-auto animate-bounce mb-1" />
                    <span className="text-xs font-bold text-slate-800 block">PoliLand Kairagi</span>
                    <span className="text-[10px] text-slate-500">Kairagi Dua, Mapanget, Manado</span>
                  </div>
                </div>
                <div className="sm:col-span-5 space-y-3">
                  {[
                    { time: "20 menit", place: "Pusat Kota Manado" },
                    { time: "25 menit", place: "Bandara Sam Ratulangi" },
                    { time: "18 menit", place: "Mega Mall Manado" },
                    { time: "15 menit", place: "Universitas Sam Ratulangi" },
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">{loc.time}</span>
                        <span className="text-[10px] text-slate-500">{loc.place}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. VIDEO PROFIL */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden group">
              <img 
                src={heroImg} 
                alt="Video Profil PoliLand" 
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Tonton Perjalanan Pengembangan Kami
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lihat bagaimana kami membangun kawasan yang nyaman, aman, dan bernilai tinggi untuk masa depan Investasi Anda.
              </p>
              <Button variant="primary" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-xs py-2.5 px-5 rounded-xl">
                <Play className="w-3.5 h-3.5 fill-current" />
                Tonton Video Profil
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. TIM KAMI */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-left max-w-xl mb-12">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              TIM KAMI
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200/80 p-5 space-y-4 text-center">
                <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                  <Users className="w-10 h-10 text-slate-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{member.name}</h4>
                  <span className="text-xs font-semibold text-blue-600 block mt-0.5">{member.role}</span>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{member.desc}</p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2 text-slate-400">
                  <Share2 className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
                  <Globe className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
                  <Mail className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 12. FAQ SINGKAT */}
      <FAQSection />

      {/* 13. CTA BANNER */}
      <CTASection />
    </div>
  );
};

export default About;