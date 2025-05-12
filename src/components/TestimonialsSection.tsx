
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "דוד כהן",
    text: "הלחם שלהם הוא הטעים ביותר שטעמתי. לא מפסיק לקנות ממאפיית 'לחם טוב' כל שבוע!",
    rating: 5
  },
  {
    name: "מירי לוי",
    text: "העוגות המיוחדות של המאפייה הן יצירות אמנות אמיתיות. הטעם מדהים והשירות תמיד חם ומסביר פנים.",
    rating: 5
  },
  {
    name: "יוסי אברהם",
    text: "אין כמו החלות שלהם לשבת. הריח והטעם מזכירים לי את הבית של סבתא שלי.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-bakery-cream/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">לקוחות מספרים</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew text-bakery-brown/80">
            מה אנשים אומרים על המאפייה שלנו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex space-x-1 space-x-reverse mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-bakery-accent text-bakery-accent" />
                  ))}
                </div>
                <p className="text-bakery-brown/80 hebrew text-center mb-4 italic">"{testimonial.text}"</p>
                <p className="text-bakery-brown font-semibold hebrew text-center">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
