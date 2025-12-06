"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Database, Globe } from "lucide-react";
import { useRef } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiDjango,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiPostman,
  SiTelegram,
  SiStripe,
  SiZoho,
} from "react-icons/si";

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Floating background icons
  const floatingIcons = [
    { Icon: FaReact, color: "text-cyan-400/20", size: 60 },
    { Icon: SiNextdotjs, color: "text-white/20", size: 50 },
    { Icon: SiTypescript, color: "text-blue-500/20", size: 55 },
    { Icon: FaNodeJs, color: "text-green-500/20", size: 65 },
    { Icon: SiFirebase, color: "text-yellow-500/20", size: 50 },
    { Icon: SiTailwindcss, color: "text-cyan-400/20", size: 58 },
  ];
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
        { name: "React", icon: <FaReact />, level: 92 },
        { name: "TypeScript", icon: <SiTypescript />, level: 88 },
        { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
        { name: "Redux", icon: <SiRedux />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 92 },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 82 },
        { name: "Firebase", icon: <SiFirebase />, level: 88 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "Python", icon: <FaPython />, level: 75 },
        { name: "Django", icon: <SiDjango />, level: 70 },
        { name: "MySQL", icon: <SiMysql />, level: 75 },
      ],
    },
    {
      title: "Payment & Integration",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Stripe", icon: <SiStripe />, level: 85 },
        { name: "Zoho Payments", icon: <SiZoho />, level: 80 },
        { name: "Postman API", icon: <SiPostman />, level: 90 },
        { name: "Webhook Config", icon: <Code2 />, level: 85 },
        { name: "Telegram API", icon: <SiTelegram />, level: 82 },
        { name: "Resend API", icon: <Database />, level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt />, level: 90 },
        { name: "Firebase CLI", icon: <SiFirebase />, level: 85 },
        { name: "Firebase Hosting", icon: <SiFirebase />, level: 88 },
        { name: "Ngrok", icon: <Globe />, level: 80 },
        { name: "VS Code", icon: <Code2 />, level: 92 },
        { name: "Firebase Emulators", icon: <SiFirebase />, level: 82 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const getCardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index === 0 ? -100 : index === 1 ? 0 : index === 2 ? 100 : -100,
      y: index === 1 ? 100 : 50,
      rotateY: index === 0 ? -20 : index === 2 ? 20 : 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.2,
      },
    },
  });

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Floating Background Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, color, size }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color}`}
            style={{
              top: `${10 + index * 15}%`,
              left: `${5 + (index % 2) * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -50, scale: 0.9 }
          }
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From building production-ready SaaS applications to integrating
            payment gateways and real-time notifications - here's my
            comprehensive tech stack.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={getCardVariants(categoryIndex)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.2 + 0.3,
                  }}
                >
                  <motion.div
                    className="text-blue-400 mr-3"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </motion.div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.4,
                      }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <motion.div
                            className="text-blue-400 text-lg"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          className="text-blue-400 text-sm font-bold"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.6,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 h-2.5 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{
                              x: ["-100%", "200%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Always Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.9 }
          }
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 80,
          }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-10 rounded-2xl shadow-2xl border border-purple-500/40 relative overflow-hidden group">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100}%`,
                  }}
                  animate={{
                    y: [-20, -120],
                    x: [0, (Math.random() - 0.5) * 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-4xl font-bold mb-6 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{ backgroundSize: "200% auto" }}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
                >
                  Always Learning, Always Growing
                </motion.span>
                <motion.span
                  className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.98, 1.05, 0.98],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.h3>
              <motion.p
                className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Currently specializing in building{" "}
                <span className="text-blue-400 font-semibold">
                  scalable SaaS solutions
                </span>{" "}
                with Next.js, implementing{" "}
                <span className="text-purple-400 font-semibold">
                  secure payment systems
                </span>
                , API integrations, and{" "}
                <span className="text-cyan-400 font-semibold">
                  automated workflows
                </span>
                . I focus on production-ready code with proper testing and
                monitoring.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
