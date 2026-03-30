import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Berkah Lestari | Ateliers de Serrurerie de Luxe",
  description: "Selamat datang di Berkah Lestari, destinasi utama Anda untuk solusi kunci dan keamanan rumah dengan kualitas premium dan desain eksklusif sekelas brand dunia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
