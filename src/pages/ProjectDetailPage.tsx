
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

// Define the Project type
type Project = {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  image: string;
  detailedDescription?: string;
  features?: string[];
  gallery?: string[];
  clientFeedback?: string;
};

// Sample projects data with more details
const projectsData: Project[] = [
  {
    id: 1,
    title: "Dom Modułowy - Mazury",
    description: "Nowoczesny dom modułowy z 3 sypialniami, energooszczędny i ekologiczny.",
    location: "Mazury, Polska",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2956&auto=format&fit=crop",
    detailedDescription: "Ten nowoczesny dom modułowy został zaprojektowany dla rodziny ceniącej sobie kontakt z naturą. Położony w malowniczej okolicy Mazur, dom harmonijnie wkomponowuje się w otaczający krajobraz. Projekt obejmował 3 sypialnie, 2 łazienki, przestronny salon z aneksem kuchennym oraz taras z widokiem na jezioro. Zastosowane rozwiązania energooszczędne pozwalają na znaczące obniżenie kosztów eksploatacji.",
    features: [
      "Powierzchnia użytkowa: 120m²",
      "3 sypialnie, 2 łazienki",
      "Ogrzewanie podłogowe",
      "Pompa ciepła",
      "Panele fotowoltaiczne",
      "Pełna izolacja termiczna",
      "Inteligentny system zarządzania energią",
      "Duże przeszklenia z widokiem na jezioro"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2956&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop"
    ],
    clientFeedback: "Jesteśmy niezwykle zadowoleni z naszego nowego domu modułowego. Proces budowy przebiegł sprawnie i zgodnie z harmonogramem. Jakość wykonania przerosła nasze oczekiwania, a komfort mieszkania jest na najwyższym poziomie. Szczególnie doceniamy energooszczędne rozwiązania, które znacząco obniżyły nasze rachunki."
  },
  {
    id: 2,
    title: "Domek letniskowy - Karkonosze",
    description: "Komfortowy domek modułowy idealny na wypoczynek dla rodziny 4-osobowej.",
    location: "Karkonosze, Polska",
    year: "2023",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop",
    detailedDescription: "Ten domek letniskowy został zaprojektowany jako miejsce wypoczynku dla rodziny 4-osobowej. Położony w malowniczej okolicy Karkonoszy, oferuje dostęp do licznych szlaków turystycznych. Domek składa się z 2 sypialni, łazienki, salonu z aneksem kuchennym oraz tarasu z widokiem na góry. Zastosowane materiały naturalne doskonale komponują się z otaczającym krajobrazem.",
    features: [
      "Powierzchnia użytkowa: 65m²",
      "2 sypialnie, 1 łazienka",
      "Salon z kominkiem",
      "Aneks kuchenny w pełni wyposażony",
      "Taras z widokiem na góry",
      "Izolacja termiczna",
      "Ogrzewanie elektryczne",
      "Meble z naturalnego drewna"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-dca7f7b4fca7?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop"
    ],
    clientFeedback: "Nasz domek letniskowy w Karkonoszach to spełnienie marzeń o miejscu, gdzie można odpocząć od miejskiego zgiełku. Jakość wykonania i dbałość o detale robią wrażenie. Doceniamy również szybkość realizacji projektu oraz profesjonalne podejście zespołu na każdym etapie współpracy."
  },
  {
    id: 3,
    title: "Biuro modułowe - Warszawa",
    description: "Przestrzeń biurowa stworzona z 4 modułów, pełna światła i ergonomiczna.",
    location: "Warszawa, Polska",
    year: "2022",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop",
    detailedDescription: "Ta przestrzeń biurowa została stworzona z myślą o nowoczesnej firmie, która ceni sobie komfort pracy i ergonomiczne rozwiązania. Biuro składa się z 4 modułów, które zostały połączone w funkcjonalną całość. Przestrzeń obejmuje open space dla zespołu, dwie sale konferencyjne, kuchnię oraz strefę relaksu. Duże przeszklenia zapewniają dostęp naturalnego światła, co wpływa pozytywnie na samopoczucie pracowników.",
    features: [
      "Powierzchnia użytkowa: 200m²",
      "Open space dla 20 osób",
      "2 sale konferencyjne",
      "Kuchnia i strefa relaksu",
      "Duże przeszklenia",
      "Klimatyzacja",
      "System wentylacji z rekuperacją",
      "Energooszczędne oświetlenie LED"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8659b8e39c0c?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633886897663-44c707d71904?q=80&w=2832&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2832&auto=format&fit=crop"
    ],
    clientFeedback: "Nowa przestrzeń biurowa całkowicie zmieniła sposób, w jaki pracujemy. Ergonomiczne i nowoczesne wnętrza sprawiają, że pracownicy chętnie przychodzą do biura. Doceniamy również elastyczność rozwiązania modułowego, które pozwoli nam w przyszłości rozbudować przestrzeń w miarę rozwoju firmy."
  }
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Find the project based on the id parameter
    const foundProject = projectsData.find(p => p.id === Number(id));
    if (foundProject) {
      setProject(foundProject);
      // Set the first image as the selected image by default
      if (foundProject.gallery && foundProject.gallery.length > 0) {
        setSelectedImage(foundProject.gallery[0]);
      }
    }
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Projekt nie został znaleziony.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link to="/#realizacje">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                Powrót do realizacji
              </Button>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-eco-orange-600" />
                {project.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-2 text-eco-orange-600" />
                {project.year}
              </div>
            </div>
            
            <p className="text-lg text-gray-600 max-w-4xl">
              {project.description}
            </p>
            <Separator className="w-24 h-1 bg-eco-orange-500 mt-8" />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={selectedImage || project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer rounded-lg overflow-hidden ${
                        selectedImage === img ? 'ring-2 ring-eco-orange-500' : ''
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={img} 
                          alt={`${project.title} - zdjęcie ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">O projekcie</h2>
              <p className="text-gray-600 mb-6">
                {project.detailedDescription}
              </p>
              
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Cechy projektu</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-eco-orange-100 text-eco-orange-600 rounded-full flex-shrink-0 text-sm">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.clientFeedback && (
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Opinia klienta</h3>
                  <blockquote className="italic text-gray-600">
                    "{project.clientFeedback}"
                  </blockquote>
                </div>
              )}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-6">Zainteresowany podobnym projektem?</h2>
            <Button 
              className="bg-eco-orange-600 hover:bg-eco-orange-700"
              size="lg"
              onClick={() => document.getElementById('consultationFormButton')?.click()}
            >
              Zamów konsultację
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
