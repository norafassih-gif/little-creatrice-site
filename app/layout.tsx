import './globals.css';
import type { Metadata } from 'next';
// 1. On importe les deux polices
import { Montserrat, Space_Mono } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
// 2. On importe le Bandeau Cookies (AJOUTÉ)
import CookieBanner from '@/app/components/CookieBanner';

// 3. On configure Montserrat (Corps de texte)
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// 4. On configure Space Mono (Alternative à Cartograph pour le style Tech)
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LITTLE CREATRICE',
  description: 'Agence de Design & Marketing Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* 5. On injecte les variables de polices dans le body */}
      <body className={`${montserrat.variable} ${spaceMono.variable} font-sans bg-black text-white selection:bg-pink-500 selection:text-white`}>
        <Header />
        
        <main>{children}</main>
        
        <Footer />
        
        {/* 6. On affiche le Bandeau Cookies tout en bas (AJOUTÉ) */}
        <CookieBanner />
      </body>
    </html>
  );
}