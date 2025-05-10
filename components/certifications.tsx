"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"

const certificationsData = [
  {
    name: "AWS Training and Certification",
    course: "Foundations of Prompt Engineering",
    date: "08/03/2025",
    tags: ["Prompt Engineering", "Prompt Design", "LLM", "AI"],
  },
  {
    name: "Databricks Fundamentals",
    course: "Databricks Certified Associate Developer",
    date: "16/04/2025",
    expiration: "16/04/2026",
    tags: ["Data Lake", "Data Warehouse", "Big Data", "Apache Spark"],
  },
  {
    name: "Google Gen AI Study Jams",
    course: "Google Cloud AI Certification",
    date: "05/2024",
    tags: ["Vertex AI", "Prompt Design", "Gen AI", "LLM", "GCP"],
  },
  {
    name: "NPTEL Certification",
    course: "Data Science for Engineers",
    date: "20/02/2025",
    tags: ["Data Science", "Python", "R Language", "Regression Models", "Machine Learning"],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-spacing">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional certifications and courses I've completed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
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
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{cert.name}</h3>
                          <p className="text-gray-500 dark:text-gray-400">{cert.course}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.date}
                        </div>
                        {cert.expiration && <div className="text-xs mt-1">Expires: {cert.expiration}</div>}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">
                          {tag}
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
