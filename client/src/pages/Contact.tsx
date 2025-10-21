"use client";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/ContactSection";
import { SocialLinks } from "@/components/SocialLinks";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContactSection />
        <SocialLinks />
      </motion.div>
    </div>
  );
}
