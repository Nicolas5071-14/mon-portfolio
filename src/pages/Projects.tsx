import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import AppLink from "../components/AppLink";
// SVG Components pour chaque projet
const UrbanSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="20" y="80" width="40" height="100" fill="#3B82F6" rx="5"/>
    <rect x="70" y="50" width="40" height="130" fill="#8B5CF6" rx="5"/>
    <rect x="120" y="30" width="40" height="150" fill="#3B82F6" rx="5"/>
    <circle cx="100" cy="30" r="10" fill="#10B981"/>
    <path d="M20 80L100 30L180 80" stroke="#EF4444" strokeWidth="3" fill="none"/>
  </svg>
);

const MaterialSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="30" y="50" width="140" height="100" fill="#F59E0B" rx="10"/>
    <rect x="50" y="70" width="100" height="60" fill="#FEE2E2" rx="5"/>
    <line x1="50" y1="90" x2="150" y2="90" stroke="#1E40AF" strokeWidth="3"/>
    <line x1="50" y1="110" x2="150" y2="110" stroke="#1E40AF" strokeWidth="3"/>
    <circle cx="100" cy="130" r="15" fill="#10B981"/>
  </svg>
);

const CallCenterSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#EC4899" opacity="0.2"/>
    <path d="M70 70L130 70L150 100L130 130L70 130L50 100Z" fill="#8B5CF6"/>
    <circle cx="100" cy="100" r="30" fill="#3B82F6"/>
    <path d="M100 85L100 115M85 100H115" stroke="white" strokeWidth="5"/>
  </svg>
);

const CarSharingSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="40" y="100" width="120" height="40" fill="#3B82F6" rx="10"/>
    <circle cx="80" cy="160" r="20" fill="#1F2937"/>
    <circle cx="120" cy="160" r="20" fill="#1F2937"/>
    <path d="M60 100L80 60H120L140 100" fill="#2563EB"/>
  </svg>
);

const HotelSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="30" y="80" width="140" height="80" fill="#F59E0B" rx="5"/>
    <rect x="50" y="60" width="30" height="20" fill="#8B5CF6"/>
    <rect x="90" y="60" width="30" height="20" fill="#8B5CF6"/>
    <rect x="50" y="100" width="20" height="30" fill="#EC4899"/>
    <rect x="90" y="100" width="20" height="30" fill="#EC4899"/>
    <rect x="130" y="100" width="20" height="30" fill="#EC4899"/>
  </svg>
);

const PharmacySvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="50" y="50" width="100" height="100" fill="#10B981" rx="10"/>
    <path d="M70 70H130M70 100H130M70 130H130" stroke="white" strokeWidth="10"/>
    <path d="M100 50V150" stroke="white" strokeWidth="10"/>
  </svg>
);

const StudentSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <circle cx="100" cy="70" r="30" fill="#3B82F6"/>
    <path d="M100 100C120 100 140 120 140 150H60C60 120 80 100 100 100Z" fill="#8B5CF6"/>
    <rect x="80" y="150" width="40" height="30" fill="#F59E0B"/>
    <path d="M50 180L150 180" stroke="#1F2937" strokeWidth="5"/>
  </svg>
);

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Plateforme de digitalisation urbaine",
            description: "Développement d'une plateforme SIG innovante pour la ville d'Antsirabe (Madagascar) avec :",
            features: [
                "Module d'analyse spatiale automatisée (QGIS/PostGIS)",
                "Réduction de 25% des erreurs de traitement des permis",
                "Détection des bâtiments non déclarés via croisement de données",
                "Modélisation des zones interdites en JSON/GeoJSON"
            ],
            technologies: ["Node.js", "React", "PostGIS", "QGIS", "GeoJSON"],
            svg: <UrbanSvg />,
            githubUrl: "https://github.com/Nicolas5071-14/urbanisme",
            demoUrl: "",
            date: "Mars 2025",
            client: "PNUD & AGVM"
        },
        {
            id: 2,
            title: "Gestion des demandes matériel IT",
            description: "Application web complète pour la gestion des demandes de matériel informatique avec :",
            features: [
                "Interface optimisée en responsive design",
                "Réduction des délais de traitement de 30%",
                "Workflow de validation automatisé",
                "Tableau de bord de suivi en temps réel"
            ],
            technologies: ["PHP", "CodeIgniter", "PostgreSQL", "Bootstrap"],
            svg: <MaterialSvg />,
            date: "Nov 2023",
            client: "NOMERIKIA.MG"
        },
        {
            id: 3,
            title: "Gestion des prospections téléphoniques",
            description: "Application web pour optimiser les campagnes de prospection avec :",
            features: [
                "Taux de succès augmenté de 80%",
                "Interface intuitive pour les opérateurs",
                "Gestion centralisée des leads",
                "Statistiques en temps réel"
            ],
            technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
            svg: <CallCenterSvg />,
            date: "Sept 2022",
            client: "NOMERIKIA.MG"
        },
        {
            id: 4,
            title: "Application de covoiturage",
            description: "Solution mobile pour le partage de trajets avec :",
            features: [
                "Réduction de 90% du temps d'attente",
                "Système de géolocalisation en temps réel",
                "Paiement intégré sécurisé",
                "Notation des conducteurs"
            ],
            technologies: ["Kotlin", "Java", "PostgreSQL", "Firebase"],
            svg: <CarSharingSvg />,
            githubUrl: "",
            demoUrl: "",
            date: "Nov 2024"
        },
        {
            id: 5,
            title: "Réservation de chambres d'hôtel",
            description: "Système de gestion des réservations avec :",
            features: [
                "Disponibilité en temps réel",
                "Interface admin complète",
                "Synchronisation multi-plateforme",
                "Système de promotion intégré"
            ],
            technologies: ["C#", ".NET", "SQL Server", "Azure"],
            svg: <HotelSvg />,
            githubUrl: "",
            demoUrl: "",
            date: "Jan 2022"
        },
        {
            id: 6,
            title: "Gestion de pharmacie",
            description: "Solution complète pour pharmacies avec :",
            features: [
                "Gestion des stocks et péremption",
                "Historique des prescriptions",
                "Alertes de réapprovisionnement",
                "Interface tactile optimisée"
            ],
            technologies: ["Node.js", "Express.Js", "MySQL", "React.js"],
            svg: <PharmacySvg />,
            githubUrl: "",
            demoUrl: "",
            date: "Août 2023"
        },
        {
            id: 7,
            title: "Gestion d'étudiants",
            description: "Système centralisé pour établissements scolaires avec :",
            features: [
                "Réduction de 50% du temps de saisie des notes",
                "Génération automatique de bulletins",
                "Espace parent/étudiant sécurisé",
                "Statistiques académiques"
            ],
            technologies: ["Java EE", "MySQL", "JasperReports", "PrimeFaces"],
            svg: <StudentSvg />,
            githubUrl: "",
            demoUrl: "",
            date: "Mai 2023"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-400 to-purple-500">
            <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                {/* En-tête avec animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Mes <span className="text-blue-600">Réalisations</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez mes projets phares et les technologies utilisées pour créer des solutions innovantes.
                    </p>
                </motion.div>

                {/* Grille de projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                {/* Call-to-action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                        Vous avez un projet similaire ?
                    </h3>
                    <AppLink
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        Discutons-en
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </AppLink>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;