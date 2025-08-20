"use client"

import { Download } from "lucide-react"
import { EnhancedButton } from "./enhanced-button"

export function ResumeDownload() {
  const generateResumePDF = () => {
    // Create resume content as HTML
    const resumeContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Thejus Mohanan - Resume</title>
    <style>
        body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
            background: white;
        }
        .header { 
            text-align: center; 
            border-bottom: 3px solid #164e63; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
        }
        .name { 
            font-size: 32px; 
            font-weight: bold; 
            color: #164e63; 
            margin-bottom: 5px; 
        }
        .title { 
            font-size: 18px; 
            color: #6366f1; 
            margin-bottom: 15px; 
        }
        .contact { 
            font-size: 14px; 
            color: #666; 
        }
        .section { 
            margin-bottom: 25px; 
        }
        .section-title { 
            font-size: 20px; 
            font-weight: bold; 
            color: #164e63; 
            border-bottom: 2px solid #e5e7eb; 
            padding-bottom: 5px; 
            margin-bottom: 15px; 
        }
        .job { 
            margin-bottom: 20px; 
        }
        .job-title { 
            font-weight: bold; 
            color: #333; 
        }
        .company { 
            color: #6366f1; 
            font-weight: 600; 
        }
        .date { 
            color: #666; 
            font-style: italic; 
        }
        .skills { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 10px; 
        }
        .skill { 
            background: #f3f4f6; 
            padding: 5px 12px; 
            border-radius: 15px; 
            font-size: 14px; 
            color: #374151; 
        }
        ul { 
            margin: 10px 0; 
            padding-left: 20px; 
        }
        li { 
            margin-bottom: 5px; 
        }
        .education-item {
            margin-bottom: 15px;
        }
        .degree {
            font-weight: bold;
            color: #333;
        }
        .institution {
            color: #6366f1;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">THEJUS MOHANAN</div>
        <div class="title">FULL-STACK DEVELOPER</div>
        <div class="contact">
            📧 thejusmohanan0@gmail.com | 📱 +91 8156970994<br>
            📍 Punnakkal parambu, Thejus, Kadavathu Road, N paravoor, Ernakulam
        </div>
    </div>

    <div class="section">
        <div class="section-title">ABOUT ME</div>
        <p>Experienced full-stack developer with a passion for creating innovative digital solutions. I specialize in building scalable web applications using modern technologies like React, Next.js, and Python. With hands-on experience in both frontend and backend development, I bring ideas to life through clean, efficient code and user-centered design.</p>
    </div>

    <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
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
        <div class="section-title">WORK EXPERIENCE</div>
        
        <div class="job">
            <div class="job-title">Software Developer Intern</div>
            <div class="company">Tharonyx</div>
            <div class="date">2025 (3 months)</div>
            <ul>
                <li>Built full-stack applications using Next.js, React, Node.js, and MongoDB</li>
                <li>Developed and integrated APIs, ensuring seamless data flow</li>
                <li>Implemented authentication & database management for secure access</li>
                <li>Optimized UI/UX for performance, responsiveness, and accessibility</li>
                <li>Collaborated in Agile teams, using Git, CI/CD, and Vercel for deployment</li>
            </ul>
        </div>

        <div class="job">
            <div class="job-title">Software Developer Intern</div>
            <div class="company">TAKYON</div>
            <div class="date">2022-2023</div>
            <ul>
                <li>Utilized frameworks and libraries to build and deploy scalable applications</li>
                <li>Participated in code reviews, ensuring high-quality code and knowledge sharing</li>
                <li>Troubleshooted and debugged issues using tools like PyCharm and Git</li>
            </ul>
        </div>

        <div class="job">
            <div class="job-title">Customer Support Executive</div>
            <div class="company">SHOP SHIASH</div>
            <div class="date">2021 (5 months)</div>
            <ul>
                <li>Handled high-volume inbound customer emails and chats, resolving 95% of issues</li>
                <li>Utilized strong problem-solving skills to troubleshoot complex customer issues</li>
                <li>Reduced escalations by 30% through effective communication and technical expertise</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        
        <div class="education-item">
            <div class="degree">Bachelor of Technology</div>
            <div class="institution">KMEA Engineering College, Aluva</div>
            <div class="date">2018-2021</div>
        </div>

        <div class="education-item">
            <div class="degree">Kerala Higher Secondary</div>
            <div class="institution">SNV SKT HSS, N Paravoor</div>
            <div class="date">2015-2017</div>
        </div>

        <div class="education-item">
            <div class="degree">High School</div>
            <div class="institution">Samooham High School, N Paravoor</div>
            <div class="date">2014-2015</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">KEY ACHIEVEMENTS</div>
        <ul>
            <li>50+ Projects completed successfully</li>
            <li>3+ Years of professional development experience</li>
            <li>95% Client satisfaction rate</li>
            <li>Expertise in 8+ modern technologies</li>
        </ul>
    </div>
</body>
</html>
    `

    // Create blob and download
    const blob = new Blob([resumeContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Thejus_Mohanan_Resume.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Show success message
    const event = new CustomEvent("resume-downloaded", {
      detail: { message: "Resume downloaded successfully!" },
    })
    window.dispatchEvent(event)
  }

  return (
    <EnhancedButton
      onClick={generateResumePDF}
      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-full flex items-center gap-2"
    >
      <Download className="w-4 h-4" />
      Download Resume
    </EnhancedButton>
  )
}
