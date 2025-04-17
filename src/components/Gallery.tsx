import { useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    src: "https://i.ibb.co/rGt9tgxx/1.jpg",
    alt: "Wnętrze domu modułowego",
    category: "Wnętrze",
  },
  {
    id: 2,
    src: "https://i.ibb.co/cc9K0q4N/2.jpg",
    alt: "Wnętrze domu modułowego",
    category: "Wnętrze",
  },
  {
    id: 3,
    src: "https://i.ibb.co/qXWNt6c/7.jpg",
    alt: "Wnętrze domu modułowego",
    category: "Wnętrze",
  },
  {
    id: 4,
    src: "https://i.ibb.co/ynmbfw9y/DJI-0150.jpg",
    alt: "Zewnętrze domu modułowego",
    category: "Zewnętrze",
  },
  {
    id: 5,
    src: "https://i.ibb.co/F4xBYTZm/DJI-0152.jpg",
    alt: "Zewnętrze domu modułowego",
    category: "Zewnętrze",
  },
  {
    id: 6,
    src: "https://i.ibb.co/k2p6BysQ/5.jpg",
    alt: "Wnętrze domu modułowego",
    category: "Wnętrze",
  },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nasza <span className="text-orange-600">Galeria</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz zdjęcia naszych zrealizowanych projektów domów modułowych - zewnętrza i wnętrza.
          </p>
          <Separator className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
        </motion.div>

        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.slice(0, 3).map((image, index) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-1"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AspectRatio ratio={3/2}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static ml-4" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(3).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <AspectRatio ratio={3/2}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </AspectRatio>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4`}>
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/galeria">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 group"
              size="lg"
            >
              Zobacz pełną galerię
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
