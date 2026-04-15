import Link from "next/link";
import CargoKuLogo from "@/app/ui/acme-logo";

/* ── Icon helpers ─────────────────────────────────────── */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);

/* ── Data ─────────────────────────────────────────────── */
const FEATURES = [
  {
    title: "Tracking Cepat",
    desc: "Cukup masukkan nomor resi dan informasi paket Anda langsung muncul dalam hitungan detik.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  },
  {
    title: "Aman & Terpercaya",
    desc: "Data paket dan informasi pengguna dilindungi dengan enkripsi dan sistem keamanan berlapis.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: "Mobile-First",
    desc: "Dirancang untuk penggunaan di HP. Ringan, cepat dimuat, dan nyaman dipakai kapan saja.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    title: "Multi Pengguna",
    desc: "Mendukung akun pelanggan dan kurir dengan tampilan yang disesuaikan masing-masing peran.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Riwayat Pengiriman",
    desc: "Simpan dan lihat riwayat semua paket yang pernah Anda kirim atau terima dengan mudah.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
  },
  {
    title: "Bantuan Mudah",
    desc: "Pusat bantuan tersedia langsung di aplikasi. Tim kami siap membantu 7 hari seminggu.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
];

const STEPS = [
  { step: "01", title: "Daftar Akun",    desc: "Buat akun gratis dengan email atau nomor HP Anda. Pendaftaran hanya butuh 1 menit." },
  { step: "02", title: "Masukkan Resi",  desc: "Ketik nomor resi paket Anda di kolom pencarian, lalu tekan tombol Lacak." },
  { step: "03", title: "Pantau Paket",   desc: "Lihat status dan lokasi paket Anda secara real-time hingga sampai tujuan." },
];

const CONTACTS = [
  { icon: "📍", label: "Alamat",  value: "Jl. Laksda Adisucipto No.81\nYogyakarta, 55281" },
  { icon: "📧", label: "Email",   value: "halo@cargoku.id" },
  { icon: "📞", label: "Telepon", value: "+62 274-123-4567\nSenin – Minggu, 08.00–20.00" },
];

/* ── Page ─────────────────────────────────────────────── */
export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-white font-poppins">

      {/* ── NAVBAR ──────────────────────────────────────── */}
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <CargoKuLogo size="md" variant="full" />

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {(["#about:Tentang Kami", "#features:Fitur", "#how:Cara Kerja", "#contact:Kontak"] as const).map((item) => {
              const [href, label] = item.split(":");
              return (
                <a key={href} href={href} className="hover:text-[#2E7D32] transition-colors">
                  {label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login"    className="btn-outline text-sm px-5 py-2">Masuk</Link>
            <Link href="/register" className="btn-primary text-sm px-5 py-2">Daftar Gratis</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#A5D6A7] opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#C8E6C9] opacity-30 blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          {/* Left */}
          <div className="flex-1 animate-fade-in-up">
            <span className="badge badge-green mb-5">🚛 Solusi Pengiriman untuk UMKM</span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B5E20] leading-tight mb-5">
              Lacak Paket Anda<br />
              dengan{" "}
              <span className="text-[#4CAF50]">Mudah</span>{" "}
              &{" "}
              <span className="text-[#4CAF50]">Cepat</span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              Aplikasi tracking resi sederhana untuk UMKM dan kurir. Ringan, ramah, dan dibuat khusus
              untuk pengguna mobile maupun desktop.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/register" className="btn-primary">Mulai Sekarang</Link>
              <Link href="#how"      className="btn-outline">Lihat Cara Kerja</Link>
            </div>

            <div className="flex gap-8">
              {[
                { value: "10K+", label: "Pengguna Aktif" },
                { value: "98%",  label: "Kepuasan Pelanggan" },
                { value: "50+",  label: "Mitra Kurir" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-[#2E7D32]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mock tracking card */}
          <div className="flex-1 flex justify-center animate-fade-in-up animate-delay-200">
            <div className="relative w-full max-w-md">
              <div className="card p-6 shadow-[0_8px_32px_0_rgba(46,125,50,0.14)]">
                <div className="flex items-center gap-3 mb-5">
                  <CargoKuLogo size="sm" variant="icon" />
                  <div>
                    <p className="font-bold text-sm text-[#1B5E20]">CargoKuLite</p>
                    <p className="text-xs text-gray-400">Lacak resimu sekarang</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#E8F5E9] px-4 py-3 mb-5">
                  <SearchIcon />
                  <span className="flex-1 text-sm text-gray-400">Masukkan nomor resi...</span>
                  <span className="rounded-full bg-[#2E7D32] px-4 py-1.5 text-xs font-bold text-white">
                    Lacak
                  </span>
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Resi Terakhir</p>
                <div className="space-y-2">
                  {[
                    { resi: "JNT023KY", status: "Sedang Dikirim", cls: "status-active" },
                    { resi: "JNE438KX", status: "Paket Tiba",     cls: "status-done"   },
                  ].map((pkg) => (
                    <div
                      key={pkg.resi}
                      className="flex items-center justify-between rounded-xl border border-[#E8F5E9] bg-[#F9FBF9] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-bold text-gray-700">{pkg.resi}</p>
                        <p className="text-xs text-gray-400">Cargo Regular</p>
                      </div>
                      <span className={`badge text-xs font-semibold ${pkg.cls}`}>{pkg.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rounded-full bg-[#2E7D32] px-4 py-2 text-xs font-bold text-white shadow-[0_4px_14px_0_rgba(46,125,50,0.25)]">
                ✓ Tracking Cepat
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-full border border-[#C8E6C9] bg-white px-4 py-2 text-xs font-bold text-[#2E7D32] shadow-card">
                🔒 Aman &amp; Terpercaya
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Tentang Kami</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#1B5E20]">Siapa Itu CargoKu Lite?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
              Platform tracking pengiriman yang dirancang khusus untuk UMKM dan kurir freelance di seluruh Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                { icon: "🎯", title: "Misi Kami",  desc: "Menyederhanakan proses tracking paket untuk UMKM dan kurir, sehingga bisnis Anda berjalan lebih efisien dan transparan." },
                { icon: "👁️", title: "Visi Kami",  desc: "Menjadi solusi logistik terpercaya nomor satu untuk usaha kecil dan menengah di Indonesia." },
                { icon: "💚", title: "Nilai Kami", desc: "Kesederhanaan, keandalan, dan keramahan. Teknologi seharusnya mudah diakses oleh semua orang." },
              ].map((v) => (
                <div key={v.title} className="card flex gap-4 p-5">
                  <span className="mt-0.5 text-2xl">{v.icon}</span>
                  <div>
                    <h3 className="mb-1 font-bold text-[#1B5E20]">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-[#C8E6C9] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] p-8">
              <div className="mb-6 flex items-center gap-4">
                <CargoKuLogo size="lg" variant="icon" />
                <div>
                  <h3 className="text-xl font-extrabold text-[#1B5E20]">CargoKu Lite</h3>
                  <p className="text-sm font-medium text-[#4CAF50]">Lacak paketmu, mudah &amp; cepat</p>
                </div>
              </div>

              <div className="divide-y divide-[#C8E6C9] text-sm">
                {[
                  { label: "Didirikan",          value: "2024" },
                  { label: "Kantor Pusat",       value: "Yogyakarta, Indonesia" },
                  { label: "Pengguna Terdaftar", value: "10.000+" },
                  { label: "Layanan",            value: "Regular · Express · Ekonomi" },
                  { label: "Platform",           value: "Web & Mobile" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between py-3">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="font-semibold text-[#1B5E20]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section id="features" className="py-20 bg-[#F9FBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Fitur Unggulan</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#1B5E20]">Kenapa Pilih CargoKu Lite?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="card group p-6">
                <div className="feature-icon mb-4">{f.icon}</div>
                <h3 className="mb-2 font-bold text-[#1B5E20]">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section id="how" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Cara Kerja</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#1B5E20]">Mulai dalam 3 Langkah Mudah</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[58%] h-px w-[42%] border-t-2 border-dashed border-[#C8E6C9]" />
                )}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#E8F5E9] shadow-card">
                  <span className="text-xl font-extrabold text-[#2E7D32]">{s.step}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1B5E20]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────── */}
      <section className="bg-green-gradient py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white">Siap Mulai Tracking Paketmu?</h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-[#A5D6A7]">
            Bergabunglah dengan ribuan UMKM dan kurir yang sudah mempercayai CargoKu Lite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-full bg-white px-8 py-3 text-sm font-bold text-[#2E7D32] shadow-lg hover:bg-[#E8F5E9] transition-colors"
            >
              Daftar Gratis Sekarang
            </Link>
            <Link
              href="/login"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Sudah Punya Akun? Masuk
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#F9FBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Kontak</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#1B5E20]">Hubungi Kami</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CONTACTS.map((c) => (
              <div key={c.label} className="card p-6 text-center">
                <div className="mb-3 text-3xl">{c.icon}</div>
                <h3 className="mb-2 font-bold text-[#1B5E20]">{c.label}</h3>
                <p className="whitespace-pre-line text-sm leading-relaxed text-gray-500">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="footer py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <CargoKuLogo size="sm" variant="icon" />
            <span className="font-bold text-lg text-white">CargoKu Lite</span>
          </div>

          <p className="text-sm text-[#A5D6A7]">© 2024 CargoKu Lite. Semua hak dilindungi.</p>

          <div className="flex gap-5 text-sm text-[#A5D6A7]">
            <a href="#" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

    </div>
  );
}