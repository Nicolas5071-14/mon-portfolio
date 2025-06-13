import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiDatabase, FiSmartphone, FiMap, FiCpu, FiTool, FiUsers, FiAward, FiActivity, FiTrendingUp } from "react-icons/fi";
import nico from '../nicolas-photo.png';

const About: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
            <div className="max-w-7xl mx-auto">
                {/* Section Présentation */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-12 items-center mb-20"
                >
                    {/* Photo avec animation */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src={nico}
                                alt="Nicolas Ramahalefitra"
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                                className="absolute inset-0 bg-blue-400 mix-blend-multiply"
                            />
                        </div>
                    </motion.div>

                    {/* Présentation */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            RAMAHALEFITRA Abelson Nicolas
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-blue-100 mb-8"
                        >
                            Développeur Full-Stack & Expert SIG
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 text-blue-100 text-lg"
                        >
                            <p>Je crée des solutions numériques innovantes intégrant technologies web, mobiles et systèmes d'information géographique.</p>
                            <p>Passionné par la transformation digitale et la gestion territoriale intelligente.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Section Parcours */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                        Mon Parcours Académique
                    </h2>

                    <div className="relative">
                        {/* Ligne de timeline */}
                        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-white bg-opacity-50 transform -translate-x-1/2"></div>

                        {/* Éléments du parcours */}
                        <div className="space-y-12 md:space-y-16">
                            {[
                                {
                                    date: "2024-2025",
                                    title: "Master 2 Professionnel en Informatique",
                                    description: "Spécialisé en Systèmes d'Information Géomatique et Décision - EMIT Fianarantsoa",
                                    icon: <FiTrendingUp className="text-2xl" />
                                },
                                {
                                    date: "2022-2023",
                                    title: "Licence Professionnelle",
                                    description: "Développement d'Application Internet Intranet - EMIT Fianarantsoa",
                                    icon: <FiCode className="text-2xl" />
                                },
                                {
                                    date: "2018-2019",
                                    title: "Baccalauréat Série C",
                                    description: "Saint Joseph Ambozontany, Fianarantsoa",
                                    icon: <FiAward className="text-2xl" />
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                                >
                                    <div className="md:w-1/2 p-4">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className={`p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-lg ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                                        >
                                            <div className="flex items-center mb-3">
                                                <div className="mr-4 p-2 bg-blue-500 rounded-full text-white">
                                                    {item.icon}
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                            </div>
                                            <div className="ml-14 pl-2 border-l-2 border-blue-400">
                                                <p className="text-blue-200 font-medium">{item.date}</p>
                                                <p className="mt-2 text-blue-100">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className="absolute md:relative left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none">
                                        <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-md"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Section Compétences Techniques */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                        Compétences Techniques
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <FiCode className="text-3xl" />,
                                category: "Langages",
                                items: ["PHP (Laravel, Symfony)", "JavaScript (React, Node)", "Java/Kotlin", "Python"],
                            },
                            {
                                icon: <FiDatabase className="text-3xl" />,
                                category: "Bases de données",
                                items: ["PostgreSQL/PostGIS", "MySQL", "MongoDB", "Firebase"],
                            },
                            {
                                icon: <FiSmartphone className="text-3xl" />,
                                category: "Mobile",
                                items: ["React Native", "Flutter", "Android (Kotlin)"],
                            },
                            {
                                icon: <FiMap className="text-3xl" />,
                                category: "SIG & Géomatique",
                                items: ["QGIS", "Webmapping", "PostGIS", "GeoJSON"],
                            },
                            {
                                icon: <FiCpu className="text-3xl" />,
                                category: "Méthodes Dev",
                                items: ["REST API", "CI/CD", "Git", "Responsive Design"],
                            },
                            {
                                icon: <FiTool className="text-3xl" />,
                                category: "Outils",
                                items: ["Docker", "Power BI", "AutoCAD", "Blender"],
                            },
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="mr-4 p-3 bg-blue-500 rounded-full text-white">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                                </div>
                                <ul className="space-y-2 ml-16">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="text-blue-100 flex items-center">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Section Compétences Transversales */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                        Compétences Transversales
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FiUsers className="text-3xl" />,
                                title: "Travail d'équipe",
                                description: "Collaboration avec des équipes pluridisciplinaires (développeurs, géomaticiens)"
                            },
                            {
                                icon: <FiActivity className="text-3xl" />,
                                title: "Autonomie",
                                description: "Capacité à mener des projets de manière indépendante"
                            },
                            {
                                icon: <FiAward className="text-3xl" />,
                                title: "Esprit d'analyse",
                                description: "Résolution de problèmes complexes et pensée critique"
                            },
                            {
                                icon: <FiTrendingUp className="text-3xl" />,
                                title: "Adaptabilité",
                                description: "Apprentissage rapide des nouvelles technologies"
                            },
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-4 bg-blue-500 rounded-full text-white">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                                    <p className="text-blue-100">{skill.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;