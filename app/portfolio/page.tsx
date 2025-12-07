'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Données des projets (Avec le lien corrigé pour Nike Run)
const allProjects = [
  { id: 1, title: "Maison Naka", category: "Branding", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000" },
  { id: 2, title: "Vogue Paris", category: "Influence", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000" },
  { id: 3, title: "TechFlow AI", category: "Web Design", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000" },
  { id: 4, title: "Serum Glow", category: "Branding", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000" }, // Cosmétique
  { id: 5, title: "Crypto Future", category: "Web Design", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000" }, // Tech 3D
  { id: 6, title: "Foodies App", category: "Influence", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000" }, // Food
  { id: 7, title: "Luxe Estate", category: "Web Design", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000" }, // Immo Luxe
  // ICI : J'ai mis une nouvelle image qui fonctionne pour Nike Run
  { id: 8, title: "Nike Run", category: "Influence", image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2000" }, // Sport
];

const categories = ["Tout", "Branding", "Web Design", "Influence"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  // Filtrer les projets
  const filteredProjects = activeCategory === "Tout" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 pb-20 px-6 md:px-20 selection:bg-pink-600">
      
      {/* HEADER PAGE */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <span className="font-mono text-pink-500 text-xs tracking-[0.3em] uppercase border border-pink-500/30 px-3 py-1 bg-pink-900/10">
          Selected Works
        </span>
        <h1 className="font-sans font-black text-6xl md:text-9xl mt-8 mb-6 uppercase">
          NOS <span className="text-stroke-2 text-transparent">CRÉATIONS</span>
        </h1>
        
        {/* BARRE DE FILTRES */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider border transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-gray-500 border-white/20 hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRILLE DE PROJETS */}
      <div className="max-w-[1600px] mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative h-[400px] md:h-[500px] overflow-hidden bg-gray-900 cursor-pointer"
              >
                <Link href="/contact"> {/* Lien vers contact pour demander un projet similaire */}
                  
                  {/* IMAGE */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* OVERLAY AU SURVOL */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                    <span className="font-mono text-pink-500 text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.category}
                    </span>
                    <h3 className="font-sans text-4xl font-bold text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.title}
                    </h3>
                    <div className="px-6 py-2 border border-white/30 rounded-full text-xs uppercase hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      Voir le projet
                    </div>
                  </div>

                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </main>
  );
}