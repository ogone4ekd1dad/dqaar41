import { useState } from "react";
import { Review } from "@shared/schema";
import { ChevronLeft, ChevronRight, Star, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const images = review.imageUrls && review.imageUrls.length > 0 
    ? review.imageUrls 
    : review.imageUrl 
      ? [review.imageUrl] 
      : [];
  
  const hasMultipleImages = images.length > 1;
  
  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');

  const formatAuthor = (author: string) => {
    if (author.startsWith('@')) {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="text-primary font-semibold">{author}</span>
        </span>
      );
    }
    return <span className="font-medium">{author}</span>;
  };

  if (images.length === 0) return null;

  const currentMedia = images[currentIndex];
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-secondary/30 rounded-lg overflow-hidden group cursor-pointer"
        onClick={openModal}
      >
        <div className="relative aspect-[4/5] bg-secondary">
          {isCurrentVideo ? (
            <video
              src={currentMedia}
              className="w-full h-full object-cover"
              muted
              playsInline
              data-testid={`video-review-${review.id}`}
            />
          ) : (
            <img
              src={currentMedia}
              alt={`Отзыв от ${review.author}`}
              className="w-full h-full object-cover"
              data-testid={`img-review-${review.id}`}
            />
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center pointer-events-none">
            <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
          </div>
          
          {hasMultipleImages && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white active:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                data-testid={`button-review-prev-${review.id}`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white active:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                data-testid={`button-review-next-${review.id}`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                    className={`w-3 h-3 rounded-full transition-all shadow-md ${
                      idx === currentIndex ? 'bg-white w-5' : 'bg-white/60'
                    }`}
                    data-testid={`button-review-dot-${review.id}-${idx}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {Array(review.rating || 5).fill(0).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          {review.content && (
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{review.content}</p>
          )}
          <p className="text-sm text-foreground">{formatAuthor(review.author)}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
            data-testid={`modal-review-${review.id}`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              {isCurrentVideo ? (
                <video
                  src={currentMedia}
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  data-testid={`modal-video-review-${review.id}`}
                />
              ) : (
                <img
                  src={currentMedia}
                  alt={`Отзыв от ${review.author}`}
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                  data-testid={`modal-img-review-${review.id}`}
                />
              )}
              
              {hasMultipleImages && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                    data-testid="button-modal-prev"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                    data-testid="button-modal-next"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-white text-sm">{formatAuthor(review.author)}</p>
              </div>
              
              {hasMultipleImages && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
