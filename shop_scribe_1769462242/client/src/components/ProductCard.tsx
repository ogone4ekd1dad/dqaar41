import { Link } from "wouter";
import { Product } from "@shared/schema";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number | null | undefined, priceMax?: number | null): string {
  if (price == null || price === 0) return 'Цена по запросу';
  if (priceMax && priceMax > price) {
    return `${price.toLocaleString('ru-RU')} - ${priceMax.toLocaleString('ru-RU')} \u20BD`;
  }
  return price.toLocaleString('ru-RU') + ' \u20BD';
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative h-full flex flex-col"
    >
      {/* Image Container */}
      <Link href={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-secondary rounded-lg mb-4 relative cursor-pointer">
          {product.isFeatured && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest font-bold px-2 py-1 z-10 rounded-sm" data-testid="badge-featured">
              Популярно
            </span>
          )}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
          
          {/* Overlay on Desktop */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
            <div className="bg-white text-primary px-6 py-3 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
              Подробнее
            </div>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-display font-medium text-lg leading-tight group-hover:text-primary/70 transition-colors" data-testid={`text-product-name-${product.id}`}>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-muted-foreground text-sm mt-1" data-testid={`text-category-${product.id}`}>{product.category}</p>
          <p className="text-foreground font-display font-semibold text-xl mt-2 mb-3" data-testid={`text-price-${product.id}`}>
            {formatPrice(product.price, product.priceMax)}
          </p>
        </div>
        <a 
          href="https://t.me/dubovikyana" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-all w-fit"
          data-testid={`button-telegram-${product.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Send className="w-3.5 h-3.5" />
          Заказать
        </a>
      </div>
    </motion.div>
  );
}
