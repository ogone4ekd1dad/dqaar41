import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// ============================================
// PRODUCTS
// ============================================

export function useProducts(category?: string, featured?: boolean) {
  return useQuery({
    queryKey: [api.products.list.path, category, featured],
    queryFn: async () => {
      const url = new URL(api.products.list.path, window.location.origin);
      if (category) url.searchParams.append("category", category);
      if (featured) url.searchParams.append("featured", "true");
      
      const res = await fetch(url.toString(), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch products");
      
      const data = await res.json();
      return api.products.list.responses[200].parse(data);
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: [api.products.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.products.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product");
      
      const data = await res.json();
      return api.products.get.responses[200].parse(data);
    },
  });
}

// ============================================
// CATEGORIES
// ============================================

export function useCategories() {
  return useQuery({
    queryKey: [api.categories.list.path],
    queryFn: async () => {
      const res = await fetch(api.categories.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch categories");
      
      const data = await res.json();
      return api.categories.list.responses[200].parse(data);
    },
  });
}

// ============================================
// REVIEWS
// ============================================

export function useReviews(productId?: number) {
  return useQuery({
    queryKey: [api.reviews.getByProduct.path, productId],
    queryFn: async () => {
      if (!productId) return [];
      const url = buildUrl(api.reviews.getByProduct.path, { productId });
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch reviews");
      
      const data = await res.json();
      return api.reviews.getByProduct.responses[200].parse(data);
    },
    enabled: !!productId,
  });
}
