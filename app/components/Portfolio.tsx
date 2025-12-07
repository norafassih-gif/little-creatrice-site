'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Données fictives (à remplacer par vos vrais projets)
const projects = [
  { 
    id: 1, 
    title: "Maison Naka", 
    category: "Branding & Site Web", 
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Vogue Paris", 
    category: "Campagne Influence", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2700&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "TechFlow AI", 
    category: "Interface & Dev", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2700&auto=format&fit=crop" 
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Effet de parallaxe léger pour les images
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="bg-[#050505] text-white py-0 overflow-hidden">
      
      {/* --- MARQUEE (Texte qui défile) --- */}
      <div className="relative py-20 border-t border-white/10 bg-black z-20">
        <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="flex gap-8"
            >
                {[...Array(4)].map((_, i) => (
                    <h2 key={i} className="text-8xl md:text-[10rem] font-black text-transparent text-stroke-2 opacity-30 font-sans tracking-tighter">
                        SELECTED WORKS — 
                    </h2>
                ))}
            </motion.div>
        </div>
      </div>

      {/* --- LISTE DES PROJETS --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    style={{ y: index % 2 === 0 ? 0 : y }} // Une colonne bouge, l'autre reste fixe (effet décalé)
                    className={`group relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`} // Décalage vertical
                >
                    <Link href="/portfolio" className="block">
                        {/* Image Container avec Overflow Hidden pour le zoom */}
                        <div className="relative overflow-hidden rounded-none h-[500px] w-full mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.7 }}
                                src={project.image} 
                                alt={project.title} 
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Textes */}
                        <div className="flex justify-between items-end border-b border-white/20 pb-4 group-hover:border-pink-500 transition-colors">
                            <div>
                                <h3 className="text-3xl font-bold font-sans group-hover:text-pink-500 transition-colors">{project.title}</h3>
                                <p className="text-gray-500 font-mono text-sm mt-1">{project.category}</p>
                            </div>
                            <span className="text-2xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-pink-500">
                                ↗
                            </span>
                        </div>
                    </Link>
                </motion.div>
            ))}

            {/* Carte "Voir tout" */}
            <div className="flex flex-col justify-center items-center h-[500px] border border-white/10 md:mt-32 hover:bg-white/5 transition-colors cursor-pointer group">
                <Link href="/portfolio" className="text-center">
                    <span className="block font-mono text-pink-500 text-sm mb-4">ARCHIVES</span>
                    <h3 className="text-5xl font-black font-sans group-hover:scale-110 transition-transform duration-300">VOIR TOUT<br/>LE PORTFOLIO</h3>
                </Link>
            </div>

        </div>
      </div>

    </section>
  );
}