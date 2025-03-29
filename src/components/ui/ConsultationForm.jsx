import { motion } from 'framer-motion';

const ConsultationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj logika obsługi formularza
    alert('Formularz wysłany! Skontaktujemy się wkrótce.');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-2xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-eco-anthracite mb-4">Zamów konsultację</h3>
        <p className="text-gray-600 mb-6">
          Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin, aby omówić Twoje potrzeby.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-500"
              placeholder="Jan Kowalski"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-500"
              placeholder="jan@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-500"
              placeholder="+48 123 456 789"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Wiadomość (opcjonalnie)
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-500"
              placeholder="Opisz, czego dotyczy konsultacja..."
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3 pt-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Anuluj
            </motion.button>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-eco-green-600 hover:bg-eco-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Wyślij
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ConsultationForm;
