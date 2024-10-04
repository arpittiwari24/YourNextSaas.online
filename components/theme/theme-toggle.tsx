"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="relative inline-flex items-center justify-start w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none focus:none"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute left-1 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md"
        animate={{
          x: theme === "light" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        {theme === "light" ? (
          <Sun className="w-4 h-4 text-yellow-500" />
        ) : (
          <Moon className="w-4 h-4 text-blue-500" />
        )}
      </motion.div>
      <span className="sr-only">
        {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      </span>
    </motion.button>
  );
}
