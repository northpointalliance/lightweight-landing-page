
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-bakery-tan to-bakery-cream py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-end max-w-3xl mr-auto text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bakery-brown hebrew-title">
            מאפייה משפחתית<br />עם טעם של בית
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-bakery-brown/90 hebrew">
            אנו אופים מדי יום לחמים, מאפים ומתוקים מהחומרים האיכותיים ביותר, לפי מתכונים משפחתיים מסורתיים
          </p>
          
          <div className="mt-8 space-x-4 space-x-reverse flex">
            <Button className="bg-bakery-accent hover:bg-bakery-accent/90 text-white hebrew flex items-center gap-2 shadow-md">
              <ArrowLeft className="h-5 w-5" />
              <span>בקרו אותנו</span>
            </Button>
            
            <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-tan/50 hebrew shadow-sm">
              המוצרים שלנו
            </Button>

            <Button variant="ghost" className="text-bakery-brown hover:bg-bakery-tan/30 hebrew shadow-sm" asChild>
              <Link to="/images">
                <Image className="h-5 w-5 ml-1" />
                <span>ניהול תמונות</span>
              </Link>
            </Button>
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
