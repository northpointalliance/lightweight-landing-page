
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg hebrew-title">
              לחם טוב
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-row-reverse">
            <a href="/" className="text-foreground hover:text-primary font-medium transition-colors hebrew px-3 py-2 rounded-md hover:bg-secondary">בית</a>
            <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors hebrew px-3 py-2 rounded-md hover:bg-secondary">אודות</a>
            <a href="#services" className="text-foreground hover:text-primary font-medium transition-colors hebrew px-3 py-2 rounded-md hover:bg-secondary">שירותים</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-bakery-brown hover:text-bakery-accent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3 items-end">
            <a href="/" className="text-foreground hover:text-primary font-medium hebrew px-3 py-2 rounded-md hover:bg-secondary">בית</a>
            <a href="#about" className="text-foreground hover:text-primary font-medium hebrew px-3 py-2 rounded-md hover:bg-secondary">אודות</a>
            <a href="#services" className="text-foreground hover:text-primary font-medium hebrew px-3 py-2 rounded-md hover:bg-secondary">שירותים</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
