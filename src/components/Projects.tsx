
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projectsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="realizacje" className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nasze <span className="text-eco-green-600">Realizacje</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sprawdź nasze najnowsze projekty domów modułowych, które zrealizowaliśmy dla naszych klientów w różnych lokalizacjach.
          </p>
          <Separator className="w-24 h-1 bg-eco-orange-500 mx-auto mt-8" />
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
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all duration-300 ${activeProject === index ? 'border-eco-orange-400 shadow-lg scale-105' : 'border-gray-200'}`}
                onClick={() => setActiveProject(index)}
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
                {activeProject === index && (
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                )}
                {activeProject === index && (
                  <CardFooter className="p-4 pt-0">
                    <Link to={`/projekt/${project.id}`}>
                      <Button variant="ghost" size="sm" className="flex items-center">
                        Zobacz szczegóły 
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                )}
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl relative"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeProject === index ? 1 : 0,
                  scale: activeProject === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="h-full w-full absolute top-0 left-0"
                style={{ display: activeProject === index ? 'block' : 'none' }}
              >
                <Link to={`/projekt/${project.id}`}>
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/galeria">
            <Button 
              className="bg-eco-orange-600 hover:bg-eco-orange-700"
              size="lg"
            >
              Zobacz więcej realizacji
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
