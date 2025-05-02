
import { Card, CardContent } from "@/components/ui/card";
import { Croissant, Cake, Cookie } from "lucide-react";

const products = [
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
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-bakery-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">המוצרים שלנו</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew">אנחנו מתמחים במגוון רחב של לחמים, מאפים ומתוקים. הנה כמה מהמוצרים הפופולריים שלנו:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <Card key={product.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-bakery-warm rounded-full flex items-center justify-center mb-4">
                  <product.icon className="h-8 w-8 text-bakery-brown" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-bakery-brown hebrew-title">{product.name}</h3>
                <p className="text-muted-foreground hebrew">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-semibold text-bakery-brown hebrew">בנוסף מוצעים גם: חלות לשבת, בורקסים, עוגיות, קרואסונים ועוד...</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
