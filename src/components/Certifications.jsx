"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { Award, ExternalLink, CheckCircle, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2025",
      description:
        "Advanced React concepts including hooks, context, and performance optimization",
      status: "completed",
      skills: ["React", "JavaScript", "JSX", "Hooks"],
      certificateUrl: "./images/React.png",
    },
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2024",
      description:
        "Comprehensive full-stack development covering frontend and backend technologies",
      status: "completed",
      skills: ["React", "JavaScript", "Node.js", "Bootstrap"],
      certificateUrl: "./images/internship.png",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2023",
      description:
        "Advanced JavaScript programming and algorithmic problem solving",
      status: "completed",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
      certificateUrl: "./images/Quizario.png",
    },
  ];

  const achievements = [
    {
      title: "GitHub Contributions",
      description: "500+ contributions in the last year",
      icon: "🚀",
    },
    {
      title: "Projects Completed",
      description: "15+ web applications built and deployed",
      icon: "💻",
    },
    {
      title: "Technologies Mastered",
      description: "10+ programming languages and frameworks",
      icon: "⚡",
    },
    {
      title: "Problem Solving",
      description: "100+ coding challenges solved",
      icon: "🧩",
    },
  ];

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
          <motion.div
            className="inline-block mr-3 mb-1"
            animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Award size={42} className="text-blue-400" />
          </motion.div>
          Certifications
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional certifications and achievements that validate my skills
          and commitment to continuous learning.
        </p>
      </motion.div>

      {/* Certifications Section */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="text-blue-400 mr-2" size={20} />
                      </motion.div>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {cert.date}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-blue-400 font-semibold mb-3">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-500 hover:text-white transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + skillIndex * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  onClick={() => openCertificate(cert)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-3xl font-bold mb-8 flex items-center text-white"
        >
          <motion.div
            animate={isInView ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <CheckCircle className="mr-3 text-blue-400" size={32} />
          </motion.div>
          Key Achievements
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.15, type: "spring", stiffness: 100 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.1, y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div 
                className="text-5xl mb-4 relative z-10"
                animate={isInView ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              >
                {achievement.icon}
              </motion.div>
              <h4 className="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-blue-300 transition-colors">
                {achievement.title}
              </h4>
              <p className="text-gray-400 text-sm relative z-10 group-hover:text-gray-300 transition-colors">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={closeCertificate}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-blue-400 font-medium mb-2">
                  {selectedCertificate.issuer}
                </p>
                <p className="text-gray-300 mb-4">
                  {selectedCertificate.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <img
                  src={selectedCertificate.certificateUrl || "/placeholder.svg"}
                  alt={`${selectedCertificate.title} Certificate`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>

              <div className="mt-4 text-center"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
