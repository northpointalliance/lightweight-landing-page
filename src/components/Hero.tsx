
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";
import FacebookShare from "./FacebookShare";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-bakery-tan to-bakery-cream py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col items-end text-right mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bakery-brown hebrew-title">
              מאפייה משפחתית<br />עם טעם של בית
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-bakery-brown/90 hebrew max-w-lg">
              אנו אופים מדי יום לחמים, מאפים ומתוקים מהחומרים האיכותיים ביותר, לפי מתכונים משפחתיים מסורתיים
            </p>
            
            <div className="mt-8 space-x-4 space-x-reverse flex flex-wrap gap-y-3 gap-x-4">
              <Button className="bg-bakery-accent hover:bg-bakery-accent/90 text-white hebrew flex items-center gap-2 shadow-md px-6 py-6 text-lg">
                <ArrowLeft className="h-5 w-5" />
                <span>בקרו אותנו</span>
              </Button>
              
              <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-tan/50 hebrew shadow-sm px-6 py-6 text-lg">
                המוצרים שלנו
              </Button>

              <Button variant="ghost" className="text-bakery-brown hover:bg-bakery-tan/30 hebrew shadow-sm" asChild>
                <Link to="/images">
                  <Image className="h-5 w-5 ml-1" />
                  <span>ניהול תמונות</span>
                </Link>
              </Button>
              
              <FacebookShare quote="מאפייה משפחתית עם טעם של בית - לחם טוב" />
            </div>

            <div className="mt-12 flex gap-x-6 justify-end w-full">
              <div className="text-center">
                <p className="text-3xl font-bold text-bakery-brown">40+</p>
                <p className="text-sm text-bakery-brown/70 hebrew">סוגי לחמים</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-bakery-brown">20+</p>
                <p className="text-sm text-bakery-brown/70 hebrew">סוגי מאפים</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-bakery-brown">15+</p>
                <p className="text-sm text-bakery-brown/70 hebrew">סוגי עוגות</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-bakery-accent rounded-lg transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
              <div className="relative bg-gradient-to-r from-bakery-warm to-bakery-tan/70 rounded-lg aspect-[4/3] shadow-xl flex items-center justify-center">
                <p className="italic text-bakery-brown font-medium">תמונת המאפייה המשפחתית</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-bakery-warm opacity-50 blur-3xl"></div>
      <div className="absolute top-12 -right-16 w-40 h-40 rounded-full bg-bakery-accent opacity-10 blur-2xl"></div>
    </section>
  );
};

export default Hero;
