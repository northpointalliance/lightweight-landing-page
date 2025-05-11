
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import FacebookSection from "@/components/FacebookSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <FacebookSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
