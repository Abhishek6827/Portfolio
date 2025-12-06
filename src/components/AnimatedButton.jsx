"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  disabled = false,
  onClick,
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
    secondary:
      "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={`relative inline-flex items-center justify-center space-x-2 font-medium rounded-lg transition-all duration-300 overflow-hidden group ${
        variants[variant]
      } ${sizes[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg opacity-0"
        animate={
          isPressed
            ? { scale: [0, 1.5], opacity: [0.3, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.4 }}
      />

      {/* Icon animation */}
      {icon && (
        <motion.div
          className="relative z-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}

      {/* Text content */}
      <span className="relative z-10">{children}</span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
