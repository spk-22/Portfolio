import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Organizations from "@/components/organizations"
import Hackathons from "@/components/hackathons"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Organizations />
      <Hackathons />
      <Contact />
    </div>
  )
}
