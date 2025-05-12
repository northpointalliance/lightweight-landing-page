
import { Card, CardContent } from "@/components/ui/card";

const processes = [
  {
    title: "בחירת חומרי גלם",
    description: "אנחנו בוחרים רק את חומרי הגלם האיכותיים ביותר לכל המוצרים שלנו"
  },
  {
    title: "אפייה מסורתית",
    description: "כל מוצר נאפה בתנורי אבן מסורתיים לפי מתכונים משפחתיים"
  },
  {
    title: "שירות אישי",
    description: "אנחנו מתגאים בשירות האישי והחם שאנחנו מעניקים לכל לקוח"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">תהליך העבודה שלנו</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew text-bakery-brown/80">
            האיכות והטעם של המוצרים שלנו הם תוצאה של תהליך עבודה קפדני
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="border-0 shadow-md bg-white overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-bakery-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-bakery-brown hebrew-title">{process.title}</h3>
                <p className="hebrew text-bakery-brown/80">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
