// utils/techIcons.js
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiNextdotjs,
  SiFirebase,
  SiNotion,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { Code, Database } from "lucide-react";

export const getTechIcon = (tech) => {
  const iconMap = {
    React: <FaReact className="text-blue-400" />,
    Redux: <SiRedux className="text-purple-400" />,
    JavaScript: <FaJsSquare className="text-yellow-400" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    Django: <SiDjango className="text-green-600" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    "Notion Database": <SiNotion className="text-white" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Express: <SiExpress className="text-gray-300" />,
    Python: <FaPython className="text-blue-400" />,
    Recharts: <Code className="text-cyan-400" />,
    "Binance API": <Database className="text-yellow-400" />,
    "RESTful APIs": <Code className="text-green-400" />,
  };
  return iconMap[tech] || <Code className="text-gray-400" />;
};
