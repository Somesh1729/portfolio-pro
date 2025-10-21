"use client";
import { motion } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
}
