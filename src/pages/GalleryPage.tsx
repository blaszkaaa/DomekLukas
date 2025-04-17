import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://i.ibb.co/rGt9tgxx/1.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 2, src: 'https://i.ibb.co/cc9K0q4N/2.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 3, src: 'https://i.ibb.co/qXWNt6c/7.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 4, src: 'https://i.ibb.co/ynmbfw9y/DJI-0150.jpg', alt: 'Zewnętrze domu modułowego', category: 'Zewnętrze' },
  { id: 5, src: 'https://i.ibb.co/F4xBYTZm/DJI-0152.jpg', alt: 'Zewnętrze domu modułowego', category: 'Zewnętrze' },
  { id: 6, src: 'https://i.ibb.co/k2p6BysQ/5.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 7, src: 'https://i.ibb.co/TBVf9QsJ/6.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 8, src: 'https://i.ibb.co/cKndFJzB/8.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 9, src: 'https://i.ibb.co/rGkHTsh5/9.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 10, src: 'https://i.ibb.co/MDGMTQ0H/10.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 11, src: 'https://i.ibb.co/d0ksh7Ls/11.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 12, src: 'https://i.ibb.co/whZz9vB9/12.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 13, src: 'https://i.ibb.co/tMCmsWn4/13.jpg', alt: 'Wnętrze domu modułowego', category: 'Wnętrze' },
  { id: 14, src: 'https://i.postimg.cc/qBjb5N4f/temp-Image0kjp5-G.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 15, src: 'https://i.postimg.cc/fy28trBW/temp-Imageb8-Ij-Ou.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 16, src: 'https://i.postimg.cc/76NsD6z2/temp-Imageb-Swu0-J.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 17, src: 'https://i.postimg.cc/J04ThL3d/temp-Images-WJivc.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 18, src: 'https://i.postimg.cc/5ySMhb47/temp-Imagesa0-XUz.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 19, src: 'https://i.postimg.cc/BQN0NSwt/temp-Imagesfj-Ac-Z.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 20, src: 'https://i.postimg.cc/bNqPQDgK/temp-Image-U9-Hu-DH.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 21, src: 'https://i.postimg.cc/SQ6q2766/temp-Image-VJHhd-D.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 22, src: 'https://i.postimg.cc/zfy8Vs7v/temp-Image-Yc-GEzg.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 23, src: 'https://i.postimg.cc/bv48bmVT/temp-Imagezg9fdd.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 24, src: 'https://i.postimg.cc/W1b2PFJM/temp-Image5-PU8ch.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 25, src: 'https://i.postimg.cc/3NTTfdT0/temp-Image8-S8c-Fw.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 26, src: 'https://i.postimg.cc/CxPwMhj9/temp-Image-JEyrz4.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
  { id: 27, src: 'https://i.postimg.cc/vB9yv5pd/temp-Image-LWIx-Jx.avif', alt: 'Wizualizacja projektu', category: 'Wizualizacje' },
];

const categories = ['Wszystkie', 'Zewnętrze', 'Wnętrze', 'Wizualizacje'];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'Wszystkie'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  // zamknij lightbox przy zmianie kategorii
  useEffect(() => {
    setSelectedIndex(null);
  }, [selectedCategory]);

  // obsługa klawiszy ← → Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev(e as any);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext(e as any);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredImages]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    if (!filteredImages.length) return;
    const newIndex = selectedIndex! > 0
      ? selectedIndex! - 1
      : filteredImages.length - 1;
    setSelectedIndex(newIndex);
  };

  const showNext = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    if (!filteredImages.length) return;
    const newIndex = selectedIndex! < filteredImages.length - 1
      ? selectedIndex! + 1
      : 0;
    setSelectedIndex(newIndex);
  };

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Nagłówek */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galeria Naszych <span className="text-orange-600">Realizacji</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Przeglądaj zdjęcia naszych projektów domów modułowych.
            </p>
            <Separator className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
          </motion.div>

          {/* Filtry kategorii */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Siatka zdjęć z jednolitą proporcją 3:2 */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md aspect-[3/2]"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white font-medium">{img.alt}</p>
                      <p className="text-white/80 text-sm">{img.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredImages.length === 0 && (
              <div className="text-center py-16 col-span-full">
                <p className="text-lg text-gray-500">Brak zdjęć w tej kategorii</p>
              </div>
            )}
          </motion.div>
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
            onClick={closeLightbox}
          >
            {/* Zamknij */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X size={24} />
            </motion.button>

            {/* Poprzedni */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
              onClick={showPrev}
            >
              <ChevronLeft size={32} />
            </motion.button>

            {/* Następny */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
              onClick={showNext}
            >
              <ChevronRight size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="max-w-7xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
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
