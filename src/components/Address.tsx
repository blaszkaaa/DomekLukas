
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Address = () => {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Odwiedź nasze <span className="text-eco-green-600">biuro</span></h2>
              <p className="text-lg text-gray-600">
                Zapraszamy do odwiedzenia naszego biura projektowego, gdzie możesz zobaczyć makiety naszych domów modułowych
                i porozmawiać z naszymi ekspertami.
              </p>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-eco-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adres</h3>
                    <p className="text-gray-600">ul. Jana Pawła 2</p>
                    <p className="text-gray-600">00-001 Słupca</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-eco-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <p className="text-gray-600">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-eco-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">kontakt@domeklukas.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-eco-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Godziny otwarcia</h3>
                    <p className="text-gray-600">Pon - Pt: 9:00 - 17:00</p>
                    <p className="text-gray-600">Sob: 10:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl h-96 lg:h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
              alt="Nasze biuro" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Address;
