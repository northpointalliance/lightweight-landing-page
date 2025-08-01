
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Croissant, Cake, Cookie, Coffee } from "lucide-react";

const services = [
  {
    id: 1,
    name: "לחמים מחמצת",
    description: "לחמי מחמצת אותנטיים עם טעם עשיר וקראסט פריך",
    icon: Croissant
  },
  {
    id: 2,
    name: "עוגות מיוחדות",
    description: "עוגות שמשלבות מתכונים מסורתיים עם טוויסט מודרני",
    icon: Cake
  },
  {
    id: 3,
    name: "מאפים מתוקים",
    description: "מאפים מתוקים מטריפים שמושלמים לארוחת בוקר או קינוח",
    icon: Cookie
  },
  {
    id: 4,
    name: "קפה איכותי",
    description: "קפה משובח מפולים נבחרים בקפידה שמושלם עם המאפים שלנו",
    icon: Coffee
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-bakery-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">המוצרים שלנו</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew text-bakery-brown/80">אנחנו מתמחים במגוון רחב של לחמים, מאפים ומתוקים. הנה כמה מהמוצרים הפופולריים שלנו:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <Card key={service.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-bakery-warm/80 rounded-full flex items-center justify-center mb-4 group-hover:bg-bakery-warm transition-colors">
                  <service.icon className="h-8 w-8 text-bakery-brown" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-bakery-brown hebrew-title">{service.name}</h3>
                <p className="text-bakery-brown/70 hebrew mb-4">{service.description}</p>
                <Button variant="outline" className="hebrew text-bakery-accent border-bakery-accent hover:bg-bakery-accent/10 mt-2">
                  לפרטים נוספים
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
