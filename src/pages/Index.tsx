import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Technology from '../components/Technology';
import Configurator from '../components/Configurator';
import Footer from '../components/Footer';
import ConsultationForm from '../components/ui/ConsultationForm';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openConsultationForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Timeline />
      <Technology />
      <Configurator />
      <Footer />
      
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          whileTap={{ scale: 0.9 }}
          onClick={openConsultationForm}
          className="bg-eco-green-600 hover:bg-eco-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-colors"
        >
          <span className="font-medium">Zamów konsultację</span>
        </motion.button>
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Formularz konsultacji */}
      <AnimatePresence>
        {isFormOpen && <ConsultationForm onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start({
      opacity: inView ? 0 : 1,
      y: inView ? 20 : 0,
    });
  }, [controls, inView]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 bg-white p-3 rounded-full shadow-lg hover:shadow-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-eco-anthracite"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </motion.button>
  );
};

export default Index;
