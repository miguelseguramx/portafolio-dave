import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./titles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { Provider } from '@/components/ui/provider';
import { Container } from "@chakra-ui/react";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://daydreamerdave.com'),
  title: "Day Dreamer Dave | Cinematógrafo & Videógrafo",
  description: "Portafolio profesional de cinematografía y producción audiovisual. Operador de cámara, asistente de cámara, editor y director de fotografía.",
  keywords: ['cinematógrafo', 'videógrafo', 'director de fotografía', 'operador de cámara', 'producción audiovisual', 'México', 'Day Dreamer Dave'],
  authors: [{ name: 'Day Dreamer Dave' }],
  creator: 'Day Dreamer Dave',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'Day Dreamer Dave | Cinematógrafo & Videógrafo',
    description: 'Portafolio profesional de cinematografía y producción audiovisual.',
    images: [{ url: '/dave.JPG', width: 1800, height: 1200, alt: 'Day Dreamer Dave' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Dreamer Dave | Cinematógrafo & Videógrafo',
    description: 'Portafolio profesional de cinematografía y producción audiovisual.',
    images: ['/dave.JPG'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Day Dreamer Dave',
  jobTitle: 'Cinematógrafo & Director de Fotografía',
  sameAs: ['https://instagram.com/day_dreamer_dave'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <Provider>
          <Header />
          <Container maxW="none" bg="bg.subtle" p={0}>
            {children}
          </Container>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
