"use client"

import { useEffect, useRef, Suspense, lazy } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { SmoothScrollNav } from "@/components/smooth-scroll-nav"
import { AnimatedBackground } from "@/components/animated-background"
import { GeometricShapes } from "@/components/geometric-shapes"
import { AboutCard } from "@/components/about-card"
import { EnhancedSkillCard } from "@/components/enhanced-skill-card"
import { AchievementMetrics } from "@/components/achievement-metrics"
import { EnhancedButton } from "@/components/enhanced-button"
import { TouchGestureHandler } from "@/components/touch-gesture-handler"
import ScrollProgress from "@/components/scroll-progress"
import LazySection from "@/components/lazy-section"
import PerformanceMonitor from "@/components/performance-monitor"
import FloatingActionButton from "@/components/floating-action-button"
import EducationTimeline from "@/components/education-timeline"

const InteractiveContactForm = lazy(() => import("@/components/interactive-contact-form"))

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    document.documentElement.style.scrollPaddingTop = "80px"

    const criticalImages = ["/modern-developer-workspace.png", "/project-preview.png"]

    criticalImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const skills = [
    { skill: "React", level: 90, description: "Advanced component development and state management", icon: "⚛" },
    { skill: "Next.js", level: 85, description: "Full-stack applications with SSR and API routes", icon: "▲" },
    { skill: "JavaScript", level: 88, description: "ES6+ features and modern development practices", icon: "JS" },
    { skill: "Python", level: 82, description: "Backend development and automation scripts", icon: "🐍" },
    { skill: "Django", level: 78, description: "Web framework for rapid development", icon: "DJ" },
    { skill: "MongoDB", level: 75, description: "NoSQL database design and optimization", icon: "DB" },
    { skill: "SQL", level: 80, description: "Database design and complex queries", icon: "⚡" },
    { skill: "HTML/CSS", level: 92, description: "Semantic markup and responsive design", icon: "<>" },
    { skill: "WordPress", level: 70, description: "Content management and website building", icon: "WP" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      technologies: ["React", "Django", "PostgreSQL", "WebSocket"],
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat application with AI integration",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma"],
    },
  ]

  const aboutCards = [
    {
      title: "Innovation",
      description:
        "Passionate about leveraging cutting-edge technologies to build scalable, efficient solutions that solve real-world problems.",
      icon: "💡",
    },
    {
      title: "Problem Solving",
      description:
        "Strong analytical mindset with expertise in debugging complex issues and optimizing application performance.",
      icon: "🔧",
    },
    {
      title: "Team Collaboration",
      description:
        "Experienced in Agile methodologies, code reviews, and cross-functional teamwork to deliver high-quality software.",
      icon: "👥",
    },
    {
      title: "Full-Stack Expertise",
      description:
        "Proficient in both frontend and backend development with hands-on experience in modern web technologies.",
      icon: "⚡",
    },
  ]

  const educationItems = [
    {
      title: "Bachelor of Technology",
      institution: "KMEA Engineering College, Aluva",
      period: "2018-2021",
      description:
        "Focused on computer science fundamentals, software engineering principles, and modern development practices. Gained hands-on experience with programming languages and development frameworks.",
      icon: "🎓",
    },
    {
      title: "Higher Secondary",
      institution: "Kerala Higher Secondary",
      period: "2015-2017",
      description:
        "Completed higher secondary education with focus on science and mathematics, building a strong foundation for technical studies.",
      icon: "📚",
    },
    {
      title: "High School",
      institution: "Samooham High School, N Paravoor",
      period: "2014-2015",
      description:
        "Completed foundational education with excellent academic performance, developing critical thinking and problem-solving skills.",
      icon: "🏫",
    },
  ]

  const navigateToNextSection = () => {
    const sections = ["hero", "about", "skills", "experience", "education", "projects", "contact"]
    const currentIndex = sections.findIndex((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      }
      return false
    })

    if (currentIndex < sections.length - 1) {
      const nextSection = document.getElementById(sections[currentIndex + 1])
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const navigateToPrevSection = () => {
    const sections = ["hero", "about", "skills", "experience", "education", "projects", "contact"]
    const currentIndex = sections.findIndex((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      }
      return false
    })

    if (currentIndex > 0) {
      const prevSection = document.getElementById(sections[currentIndex - 1])
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <TouchGestureHandler
      onSwipeUp={navigateToNextSection}
      onSwipeDown={navigateToPrevSection}
      className="min-h-screen bg-background text-foreground relative"
    >
      <ScrollProgress />
      <AnimatedBackground />
      <GeometricShapes />
      <PerformanceMonitor />
      <FloatingActionButton />

      <SmoothScrollNav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </ParallaxSection>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedText
            text="THEJUS MOHANAN"
            className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-primary mb-4"
          />
          <AnimatedText
            text="FULL-STACK DEVELOPER"
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 tracking-wider"
            delay={300}
          />
          <AnimatedText
            text="Crafting innovative digital experiences with cutting-edge technology"
            className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            delay={600}
          />
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            style={{ animationDelay: "900ms" }}
          >
            <EnhancedButton
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              View Projects
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-3 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Hire Me
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <LazySection>
        <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="About Me"
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-12 sm:mb-16"
            />

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-16">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <AnimatedText
                  text="Passionate Full-Stack Developer"
                  className="text-2xl sm:text-3xl font-playfair font-semibold text-foreground mb-4 sm:mb-6"
                  delay={200}
                />
                <AnimatedText
                  text="Experienced full-stack developer with a passion for creating innovative digital solutions. I specialize in building scalable web applications using modern technologies like React, Next.js, and Python. With hands-on experience in both frontend and backend development, I bring ideas to life through clean, efficient code and user-centered design."
                  className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                  delay={400}
                />

                <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                  <Badge
                    variant="secondary"
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20"
                  >
                    3+ Years Experience
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-secondary/10 text-secondary border-secondary/20"
                  >
                    Full-Stack Developer
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-accent/10 text-accent border-accent/20"
                  >
                    Modern Tech Stack
                  </Badge>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="relative w-60 sm:w-80 h-60 sm:h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-tl from-primary/10 to-secondary/10 rounded-full animate-pulse delay-1000" />
                  <div className="absolute inset-6 sm:inset-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/50">
                    <div className="text-6xl sm:text-8xl">💻</div>
                  </div>

                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 sm:w-12 h-8 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                    <span className="text-base sm:text-xl">⚛</span>
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 sm:w-12 h-8 sm:h-12 bg-secondary/20 rounded-full flex items-center justify-center animate-float delay-1000">
                    <span className="text-base sm:text-xl">▲</span>
                  </div>
                  <div className="absolute top-1/2 -left-4 sm:-left-8 w-6 sm:w-10 h-6 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center animate-float delay-500">
                    <span className="text-sm sm:text-lg">🐍</span>
                  </div>
                  <div className="absolute top-1/4 -right-4 sm:-right-8 w-6 sm:w-10 h-6 sm:h-10 bg-primary/30 rounded-full flex items-center justify-center animate-float delay-750">
                    <span className="text-sm sm:text-lg">⚡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement metrics section */}
            <AchievementMetrics />

            {/* About cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {aboutCards.map((card, index) => (
                <AboutCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Skills Section */}
      <LazySection>
        <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="Technical Expertise"
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-4 sm:mb-6"
            />
            <AnimatedText
              text="Proficient in modern technologies with hands-on experience in full-stack development"
              className="text-base sm:text-lg text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
              delay={300}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <EnhancedSkillCard
                  key={index}
                  skill={skill.skill}
                  level={skill.level}
                  description={skill.description}
                  icon={skill.icon}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Experience Section */}
      <LazySection>
        <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="Work Experience"
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-12 sm:mb-16"
            />
            <div className="space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Software Developer Intern</h3>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                    2025 (3 months)
                  </Badge>
                </div>
                <p className="text-secondary font-medium mb-4">Tharonyx</p>
                <ul className="text-muted-foreground space-y-2 text-sm sm:text-base">
                  <li>• Built full-stack applications using Next.js, React, Node.js, and MongoDB</li>
                  <li>• Developed and integrated APIs, ensuring seamless data flow</li>
                  <li>• Implemented authentication & database management for secure access</li>
                  <li>• Optimized UI/UX for performance, responsiveness, and accessibility</li>
                  <li>• Collaborated in Agile teams, using Git, CI/CD, and Vercel for deployment</li>
                </ul>
              </Card>

              <Card className="p-6 sm:p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Software Developer Intern</h3>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                    2022-2023
                  </Badge>
                </div>
                <p className="text-secondary font-medium mb-4">SHIASH</p>
                <ul className="text-muted-foreground space-y-2 text-sm sm:text-base">
                  <li>• Utilized frameworks and libraries to build and deploy scalable applications</li>
                  <li>• Participated in code reviews, ensuring high-quality code and knowledge sharing</li>
                  <li>• Troubleshooted and debugged issues using tools like PyCharm and Git</li>
                </ul>
              </Card>

              <Card className="p-6 sm:p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Customer Support Executive</h3>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                    2021 (5 months)
                  </Badge>
                </div>
                <p className="text-secondary font-medium mb-4">TAKYON</p>
                <ul className="text-muted-foreground space-y-2 text-sm sm:text-base">
                  <li>• Handled high-volume inbound customer emails and chats, resolving 95% of issues</li>
                  <li>• Utilized strong problem-solving skills to troubleshoot complex customer issues</li>
                  <li>• Reduced escalations by 30% through effective communication and technical expertise</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Education Section */}
      <LazySection>
        <section id="education" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="Education Journey"
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-4 sm:mb-6"
            />
            <AnimatedText
              text="Academic foundation that shaped my technical expertise and problem-solving approach"
              className="text-base sm:text-lg text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
              delay={300}
            />

            <EducationTimeline items={educationItems} />
          </div>
        </section>
      </LazySection>

      {/* Projects Section */}
      <LazySection>
        <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="Featured Projects"
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Contact Section */}
      <LazySection>
        <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Get In Touch"
              className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-12 sm:mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-lg">📧</span>
                    <span className="break-all">thejusmohanan0@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">📱</span>
                    <span>+91 8156970994</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-lg">📍</span>
                    <span>Punnakkal parambu, Thejus, Kadavathu Road, N paravoor, Ernakulam</span>
                  </div>
                </div>
              </div>
              <Suspense
                fallback={
                  <div className="p-6 sm:p-8 bg-card border border-border rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                }
              >
                <InteractiveContactForm />
              </Suspense>
            </div>
            <div className="mt-6 sm:mt-8">
              <EnhancedButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent text-sm sm:text-base"
                onClick={() => {
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
                }}
              >
                Download Resume
              </EnhancedButton>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 Thejus Mohanan. Crafted with passion and modern technology.
          </p>
        </div>
      </footer>
    </TouchGestureHandler>
  )
}

