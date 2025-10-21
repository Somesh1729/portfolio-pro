"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import type { SocialLink } from "@shared/schema";

const socialLinks: SocialLink[] = [
  {
    id: "1",
    platform: "GitHub",
    url: "https://github.com",
    icon: "Github",
  },
  {
    id: "2",
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
  },
  {
    id: "3",
    platform: "Twitter",
    url: "https://twitter.com",
    icon: "Twitter",
  },
  {
    id: "4",
    platform: "Email",
    url: "mailto:hello@portfolio.com",
    icon: "Mail",
  },
];

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
};

export function SocialLinks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect With <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's stay connected! Find me on social media or drop me a message
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group"
                  data-testid={`button-social-${link.platform.toLowerCase()}`}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {Icon && <Icon className="h-5 w-5 mr-2 group-hover:text-primary transition-colors" />}
                    {link.platform}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Or download my resume</p>
          <Button variant="secondary" size="lg" className="gap-2" data-testid="button-download-cv">
            <FileText className="h-5 w-5" />
            Download CV
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
