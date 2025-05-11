
import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FacebookShareProps {
  url?: string;
  quote?: string;
}

const FacebookShare = ({ url = window.location.href, quote = "לחם טוב - מאפייה משפחתית מסורתית" }: FacebookShareProps) => {
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`;
    window.open(shareUrl, "facebook-share", "width=580,height=296");
  };

  return (
    <Button 
      onClick={handleShare}
      variant="outline" 
      size="sm"
      className="flex items-center gap-2 border-bakery-accent text-bakery-accent hover:bg-bakery-accent/10"
    >
      <Facebook className="h-5 w-5" />
      <span className="hebrew">שתף בפייסבוק</span>
    </Button>
  );
};

export default FacebookShare;
