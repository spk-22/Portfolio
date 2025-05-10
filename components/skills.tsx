"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Terminal, Cpu } from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "R"],
    icon: Code,
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    icon: Globe,
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Flask", "Express.js"],
    icon: Server,
  },
  {
    category: "Databases",
    skills: ["T-SQL", "Firebase", "MongoDB"],
    icon: Database,
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Llama Index", "Fine-tuning LLMs", "GNN", "LSTM", "XGBoost"],
    icon: Cpu,
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Figma", "Streamlit", "Blockchain", "IoT", "Arduino", "MATLAB"],
    icon: Terminal,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-spacing bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
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
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-primary/10 p-2 mr-3">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="outline">
                          {skill}
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
