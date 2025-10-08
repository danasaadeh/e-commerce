import { Container } from "@mui/material";
import ProductBreadcrumb from "./components/product-breadcrumb";
import ProductDeliveryInfo from "./components/product-delivery-info";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import RelatedItems from "./components/related-items/related-items";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Havic HV G-92 Gamepad",
    price: 192.0,
    rating: 4.5,
    reviews: 150,
    inStock: true,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    images: [
      "src/assets/images/product-details/holder3.png",
      "src/assets/images/product-details/holder6.png",
      "src/assets/images/product-details/holder7.png",
      "src/assets/images/product-details/holder4.png",
      "src/assets/images/product-details/holder5.png",
    ],
    colors: ["#000000", "#d32f2f"],
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <ProductBreadcrumb />

      <div className="flex gap-6 mt-8">
        {/* Images section (thumbnails + main image) */}
        <div className="flex-[0_0_55%]">
          <ProductImages images={product.images} />
        </div>

        {/* Product Info section */}
        <div className="flex-1">
          <ProductInfo product={product} />
          <ProductDeliveryInfo />
        </div>
      </div>

      <RelatedItems />
    </Container>
  );
};

export default ProductDetails;
