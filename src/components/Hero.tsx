
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";
import FacebookShare from "./FacebookShare";

const Hero = () => {
  return (
    <section className="relative bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-muted-foreground hebrew">תמונת המאפייה</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex flex-col items-end text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground hebrew-title mb-6">
              מאפייה משפחתית<br />עם טעם של בית
            </h1>
            
            <p className="text-lg text-muted-foreground hebrew max-w-lg leading-relaxed">
              אנו אופים מדי יום לחמים, מאפים ומתוקים מהחומרים האיכותיים ביותר, לפי מתכונים משפחתיים מסורתיים
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-end">
              <Button className="hebrew">
                בקרו אותנו
              </Button>
              
              <Button variant="outline" className="hebrew">
                המוצרים שלנו
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
