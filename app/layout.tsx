import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | CargoKu Lite",
    default: "CargoKu Lite – Lacak Paket Mudah & Cepat",
  },
  description:
    "Aplikasi tracking resi sederhana untuk UMKM dan kurir. Ringan, ramah, dan dibuat khusus untuk mobile.",
  keywords: ["tracking paket", "cargo", "resi", "UMKM", "kurir", "pengiriman"],
  authors: [{ name: "CargoKu Lite" }],
  themeColor: "#2E7D32",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}