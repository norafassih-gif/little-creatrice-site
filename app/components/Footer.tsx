export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Little Créatrice. Tous droits réservés.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Design et code 100% fait main.
        </p>
        
        {/* Vous pourrez ajouter ici les liens sociaux plus tard */}
      </div>
    </footer>
  );
}