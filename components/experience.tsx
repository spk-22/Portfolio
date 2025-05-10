"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experienceData = [
  {
    company: "INDXO AI",
    position: "AI Developer",
    duration: "2024/12 - Present",
    description: [
      "Built a master table in T-SQL to manage CNC machine operations data, establishing relationships between multiple tables to ensure efficient data retrieval and streamlined data flow.",
      "Designing and implementing a chat bot to assist users in CNC machine operations by interpreting queries and providing precise guidance.",
    ],
    technologies: ["Llama", "Llama Index", "T-SQL", "Rasa"],
  },
  {
    company: "WIRIN - Wipro IISc Research and Innovation Network",
    position: "Frontend Developer",
    duration: "2024/07 - 2024/09",
    description: ["Developed a responsive dashboard to enhance the user experience of a hybrid electric vehicle (EV)."],
    technologies: ["Figma", "Next", "React", "TypeScript"],
  },
  {
    company: "WOMEN IN CLOUD - WIC",
    position: "Member of WIC X RVCE Insider Circle",
    duration: "2024/03 - 2024/05",
    description: [
      'Hosted an event called "Think Sprint", an ideathon empowering young women developers.',
      "Developing and maintaining the official website for the WIC Insider Circle and COE Program at RVCE.",
    ],
    technologies: ["React", "Flask", "TypeScript"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-spacing bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and internships
            </p>
          </div>
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="rounded-full bg-primary/10 p-2 mr-4">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.company}</h3>
                          <p className="text-gray-500 dark:text-gray-400">{item.position}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
                    </div>
                    <ul className="space-y-2 mb-4 list-disc pl-5">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-500 dark:text-gray-400">
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
