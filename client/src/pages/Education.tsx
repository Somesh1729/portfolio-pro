"use client";
import { motion } from "framer-motion";
import { EducationSection } from "@/components/EducationSection";

export default function Education() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <EducationSection />
      </motion.div>
    </div>
  );
}
