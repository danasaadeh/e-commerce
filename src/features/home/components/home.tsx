import { Box } from "@mui/material";
import CategorySidebar from "./category-sidebar";
import HeroSlider from "./hero-sections/hero-slider";
import FlashSales from "./flash-sales/flash-sales";

export default function Home() {
  const handleAddToCart = (id: string) => console.log(`Added to cart: ${id}`);
  const handleToggleWishlist = (id: string) =>
    console.log(`Toggled wishlist: ${id}`);
  const handleQuickView = (id: string) => console.log(`Quick view: ${id}`);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      {/* HERO SECTION */}
      <Box className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 border-b border-gray-300">
        <Box className="hidden lg:block lg:col-span-3">
          <CategorySidebar />
        </Box>
        <Box className="col-span-1 lg:col-span-9">
          <HeroSlider />
        </Box>
      </Box>

      {/* FLASH SALES */}
      <FlashSales
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={handleQuickView}
      />
    </main>
  );
}
