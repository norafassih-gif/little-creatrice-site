'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 pb-20 px-6 md:px-20 selection:bg-pink-600 overflow-hidden">
      
      {/* FOND ANIMÉ */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
         <div className="absolute inset-0 noise-bg opacity-20"></div>
         <motion.div 
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[150px]"
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* --- COLONNE GAUCHE : INFOS --- */}
        <div className="lg:w-1/2">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="font-mono text-pink-500 text-xs tracking-[0.3em] uppercase border border-pink-500/30 px-3 py-1">
              Contact
            </span>
            
            <h1 className="font-sans font-black text-6xl md:text-8xl mt-8 mb-6 leading-[0.9]">
              LET'S CREATE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
                TOGETHER.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Un projet ? Une vision ? <br/>
              Nous sommes prêts à raconter votre histoire.
            </p>
          </motion.div>

          {/* COORDONNÉES GÉANTES */}
          <div className="space-y-12">
            
            {/* Email */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="group"
            >
                <label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                <a href="mailto:nora@littlecreatrice.com" className="font-sans font-bold text-3xl md:text-5xl border-b border-white/20 pb-2 group-hover:text-pink-500 group-hover:border-pink-500 transition-all duration-300">
                    nora@littlecreatrice.com
                </a>
            </motion.div>

            {/* Téléphone & WhatsApp */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="group"
            >
                <label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">Phone & WhatsApp</label>
                <div className="flex flex-col items-start gap-4">
                    <a href="tel:+33668693333" className="font-sans font-bold text-3xl md:text-5xl border-b border-white/20 pb-2 group-hover:text-pink-500 group-hover:border-pink-500 transition-all duration-300">
                        06 68 69 33 33
                    </a>
                    
                    {/* Bouton WhatsApp Spécial */}
                    <a 
                        href="https://wa.me/33668693333" 
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-black font-bold px-6 py-3 rounded-full hover:bg-white transition-colors"
                    >
                        <span>💬 Discuter sur WhatsApp</span>
                    </a>
                </div>
            </motion.div>

            {/* Localisation */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                 <label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">Bureaux</label>
                 <p className="text-xl md:text-2xl font-light">
                    Paris • Toulouse • Dubaï
                 </p>
            </motion.div>

          </div>

        </div>

        {/* --- COLONNE DROITE : FORMULAIRE --- */}
        <motion.div 
            initial={{ opacity: 0, opacity: 0 }}
            animate={{ opacity: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:w-1/2 bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10"
        >
            <h3 className="font-mono text-xl mb-8 text-pink-500">Formulaire de Projet</h3>
            
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400">Nom</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-pink-500 transition-colors text-lg" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400">Entreprise</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-pink-500 transition-colors text-lg" placeholder="Votre société" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-pink-500 transition-colors text-lg" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Sujet</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-pink-500 transition-colors text-lg text-white">
                        <option className="bg-black text-gray-300" value="">Choisir un sujet...</option>
                        <option className="bg-black text-white" value="branding">Branding & Design</option>
                        <option className="bg-black text-white" value="web">Création Site Web</option>
                        <option className="bg-black text-white" value="formation">Formation</option>
                        <option className="bg-black text-white" value="influence">Influence & Social Media</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-pink-500 transition-colors text-lg" placeholder="Racontez-nous votre projet..."></textarea>
                </div>

                <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-pink-500 hover:text-white transition-all duration-300 mt-8">
                    Envoyer le message
                </button>

            </form>
        </motion.div>

      </div>
    </main>
  );
}