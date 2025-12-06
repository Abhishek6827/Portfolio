"use client";
import { motion, useInView } from "framer-motion";
import {
  User,
  Code,
  Coffee,
  Lightbulb,
  Cpu,
  Database,
  Terminal,
} from "lucide-react";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Passionate about creating innovative solutions",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-12 relative overflow-hidden"
    >
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[Code, Coffee, Lightbulb, Cpu, Database, Terminal].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400"
            style={{
              top: `${20 + i * 12}%`,
              right: `${5 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [0, -180, -360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            <Icon size={40 + i * 4} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center flex justify-center items-center"
          initial={{ opacity: 0, y: -60, rotateX: -25, scale: 0.85 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
              : { opacity: 0, y: -60, rotateX: -25, scale: 0.85 }
          }
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
        >
          <motion.div
            animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <User className="mr-3 text-blue-400" size={42} />
          </motion.div>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, rotateY: 0, scale: 1 }
                : { opacity: 0, x: -100, rotateY: -20, scale: 0.8 }
            }
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <motion.p
                className="text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                👋 Hi there! I'm{" "}
                <span className="text-blue-400 font-semibold">
                  Abhishek Tiwari
                </span>
                , a passionate full-stack developer from Lucknow, India. I
                specialize in building scalable SaaS solutions and
                production-ready applications with modern web technologies.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                🚀 My expertise spans across the entire development stack - from
                crafting intuitive user interfaces with{" "}
                <span className="text-blue-400">Next.js</span> and{" "}
                <span className="text-blue-400">TypeScript</span>, to
                implementing secure payment integrations with{" "}
                <span className="text-green-400">Stripe</span> and
                <span className="text-orange-400"> Zoho Payments</span>. I
                specialize in building production-ready applications with robust
                testing environments and automated workflows.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                💡 I'm experienced in API development and testing with{" "}
                <span className="text-yellow-400">Postman</span>, webhook
                implementations, Firebase hosting, real-time notifications via
                Telegram, and seamless email integrations using Resend API. I
                believe in writing clean, maintainable code and creating
                user-centric applications that solve real-world problems.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, rotateY: 0 }
                : { opacity: 0, x: 100, rotateY: 20 }
            }
            transition={{
              duration: 0.9,
              delay: 0.4,
              type: "spring",
              stiffness: 80,
            }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 flex items-start space-x-4 hover:border-blue-500 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, x: 100, rotateY: 25, scale: 0.7 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, rotateY: 0, scale: 1 }
                    : { opacity: 0, x: 100, rotateY: 25, scale: 0.7 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.6 + index * 0.25,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <motion.div
                  className="text-blue-400 mt-1 relative z-10"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {highlight.icon}
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 20, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
              : { opacity: 0, y: 80, rotateX: 20, scale: 0.8 }
          }
          transition={{
            duration: 0.9,
            delay: 1,
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="mt-16 text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-cyan-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Let's Build Something Amazing Together!
              </motion.h3>
              <motion.p
                className="text-lg mb-6 text-white/90"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                I'm always excited to work on new projects and collaborate with
                fellow developers. Whether it's a startup idea or an enterprise
                solution, let's turn your vision into reality.
              </motion.p>
              <motion.div
                className="flex justify-center flex-wrap gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.6,
                    },
                  },
                }}
              >
                {[
                  "🎯 Goal-Oriented",
                  "🤝 Team Player",
                  "📈 Growth Mindset",
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-white hover:bg-white/30 transition-all cursor-default"
                    variants={{
                      hidden: { opacity: 0, scale: 0, rotate: -180 },
                      visible: { opacity: 1, scale: 1, rotate: 0 },
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
