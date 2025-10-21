"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import type { Education } from "@shared/schema"
import { ParticlesBackground } from "@/components/ParticlesBackground"

const education: Education[] = [
  {
    id: "1",
    institution: "Sewa Vidyalaya High School, Kinnal, Karnataka",
    degree: "SSLC",
    field: "Percentage: 91.68%",
    startYear: "",
    endYear: "2019",
    description: "",
  },
  {
    id: "2",
    institution: "ICS Mahesh PU College, Dharwad, Karnataka",
    degree: "Pre-University (12th)",
    field: "PCMB (98.33%)",
    startYear: "",
    endYear: "2021",
    description: "",
  },
  {
    id: "3",
    institution: "New Horizon College of Engineering, Bengaluru, Karnataka",
    degree: "BE - Artificial Intelligence and Machine Learning",
    field: "CGPA: 9.23 (Till 6th Sem)",
    startYear: "2022",
    endYear: "2026",
    description: "",
  },
]

export function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-20 lg:py-32 px-6 lg:px-8 bg-card/30">
      <ParticlesBackground />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-primary" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}
                data-testid={`card-education-${item.id}`}
              >
                <div className={`flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  <Card className="flex-1 hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-semibold" data-testid={`text-degree-${item.id}`}>
                          {item.degree}
                        </h3>
                        <span className="text-sm text-muted-foreground font-mono">
                          {item.startYear} - {item.endYear}
                        </span>
                      </div>
                      <h4 className="text-lg text-primary mb-2" data-testid={`text-institution-${item.id}`}>
                        {item.institution}
                      </h4>
                      <p className="text-muted-foreground mb-3">{item.field}</p>
                      {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
