import { useState } from "react";
import { Box } from "@mui/material";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Box className="flex gap-4 flex-col sm:flex-row">
      {/* Thumbnails */}
      <Box className="flex sm:flex-col gap-3 order-2 sm:order-1">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt="thumbnail"
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 object-cover rounded-md border cursor-pointer transition ${
              selectedImage === img ? "border-red-500" : "border-gray-200"
            }`}
          />
        ))}
      </Box>

      {/* Main Image */}
      <Box className="flex-1 order-1 sm:order-2">
        <img
          src={selectedImage}
          alt="product"
          className="w-full rounded-lg object-cover shadow-sm"
        />
      </Box>
    </Box>
  );
};

export default ProductImages;
