import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin } from "react-icons/fi";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulation d'envoi
        setTimeout(() => {
            const mailtoLink = `mailto:ramahalefitra.abelson.nicolas@gmail.com?subject=Message de ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})&body=${encodeURIComponent(formData.message)}`;
            window.location.href = mailtoLink;
            
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            
            // Réinitialiser le message de succès après 5s
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Contactez-moi
                    </h2>
                    <p className="mt-3 text-xl text-blue-100">
                        Discutons de votre projet ou opportunité
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 justify-center">
                    {/* Formulaire - Largeur réduite pour meilleur centrage */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-1/2 max-w-2xl bg-white p-8 rounded-2xl shadow-xl"
                    >
                        {submitSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
                            >
                                Message envoyé avec succès ! Je vous répondrai dès que possible.
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nom complet
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiUser className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Votre nom ou email de votre entreprise"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Adresse email 
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="votre@email.com ou email de votre entreprise"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3">
                                        <FiMessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Décrivez votre projet ou demande..."
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="mr-2 h-5 w-5" />
                                            Envoyer le message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Informations de contact - Largeur réduite pour meilleur centrage */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full lg:w-1/2 max-w-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white"
                    >
                        <h3 className="text-2xl font-bold mb-6">Mes coordonnées</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                                    <FiMail className="h-6 w-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold">Email</h4>
                                    <a href="mailto:ramahalefitra.abelson.nicolas@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                                        ramahalefitra.abelson.nicolas@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                                    <FiPhone className="h-6 w-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold">Téléphone</h4>
                                    <a href="tel:+261348960049" className="text-blue-100 hover:text-white transition-colors">
                                        +261 34 89 600 49
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                                    <FiMapPin className="h-6 w-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold">Localisation</h4>
                                    <p className="text-blue-100">
                                        Ankadimbahoaka, Antananarivo 101<br />Madagascar
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h4 className="text-lg font-semibold mb-3">Disponibilité</h4>
                                <div className="flex items-center">
                                    <span className="h-3 w-3 bg-green-400 rounded-full mr-2"></span>
                                    <span>Disponible pour de nouvelles opportunités</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;