"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const techStack = [
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
      color: "hover:text-blue-400",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
      color: "hover:text-yellow-400",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      color: "hover:text-cyan-400",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-pink-400" />,
      color: "hover:text-pink-400",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "abhishektiwari6827@gmail.com",
      href: "mailto:abhishektiwari6827@gmail.com",
    },
    {
      icon: <MapPin size={16} />,
      text: "Lucknow, Uttar Pradesh, India",
      href: null,
    },
    {
      icon: <Phone size={16} />,
      text: "+91 7081660941",
      href: "tel:+917081660941",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-3xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Abhishek Tiwari
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-Stack Developer passionate about creating innovative web
              solutions. Always learning, always building, always improving.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Abhishek6827"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub
                  size={20}
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhishek-tiwariiii"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin
                  size={20}
                  className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Get In Touch
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-blue-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.icon}
                  </motion.div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Built With
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`flex items-center space-x-2 text-gray-400 ${tech.color} transition-colors duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>by Abhishek Tiwari</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">
              © 2025 All rights reserved
            </span>
            <motion.button
              onClick={scrollToTop}
              className="group p-2 bg-gray-800 hover:bg-blue-500 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <ArrowUp
                  size={16}
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
