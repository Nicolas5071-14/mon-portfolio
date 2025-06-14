import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { FiDownload, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import Logo from "./Logo";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/about" },
        { name: "Projets", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`fixed w-full z-50 ${scrolled
                    ? "bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white shadow-md"
                    : "bg-transparent"
                } transition-all duration-300`}
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo - Prend moins de place */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center space-x-2 z-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                            <Logo />
                        </div>
                        <span className="text-xl font-bold text-white mix-blend-difference hidden sm:inline">
                            A.Nicolas
                        </span>
                    </Link>

                    {/* Menu Desktop - Centré avec espace contrôlé */}
                    <div className="hidden md:flex flex-1 justify-center mx-4">
                        <nav className="flex space-x-1 lg:space-x-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-3 py-1 text-sm font-medium ${location.pathname === link.path
                                            ? "text-blue-600"
                                            : "text-gray-700 hover:text-blue-500"
                                        } transition-colors`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.span
                                            layoutId="navUnderline"
                                            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Boutons droite (Desktop) - Espacement amélioré */}
                    <div className="hidden md:flex items-center space-x-4 min-w-max">
                        {/* Bouton Télécharger CV - Plus compact */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Ramahalefitra_a_Nicolas_cv.pdf"
                            download
                            className="flex items-center bg-purple-800 text-orange-100 px-3 py-1.5 rounded-lg font-medium text-sm shadow-sm hover:bg-purple-900 transition-all whitespace-nowrap"
                        >
                            <FiDownload className="mr-1" />
                            CV
                        </motion.a>

                        {/* Liens sociaux - Icônes seulement avec tooltips */}
                        <div className="flex space-x-3">
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="https://github.com/Nicolas5071-14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-200 transition-colors relative group"
                                aria-label="GitHub"
                            >
                                <FiGithub className="w-5 h-5" />
                                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    GitHub
                                </span>
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="https://www.linkedin.com/in/nicolas-abelson-ramahalefitra-7958652bb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-200 transition-colors relative group"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="w-5 h-5" />
                                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    LinkedIn
                                </span>
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="https://www.facebook.com/Nics.zg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-200 transition-colors relative group"
                                aria-label="Facebook"
                            >
                                <FiFacebook className="w-5 h-5" />
                                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Facebook
                                </span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Bouton mobile - Position fixe */}
                    <button
                        className="md:hidden focus:outline-none z-50 ml-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <div className="w-6 flex flex-col items-end space-y-1.5">
                            <motion.span
                                animate={
                                    isMenuOpen
                                        ? { rotate: 45, y: 6, width: "100%" }
                                        : { rotate: 0, y: 0, width: "100%" }
                                }
                                className="h-0.5 bg-white mix-blend-difference"
                            />
                            <motion.span
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="h-0.5 bg-white mix-blend-difference w-4/5"
                            />
                            <motion.span
                                animate={
                                    isMenuOpen
                                        ? { rotate: -45, y: -6, width: "100%" }
                                        : { rotate: 0, y: 0, width: "100%" }
                                }
                                className="h-0.5 bg-white mix-blend-difference w-3/4"
                            />
                        </div>
                    </button>
                </div>

                {/* Menu Mobile - Amélioré */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0, height: 0 },
                                visible: { opacity: 1, height: "auto" },
                                exit: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden absolute top-0 left-0 w-full bg-white pt-20 pb-6 shadow-lg"
                        >
                            <div className="space-y-4 px-6">
                                {navLinks.map((link) => (
                                    <motion.div
                                        key={link.path}
                                        variants={mobileMenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block px-4 py-3 rounded-lg text-center ${location.pathname === link.path
                                                    ? "bg-blue-100 text-blue-600"
                                                    : "text-gray-700 hover:bg-gray-100"
                                                } font-medium`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Bouton Télécharger CV Mobile */}
                                <motion.a
                                    variants={mobileMenuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.2 }}
                                    href="/mon-portfolio/Ramahalefitra_a_Nicolas_cv.pdf"
                                    download
                                    className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium"
                                >
                                    <FiDownload className="mr-2" />
                                    Télécharger CV
                                </motion.a>

                                {/* Liens sociaux Mobile - Centrés */}
                                <motion.div
                                    variants={mobileMenuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                    className="flex justify-center space-x-6 pt-4"
                                >
                                    <a
                                        href="https://github.com/Nicolas5071-14"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 transition-colors flex flex-col items-center"
                                    >
                                        <FiGithub className="w-6 h-6" />
                                        <span className="text-xs mt-1">GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/nicolas-abelson-ramahalefitra-7958652bb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 transition-colors flex flex-col items-center"
                                    >
                                        <FiLinkedin className="w-6 h-6" />
                                        <span className="text-xs mt-1">LinkedIn</span>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/Nics.zg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 transition-colors flex flex-col items-center"
                                    >
                                        <FiFacebook className="w-6 h-6" />
                                        <span className="text-xs mt-1">Facebook</span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;