import type { Metadata } from "next";
import "./globals.css";
import "./titles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Day Dreamers Dave",
  description: "Portafolio profesional de cinematografía y producción audiovisual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
