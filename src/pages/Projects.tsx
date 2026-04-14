import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import CustomLink from "../components/CustomLink";

// SVG Components
const UrbanSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="city1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="city2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="20" y="80" width="38" height="100" fill="url(#city2)" rx="4" opacity="0.9"/>
    <rect x="68" y="50" width="38" height="130" fill="url(#city1)" rx="4" opacity="0.9"/>
    <rect x="116" y="28" width="38" height="152" fill="url(#city2)" rx="4" opacity="0.9"/>
    <rect x="154" y="65" width="26" height="115" fill="url(#city1)" rx="4" opacity="0.7"/>
    <circle cx="87" cy="35" r="9" fill="#10b981" opacity="0.9"/>
    <path d="M20 80L87 35L180 65" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none" strokeDasharray="5,3"/>
    <rect x="0" y="180" width="200" height="20" fill="rgba(0,0,0,0.2)" rx="2"/>
  </svg>
);

const AgriSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="agri1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#agri1)" opacity="0.15"/>
    <ellipse cx="100" cy="140" rx="60" ry="20" fill="#10b981" opacity="0.2"/>
    <path d="M100 160 Q80 120 60 80 Q100 60 140 80 Q120 120 100 160Z" fill="#10b981" opacity="0.7"/>
    <path d="M100 160 L100 80" stroke="#059669" strokeWidth="3"/>
    <circle cx="75" cy="75" r="12" fill="#f59e0b" opacity="0.8"/>
    <circle cx="125" cy="70" r="9" fill="#f59e0b" opacity="0.7"/>
    <circle cx="60" cy="110" r="8" fill="#f59e0b" opacity="0.6"/>
  </svg>
);

const MaterialSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="mat1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    <rect x="30" y="55" width="140" height="95" fill="url(#mat1)" rx="12" opacity="0.9"/>
    <rect x="48" y="72" width="104" height="60" fill="rgba(255,255,255,0.15)" rx="6"/>
    <line x1="48" y1="92" x2="152" y2="92" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5"/>
    <line x1="48" y1="110" x2="152" y2="110" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5"/>
    <circle cx="100" cy="128" r="14" fill="#10b981" opacity="0.9"/>
    <path d="M94 128L98 132L106 124" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const CallCenterSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="call1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="70" fill="url(#call1)" opacity="0.15"/>
    <path d="M65 65 L135 65 L150 100 L135 135 L65 135 L50 100Z" fill="url(#call1)" opacity="0.8"/>
    <circle cx="100" cy="100" r="28" fill="rgba(255,255,255,0.15)"/>
    <path d="M93 100 Q100 85 107 100 Q100 115 93 100Z" fill="white" opacity="0.8"/>
    <circle cx="85" cy="88" r="4" fill="white" opacity="0.6"/>
    <circle cx="115" cy="88" r="4" fill="white" opacity="0.6"/>
  </svg>
);

const CarSharingSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="car1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <rect x="35" y="105" width="130" height="38" fill="url(#car1)" rx="10" opacity="0.9"/>
    <path d="M55 105 L75 68 H125 L145 105" fill="#2563eb" opacity="0.8"/>
    <circle cx="75" cy="155" r="18" fill="#1e293b" stroke="#6366f1" strokeWidth="3"/>
    <circle cx="75" cy="155" r="8" fill="#6366f1"/>
    <circle cx="125" cy="155" r="18" fill="#1e293b" stroke="#6366f1" strokeWidth="3"/>
    <circle cx="125" cy="155" r="8" fill="#6366f1"/>
    <rect x="88" y="78" width="24" height="27" fill="rgba(255,255,255,0.2)" rx="3"/>
  </svg>
);

const HotelSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="hotel1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <rect x="30" y="85" width="140" height="80" fill="url(#hotel1)" rx="6" opacity="0.85"/>
    <rect x="55" y="65" width="32" height="20" fill="#8b5cf6" rx="3"/>
    <rect x="100" y="58" width="32" height="27" fill="#6366f1" rx="3"/>
    <rect x="48" y="105" width="22" height="28" fill="rgba(255,255,255,0.25)" rx="3"/>
    <rect x="90" y="105" width="22" height="28" fill="rgba(255,255,255,0.25)" rx="3"/>
    <rect x="132" y="105" width="22" height="28" fill="rgba(255,255,255,0.25)" rx="3"/>
    <rect x="85" y="140" width="30" height="25" fill="rgba(0,0,0,0.2)" rx="3"/>
  </svg>
);

const PharmacySvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="pharma1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="50" y="50" width="100" height="100" fill="url(#pharma1)" rx="16" opacity="0.9"/>
    <rect x="88" y="68" width="24" height="64" fill="white" rx="4" opacity="0.9"/>
    <rect x="68" y="88" width="64" height="24" fill="white" rx="4" opacity="0.9"/>
  </svg>
);

const StudentSvg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="stud1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="68" r="32" fill="url(#stud1)" opacity="0.9"/>
    <path d="M100 100 C68 100 45 122 45 155 H155 C155 122 132 100 100 100Z" fill="url(#stud1)" opacity="0.7"/>
    <rect x="82" y="152" width="36" height="28" fill="#f59e0b" rx="4" opacity="0.9"/>
    <path d="M50 180 L150 180" stroke="rgba(255,255,255,0.3)" strokeWidth="4"/>
  </svg>
);

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");

  const projects = [
    {
      id: 1,
      title: "Plateforme de digitalisation urbaine",
      description: "Plateforme SIG innovante pour la ville d'Antsirabe (Madagascar)",
      features: [
        "Module d'analyse spatiale automatisée (QGIS/PostGIS)",
        "Réduction de 25% des erreurs de traitement des permis",
        "Détection des bâtiments non déclarés via croisement de données",
        "Modélisation des zones interdites en JSON/GeoJSON",
      ],
      technologies: ["Node.js", "React", "PostGIS", "QGIS", "GeoJSON"],
      svg: <UrbanSvg />,
      githubUrl: "https://github.com/Nicolas5071-14/urbanisme",
      demoUrl: "",
      date: "Mars 2025",
      client: "PNUD & AGVM",
      category: "SIG",
    },
    {
      id: 2,
      title: "Plateforme AgriConnect",
      description: "Plateforme web de vente de produits agricoles et formation sur l'agriculture",
      features: [
        "Vente en ligne de produits agricoles",
        "Module de formation e-learning",
        "Support multilingue (i18n)",
        "CI/CD avec GitHub Actions · Tests Jest",
      ],
      technologies: ["Node.js", "React.js", "PostgreSQL/PostGIS", "Sequelize", "Python", "i18n"],
      svg: <AgriSvg />,
      githubUrl: "",
      demoUrl: "",
      date: "Sept–Déc 2025",
      client: "PADNOVE",
      category: "Web",
    },
    {
      id: 3,
      title: "Gestion des demandes matériel IT",
      description: "Application web pour la gestion des demandes de matériel informatique",
      features: [
        "Interface optimisée en responsive design",
        "Réduction des délais de traitement de 30%",
        "Workflow de validation automatisé",
        "Tableau de bord de suivi en temps réel",
      ],
      technologies: ["PHP", "CodeIgniter", "PostgreSQL", "Bootstrap"],
      svg: <MaterialSvg />,
      date: "Nov 2023",
      client: "NOMERIKIA.MG",
      category: "Web",
    },
    {
      id: 4,
      title: "Gestion des prospections téléphoniques",
      description: "Application web pour optimiser les campagnes de prospection",
      features: [
        "Taux de succès augmenté de 80%",
        "Interface intuitive pour les opérateurs",
        "Gestion centralisée des leads",
        "Statistiques en temps réel",
      ],
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
      svg: <CallCenterSvg />,
      date: "Sept 2022",
      client: "NOMERIKIA.MG",
      category: "Web",
    },
    {
      id: 5,
      title: "Application de covoiturage",
      description: "Solution mobile pour le partage de trajets",
      features: [
        "Réduction de 90% du temps d'attente",
        "Géolocalisation en temps réel",
        "Paiement intégré sécurisé",
        "Notation des conducteurs",
      ],
      technologies: ["Kotlin", "Java", "PostgreSQL", "Firebase"],
      svg: <CarSharingSvg />,
      date: "Nov 2024",
      client: "",
      category: "Mobile",
    },
    {
      id: 6,
      title: "Réservation de chambres d'hôtel",
      description: "Système de gestion des réservations hôtelières",
      features: [
        "Disponibilité en temps réel",
        "Interface admin complète",
        "Synchronisation multi-plateforme",
        "Système de promotion intégré",
      ],
      technologies: ["C#", ".NET", "SQL Server"],
      svg: <HotelSvg />,
      date: "Jan 2022",
      client: "",
      category: "Web",
    },
    {
      id: 7,
      title: "Gestion de pharmacie",
      description: "Solution complète pour la gestion de pharmacies",
      features: [
        "Gestion des stocks et péremption",
        "Historique des prescriptions",
        "Alertes de réapprovisionnement",
        "Interface tactile optimisée",
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "React.js"],
      svg: <PharmacySvg />,
      date: "Août 2023",
      client: "",
      category: "Web",
    },
    {
      id: 8,
      title: "Gestion d'étudiants",
      description: "Système centralisé pour établissements scolaires",
      features: [
        "Réduction de 50% du temps de saisie des notes",
        "Génération automatique de bulletins (JasperReports)",
        "Espace parent/étudiant sécurisé",
        "Statistiques académiques",
      ],
      technologies: ["Java EE", "MySQL", "JasperReports", "PrimeFaces"],
      svg: <StudentSvg />,
      date: "Mai 2023",
      client: "",
      category: "Desktop",
    },
  ];

  const filters = ["Tous", "Web", "Mobile", "SIG", "Desktop"];
  const filtered = activeFilter === "Tous" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0d0b1e]" style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .section-label { font-family: 'Syne',sans-serif; letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.75rem; }
        .filter-btn { transition: all 0.2s; font-family: 'Syne',sans-serif; }
      `}</style>

      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 80% 10%, rgba(99,102,241,0.12) 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(139,92,246,0.1) 0%, transparent 50%)"
      }} />

      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="section-label text-indigo-400">Portfolio</span>
            <div className="w-8 h-px bg-indigo-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Syne',sans-serif", letterSpacing: "-0.02em" }}>
            Mes <span className="text-indigo-400">Réalisations</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Solutions web, mobiles et géospatiales conçues de A à Z pour des clients publics et privés.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-center"
        >
          {[
            { value: `${projects.length}`, label: "Projets" },
            { value: "5+", label: "Clients" },
            { value: "4+", label: "Années" },
            { value: "10+", label: "Technologies" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-indigo-400" style={{ fontFamily: "'Syne',sans-serif" }}>{s.value}</div>
              <div className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-btn px-5 py-2 rounded-xl text-sm font-semibold ${
                activeFilter === f
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "text-white/50 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/40 text-sm mb-4" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Vous avez un projet similaire ?
          </p>
          <CustomLink
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base shadow-xl transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              fontFamily: "'Syne',sans-serif",
              boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
            }}
          >
            Discutons-en
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </CustomLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;