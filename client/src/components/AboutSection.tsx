"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { ParticlesBackground } from "@/components/ParticlesBackground"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable solutions",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful user experiences",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Shipping features that matter",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating for success",
  },
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-20 lg:py-32 px-6 lg:px-8">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for building amazing products
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-2 hover-elevate">
              <div className=" rounded-m bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-3">
                      4th
                    </div>
                    <p className="text-base md:text-3xl text-muted-foreground">Year • AIML Engineering Student</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
           

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-balance">Hi, I'm Somesh Yallapur</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                
                <Badge variant="secondary">Software Web Developer</Badge>
                <Badge variant="secondary">AIML Enthusiast</Badge>
                <Badge variant="outline" className="border-primary/40 text-primary">
                  Pursuing 4th Year • AIML Engineering Student
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty mb-3">
                I’m a passionate Web Developer specializing in fast, user‑focused websites that help brands grow. I
                combine design thinking with technical skill to build everything from landing pages to full‑stack web
                apps.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty mb-3">
                Currently in my 4th year studying AI/ML Engineering, I’m fascinated by the intersection of artificial
                intelligence and web development. I believe in creating digital experiences that are not only beautiful
                but also intelligent and purposeful.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                “Build thoughtfully. Measure honestly. Iterate boldly.”
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React.js", "TypeScript", "Node.js", "Python", "Java", "Tailwind CSS", "PostgreSQL", "MongoDB"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate h-full">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
