"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar } from "lucide-react"

const organizationsData = [
  {
    name: "Google Developer Group (GDG) - RVCE",
    role: "Member of Open Source and Development Vertical",
    duration: "2024/11 - Present",
    activities: ["Participated in Gen AI Study Jams"],
  },
  {
    name: "ACM - Association of Computing Machinery",
    role: "Junior Executive Member",
    duration: "2024/12 - Present",
    activities: [],
  },
  {
    name: "WOMEN IN CLOUD - WIC",
    role: "Member of WIC X RVCE Insider Circle",
    duration: "2024/03 - 2024/05",
    activities: [
      'Hosted an event called "Think Sprint", an ideathon empowering young women developers',
      "Developing and maintaining the official website for the WIC Insider Circle and COE Program at RVCE",
    ],
  },
]

export default function Organizations() {
  return (
    <section id="organizations" className="section-spacing bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Organizations & Societies</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Communities and groups I'm involved with
            </p>
          </div>
          <div className="space-y-6">
            {organizationsData.map((org, index) => (
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
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{org.name}</h3>
                          <p className="text-gray-500 dark:text-gray-400">{org.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {org.duration}
                      </div>
                    </div>
                    {org.activities.length > 0 && (
                      <ul className="space-y-2 list-disc pl-5">
                        {org.activities.map((activity, i) => (
                          <li key={i} className="text-gray-500 dark:text-gray-400">
                            {activity}
                          </li>
                        ))}
                      </ul>
                    )}
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
