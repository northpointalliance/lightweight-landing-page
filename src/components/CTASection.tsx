
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-bakery-accent/90 to-bakery-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold hebrew-title mb-6">בואו לטעום את ההבדל</h2>
          <p className="text-lg hebrew text-white/90 mb-8">
            הצטרפו לאלפי לקוחות מרוצים שנהנים מדי יום מהמאפים הטריים והטעימים שלנו. המאפייה שלנו נמצאת במרכז העיר, בואו לבקר אותנו!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-bakery-accent hover:bg-white/90 hebrew text-lg px-8 py-6">
              <ArrowLeft className="mr-2 h-5 w-5" />
              בקרו אותנו
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 hebrew text-lg px-8 py-6">
              צרו קשר
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
