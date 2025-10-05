import { Container, Grid, Box } from "@mui/material";
import ProductBreadcrumb from "./components/product-breadcrumb";
import ProductDeliveryInfo from "./components/product-delivery-info";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Havic HV G-92 Gamepad",
    price: 192,
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
    <Container maxWidth="lg" className="py-10">
      <ProductBreadcrumb />

      <Grid container spacing={6} className="mt-6">
        {/* Left: Images */}
        <Grid item xs={12} md={6}>
          <ProductImages images={product.images} />
        </Grid>

        {/* Right: Product Info */}
        <Grid item xs={12} md={6}>
          <ProductInfo product={product} />
          <ProductDeliveryInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
