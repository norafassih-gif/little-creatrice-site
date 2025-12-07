'use client';

export default function MentionsLegales() {
  return (
    <main className="bg-white min-h-screen text-black pt-32 pb-20 px-6 md:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-12 uppercase">Mentions Légales</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-black mb-2">1. Éditeur du site</h2>
                <p>
                    Le site <strong>littlecreatrice.com</strong> est édité par Little Créatrice.<br/>
                    Siège social : [Votre Adresse Complète]<br/>
                    SIRET : [Votre Numéro SIRET]<br/>
                    Email : nora@littlecreatrice.com<br/>
                    Téléphone : 06 68 69 33 33
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-black mb-2">2. Hébergement</h2>
                <p>
                    Le site est hébergé par Vercel Inc.<br/>
                    Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-black mb-2">3. Propriété Intellectuelle</h2>
                <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                </p>
            </section>
        </div>
      </div>
    </main>
  );
}