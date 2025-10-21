"use client";
import { motion } from "framer-motion";
import { SkillsSection } from "@/components/SkillsSection";

export default function Skills() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SkillsSection />
      </motion.div>
    </div>
  );
}
