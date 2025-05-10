"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar } from "lucide-react"

const hackathonsData = [
  {
    name: "Google Solutions Challenge 2025",
    description:
      "Participated in Google Solutions Challenge 2025. Attended the Google Offline Boot Camp on March 8th, 2025.",
    project: "Developed a secure Blockchain-based voting system using Truffle, Ganache, Meta Mask, React UI.",
    date: "March 2025",
  },
]

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-spacing">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hackathons</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Competitions and challenges I've participated in
            </p>
          </div>
          <div className="space-y-6">
            {hackathonsData.map((hackathon, index) => (
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
                          <Trophy className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{hackathon.name}</h3>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {hackathon.date}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-500 dark:text-gray-400">{hackathon.description}</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Project:</span> {hackathon.project}
                      </p>
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
