"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EnhancedButton } from "@/components/enhanced-button"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  const downloadResume = () => {
    const resumeContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thejus Mohanan - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #0ea5e9; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { color: #0ea5e9; margin: 0; font-size: 2.5em; }
        .header p { color: #666; margin: 5px 0; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #0ea5e9; border-bottom: 1px solid #0ea5e9; padding-bottom: 5px; }
        .job { margin-bottom: 20px; }
        .job h3 { margin: 0; color: #333; }
        .job .company { color: #666; font-style: italic; }
        .job .date { color: #888; font-size: 0.9em; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f9ff; color: #0ea5e9; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; }
        ul { padding-left: 20px; }
        li { margin-bottom: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>THEJUS MOHANAN</h1>
        <p>Full-Stack Developer</p>
        <p>📧 thejusmohanan0@gmail.com | 📱 +91 8156970994</p>
        <p>📍 Punnakkal parambu, Thejus, Kadavathu Road, N paravoor, Ernakulam</p>
    </div>

    <div class="section">
        <h2>About</h2>
        <p>Experienced full-stack developer with a passion for creating innovative digital solutions. I specialize in building scalable web applications using modern technologies like React, Next.js, and Python. With hands-on experience in both frontend and backend development, I bring ideas to life through clean, efficient code and user-centered design.</p>
    </div>

    <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills">
            <span class="skill">React</span>
            <span class="skill">Next.js</span>
            <span class="skill">JavaScript</span>
            <span class="skill">Python</span>
            <span class="skill">Django</span>
            <span class="skill">MongoDB</span>
            <span class="skill">SQL</span>
            <span class="skill">HTML/CSS</span>
            <span class="skill">WordPress</span>
        </div>
    </div>

    <div class="section">
        <h2>Work Experience</h2>
        
        <div class="job">
            <h3>Software Developer Intern</h3>
            <p class="company">Tharonyx</p>
            <p class="date">2025 (3 months)</p>
            <ul>
                <li>Built full-stack applications using Next.js, React, Node.js, and MongoDB</li>
                <li>Developed and integrated APIs, ensuring seamless data flow</li>
                <li>Implemented authentication & database management for secure access</li>
                <li>Optimized UI/UX for performance, responsiveness, and accessibility</li>
                <li>Collaborated in Agile teams, using Git, CI/CD, and Vercel for deployment</li>
            </ul>
        </div>

        <div class="job">
            <h3>Software Developer Intern</h3>
            <p class="company">TAKYON</p>
            <p class="date">2022-2023</p>
            <ul>
                <li>Utilized frameworks and libraries to build and deploy scalable applications</li>
                <li>Participated in code reviews, ensuring high-quality code and knowledge sharing</li>
                <li>Troubleshooted and debugged issues using tools like PyCharm and Git</li>
            </ul>
        </div>

        <div class="job">
            <h3>Customer Support Executive</h3>
            <p class="company">SHOP SHIASH</p>
            <p class="date">2021 (5 months)</p>
            <ul>
                <li>Handled high-volume inbound customer emails and chats, resolving 95% of issues</li>
                <li>Utilized strong problem-solving skills to troubleshoot complex customer issues</li>
                <li>Reduced escalations by 30% through effective communication and technical expertise</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Education</h2>
        <div class="job">
            <h3>Bachelor of Technology</h3>
            <p class="company">KMEA Engineering College, Aluva</p>
            <p class="date">2018-2021</p>
        </div>
        <div class="job">
            <h3>Higher Secondary</h3>
            <p class="company">Kerala Higher Secondary</p>
            <p class="date">2015-2017</p>
        </div>
        <div class="job">
            <h3>High School</h3>
            <p class="company">Samooham High School, N Paravoor</p>
            <p class="date">2014-2015</p>
        </div>
    </div>
</body>
</html>
    `

    const blob = new Blob([resumeContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Thejus_Mohanan_Resume.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setIsOpen(false)
  }

  const actions = [
    {
      label: "Back to Top",
      icon: "↑",
      onClick: scrollToTop,
      className: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
    {
      label: "Contact Me",
      icon: "✉",
      onClick: scrollToContact,
      className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    },
    {
      label: "Download Resume",
      icon: "↓",
      onClick: downloadResume,
      className: "bg-accent hover:bg-accent/90 text-accent-foreground",
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3 mb-3"
              >
                {actions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <EnhancedButton
                      size="sm"
                      className={`${action.className} rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-200 group relative`}
                      onClick={action.onClick}
                    >
                      <span className="text-lg">{action.icon}</span>
                      <div className="absolute right-full mr-3 bg-card border border-border rounded-lg px-3 py-1 text-sm text-card-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {action.label}
                      </div>
                    </EnhancedButton>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <EnhancedButton
              size="lg"
              className={`rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isOpen
                  ? "bg-red-500 hover:bg-red-600 text-white rotate-45"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-xl font-bold">+</span>
            </EnhancedButton>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
