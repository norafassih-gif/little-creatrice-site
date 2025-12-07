'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const formations = [
  { id: "01", title: "Social Media & Influence", description: "Dominez les algorithmes.", tag: "Growth" },
  { id: "02", title: "Intelligence Artificielle", description: "Automatisez pour mieux créer.", tag: "Future" },
  { id: "03", title: "Montage Vidéo", description: "Rythmez votre storytelling.", tag: "Content" },
  { id: "04", title: "Création Web", description: "Code & No-code mastery.", tag: "Dev" }
];

export default function Services() {
  return (
    <section className="relative bg-[#050505] py-32 px-6 md:px-20 text-white overflow-hidden">
      
      {/* --- FOND ANIMÉ VIBRANT --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
          
          <motion.div 
              animate={{ 
                  x: [0, 100, -100, 0],
                  y: [0, -50, 50, 0],
                  scale: [1, 1.2, 0.9, 1],
                  rotate: [0, 45, -45, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-600 rounded-full blur-[100px] mix-blend-screen opacity-60"
          />
          
          <motion.div 
              animate={{ 
                  x: [0, -150, 50, 0],
                  y: [0, 100, -50, 0],
                  scale: [1, 1.3, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-600 rounded-full blur-[120px] mix-blend-screen opacity-60"
          />
          
           <motion.div 
              animate={{ 
                  x: [0, 50, -50, 0],
                  scale: [1, 1.1, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[150px] mix-blend-screen opacity-40"
          />
      </div>
      
      {/* --- CONTENU --- */}
      <div className="relative z-20 max-w-7xl mx-auto">
        
        {/* TITRE */}
        <div className="mb-24">
          <span className="font-mono text-pink-400 text-sm tracking-[0.2em] uppercase pl-1 bg-black/50 px-2 py-1 rounded">
            Expertises & Formations
          </span>
          
          <h2 className="font-sans text-5xl md:text-8xl font-black mt-6 leading-none flex flex-wrap gap-x-4 gap-y-2 drop-shadow-xl">
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}>NOS</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">TERRAINS</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>DE</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>JEU.</motion.span>
          </h2>
        </div>

        {/* LISTE DES FORMATIONS (Sans bordures, arrondi doux) */}
        <div className="grid grid-cols-1 gap-6"> {/* gap-6 pour espacer les cartes */}
          {formations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Modification ici : rounded-2xl et suppression de la bordure */}
              <Link href="/formations" className="group relative block bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  
                  {/* Gauche : Numéro + Titre */}
                  <div className="flex items-center gap-6 w-full md:w-auto">
                      {/* Numéro arrondi */}
                      <span className="font-mono text-pink-400 text-xl font-bold bg-pink-500/10 px-4 py-2 rounded-full">0{item.id}</span>
                      <h3 className="font-sans text-2xl md:text-4xl font-bold">{item.title}</h3>
                  </div>

                  {/* Droite : Description + Tag + Flèche */}
                  <div className="flex items-center gap-6 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                      <span className="hidden md:block text-gray-400 font-mono text-sm">{item.description}</span>
                      
                      <div className="flex items-center gap-4">
                        {/* Badge arrondi (rounded-full) */}
                        <span className="font-mono text-xs uppercase text-white bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-1.5 rounded-full shadow-lg shadow-pink-900/20">{item.tag}</span>
                        <span className="text-2xl transform group-hover:-rotate-45 transition-transform duration-300">→</span>
                      </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}