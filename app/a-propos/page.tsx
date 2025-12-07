'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 pb-20 px-6 md:px-20 selection:bg-pink-600 overflow-hidden">
      
      {/* FOND ANIMÉ */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
         <div className="absolute inset-0 noise-bg opacity-20"></div>
         {/* Forme floue bleue/violette */}
         <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px]"
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- HERO : LE MANIFESTE --- */}
        <div className="flex flex-col md:flex-row gap-16 mb-32 items-end">
            <div className="md:w-2/3">
                <span className="font-mono text-pink-500 text-xs tracking-[0.3em] uppercase border border-pink-500/30 px-3 py-1">
                    Since 2021
                </span>
                <h1 className="font-sans font-black text-6xl md:text-9xl mt-8 leading-[0.9] uppercase">
                    NOUS SOMMES<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        LITTLE CREATRICE
                    </span>
                </h1>
            </div>
            <div className="md:w-1/3 pb-2">
                <p className="text-gray-400 text-lg leading-relaxed">
                    Plus qu'une agence, nous sommes des architectes d'histoires. 
                    Nous croyons que chaque marque possède une âme qui ne demande qu'à être révélée par la stratégie et le design.
                </p>
            </div>
        </div>

        {/* --- IMAGE D'ÉQUIPE / AMBIANCE --- */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[500px] md:h-[700px] relative overflow-hidden rounded-none mb-32 group"
        >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            {/* Image d'ambiance bureau créatif / team */}
            <motion.img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" 
                alt="L'équipe Little Créatrice"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
            />
        </motion.div>

        {/* --- NOS VALEURS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-white/10 pt-16">
            <div>
                <h3 className="font-mono text-pink-500 text-xl mb-4">01. Audace</h3>
                <p className="text-gray-400">Nous ne suivons pas les tendances, nous les créons. Oser, c'est exister.</p>
            </div>
            <div>
                <h3 className="font-mono text-pink-500 text-xl mb-4">02. Excellence</h3>
                <p className="text-gray-400">Chaque pixel compte. Chaque mot a son poids. Nous visons la perfection.</p>
            </div>
            <div>
                <h3 className="font-mono text-pink-500 text-xl mb-4">03. Impact</h3>
                <p className="text-gray-400">Le beau ne suffit pas. Nous créons des stratégies qui convertissent.</p>
            </div>
        </div>

        {/* --- LOCALISATIONS (INTERNATIONAL) --- */}
        <div className="bg-white/5 border border-white/10 p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="font-sans font-black text-4xl md:text-6xl mb-12">
                    PRÉSENCE <span className="text-stroke-2 text-transparent">MONDIALE</span>
                </h2>
                
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Paris */}
                    <div className="group cursor-pointer">
                        <span className="block text-gray-500 text-xs font-mono mb-2">FRANCE</span>
                        <h3 className="text-4xl font-bold group-hover:text-pink-500 transition-colors">PARIS</h3>
                        <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Capitale de la Mode & Luxe</p>
                    </div>

                    {/* Toulouse */}
                    <div className="group cursor-pointer">
                        <span className="block text-gray-500 text-xs font-mono mb-2">FRANCE</span>
                        <h3 className="text-4xl font-bold group-hover:text-pink-500 transition-colors">TOULOUSE</h3>
                        <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Siège Créatif</p>
                    </div>

                    {/* Dubaï */}
                    <div className="group cursor-pointer">
                        <span className="block text-gray-500 text-xs font-mono mb-2">UAE</span>
                        <h3 className="text-4xl font-bold group-hover:text-pink-500 transition-colors">DUBAÏ</h3>
                        <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Hub Innovation & Business</p>
                    </div>
                </div>
            </div>

            {/* Carte ou Globe abstrait en fond */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-pink-900/20 to-transparent pointer-events-none"></div>
        </div>

        {/* --- CTA FINAL --- */}
        <div className="mt-32 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Prêt à écrire votre histoire ?</h2>
            <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-300">
                Rejoindre l'aventure
            </Link>
        </div>

      </div>
    </main>
  );
}