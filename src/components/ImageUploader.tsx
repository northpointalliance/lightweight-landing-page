
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  accept?: string;
  maxSizeMB?: number;
}

const ImageUploader = ({ 
  onUpload, 
  accept = "image/*", 
  maxSizeMB = 5 
}: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const processFile = (file?: File) => {
    if (!file) {
      toast.error("לא נבחר קובץ");
      return;
    }

    // Check file size
    if (file.size > maxSizeBytes) {
      toast.error(`הקובץ גדול מדי. הגודל המקסימלי הוא ${maxSizeMB}MB`);
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error("רק קבצי תמונה מותרים להעלאה");
      return;
    }

    onUpload(file);
    toast.success("התמונה הועלתה בהצלחה!");
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        isDragging ? "border-bakery-accent bg-bakery-cream/30" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="h-8 w-8 mx-auto mb-2 text-bakery-brown/70" />
      <p className="mb-4 text-bakery-brown hebrew">גרור תמונות לכאן או</p>
      <Button
        variant="outline"
        className="relative overflow-hidden hebrew text-bakery-brown border-bakery-brown hover:bg-bakery-tan/30"
      >
        <Input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        בחר תמונות
      </Button>
      <p className="mt-2 text-sm text-bakery-brown/70 hebrew">
        גודל מקסימלי: {maxSizeMB}MB
      </p>
    </div>
  );
};

export default ImageUploader;
