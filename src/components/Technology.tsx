import { motion } from 'framer-motion';
import { Thermometer, Home, Recycle, LucideProps } from 'lucide-react';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.3 }
      }}
      className={`${background} rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer`}
    >
      <motion.div 
        className="p-8"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md mb-6"
        >
          <Icon size={32} className="text-eco-green-600" />
        </motion.div>
        <motion.h3 
          className="text-xl font-bold text-eco-anthracite mb-3"
          whileHover={{ scale: 1.05, color: '#4CAF50' }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
      
      <div className="px-8 pb-8">
        {title === 'Izolacja termiczna' && (
          <motion.div 
            className="relative mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-20 bg-white rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col">
                {['900', '700', '500', '300', '100'].map((shade, index) => (
                  <motion.div 
                    key={shade}
                    className={`h-1/5 bg-eco-green-${shade} opacity-${80 - index * 10}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white font-bold text-lg">U = 0.10 W/(m²K)</span>
              </motion.div>
            </div>
            <div className="mt-2 text-sm text-gray-500 text-center">
              Wielowarstwowa izolacja termiczna
            </div>
          </motion.div>
        )}
        
        {title === 'System smart home' && (
          <motion.div 
            className="mt-4 bg-white p-4 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="grid grid-cols-3 gap-2">
              {['Światło', 'Temperatura', 'Energia', 'Bezpieczeństwo', 'Rolety', 'Multimedia'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: '#4CAF50', color: 'white' }}
                  className="p-2 text-xs bg-gray-100 rounded text-center cursor-pointer transition-colors"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {title === 'Ekologiczne materiały' && (
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-6 bg-white rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="h-full bg-eco-green-500 rounded-full text-right"
              >
                <span className="inline-block mr-2 text-white font-bold text-sm leading-6">
                  80% materiałów z recyklingu
                </span>
              </motion.div>
            </div>
            <div className="mt-4">
              {['Drewno z certyfikowanych lasów', 'Farby bez LZO', 'Materiały biodegradowalne'].map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center justify-between text-sm mt-1"
                >
                  <span>{item}</span>
                  <span className="text-eco-green-600 font-medium">✓</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
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
            background="bg-gradient-to-br from-eco-green-50 to-eco-green-100"
            delay={0.1}
          />
          <TechCard
            icon={Home}
            title="System smart home"
            description="Inteligentny system zarządzania domem pozwala na kontrolę wszystkich urządzeń z poziomu aplikacji mobilnej."
            background="bg-gradient-to-br from-eco-green-50 to-eco-green-100"
            delay={0.2}
          />
          <TechCard
            icon={Recycle}
            title="Ekologiczne materiały"
            description="Wykorzystujemy materiały przyjazne dla środowiska, pochodzące w dużej mierze z recyklingu lub ze zrównoważonych źródeł."
            background="bg-gradient-to-br from-eco-green-50 to-eco-green-100"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
