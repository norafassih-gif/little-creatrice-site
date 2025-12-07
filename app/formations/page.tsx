'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Données avec Images HD
const courses = [
  {
    category: "Intelligence Artificielle",
    title: "Booster ses réseaux avec l'IA",
    description: "ChatGPT & Midjourney pour dominer le feed.",
    duration: "14h",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop" // Robot/AI art
  },
  {
    category: "IA & RH",
    title: "L'IA au service des RH",
    description: "Recrutement prédictif et automatisation des talents.",
    duration: "21h",
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" // Data visualization
  },
  {
    category: "Création",
    title: "Montage Vidéo & Storytelling",
    description: "Créez des Reels et TikToks qui captivent.",
    duration: "28h",
    level: "Débutant",
    // NOUVELLE IMAGE (Écran de montage timeline coloré)
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" 
  },
  {
    category: "Langues",
    title: "Business English",
    description: "Négociez et pitchez en anglais international.",
    duration: "Sur mesure",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" // Meeting business
  },
  {
    category: "Langues",
    title: "Français Langue Étrangère",
    description: "Maîtrisez les subtilités du français pro.",
    duration: "Sur mesure",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop" // Paris
  },
  {
    category: "Web & Tech",
    title: "Création de Site Internet",
    description: "De zéro à la mise en ligne. Code & Design.",
    duration: "35h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop" // Coding
  }
];

export default function FormationsPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 pb-20 px-4 md:px-10 selection:bg-pink-600">
      
      {/* FOND ANIMÉ */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
         <div className="absolute inset-0 noise-bg opacity-30"></div>
         <motion.div 
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px]"
         />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* EN-TÊTE AVEC GLITCH */}
        <div className="mb-24 px-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-pink-500 text-xs md:text-sm tracking-[0.3em] uppercase border border-pink-500/30 px-4 py-2 rounded-none bg-black/50 backdrop-blur-md"
          >
            Catalogue Formations 2025
          </motion.span>
          
          <h1 className="font-sans font-black text-6xl md:text-9xl mt-8 mb-6 uppercase leading-[0.85]">
            <span className="block glitch-text" data-text="NOS">NOS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
              PROGRAMMES
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10">
            <div className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-bold font-mono text-sm uppercase tracking-wider hover:bg-pink-500 hover:text-white transition-colors cursor-default">
              <span>✓</span>
              <span>100% Pris en charge OPCO</span>
            </div>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Des compétences concrètes pour le monde réel. <br/>
              <span className="text-white">IA, Tech, Langues & Créativité.</span>
            </p>
          </div>
        </div>

        {/* GRILLE IMMERSIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group h-[500px] overflow-hidden border border-white/5 bg-gray-900"
            >
              <Link href="/contact" className="block w-full h-full relative">
                
                {/* IMAGE DE FOND */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
                    <motion.img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                    />
                </div>

                {/* CONTENU TEXTE */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    
                    <div className="flex justify-between items-end mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <span className="font-mono text-xs uppercase text-pink-400 bg-black/80 px-2 py-1 backdrop-blur-md">
                            {course.duration}
                        </span>
                        <span className="font-mono text-xs text-white border border-white/30 px-2 py-1 rounded-full">
                            {course.level}
                        </span>
                    </div>

                    <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2 block">
                        {course.category}
                    </span>
                    
                    <h3 className="font-sans text-3xl md:text-4xl font-black text-white mb-2 leading-none group-hover:text-pink-500 transition-colors">
                        {course.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                        {course.description}
                    </p>

                    <div className="w-full h-[1px] bg-white/30 mt-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="absolute top-8 right-8 z-20 text-white text-3xl opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    ↗
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}