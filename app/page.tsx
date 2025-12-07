'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-pink-600 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        
        {/* 1. VIDÉO D'ARRIÈRE-PLAN */}
        <div className="absolute inset-0 w-full h-full z-0">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-60"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
            <div className="absolute inset-0 noise-bg opacity-30"></div>
        </div>

        {/* 2. CONTENU PRINCIPAL */}
        <div className="relative z-10 text-center max-w-6xl mx-auto mt-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
             <span className="inline-block px-3 py-1 border border-white/20 rounded-full bg-black/30 backdrop-blur-md text-xs font-mono tracking-[0.3em] uppercase text-gray-300">
                Agence Digitale & Formation
             </span>
          </motion.div>

          {/* TITRE PRINCIPAL AVEC SUPER DESIGN */}
          <h1 className="font-sans font-black text-6xl md:text-9xl leading-none tracking-tighter mb-6 mix-blend-overlay text-white drop-shadow-2xl">
            {/* Effet Glitch sur LITTLE */}
            <span className="block glitch-text" data-text="LITTLE">LITTLE</span>
            
            {/* Effet Outline (Contour Transparent) sur CREATRICE */}
            <span className="block text-stroke-2 text-transparent pt-2">
              CREATRICE
            </span>
          </h1>

          {/* Paragraphe court */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Nous transformons votre vision en impact digital. <br/>
            <span className="font-mono text-sm md:text-base text-pink-400 mt-2 block">
                [ Branding • IA • Vidéo • Formations OPCO ]
            </span>
          </motion.p>

          {/* BOUTONS ACTIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center mt-12 items-center"
          >
            <Link href="/formations" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300">
                <span className="relative z-10">Nos Formations</span>
                <div className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 ease-out mix-blend-multiply"></div>
            </Link>
            
            <Link href="/contact" className="text-sm font-mono uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white hover:text-pink-400 transition-all">
                Démarrer un projet
            </Link>
          </motion.div>

        </div>

        {/* INDICATEUR DE SCROLL */}
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-gray-400"
        >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
            SCROLL
        </motion.div>

      </section>

      {/* SECTION SERVICES */}
      <Services />

      {/* SECTION PORTFOLIO */}
      <Portfolio />

    </main>
  );
}