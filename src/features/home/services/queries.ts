import { useQuery } from "@tanstack/react-query";
import homeService from "../services/api";

export const useAllProducts = () =>
  useQuery({
    queryKey: ["home", "products"],
    queryFn: homeService.getAllProducts,
  });

export const useAllCategories = () =>
  useQuery({
    queryKey: ["home", "categories"],
    queryFn: homeService.getAllCategories,
  });

export const useProductsByCategory = (categoryId: number) =>
  useQuery({
    queryKey: ["home", "products", categoryId],
    queryFn: () => homeService.getProductsByCategory(categoryId),
    enabled: !!categoryId,
  });

/**
 * 🔍 Search products by title
 */
export const useSearchProducts = (query: string) =>
  useQuery({
    queryKey: ["home", "search", query],
    queryFn: () => homeService.searchProductsByTitle(query),
    enabled: !!query, // only runs when query is not empty
  });
