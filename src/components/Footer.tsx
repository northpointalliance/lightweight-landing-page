
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bakery-brown text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-right mb-4 md:mb-0">
            <h3 className="text-xl font-bold hebrew-title">לחם טוב</h3>
            <p className="mt-2 hebrew">מאפייה משפחתית מסורתית</p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-white hover:text-bakery-warm transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-bakery-warm transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm opacity-80 hebrew">
          <p>© 2025 לחם טוב - כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
