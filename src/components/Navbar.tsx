import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { FiDownload, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
// import car from '../nicolas-photo.png';
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
        { name: "Accueil", path: "/mon-portfolio" },
        { name: "À propos", path: "/mon-portfolio/about" },
        { name: "Projets", path: "/mon-portfolio/projects" },
        { name: "Contact", path: "/mon-portfolio/contact" },
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
                    {/* Logo */}
                    <Link
                        to="/mon-portfolio"
                        className="flex items-center space-x-2 z-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                          <Logo/>
                        </div>
                        <span className="text-xl font-bold text-white mix-blend-difference hidden sm:inline">
                            A.Nicolas
                        </span>
                    </Link>

                    {/* Menu Desktop */}
                    <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-2 lg:space-x-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm">
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
                        </div>
                    </nav>

                    {/* Boutons droite (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Bouton Télécharger CV */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/mon-portfolio/Ramahalefitra_a_Nicolas_cv.pdf"
                            download
                            className="flex items-center bg-purple-800 text-orange-100 px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-purple-900 transition-all"
                        >
                            <FiDownload className="mr-2" />
                            Download CV
                        </motion.a>

                        {/* Liens sociaux */}
                        <div className="flex space-x-3">
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="https://github.com/Nicolas5071-14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white hover:text-blue-200 transition-colors"
                            >
                                <FiGithub className="w-5 h-5" />
                                Github
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="https://www.linkedin.com/in/nicolas-abelson-ramahalefitra-7958652bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white hover:text-blue-200 transition-colors"
                            >
                                <FiLinkedin className="w-5 h-5" />
                                LinkdIn
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="https://www.facebook.com/Nics.zg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white hover:text-blue-200 transition-colors"
                            >
                                <FiFacebook className="w-5 h-5" />
                                Facebook
                            </motion.a>
                        </div>
                    </div>

                    {/* Bouton mobile */}
                    <button
                        className="md:hidden focus:outline-none z-50"
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

                {/* Menu Mobile */}
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
                                    href="/mon-portfolio/A_Nicolas_cv.pdf"
                                    download
                                    className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium"
                                >
                                    <FiDownload className="mr-2" />
                                    Download CV
                                </motion.a>

                                {/* Liens sociaux Mobile */}
                                <div className="flex justify-center space-x-6 pt-4">
                                    <motion.a
                                        variants={mobileMenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                        href="https://github.com/votreprofil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        <FiGithub className="w-6 h-6" />
                                    </motion.a>
                                    <motion.a
                                        variants={mobileMenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2, delay: 0.2 }}
                                        href="https://linkedin.com/in/votreprofil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        <FiLinkedin className="w-6 h-6" />
                                    </motion.a>
                                    <motion.a
                                        variants={mobileMenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2, delay: 0.3 }}
                                        href="https://facebook.com/votreprofil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        <FiFacebook className="w-6 h-6" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;