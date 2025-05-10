"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function Hero() {
  const { toast } = useToast()
  const [showEmail, setShowEmail] = useState(false)
  const email = "siyapkurandwad@gmail.com"

  const handleViewResume = () => {
    // Open resume in a modal or new page with view-only access
    window.open("/resume-viewer", "_blank", "noopener,noreferrer")
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    })
  }

  return (
    <section
      id="home"
      className="py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">Siya P Kurandwad</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Computer Science Engineering Student & Developer
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" onClick={handleViewResume}>
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </motion.div>
          <motion.div
            className="flex space-x-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="https://github.com/spk-22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/siya-p-kurandwad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowEmail(!showEmail)}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </button>
              {showEmail && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 p-2 bg-background border rounded-md shadow-lg z-50 whitespace-nowrap flex items-center gap-2">
                  <span className="text-sm">{email}</span>
                  <button onClick={handleCopyEmail} className="text-gray-500 hover:text-primary" title="Copy email">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.2, 0.7],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  )
}
