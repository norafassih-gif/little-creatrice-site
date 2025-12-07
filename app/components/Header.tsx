'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" onClick={closeMenu}>
          <Image 
            src="/logos/logo-noir.png" 
            alt="Little Créatrice Logo" 
            width={150} 
            height={50} 
            className="w-32 md:w-40 h-auto object-contain"
            priority 
          />
        </Link>
        
        {/* LIENS DESKTOP (Cachés sur mobile) */}
        <div className="hidden md:flex space-x-8 items-center font-mono text-sm tracking-widest uppercase">
          <Link href="/a-propos" className="text-black hover:text-pink-600 transition-colors">L'Agence</Link>
          <Link href="/formations" className="relative group text-black">
            <span className="relative z-10 font-bold border-b-2 border-pink-600 pb-1">Formations</span>
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-pink-600 rounded-full animate-ping"></span>
          </Link>
          <Link href="/portfolio" className="text-black hover:text-pink-600 transition-colors">Portfolio</Link>
          <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-none hover:bg-pink-600 transition-all duration-300">Start Project</Link>
        </div>

        {/* BOUTON BURGER (Visible uniquement sur mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden z-50 text-black font-bold font-mono uppercase tracking-widest"
        >
          {isOpen ? "Fermer" : "Menu"}
        </button>

      </nav>

      {/* MENU MOBILE (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
                <Link href="/" onClick={closeMenu} className="text-3xl font-black text-white hover:text-pink-500 uppercase">Accueil</Link>
                <Link href="/a-propos" onClick={closeMenu} className="text-3xl font-black text-white hover:text-pink-500 uppercase">L'Agence</Link>
                <Link href="/formations" onClick={closeMenu} className="text-3xl font-black text-pink-500 hover:text-white uppercase">Formations</Link>
                <Link href="/portfolio" onClick={closeMenu} className="text-3xl font-black text-white hover:text-pink-500 uppercase">Portfolio</Link>
                <Link href="/contact" onClick={closeMenu} className="text-xl font-mono text-gray-400 hover:text-white mt-8 border border-white/20 px-6 py-3">Démarrer un projet</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}