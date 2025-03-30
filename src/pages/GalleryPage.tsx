
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1601564921647-b446989a7e22?q=80&w=2874&auto=format&fit=crop",
    alt: "Dom modułowy z dużymi oknami",
    category: "Zewnętrze"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2071&auto=format&fit=crop",
    alt: "Wnętrze domu modułowego - salon",
    category: "Wnętrze"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1583608205776-babe4e9fe4c7?q=80&w=2070&auto=format&fit=crop",
    alt: "Wnętrze domu modułowego - kuchnia",
    category: "Wnętrze"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop",
    alt: "Dom modułowy z drewnianą elewacją",
    category: "Zewnętrze"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    alt: "Wnętrze domu modułowego - sypialnia",
    category: "Wnętrze"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    alt: "Dom modułowy z tarasem",
    category: "Zewnętrze"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop",
    alt: "Wnętrze domu modułowego - łazienka",
    category: "Wnętrze"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1580237072503-0ae922ea153b?q=80&w=2069&auto=format&fit=crop",
    alt: "Dom modułowy - widok z zewnątrz",
    category: "Zewnętrze"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    alt: "Wnętrze domu modułowego - przestrzeń dzienna",
    category: "Wnętrze"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074&auto=format&fit=crop",
    alt: "Dom modułowy nad jeziorem",
    category: "Zewnętrze"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2070&auto=format&fit=crop",
    alt: "Wnętrze domu modułowego - gabinet",
    category: "Wnętrze"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
    alt: "Dom modułowy - konstrukcja",
    category: "Proces budowy"
  }
];

const categories = ["Wszystkie", "Zewnętrze", "Wnętrze", "Proces budowy"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "Wszystkie" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria Naszych <span className="text-eco-green-600">Realizacji</span></h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Przeglądaj zdjęcia naszych zrealizowanych projektów domów modułowych.
            </p>
            <Separator className="w-24 h-1 bg-eco-green-500 mx-auto mt-8" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-eco-green-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md"
                  onClick={() => setSelectedImage(image)}
                >
                  <AspectRatio ratio={3/2}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">Brak zdjęć w tej kategorii</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-white/80 text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
