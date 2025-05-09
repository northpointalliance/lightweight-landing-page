
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Trash2 } from "lucide-react";

// This would come from a real backend in a production app
interface UploadedImage {
  id: string;
  url: string;
  name: string;
  uploadDate: Date;
}

const ImageManager = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleUpload = (file: File) => {
    // In a real app, you would upload to a server or storage service
    // For demo purposes, we're creating a local URL
    const imageUrl = URL.createObjectURL(file);
    
    const newImage: UploadedImage = {
      id: Date.now().toString(),
      url: imageUrl,
      name: file.name,
      uploadDate: new Date(),
    };

    setImages((prev) => [newImage, ...prev]);
  };

  const deleteImage = (id: string) => {
    setImages((prev) => prev.filter(img => img.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-bakery-tan/30 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-8 text-right hebrew-title">
            ניהול תמונות
          </h1>
          
          <div className="mb-12">
            <ImageUploader onUpload={handleUpload} />
          </div>
          
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
                  <div className="relative">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={image.url} 
                        alt={image.name}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 left-2 opacity-80 hover:opacity-100"
                      onClick={() => deleteImage(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-3 text-right hebrew">
                    <p className="text-sm text-bakery-brown font-medium truncate" dir="rtl">
                      {image.name}
                    </p>
                    <p className="text-xs text-bakery-brown/70">
                      {image.uploadDate.toLocaleDateString('he-IL')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-bakery-cream/20 rounded-lg">
              <p className="hebrew text-bakery-brown">אין תמונות להצגה</p>
              <p className="hebrew text-bakery-brown/70 text-sm mt-1">העלה תמונות כדי לראות אותן כאן</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImageManager;
