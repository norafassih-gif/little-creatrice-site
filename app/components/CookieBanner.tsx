'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-black border-t border-white/20 p-4 md:p-6 z-50 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl"
        >
            <p className="text-gray-400 text-xs md:text-sm font-mono max-w-2xl text-center md:text-left">
                Nous utilisons des cookies pour améliorer votre expérience digitale. 
                En continuant, vous acceptez notre politique de confidentialité.
            </p>
            <div className="flex gap-4">
                <button 
                    onClick={acceptCookies} 
                    className="bg-white text-black px-6 py-2 font-bold uppercase text-xs hover:bg-pink-500 hover:text-white transition-colors"
                >
                    Accepter
                </button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}