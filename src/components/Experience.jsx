"use client";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Software Developer",
      company: "Vasnaani Education",
      period: "07/2024 - 08/2025",
      responsibilities: [
        "Developed and maintained the official Vasnaani Education website with a focus on performance and scalability.",
        "Collaborated with cross-functional teams to design and implement user-centric, responsive web interfaces.",
        "Integrated Django REST APIs with React frontend modules, ensuring seamless data flow and consistency.",
        "Optimized website performance, improved database structure, and resolved critical UI/UX bugs.",
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Hoping Minds",
      period: "01/2024 - 06/2024",
      responsibilities: [
        "Developed and maintained web applications using React, Redux, and Django",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Participated in code reviews and followed best practices for clean code",
      ],
      technologies: ["React", "Redux", "Django", "PostgreSQL", "JavaScript"],
    },
    {
      title: "Web Developer",
      company: "Quizario",
      period: "11/2023 - 12/2023",
      responsibilities: [
        "Built interactive quiz applications with modern web technologies",
        "Coordinated with team members to ensure project deliverables",
        "Implemented user authentication and data management features",
        "Optimized application performance and user experience",
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "RESTful APIs"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const getCardVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -120 : 120,
      rotateY: index % 2 === 0 ? -25 : 25,
      scale: 0.7
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.25,
      },
    },
  });

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-20 relative">
      {/* Animated Timeline Line */}
      <motion.div
        className="absolute left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <motion.h2
        className="text-4xl font-bold mb-16 text-center flex justify-center items-center"
        initial={{ opacity: 0, y: -50, rotateX: -20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: -50, rotateX: -20, scale: 0.9 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
      >
        <motion.div
          animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Briefcase className="mr-3 text-blue-400" size={36} />
        </motion.div>
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Professional Experience
        </span>
      </motion.h2>

      <motion.div
        className="space-y-12 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            variants={getCardVariants(index)}
            className="relative"
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 z-10 hidden md:block"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 + 0.5 }}
            />

            <motion.div
              className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold mb-2 text-blue-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      className="text-xl text-gray-300 mb-2 font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.7 }}
                    >
                      {exp.company}
                    </motion.p>
                  </div>
                  <motion.span
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>

                <motion.ul
                  className="space-y-3 mb-6"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: index * 0.3 + 0.9,
                      },
                    },
                  }}
                >
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: index * 0.3 + 1.2,
                      },
                    },
                  }}
                >
                  {exp.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default"
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
