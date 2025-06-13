import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode, FiFacebook } from "react-icons/fi";
import pdp from '../nicolas-photo.png';

const Home: React.FC = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostGIS', category: 'SIG' },
    { name: 'QGIS', category: 'SIG' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'JAVA', category: 'Backend' },
    { name: 'Python', category: 'Data' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Section principale */}
      <section className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
        {/* Effets de fond animés */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            transition: { duration: 15, repeat: Infinity }
          }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-400 opacity-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            transition: { duration: 18, repeat: Infinity, delay: 3 }
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-400 opacity-10"
        />

        {/* Contenu texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-12 md:mb-0 md:mr-12 max-w-md lg:max-w-xl relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Bonjour, je suis <span className="text-yellow-300">RAMAHALEFITRA Abelson Nicolas</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-6 font-semibold"
          >
            Développeur Full-Stack & Expert SIG
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 opacity-90"
          >
            Je crée des solutions numériques innovantes intégrant technologies web,
            mobiles et systèmes d'information géographique pour la transformation digitale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/mon-portfolio/Ramahalefitra_a_Nicolas_cv.pdf"
              download
              className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-all"
            >
              <FiDownload className="mr-2" />
              Télécharger mon CV
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/mon-portfolio/contact"
              className="flex items-center justify-center bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all"
            >
              <FiMail className="mr-2" />
              Contactez-moi
            </motion.a>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center md:justify-start space-x-4 mt-8"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/Nicolas5071-14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/nicolas-abelson-ramahalefitra-7958652bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              <FiLinkedin className="w-6 h-6" />
              LinkdIN
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.facebook.com/Nics.zg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              <FiFacebook className="w-6 h-6" />
              Facebook
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Photo personnelle avec animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10"
        >
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={pdp}
              alt="Abelson Nicolas"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            animate={{
              rotate: 360,
              transition: {
                repeat: Infinity,
                duration: 12,
                ease: "linear"
              }
            }}
            className="absolute -inset-4 border-4 border-yellow-300 border-opacity-50 rounded-full"
          />

          {/* Badge animé */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              transition: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }
            }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-lg font-bold text-sm"
          >
            Disponible pour missions
          </motion.div>
        </motion.div>
      </section>

      {/* Section Technologies */}
      <div className="bg-white py-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            <FiCode className="inline mr-3" />
            Technologies Maîtrisées
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-blue-600 font-medium">{tech.name}</div>
                <div className="text-xs text-purple-600 mt-1">{tech.category}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <a
              href="/mon-portfolio/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Voir mes projets
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;