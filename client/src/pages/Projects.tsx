"use client";
import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectsSection />
      </motion.div>
    </div>
  );
}
