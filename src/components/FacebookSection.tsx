
import FacebookFeed from "./FacebookFeed";

const FacebookSection = () => {
  return (
    <section id="facebook" className="py-16 bg-gradient-to-br from-bakery-tan/70 to-bakery-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title mb-4">עקבו אחרינו בפייסבוק</h2>
          <p className="text-bakery-brown/80 hebrew max-w-2xl mx-auto">
            הצטרפו לקהילת החברים שלנו בפייסבוק לעדכונים, מבצעים מיוחדים ותמונות טריות מהמאפייה
          </p>
        </div>
        
        <div className="flex justify-center">
          <FacebookFeed 
            pageUrl="https://www.facebook.com/facebook" 
            width={500}
            height={700}
            tabs="timeline,events,messages"
          />
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
