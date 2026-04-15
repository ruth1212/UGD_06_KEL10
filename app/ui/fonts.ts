import { Poppins, Lusitana } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Tambahkan ini agar tidak error
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});