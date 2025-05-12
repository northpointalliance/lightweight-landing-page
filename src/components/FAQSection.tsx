
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "באילו שעות המאפייה פתוחה?",
    answer: "אנחנו פתוחים מימים ראשון עד חמישי, 7:00 בבוקר עד 19:00 בערב. בימי שישי אנו פתוחים מ-7:00 עד 14:00, וסגורים בשבת."
  },
  {
    question: "האם אתם מציעים משלוחים?",
    answer: "כן, אנחנו מציעים שירות משלוחים לאזורים מסוימים. ניתן להזמין דרך הטלפון או באתר שלנו."
  },
  {
    question: "האם המוצרים שלכם מכילים גלוטן?",
    answer: "רוב המוצרים שלנו מכילים גלוטן. עם זאת, יש לנו גם קו מוצרים ללא גלוטן שנאפים בנפרד."
  },
  {
    question: "האם ניתן להזמין עוגות מיוחדות לאירועים?",
    answer: "בהחלט! אנחנו מתמחים בהכנת עוגות מותאמות אישית לכל סוג של אירוע. מומלץ להזמין לפחות שבוע מראש."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-bakery-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">שאלות נפוצות</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew text-bakery-brown/80">
            מצאו תשובות לשאלות הנפוצות ביותר
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-bakery-tan">
                <AccordionTrigger className="hebrew text-right text-bakery-brown hover:text-bakery-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="hebrew text-right text-bakery-brown/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
