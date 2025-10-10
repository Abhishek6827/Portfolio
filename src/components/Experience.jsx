"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
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

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center flex justify-center items-center">
        <Briefcase className="mr-2" /> Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
              </div>
              <span className="bg-blue-500 bg-opacity-20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                {exp.period}
              </span>
            </div>

            <ul className="list-disc list-inside space-y-2 mb-6">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="text-gray-300">
                  {resp}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
