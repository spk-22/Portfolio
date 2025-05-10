"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, BookOpen } from "lucide-react"

const educationData = [
  {
    institution: "R.V College of Engineering",
    degree: "B.E in Computer Science and Engineering",
    duration: "Sept 2023 – 2027",
    details: "CGPA: 9.41/10 (as of 3rd Semester)",
    icon: GraduationCap,
  },
  {
    institution: "Deeksha PU College",
    degree: "PUC - Science Stream",
    duration: "2021 – May 2022",
    details: "Score - 586/600, PCMC - 99.50%",
    icon: BookOpen,
  },
  {
    institution: "Cluny Convent High School, ICSE",
    degree: "10th Grade",
    duration: "2009 – May 2021",
    details: "Percentage - 98.8%",
    icon: School,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic journey and qualifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{item.institution}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{item.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.duration}</p>
                    <p className="text-sm font-medium mt-2">{item.details}</p>
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
