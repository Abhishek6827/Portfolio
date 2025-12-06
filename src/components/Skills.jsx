"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone } from "lucide-react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaBootstrap,
  FaStripe,
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From building production-ready SaaS applications to integrating payment gateways 
            and real-time notifications - here's my comprehensive tech stack.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-400 text-lg">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Currently specializing in building scalable SaaS solutions with Next.js, 
              implementing secure payment systems, API integrations, and automated workflows. 
              I focus on production-ready code with proper testing and monitoring.
            </p>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-400">
              <span>💳 Payment Gateway Integration</span>
              <span>🔐 Sandbox & Production Environments</span>
              <span>🔔 Real-time Notifications</span>
              <span>🧪 API Testing & Development</span>
              <span>🚀 CI/CD & Deployment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
