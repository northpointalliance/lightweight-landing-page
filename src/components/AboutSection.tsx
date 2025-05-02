
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">הסיפור שלנו</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-bakery-brown rounded-lg transform rotate-3 translate-x-2 translate-y-2"></div>
              <Card className="relative overflow-hidden shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="aspect-video bg-bakery-tan flex items-center justify-center">
                    <p className="italic text-bakery-brown">תמונת המאפייה המשפחתית</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:w-1/2 text-right">
            <h3 className="text-2xl font-semibold text-bakery-brown mb-4 hebrew-title">מאפייה משפחתית מאז 1982</h3>
            <p className="mb-4 hebrew">
              מאפיית "לחם טוב" הוקמה לפני ארבעים שנה על ידי סבא וסבתא כהן, שהביאו איתם מתכונים מסורתיים מהבית של פעם.
            </p>
            <p className="mb-4 hebrew">
              היום אנו ממשיכים את המסורת המשפחתית ואופים מדי יום לחמים ומאפים טריים באהבה, תוך שימוש בחומרי הגלם האיכותיים ביותר ושמירה על המתכונים המקוריים.
            </p>
            <p className="hebrew">
              כל מוצר שיוצא מהמאפייה שלנו נוצר בעבודת יד, באהבה ובמסירות, בדיוק כפי שלימדו אותנו סבא וסבתא.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
