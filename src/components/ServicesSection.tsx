
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
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground hebrew-title">השירותים שלנו</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew text-muted-foreground">אנחנו מתמחים במגוון רחב של לחמים, מאפים ומתוקים איכותיים</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <Card key={service.id} className="transition-all duration-200 hover:shadow-lg border border-border">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground hebrew-title">{service.name}</h3>
                <p className="text-sm text-muted-foreground hebrew leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
