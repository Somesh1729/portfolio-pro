"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiIntellijidea,
  SiJupyter,
  SiPycharm,
  SiMysql,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { VscCode } from "react-icons/vsc"
import { ParticlesBackground } from "@/components/ParticlesBackground"

type LocalSkill = {
  id: string
  name: string
  category: "Frontend" | "Backend" | "Databases" | "Tools"
  proficiency: number
  icon: keyof typeof iconMap | string
}

const skills: LocalSkill[] = [
  // Frontend
  { id: "1", name: "React.js", category: "Frontend", proficiency: 90, icon: "SiReact" },
  { id: "2", name: "TypeScript", category: "Frontend", proficiency: 88, icon: "SiTypescript" },
  { id: "3", name: "JavaScript", category: "Frontend", proficiency: 92, icon: "SiJavascript" },
  { id: "4", name: "Tailwind CSS", category: "Frontend", proficiency: 85, icon: "SiTailwindcss" },
  { id: "5", name: "CSS", category: "Frontend", proficiency: 86, icon: "SiCss3" },
  { id: "6", name: "HTML", category: "Frontend", proficiency: 94, icon: "SiHtml5" },

  // Backend
  { id: "7", name: "Node.js", category: "Backend", proficiency: 85, icon: "SiNodedotjs" },
  { id: "8", name: "Python", category: "Backend", proficiency: 82, icon: "SiPython" },
  { id: "9", name: "Java", category: "Backend", proficiency: 78, icon: "SiJava" },
  { id: "10", name: "SQL", category: "Backend", proficiency: 80, icon: "SiMysql" },

  // Databases
  { id: "11", name: "PostgreSQL", category: "Databases", proficiency: 78, icon: "SiPostgresql" },
  { id: "12", name: "MongoDB", category: "Databases", proficiency: 76, icon: "SiMongodb" },

  // Tools
  { id: "13", name: "Git", category: "Tools", proficiency: 90, icon: "SiGit" },
  { id: "14", name: "Postman", category: "Tools", proficiency: 85, icon: "SiPostman" },
  { id: "15", name: "IntelliJ IDEA", category: "Tools", proficiency: 80, icon: "SiIntellijidea" },
  { id: "16", name: "Jupyter", category: "Tools", proficiency: 75, icon: "SiJupyter" },
  { id: "17", name: "PyCharm", category: "Tools", proficiency: 78, icon: "SiPycharm" },
  { id: "18", name: "VS Code", category: "Tools", proficiency: 92, icon: "SiVisualstudiocode" },
  { id: "19", name: "Docker", category: "Tools", proficiency: 74, icon: "SiDocker" },
]

const iconMap: Record<string, any> = {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiJavascript,
  SiJava: FaJava,
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiIntellijidea,
  SiJupyter,
  SiPycharm,
  SiVisualstudiocode: VscCode,
  SiMysql,
}

const categories = ["Frontend", "Backend", "Databases", "Tools"]

export function SkillsSection() {
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
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {categories.map((category, catIndex) => {
          const categorySkills = skills.filter((s) => s.category === category)
          if (categorySkills.length === 0) return null

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h3 className="text-2xl font-semibold mb-6 text-muted-foreground">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon]
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.45, delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.99 }}
                      data-testid={`card-skill-${skill.id}`}
                    >
                      <Card className="p-6 text-center hover-elevate group transition-all">
                        <div className="relative w-24 h-24 mx-auto mb-4">
                          <svg className="w-24 h-24 transform -rotate-90">
                            <circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-muted/20"
                            />
                            <motion.circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="url(#gradient)"
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 40}`}
                              initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                              animate={
                                inView
                                  ? {
                                      strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.proficiency / 100),
                                    }
                                  : {}
                              }
                              transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 + 0.3 }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--primary))" />
                                <stop offset="100%" stopColor="hsl(var(--chart-2))" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            {Icon && (
                              <motion.div whileHover={{ rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                        <h4 className="font-semibold mb-1" data-testid={`text-skill-name-${skill.id}`}>
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{skill.proficiency}%</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
