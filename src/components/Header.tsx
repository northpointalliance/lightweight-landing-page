
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bakery-cream shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-bakery-brown hebrew-title">לחם טוב</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-row-reverse">
            <a href="#about" className="text-bakery-brown hover:text-bakery-accent font-medium hebrew">אודות</a>
            <a href="#products" className="text-bakery-brown hover:text-bakery-accent font-medium hebrew">המוצרים שלנו</a>
            <a href="#contact" className="text-bakery-brown hover:text-bakery-accent font-medium hebrew">צור קשר</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-bakery-brown"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3 items-end animate-fade-in">
            <a href="#about" className="text-bakery-brown hover:text-bakery-accent font-medium hebrew">אודות</a>
            <a href="#products" className="text-bakery-brown hover:text-bakery-accent font-medium hebrew">המוצרים שלנו</a>
            <a href="#contact" className="text-bakery-brown hover:text-bakery-accent font-medium hebrew">צור קשר</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
