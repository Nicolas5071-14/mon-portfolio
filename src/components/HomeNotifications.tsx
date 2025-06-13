import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const HomeNotification: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <AnimatePresence>
      {isHomePage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6"
        >
          <p className="font-bold">Bienvenue sur mon portfolio !</p>
          <p>Découvrez mes projets et compétences en développement full-stack et SIG.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeNotification