
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown hebrew-title">צרו קשר</h2>
          <div className="mt-2 w-24 h-1 bg-bakery-accent mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg hebrew">בואו לבקר אותנו ולהריח את הלחם הטרי!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-bakery-brown text-center hebrew-title">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium hebrew">רחוב הזית 12, ירושלים</p>
                  </div>
                  <div className="bg-bakery-tan h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-bakery-brown" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium hebrew">ראשון-חמישי: 07:00-19:00</p>
                    <p className="font-medium hebrew">שישי: 07:00-14:00</p>
                    <p className="font-medium hebrew">שבת: סגור</p>
                  </div>
                  <div className="bg-bakery-tan h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-bakery-brown" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium hebrew">02-1234567</p>
                  </div>
                  <div className="bg-bakery-tan h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-bakery-brown" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium hebrew">info@lehemtov.co.il</p>
                  </div>
                  <div className="bg-bakery-tan h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-bakery-brown" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-0 overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                {/* Here you would integrate a real map, but for now we'll use a placeholder */}
                <div className="h-full w-full flex items-center justify-center bg-bakery-tan">
                  <p className="font-medium hebrew text-bakery-brown">מפה של המאפייה תופיע כאן</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
