import { useState } from "react";
import { useLocation } from "wouter";
import { useProducts } from "@/hooks/use-shop-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

const BRAND_FILTERS = [
  { name: "Guess", slug: "guess" },
  { name: "Michael Kors", slug: "michael-kors" },
  { name: "Karl Lagerfeld", slug: "karl-lagerfeld" },
  { name: "Armani Exchange", slug: "armani-exchange" },
  { name: "Versace", slug: "versace" },
  { name: "Love Moschino", slug: "love-moschino" },
  { name: "Calvin Klein", slug: "calvin-klein" },
  { name: "Coach", slug: "coach" },
];

const ACCESSORY_FILTERS = [
  { name: "Кошельки", slug: "wallets", hasFullStock: true },
  { name: "Ремни", slug: "belts", hasFullStock: false },
  { name: "Часы и браслеты", slug: "watches", hasFullStock: false },
  { name: "Подарочные пакеты", slug: "gift-bags", hasFullStock: false },
];

export default function Shop() {
  const [location, setLocation] = useLocation();
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category") || undefined;
  
  const [activeCategory, setActiveCategory] = useState<string | undefined>(categoryParam);

  const { data: products, isLoading } = useProducts(activeCategory);
  
  // Check if current category is a brand or accessory with full stock
  const isBrandSelected = BRAND_FILTERS.some(b => b.name === activeCategory);
  const isAccessoryWithFullStock = ACCESSORY_FILTERS.some(a => a.name === activeCategory && a.hasFullStock);
  
  // Fetch full stock product for selected brand or accessory category
  const { data: fullStockProduct } = useQuery<Product>({
    queryKey: ['/api/full-stock', activeCategory],
    enabled: (isBrandSelected || isAccessoryWithFullStock) && !!activeCategory,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {activeCategory || "Все товары"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Оригинальные сумки и аксессуары от мировых брендов
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            {/* All button */}
            <div className="flex justify-center">
              <button
                onClick={() => setActiveCategory(undefined)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  !activeCategory 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                data-testid="button-filter-all"
              >
                Все товары
              </button>
            </div>

            {/* Brands */}
            <div className="text-center">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Бренды</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {BRAND_FILTERS.map((cat) => (
                  <div key={cat.slug} className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === cat.name
                          ? "bg-primary text-primary-foreground shadow-lg" 
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                      data-testid={`button-filter-${cat.slug}`}
                    >
                      {cat.name}
                    </button>
                    {activeCategory === cat.name && fullStockProduct && (
                      <button
                        onClick={() => setLocation(`/product/${fullStockProduct.id}`)}
                        className="px-4 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground shadow-md transition-all hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground"
                        data-testid={`button-full-stock-${cat.slug}`}
                      >
                        Полное наличие
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div className="text-center">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Аксессуары</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ACCESSORY_FILTERS.map((cat) => (
                  <div key={cat.slug} className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === cat.name
                          ? "bg-primary text-primary-foreground shadow-lg" 
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                      data-testid={`button-filter-${cat.slug}`}
                    >
                      {cat.name}
                    </button>
                    {activeCategory === cat.name && cat.hasFullStock && fullStockProduct && (
                      <button
                        onClick={() => setLocation(`/product/${fullStockProduct.id}`)}
                        className="px-4 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground shadow-md transition-all hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground"
                        data-testid={`button-full-stock-${cat.slug}`}
                      >
                        Полное наличие
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">Товаров в этой категории не найдено.</p>
              <button 
                onClick={() => setActiveCategory(undefined)}
                className="mt-4 text-primary font-medium hover:underline"
                data-testid="button-view-all"
              >
                Смотреть все товары
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
