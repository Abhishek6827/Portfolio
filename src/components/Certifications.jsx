"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          <Award className="inline-block mr-3 mb-1" />
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Award className="text-blue-400 mr-2" size={20} />
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-400 font-medium mb-3">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openCertificate(cert)}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
                <ExternalLink size={16} />
                <span>View Certificate</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-semibold mb-8 flex items-center text-white"
        >
          <CheckCircle className="mr-3 text-blue-400" />
          Key Achievements
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
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
