import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer, Home, Recycle, LucideProps } from 'lucide-react';
import { useState } from 'react';

const TechCard = ({ 
  icon: Icon, 
  title, 
  description, 
  background,
  delay 
}: {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  background: string;
  delay: number;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Zoptymalizowane warianty animacji
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay 
      }
    },
    hover: { 
      y: -10, 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { 
        duration: 0.3, 
        delay: 0 
      }
    }
  };

  // Zoptymalizowane warianty dla ikon
  const iconVariants = {
    hover: { 
      rotate: 360,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      onAnimationComplete={() => setHasAnimated(true)}
      className={`${background} rounded-xl overflow-hidden shadow-lg transition-all duration-300`}
    >
      <div className="p-8">
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md mb-6"
        >
          <Icon size={32} className="text-orange-600" />
        </motion.div>
        <h3 className="text-xl font-bold text-eco-anthracite mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="px-8 pb-8">
        <AnimatePresence mode="wait">
          {title === 'Izolacja termiczna' && (
            <motion.div 
              className="relative mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: hasAnimated ? 0 : 0.2 }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, delay: 0 }
                }
              }}
              key="izolacja"
            >
              <div className="h-20 bg-white rounded-md overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col">
                  {[900, 700, 500, 300, 100].map((shade, index) => (
                    <motion.div 
                      key={shade}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ 
                        duration: 0.4, 
                        delay: hasAnimated ? 0 : 0.5 + (index * 0.08) 
                      }}
                      className={`h-1/5 bg-orange-${shade} opacity-${80 - (index * 10)}`} 
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: hasAnimated ? 0 : 0.9, 
                      duration: 0.4, 
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-white font-bold text-lg"
                  >
                    U = 0.10 W/(m²K)
                  </motion.div>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500 text-center">
                Wielowarstwowa izolacja termiczna
              </div>
            </motion.div>
          )}
          
          {title === 'System smart home' && (
            <motion.div 
              className="mt-4 bg-white p-4 rounded-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: hasAnimated ? 0 : 0.2 }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, delay: 0 }
                }
              }}
              key="smarthome"
            >
              <motion.div 
                className="grid grid-cols-3 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: hasAnimated ? 0 : 0.4, 
                  duration: 0.4
                }}
              >
                {['Światło', 'Temperatura', 'Energia', 'Bezpieczeństwo', 'Rolety', 'Multimedia'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: hasAnimated ? 0 : 0.5 + (index * 0.08), duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: '#FF9800', 
                      color: 'white',
                      transition: { duration: 0.2, delay: 0 }
                    }}
                    className="p-2 text-xs bg-gray-100 rounded text-center cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
          
          {title === 'Ekologiczne materiały' && (
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: hasAnimated ? 0 : 0.2 }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, delay: 0 }
                }
              }}
              key="materialy"
            >
              <div className="h-6 bg-white rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  transition={{ 
                    delay: hasAnimated ? 0 : 0.4, 
                    duration: 0.8, 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-orange-500 rounded-full flex items-center justify-end"
                >
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: hasAnimated ? 0 : 1.2, duration: 0.3 }}
                    className="inline-block mr-2 text-white font-bold text-sm"
                  >
                    80% materiałów z recyklingu
                  </motion.span>
                </motion.div>
              </div>
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: hasAnimated ? 0 : 1.0, duration: 0.4 }}
              >
                {[
                  'Drewno z certyfikowanych lasów',
                  'Farby bez LZO',
                  'Materiały biodegradowalne'
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: hasAnimated ? 0 : 1.2 + (index * 0.15), duration: 0.3 }}
                    className="flex items-center justify-between text-sm mt-1"
                  >
                    <span>{item}</span>
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: hasAnimated ? 0 : 1.4 + (index * 0.15), 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="text-orange-600 font-medium"
                    >
                      ✓
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Technology = () => {
  return (
    <section id="technologia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-eco-anthracite mb-4">Technologia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nasze domy modułowe wykorzystują najnowocześniejsze technologie, zapewniając wyjątkowy komfort,
            energooszczędność i minimalny wpływ na środowisko.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechCard
            icon={Thermometer}
            title="Izolacja termiczna"
            description="Wielowarstwowa izolacja z wykorzystaniem materiałów o najwyższych parametrach termoizolacyjnych zapewnia minimalne straty ciepła."
            background="bg-gradient-to-br from-orange-50 to-orange-100"
            delay={0.1}
          />
          <TechCard
            icon={Home}
            title="System smart home"
            description="Inteligentny system zarządzania domem pozwala na kontrolę wszystkich urządzeń z poziomu aplikacji mobilnej."
            background="bg-gradient-to-br from-orange-50 to-orange-100"
            delay={0.2}
          />
          <TechCard
            icon={Recycle}
            title="Ekologiczne materiały"
            description="Wykorzystujemy materiały przyjazne dla środowiska, pochodzące w dużej mierze z recyklingu lub ze zrównoważonych źródeł."
            background="bg-gradient-to-br from-orange-50 to-orange-100"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
