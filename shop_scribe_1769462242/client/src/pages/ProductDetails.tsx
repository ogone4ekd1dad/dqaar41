import { useRoute } from "wouter";
import { useProduct, useReviews } from "@/hooks/use-shop-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ShieldCheck, RefreshCw, Star, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiTelegram } from "react-icons/si";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: product, isLoading, error } = useProduct(id);
  const { data: reviews } = useReviews(id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft") setSelectedImageIndex((i) => (i - 1 + (product?.imageUrls?.length || 1)) % (product?.imageUrls?.length || 1));
      if (e.key === "ArrowRight") setSelectedImageIndex((i) => (i + 1) % (product?.imageUrls?.length || 1));
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, product?.imageUrls?.length]);
  
  const images = product?.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : [product?.imageUrl || ""];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white animate-pulse">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-lg aspect-[3/4]"></div>
            <div className="space-y-4 pt-8">
              <div className="h-8 bg-secondary w-3/4 rounded"></div>
              <div className="h-6 bg-secondary w-1/4 rounded"></div>
              <div className="h-32 bg-secondary w-full rounded mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-2xl font-bold mb-4">Товар не найден</h1>
          <p className="text-muted-foreground mb-8">Товар, который вы ищете, не существует или был удален.</p>
          <Link href="/shop">
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90 transition-all">
              Вернуться в магазин
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/shop">
            <div className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 cursor-pointer transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в каталог
            </div>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Section with Gallery */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div 
                className="relative aspect-[3/4] lg:aspect-square bg-secondary rounded-lg overflow-hidden shadow-2xl shadow-black/5 cursor-zoom-in group"
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  key={selectedImageIndex}
                  src={images[selectedImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  data-testid="img-product"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                </div>
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i - 1 + images.length) % images.length); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
                      data-testid="button-prev-image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i + 1) % images.length); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
                      data-testid="button-next-image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === selectedImageIndex ? 'border-primary' : 'border-border hover:border-primary/50'
                      }`}
                      data-testid={`button-thumbnail-${idx}`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="mb-2">
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                  {product.category}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight" data-testid="text-product-name">
                {product.name}
              </h1>
              
              <p className="font-display text-3xl font-bold text-primary mb-6" data-testid="text-product-price">
                {product.price 
                  ? product.priceMax && product.priceMax > product.price
                    ? `${product.price.toLocaleString('ru-RU')} - ${product.priceMax.toLocaleString('ru-RU')} \u20BD`
                    : `${product.price.toLocaleString('ru-RU')} \u20BD` 
                  : 'Цена по запросу'}
              </p>
              
              <div className="prose prose-stone prose-lg text-muted-foreground mb-10">
                <p>{product.description}</p>
              </div>

              <div className="space-y-4">
                {/* Primary CTA - Telegram Order */}
                <a 
                  href="https://t.me/dubovikyana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-w-[280px] px-8 py-4 bg-[#24A1DE] hover:bg-[#208bbf] text-white rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  data-testid="button-order-telegram"
                >
                  <SiTelegram className="w-5 h-5 mr-3" />
                  Заказать в Телеграм
                </a>
              </div>

              <div className="border-t border-border mt-12 pt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Гарантия оригинальности</h4>
                    <p className="text-xs text-muted-foreground mt-1">Все товары — оригинальные.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Легкий возврат</h4>
                    <p className="text-xs text-muted-foreground mt-1">7 дней на возврат через Телеграм.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Reviews Section */}
          {reviews && reviews.length > 0 && (
            <div className="mt-24 pt-24 border-t border-border">
              <h2 className="font-display text-3xl font-bold mb-12">Отзывы клиентов</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-secondary/30 rounded-lg p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {Array(review.rating || 5).fill(0).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4">{review.content}</p>
                    <p className="text-sm text-muted-foreground font-medium">— {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={images[selectedImageIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain rounded-lg"
                data-testid="img-modal"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
                    data-testid="button-modal-prev"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((i) => (i + 1) % images.length)}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
                    data-testid="button-modal-next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {images.length > 1 && (
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === selectedImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                      }`}
                      data-testid={`button-modal-dot-${idx}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
