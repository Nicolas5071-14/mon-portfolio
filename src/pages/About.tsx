import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCode, FiDatabase, FiSmartphone, FiMap, FiCpu, FiTool,
  FiUsers, FiAward, FiActivity, FiTrendingUp, FiBriefcase, FiCalendar, FiGlobe
} from "react-icons/fi";
import nico from '../nicolas-photo.png';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const experiences = [
    {
      period: "Sept 2025 – Mars 2026",
      company: "REFONTE INFINI – INFINIMENT GRAND",
      role: "Stagiaire Développeur Full-Stack",
      type: "Télétravail",
      color: "from-indigo-500 to-violet-600",
      techs: ["PHP (Symfony)", "ReactJS", "Vue.js", "Go", "Python", "Docker", "Ansible", "Cloudflare"],
      highlights: [
        "Déploiement de Postal (SMTP open source) sur VPS OVH",
        "Connexion Mautic avec Postal pour l'email automation",
        "Intégration de plugins et implémentation IA GPT sur Mautic",
        "CI/CD · Agile (SCRUM)",
      ],
    },
    {
      period: "Sept – Déc 2025",
      company: "PADNOVE",
      role: "Développeur Full-Stack",
      type: "Télétravail",
      color: "from-blue-500 to-cyan-500",
      techs: ["Node.js", "React.js", "PostgreSQL/PostGIS", "Sequelize ORM", "Python", "i18n", "REST API"],
      highlights: [
        "Plateforme web de vente de produits agricoles",
        "Formation en ligne sur l'agriculture",
        "Tests unitaires Jest · CI/CD avec GitHub Actions",
        "Agile (SCRUM)",
      ],
    },
    {
      period: "Mars 2025",
      company: "PNUD & AGVM",
      role: "Développeur Full-Stack",
      type: "Mission",
      color: "from-emerald-500 to-teal-600",
      techs: ["Node.js", "React.js", "PostgreSQL/PostGIS", "QGIS", "GeoJSON", "REST API"],
      highlights: [
        "Plateforme de digitalisation urbaine pour Antsirabe",
        "Module d'analyse spatiale QGIS/PostGIS : -25% d'erreurs sur les permis",
        "Algorithme de détection de bâtiments non déclarés",
        "Modélisation des zones interdites en JSON/GeoJSON",
      ],
    },
    {
      period: "Juil – Nov 2023",
      company: "NOMERIKIA.MG",
      role: "Développeur Web Full-Stack PHP/JS",
      type: "Stage",
      color: "from-amber-500 to-orange-500",
      techs: ["PHP (CodeIgniter)", "JavaScript (jQuery)", "PostgreSQL", "Bootstrap"],
      highlights: [
        "Application de gestion des demandes matériel informatique",
        "Réduction de 30% des délais de traitement",
        "Interface responsive design · PHPUnit · CI/CD",
      ],
    },
    {
      period: "Juin – Sept 2022",
      company: "NOMERIKIA.MG",
      role: "Stagiaire Développeur Web",
      type: "Stage",
      color: "from-rose-500 to-pink-500",
      techs: ["PHP (CodeIgniter)", "JavaScript (jQuery)", "MySQL", "Bootstrap"],
      highlights: [
        "Application de gestion des prospections téléphoniques",
        "Optimisation du taux de succès de prospection de 80%",
        "Méthodologie Cycle en V · PHPUnit · CI/CD",
      ],
    },
  ];

  const skills = [
    {
      icon: <FiCode className="text-2xl" />,
      category: "Langages",
      color: "from-indigo-500 to-violet-500",
      items: ["PHP (Laravel, Symfony, CodeIgniter)", "JavaScript (React, Node.js, Vue.js)", "Java / Kotlin", "Python", "Go"],
    },
    {
      icon: <FiDatabase className="text-2xl" />,
      category: "Bases de données",
      color: "from-blue-500 to-cyan-500",
      items: ["PostgreSQL / PostGIS", "MySQL / SQLite", "MongoDB", "Firebase"],
    },
    {
      icon: <FiSmartphone className="text-2xl" />,
      category: "Mobile",
      color: "from-orange-400 to-rose-500",
      items: ["React Native", "Flutter", "Android (Kotlin)", "EAS Build"],
    },
    {
      icon: <FiMap className="text-2xl" />,
      category: "SIG & Géomatique",
      color: "from-emerald-500 to-teal-500",
      items: ["QGIS", "PostGIS", "Webmapping", "GeoJSON", "OpenStreetMap"],
    },
    {
      icon: <FiCpu className="text-2xl" />,
      category: "Méthodes Dev",
      color: "from-violet-500 to-purple-600",
      items: ["REST API", "CI/CD (GitHub Actions)", "Versioning (Git)", "Agile / SCRUM", "Three.js / Vite"],
    },
    {
      icon: <FiTool className="text-2xl" />,
      category: "Outils & Infra",
      color: "from-slate-500 to-gray-700",
      items: ["Docker", "Ansible", "Cloudflare / VPS OVH", "Power BI", "AutoCAD / Blender"],
    },
  ];

  const softSkills = [
    { icon: <FiUsers />, title: "Travail d'équipe", desc: "Collaboration pluridisciplinaire (devs, géomaticiens, chefs de projet)" },
    { icon: <FiActivity />, title: "Autonomie", desc: "Pilotage complet de projets de bout en bout, en remote" },
    { icon: <FiAward />, title: "Esprit d'analyse", desc: "Résolution de problèmes complexes, pensée critique et data-driven" },
    { icon: <FiTrendingUp />, title: "Adaptabilité", desc: "Apprentissage rapide de nouvelles stacks et environnements" },
    { icon: <FiGlobe />, title: "Communication", desc: "Communication technique claire, fr / en / mg · Présentations journalières" },
    { icon: <FiBriefcase />, title: "Esprit d'initiative", desc: "Proposition de solutions innovantes et sens de l'organisation" },
  ];

  const formation = [
    {
      date: "2024–2025 (en cours)", title: "Master 2 Professionnel en Informatique",
      desc: "Spécialité Systèmes d'Information Géomatique et Décision · EMIT Fianarantsoa",
      icon: <FiTrendingUp />, color: "from-indigo-500 to-violet-600",
    },
    {
      date: "2022–2023", title: "Licence Professionnelle",
      desc: "Développement d'Application Internet Intranet · EMIT Fianarantsoa",
      icon: <FiCode />, color: "from-blue-500 to-cyan-500",
    },
    {
      date: "2018–2019", title: "Baccalauréat Série C",
      desc: "Saint Joseph Ambozontany, Fianarantsoa",
      icon: <FiAward />, color: "from-emerald-500 to-teal-600",
    },
  ];

  const langues = [
    { lang: "Français", level: "Courant", pct: 95 },
    { lang: "Anglais", level: "Intermédiaire", pct: 65 },
    { lang: "Malagasy", level: "Langue maternelle", pct: 100 },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0d0b1e]" style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .glass { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px); }
        .glass:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.15); }
        .section-label { font-family: 'Syne', sans-serif; letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.75rem; }
        .exp-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); transition: all 0.3s ease; }
        .exp-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); transform: translateX(6px); }
        .progress-track { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.2) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(139,92,246,0.15) 0%, transparent 50%), #0d0b1e" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex justify-center md:justify-start"
          >
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, transparent, #6366f1)",
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10">
                <img src={nico} alt="Nicolas Ramahalefitra" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
              </div>
              {/* Floating badges */}
              <motion.div animate={{ y: [0,-6,0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -right-6 top-8 px-3 py-2 rounded-xl text-xs font-bold text-white shadow-xl"
                style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", fontFamily: "'Syne',sans-serif" }}>
                Master 2 en cours
              </motion.div>
              <motion.div animate={{ y: [0,6,0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -left-6 bottom-12 px-3 py-2 rounded-xl text-xs font-bold text-white shadow-xl"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)", fontFamily: "'Syne',sans-serif" }}>
                5 missions réalisées
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div initial="hidden" animate={controls} variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-indigo-500" />
              <span className="section-label text-indigo-400">À propos</span>
            </motion.div>
            <motion.h1 variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: "'Syne',sans-serif", letterSpacing: "-0.02em" }}>
              RAMAHALEFITRA<br />
              <span className="text-indigo-400">Abelson Nicolas</span>
            </motion.h1>
            <motion.p variants={itemVariants}
              className="text-blue-200 text-xl font-semibold mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
              Développeur Full-Stack & Expert SIG
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4 text-blue-100/70 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p>
                Diplômé d'un Master en Informatique, j'interviens de la conception au déploiement :
                développement web avec PHP, JavaScript, SQL, HTML/CSS, et mise en production via des
                pratiques DevOps (CI/CD, Docker, cloud).
              </p>
              <p>
                Passionné par la transformation digitale et la gestion territoriale intelligente,
                j'ai contribué à des projets pour le <strong className="text-white">PNUD</strong>, des startups et des PME malgaches.
              </p>
            </motion.div>

            {/* Langues */}
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-white font-bold mb-4 text-sm" style={{ fontFamily: "'Syne',sans-serif", letterSpacing: "0.1em" }}>LANGUES</h4>
              <div className="space-y-3">
                {langues.map((l, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white font-medium" style={{ fontFamily: "'DM Sans',sans-serif" }}>{l.lang}</span>
                      <span className="text-white/40" style={{ fontFamily: "'DM Sans',sans-serif" }}>{l.level}</span>
                    </div>
                    <div className="progress-track">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        transition={{ duration: 1.2, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-indigo-500" />
              <span className="section-label text-indigo-400">Carrière</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              Expériences <span className="text-indigo-400">Professionnelles</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent opacity-30" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="exp-card rounded-2xl p-6 ml-14 relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-10 top-7 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiCalendar className="w-3 h-3 text-white/40" />
                        <span className="text-xs text-white/40" style={{ fontFamily: "'DM Sans',sans-serif" }}>{exp.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${exp.color}`}
                          style={{ fontFamily: "'Syne',sans-serif" }}>{exp.type}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>{exp.role}</h3>
                      <p className="text-indigo-300 font-semibold text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>{exp.company}</p>
                    </div>
                  </div>

                  <ul className="space-y-1 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-white/60 flex items-start gap-2" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${exp.color}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-lg text-white/60"
                        style={{ background: "rgba(255,255,255,0.06)", fontFamily: "'DM Sans',sans-serif" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="px-6 py-20" style={{ background: "rgba(99,102,241,0.04)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-indigo-500" />
              <span className="section-label text-indigo-400">Formation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              Parcours <span className="text-indigo-400">Académique</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {formation.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4`}>
                  {f.icon}
                </div>
                <span className="text-xs text-indigo-400 font-semibold" style={{ fontFamily: "'DM Sans',sans-serif" }}>{f.date}</span>
                <h3 className="text-white font-bold mt-2 mb-2 leading-snug" style={{ fontFamily: "'Syne',sans-serif" }}>{f.title}</h3>
                <p className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences techniques */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-indigo-500" />
              <span className="section-label text-indigo-400">Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              Compétences <span className="text-indigo-400">Techniques</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="text-white/50 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${skill.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="px-6 py-20" style={{ background: "rgba(99,102,241,0.04)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-indigo-500" />
              <span className="section-label text-indigo-400">Savoir-être</span>
              <div className="w-8 h-px bg-indigo-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              Compétences <span className="text-indigo-400">Transversales</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 flex items-start gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>{s.title}</h3>
                  <p className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;