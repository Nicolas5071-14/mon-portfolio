import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode, FiFacebook, FiMapPin, FiStar } from "react-icons/fi";
import pdp from '../nicolas-photo.png';
import CustomLink from "../components/CustomLink";

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Développeur Full-Stack & Expert SIG";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const technologies = [
    { name: 'React / Vue.js', category: 'Frontend', level: 90 },
    { name: 'Node.js', category: 'Backend', level: 88 },
    { name: 'PHP / Symfony', category: 'Backend', level: 85 },
    { name: 'PostGIS / QGIS', category: 'SIG', level: 82 },
    { name: 'React Native / Flutter', category: 'Mobile', level: 78 },
    { name: 'Java / Kotlin', category: 'Backend', level: 75 },
    { name: 'Python', category: 'Data', level: 80 },
    { name: 'Docker / CI/CD', category: 'DevOps', level: 82 },
    { name: 'PostgreSQL / PostGIS', category: 'Database', level: 88 },
    { name: 'MongoDB / Firebase', category: 'Database', level: 75 },
  ];

  const stats = [
    { value: "4+", label: "Ans d'expérience" },
    { value: "7+", label: "Projets réalisés" },
    { value: "3", label: "Langues maîtrisées" },
    { value: "Master", label: "Niveau académique" },
  ];

  const categories = [...new Set(technologies.map(t => t.category))];

  const filteredTech = activeCategory
    ? technologies.filter(t => t.category === activeCategory)
    : technologies;

  const categoryColors: Record<string, string> = {
    Frontend: "from-cyan-500 to-blue-500",
    Backend: "from-violet-500 to-purple-500",
    SIG: "from-emerald-500 to-teal-500",
    Mobile: "from-orange-400 to-rose-500",
    Data: "from-amber-400 to-yellow-500",
    DevOps: "from-slate-500 to-gray-600",
    Database: "from-blue-500 to-indigo-600",
  };

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }
        .mesh-bg {
          background: 
            radial-gradient(ellipse at 10% 20%, rgba(99,102,241,0.35) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(139,92,246,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 70%),
            linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
        }
        .tech-card {
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-4px);
        }
        .stat-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
        }
        .progress-bar {
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.15);
          overflow: hidden;
        }
        .cursor-blink::after {
          content: '|';
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .social-pill {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.2s;
        }
        .social-pill:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.3);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center mesh-bg overflow-hidden">
        <div className="grain" />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #818cf8, transparent)" }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-blue-200 mb-6"
              style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.4)" }}
            >
              <FiMapPin className="w-3 h-3" />
              Antananarivo, Madagascar · Disponible en remote
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
            >
              RAMAHALEFITRA
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)", color: "transparent" }}>
                Abelson
              </span>{" "}
              <span className="text-indigo-400">Nicolas</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-blue-200 mb-6 font-medium cursor-blink"
              style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "2rem" }}
            >
              {typedText}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base text-blue-100/70 mb-8 leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Master 2 en Informatique · De la conception au déploiement : web, mobile, 
              systèmes géographiques et DevOps. Je construis des solutions qui transforment 
              les territoires et les organisations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/mon-portfolio/Ramahalefitra_a_Nicolas_cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-900 shadow-lg"
                style={{ background: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", fontFamily: "'Syne', sans-serif" }}
              >
                <FiDownload className="w-4 h-4" />
                Télécharger CV
              </motion.a>
              <CustomLink
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", fontFamily: "'Syne', sans-serif" }}
              >
                <FiMail className="w-4 h-4" />
                Me contacter
              </CustomLink>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-3"
            >
              {[
                { href: "https://github.com/Nicolas5071-14", icon: <FiGithub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/nicolas-abelson-ramahalefitra-7958652bb", icon: <FiLinkedin />, label: "LinkedIn" },
                { href: "https://www.facebook.com/Nics.zg", icon: <FiFacebook />, label: "Facebook" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s.icon}
                  <span className="hidden sm:inline">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo */}
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
                  padding: "3px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6)" }} />

              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/20">
                <img src={pdp} alt="Abelson Nicolas" className="w-full h-full object-cover" />
              </div>

              {/* Available badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-xl whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #10b981, #059669)", fontFamily: "'Syne', sans-serif" }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Disponible pour missions
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="stat-card rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-300 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="bg-[#0d0b1e] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-indigo-500" />
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest" style={{ fontFamily: "'Syne', sans-serif" }}>
                Stack technique
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Technologies <br />
                <span className="text-indigo-400">Maîtrisées</span>
              </h2>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${!activeCategory ? 'bg-indigo-600 text-white' : 'text-white/50 hover:text-white'}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Tout
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white' : 'text-white/50 hover:text-white'}`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="tech-card rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {tech.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full text-white font-medium bg-gradient-to-r ${categoryColors[tech.category] || "from-gray-500 to-gray-600"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tech.category}
                  </span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColors[tech.category] || "from-gray-500 to-gray-600"}`}
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tech.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <CustomLink
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base shadow-lg transition-all hover:shadow-indigo-500/30 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <FiCode className="w-5 h-5" />
              Voir mes projets
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </CustomLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;