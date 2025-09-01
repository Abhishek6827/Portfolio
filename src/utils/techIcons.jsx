// utils/techIcons.js
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiDjango } from "react-icons/si";
import { Code } from "lucide-react";

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
  };
  return iconMap[tech] || <Code className="text-gray-400" />;
};
