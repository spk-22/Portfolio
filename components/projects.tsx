"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projectsData = [
  {
    title: "Graph Shield - GNN based Intrusion Detection",
    description:
      "Developed a Graph Neural Network (GNN) based network intrusion detection system. Utilized causal sampling techniques to detect and classify cyber threats with improved efficiency and accuracy.",
    technologies: ["Python", "TensorFlow", "PyTorch", "NetworkX", "Flask", "GNN", "GraphSage"],
    github: "https://github.com/spk-22/graph-shield",
    duration: "Apr 2025 - Present",
    showCode: false,
  },
  {
    title: "Neuro Track - AI driven Alzheimer's Disease Prediction",
    description:
      "Neuro Track is an AI-powered system for early-stage Alzheimer's disease prediction and patient monitoring. Leveraging GNN model, the system analyzes patient data such as genetic markers, PPI interactions and brain scans (MRI/CT), to provide early insights into the likelihood of developing Alzheimer's.",
    technologies: ["Python", "R", "TensorFlow", "GNN"],
    github: "https://github.com/spk-22/neuro-track",
    duration: "Apr 2025 - Present",
    showCode: false,
  },
  {
    title: "Sky Brief - Aviation Weather and Risk Analysis Tool",
    description:
      "Built a web-based tool to fetch live METAR/TAF aviation data, parse flight plans, analyze flight risks based on weather and route conditions, and visualize them using interactive maps and alert summaries.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Leaflet.js", "Flask"],
    github: "https://github.com/spk-22/Sky-Brief",
    duration: "Apr 2025",
    association: "ACCELERATE RVCE",
    showCode: true,
  },
  {
    title: "Secure Next - Blockchain based Remote Voting System",
    description:
      "Developed a secure digital voting platform leveraging blockchain for vote integrity, biometric/Election ID verification for authentication, and AI for fraud detection, ensuring transparency and accessibility in elections.",
    technologies: ["Truffle Framework", "Ganache", "Meta Mask", "Gemini", "React.js", "OpenCV", "Blockchain"],
    github: "https://github.com/spk-22/SecureNext",
    duration: "Mar 2025",
    association: "Google Solutions Challenge & Google Developer Groups RVCE",
    showCode: true,
  },
  {
    title: "Re Cloudify - Personal Cloud using Old Laptops",
    description:
      "Re Cloudify enables users to repurpose old laptops as remote storage devices, creating a personal cloud. Using a client-server model with socket programming, data can be seamlessly stored and accessed over a network. This decentralized approach offers cost-effective, private, and expandable storage without relying on third-party cloud providers.",
    technologies: ["C", "Python", "Flask", "Operating Systems", "Client-Server Model", "Remote Access"],
    github: "https://github.com/spk-22/ReCloudify",
    duration: "Jan 2025 - Feb 2025",
    showCode: true,
  },
  {
    title: "Care Connect - Smart Emergency Response Application",
    description:
      "Care Connect, a smart emergency response application designed to improve ambulance and hospital coordination for critical medical situations. The app integrates real-time ambulance location tracking, hospital bed availability, and emergency medical services (EMS) alerts. Designed to streamline communication between ambulance teams, hospitals, and emergency responders by reducing response times, optimized routing, it aims to save lives by reducing delays in emergency care.",
    technologies: [
      "JavaScript",
      "Firebase",
      "Open Street Map API",
      "Leaflet.js",
      "C++",
      "A* algorithm",
      "HTML",
      "Route Optimization",
      "Design Thinking",
    ],
    github: "https://github.com/spk-22/care-connect",
    duration: "Dec 2024 - Jan 2025",
    showCode: false,
  },
  {
    title: "Weather Sync - Adaptive Edge AI for Weather Prediction",
    description:
      "Implemented a decentralized weather forecasting model using edge AI and federated learning. The system adapts to local data while preserving privacy, improving prediction accuracy without centralized data collection.",
    technologies: ["Python", "TensorFlow", "Streamlit", "XGBoost", "LSTM", "PySyft", "Keras", "MATLAB"],
    github: "https://github.com/spk-22/weather-sync",
    duration: "Dec 2024 - Jan 2025",
    showCode: false,
  },
  {
    title: "Women In Cloud Website",
    description:
      "Developing and maintaining the official website for Women in Cloud COE RVCE dedicated to promoting and showcasing initiatives for women in cloud technology. The site serves as an informational platform that highlights community stories, upcoming events, and collaborations in the cloud ecosystem.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/spk-22/wic-website",
    duration: "Nov 2024 - Dec 2024",
    association: "RVCE WiC Insider Circle",
    showCode: false,
  },
  {
    title: "WIRIN IISc Dashboard",
    description:
      "Worked as a Frontend Developer and built the WIPOD Car dashboard for the WIPOD (WIPRO Autonomous Vehicle).",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Figma", "TypeScript"],
    github: "https://github.com/spk-22/WIRIN-Dashboard/",
    duration: "Jun 2024 - Aug 2024",
    association: "EECS @ IISc, Bengaluru",
    showCode: true,
  },
  {
    title: "Smart Flow - Smart Water Monitoring System",
    description:
      "IoT-based smart water management system for real-time monitoring and efficient usage tracking. The system integrates sensors and microcontrollers to collect water consumption data, which is visualized through a Next.js-based dashboard. Features include automated alerts, usage analytics, and conservation recommendations, enabling data-driven water usage decisions.",
    technologies: ["Next.js", "React.js", "Arduino", "Internet of Things (IoT)"],
    github: "https://github.com/spk-22/smart-flow",
    duration: "May 2024 - Jun 2024",
    showCode: false,
  },
  {
    title: "Aqua Charge - Automatic Water Refill System",
    description:
      "Created an automated refill system for lead-acid batteries that monitors electrolyte levels and refills distilled water as needed, reducing manual maintenance and enhancing battery life.",
    technologies: ["Internet of Things (IoT)", "Arduino", "MATLAB"],
    github: "https://github.com/spk-22/aqua-charge",
    duration: "Oct 2023 - Dec 2023",
    showCode: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Showcasing my technical skills through various projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full flex flex-col card-3d">
                  <CardContent className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs text-gray-500">{project.duration}</span>
                    </div>
                    {project.association && (
                      <p className="text-sm text-primary mb-2">Associated with {project.association}</p>
                    )}
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {project.showCode && (
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
