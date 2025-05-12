
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">למה לבחור בנו</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew text-bakery-brown/80">
            מה מבדיל אותנו ממאפיות אחרות
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-bakery-brown hebrew-title text-center">מאפיות אחרות</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>שימוש בחומרים תעשייתיים</span>
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>ייצור המוני בקו</span>
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>מתכונים סטנדרטיים</span>
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>מוצרים מוקפאים מראש</span>
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md bg-bakery-tan/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-bakery-brown hebrew-title text-center">לחם טוב</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>חומרי גלם טבעיים ואורגניים</span>
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>אפייה ידנית בקפידה</span>
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>מתכונים משפחתיים מסורתיים</span>
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-2 text-bakery-brown/80 hebrew">
                  <span>אפייה טרייה מדי יום</span>
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
