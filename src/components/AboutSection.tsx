
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <p className="text-muted-foreground hebrew">תמונת המשפחה</p>
            </div>
          </div>
          
          <div className="text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground hebrew-title mb-6">אודותינו</h2>
            <p className="mb-4 hebrew text-muted-foreground leading-relaxed">
              מאפיית "לחם טוב" הוקמה לפני ארבעים שנה על ידי סבא וסבתא כהן, שהביאו איתם מתכונים מסורתיים מהבית של פעם.
            </p>
            <p className="mb-6 hebrew text-muted-foreground leading-relaxed">
              היום אנו ממשיכים את המסורת המשפחתית ואופים מדי יום לחמים ומאפים טריים באהבה, תוך שימוש בחומרי הגלם האיכותיים ביותר ושמירה על המתכונים המקוריים.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground hebrew-title mb-1">40+</h4>
                <p className="text-sm text-muted-foreground hebrew">שנות ניסיון</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground hebrew-title mb-1">100%</h4>
                <p className="text-sm text-muted-foreground hebrew">טרי יומי</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
