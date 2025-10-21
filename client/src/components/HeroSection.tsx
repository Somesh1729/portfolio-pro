"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "./ParticlesBackground"
import Link from "next/link"


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div
              className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-chart-2 p-1 animate-float"
              data-testid="img-profile-avatar"
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">SDE</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-[length:200%_auto] bg-clip-text text-transparent">
                Software Web Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Pursuing 4th year AIML engineering student — crafting reliable, performant experiences across the stack.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto italic"
            >
              “Learn fast, build faster — small, consistent wins compound into great products.”
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <Button size="lg" className="group" data-testid="button-view-projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-transparent"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-8"
          >
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-download-resume">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
