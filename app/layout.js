import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Berkah Lestari | Toko Kunci Eksklusif & Mewah",
  description: "Selamat datang di Berkah Lestari, destinasi utama Anda untuk solusi kunci dan keamanan rumah dengan kualitas premium dan desain eksklusif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
