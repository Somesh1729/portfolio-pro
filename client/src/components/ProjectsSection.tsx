"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@shared/schema"
import { ParticlesBackground } from "@/components/ParticlesBackground"

const projects: Project[] = [
  {
    id: "1",
    title: "Sahayak - AI-Powered Multilingual Teaching Assistant",
    description: "Real-time transcription, translation, and context understanding for multilingual lectures.",
    longDescription:
      "Integrated Whisper STT (Indian accents), 10+ language translations, voice UI, and secure backend.",
    image: "/sahayak-ai-teaching-assistant.jpg",
    tags: ["React", "Node.js", "Express", "Whisper", "Tailwind", "SQLite", "Firebase", "Translate API"],
    category: "Web",
    featured: true,
  },
  {
    id: "2",
    title: "Dev-Hire – Real-Time Developer Hiring Platform",
    description: "Instant discovery and booking of developers with role-based auth and scheduling.",
    longDescription: "JWT auth (developer/client), profiles, rates, live availability, and real-time booking.",
    image: "/developer-hiring-platform-ui.jpg",
    tags: ["React", "Node.js", "Express", "Vite", "SQLite", "Tailwind", "JWT"],
    category: "Web",
    featured: true,
  },
  {
    id: "3",
    title: "E-commerce Website",
    description: "Responsive storefront with interactive listings and cart using vanilla JS.",
    longDescription: "Modern layout across homepage, catalog, and checkout with consistent styling.",
    image: "/ecommerce-website-interface.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    featured: false,
  },
  {
    id: "4",
    title: "Healthcare Companion (Machine Learning)",
    description: "Symptom-based disease prediction with supervised learning models.",
    longDescription: "Preprocessing and training with 90%+ accuracy using Decision Tree, Random Forest, Naive Bayes.",
    image: "/healthcare-ml-dashboard.jpg",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
    category: "Other",
    featured: false,
  },
]

const categories = ["All", "Web", "Mobile", "Design", "Other"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section ref={ref} className="relative py-20 lg:py-32 px-6 lg:px-8 bg-card/30">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my skills and experience
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-testid={`card-project-${project.id}`}
              >
                <Card className="overflow-hidden group hover-elevate h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demoUrl && (
                        <Button size="sm" variant="secondary" asChild data-testid={`button-demo-${project.id}`}>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="secondary" asChild data-testid={`button-github-${project.id}`}>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
