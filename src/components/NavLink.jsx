"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavLink({
  to,
  children,
  className = "",
  icon,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <Link to={to} className="flex items-center space-x-2">
        {/* Icon Animation */}
        {icon && (
          <motion.div
            className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
            animate={
              isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Text Content */}
        <span className="font-medium relative overflow-hidden">
          {children}

          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </span>
      </Link>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        initial={{ scale: 0.8 }}
        animate={isHovered ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-white/10 opacity-0 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1.5, opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
