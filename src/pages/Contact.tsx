import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFacebook, FiCheck } from "react-icons/fi";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const subj = formData.subject
        ? `[${formData.subject}] Message de ${formData.name} (${formData.email})`
        : `Message de ${formData.name} (${formData.email})`;
      const mailtoLink = `mailto:ramahalefitra.abelson.nicolas@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const inputClass = (field: string) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-all duration-200 ${
      focused === field
        ? "border-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]"
        : "border-white/10 hover:border-white/20"
    }`;

  const socials = [
    { href: "https://github.com/Nicolas5071-14", icon: <FiGithub />, label: "GitHub", handle: "@Nicolas5071-14" },
    { href: "https://www.linkedin.com/in/nicolas-abelson-ramahalefitra-7958652bb", icon: <FiLinkedin />, label: "LinkedIn", handle: "Nicolas Abelson" },
    { href: "https://www.facebook.com/Nics.zg", icon: <FiFacebook />, label: "Facebook", handle: "Nics.zg" },
  ];

  return (
    <section className="min-h-screen bg-[#0d0b1e] py-24 px-4 sm:px-6 lg:px-8 flex items-center"
      style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .glass { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); }
        .info-row { display: flex; align-items: flex-start; gap: 1rem; }
        .info-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .section-label { font-family: 'Syne',sans-serif; letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.75rem; }
      `}</style>

      <div className="w-full max-w-6xl mx-auto" style={{
        background: "radial-gradient(ellipse at 70% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(139,92,246,0.1) 0%, transparent 50%)"
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="section-label text-indigo-400">Contact</span>
            <div className="w-8 h-px bg-indigo-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Syne',sans-serif", letterSpacing: "-0.02em" }}>
            Travaillons <span className="text-indigo-400">Ensemble</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Vous avez un projet ambitieux ? Discutons-en et construisons quelque chose de grand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass rounded-2xl p-8"
          >
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <FiCheck className="text-white w-4 h-4" />
                </div>
                <p className="text-emerald-300 text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                  Message envoyé ! Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Syne',sans-serif" }}>
                    Nom complet
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text" name="name" required
                      placeholder="Votre nom"
                      className={inputClass("name") + " pl-10"}
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Syne',sans-serif" }}>
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email" name="email" required
                      placeholder="votre@email.com"
                      className={inputClass("email") + " pl-10"}
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Syne',sans-serif" }}>
                  Sujet
                </label>
                <select
                  name="subject"
                  className={inputClass("subject")}
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" style={{ background: "#1a1730" }}>Sélectionner un sujet</option>
                  <option value="Projet Web" style={{ background: "#1a1730" }}>Projet Web</option>
                  <option value="Projet Mobile" style={{ background: "#1a1730" }}>Projet Mobile</option>
                  <option value="Projet SIG/Géomatique" style={{ background: "#1a1730" }}>Projet SIG / Géomatique</option>
                  <option value="Mission Freelance" style={{ background: "#1a1730" }}>Mission Freelance</option>
                  <option value="Opportunité d'emploi" style={{ background: "#1a1730" }}>Opportunité d'emploi</option>
                  <option value="Autre" style={{ background: "#1a1730" }}>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Syne',sans-serif" }}>
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-white/30" />
                  <textarea
                    name="message" required rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className={inputClass("message") + " pl-10 resize-none"}
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-3 py-4 rounded-xl font-bold text-white text-sm transition-all"
                style={{
                  background: isSubmitting ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  fontFamily: "'Syne',sans-serif",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info panel — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Coordonnées */}
            <div className="glass rounded-2xl p-6 flex-1">
              <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>Coordonnées</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: <FiMail className="w-5 h-5" />,
                    label: "Email",
                    value: "ramahalefitra.abelson.nicolas@gmail.com",
                    href: "mailto:ramahalefitra.abelson.nicolas@gmail.com",
                    color: "from-indigo-500 to-violet-500",
                  },
                  {
                    icon: <FiPhone className="w-5 h-5" />,
                    label: "Téléphone",
                    value: "+261 34 89 600 49 · +261 33 91 811 19",
                    href: "tel:+261348960049",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <FiMapPin className="w-5 h-5" />,
                    label: "Localisation",
                    value: "Antananarivo 101, Madagascar",
                    color: "from-emerald-500 to-teal-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="info-row">
                    <div className={`info-icon bg-gradient-to-br ${item.color}`}>
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'DM Sans',sans-serif" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-sm hover:text-indigo-300 transition-colors break-all" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="glass rounded-2xl p-6" style={{ background: "rgba(16,185,129,0.06)", borderColor: "rgba(16,185,129,0.15)" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-emerald-300 font-bold text-sm" style={{ fontFamily: "'Syne',sans-serif" }}>Disponible</h4>
              </div>
              <p className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                Ouvert aux missions freelance, stages et opportunités d'emploi en remote ou sur site.
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-black text-white mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>Réseaux</h3>
              <div className="space-y-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ x: 4 }}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Syne',sans-serif" }}>{s.label}</p>
                      <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans',sans-serif" }}>{s.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;