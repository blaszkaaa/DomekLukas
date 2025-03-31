import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  image: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Dom Modułowy - Mazury",
    description: "Nowoczesny dom modułowy z 3 sypialniami, energooszczędny i ekologiczny.",
    location: "Mazury, Polska",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2956&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Domek letniskowy - Karkonosze",
    description: "Komfortowy domek modułowy idealny na wypoczynek dla rodziny 4-osobowej.",
    location: "Karkonosze, Polska",
    year: "2023",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Biuro modułowe - Warszawa",
    description: "Przestrzeń biurowa stworzona z 4 modułów, pełna światła i ergonomiczna.",
    location: "Warszawa, Polska",
    year: "2022",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projectsData.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleProjectClick = (index: number) => {
    setActiveProject(index);
    setIsAutoplay(false); // Zatrzymaj automatyczne przełączanie po kliknięciu
  };

  // Wznów automatyczne przełączanie po pewnym czasie bezczynności
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);
    
    return () => clearTimeout(timeout);
  }, [activeProject]);

  return (
    <section id="realizacje" className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nasze <span className="text-orange-600">Realizacje</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sprawdź nasze najnowsze projekty domów modułowych, które zrealizowaliśmy dla naszych klientów w różnych lokalizacjach.
          </p>
          <Separator className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: activeProject !== index ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${activeProject === index ? 'border-orange-400 shadow-lg' : 'border-gray-200 hover:border-orange-200'}`}
                  onClick={() => handleProjectClick(index)}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                    <CardDescription>
                      <div className="flex justify-between text-sm">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <AnimatePresence>
                    {activeProject === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="p-4 pt-0">
                          <p className="text-gray-600">{project.description}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Link to={`/projekt/${project.id}`}>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="flex items-center group"
                            >
                              <span>Zobacz szczegóły</span> 
                              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl relative h-[400px]"
          >
            <AnimatePresence mode="wait">
              {projectsData.map((project, index) => (
                activeProject === index && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="h-full w-full absolute top-0 left-0"
                  >
                    <Link to={`/projekt/${project.id}`} className="block h-full">
                      <div className="relative h-full w-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-sm opacity-90">{project.location}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Wskaźniki slajdów */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleProjectClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeProject === index 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Przejdź do projektu ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
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
              className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Zobacz więcej realizacji
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
