"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type AdminData = {
  name: string
  password: string
}

type SocialLink = {
  id: string
  name: string
  url: string
  icon: string
  enabled: boolean
}

type Skill = {
  id: string
  name: string
  logo: string
  level: number
}

type Service = {
  id: string
  title: string
  description: string
  icon: string
}

type Education = {
  id: string
  institution: string
  degree: string
  period: string
}

type Experience = {
  id: string
  position: string
  company: string
  period: string
  description: string[]
}

type Project = {
  id: string
  title: string
  category: string
  image: string
  link: string
}

type Video = {
  id: string
  title: string
  date: string
  description: string
  image: string
  gradient: string
  link: string
}

type SiteData = {
  profileImage: string
  name: string
  title: string
  email: string
  phone: string
  location: string
  about: string
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
  }
  // New fields
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
  }
  skills: Skill[]
  services: Service[]
  education: Education[]
  experience: Experience[]
  projects: Project[]
  videos: Video[]
  customSocialLinks: SocialLink[]
}

type AuthContextType = {
  isAuthenticated: boolean
  login: (name: string, password: string) => boolean
  logout: () => void
  updateAdminCredentials: (oldName: string, oldPassword: string, newName: string, newPassword: string) => boolean
  siteData: SiteData
  updateSiteData: (newData: Partial<SiteData>) => void
  updateSection: <T>(sectionName: keyof SiteData, data: T) => void
  exportDataToJSON: () => void
  importDataFromJSON: (jsonData: string) => boolean
}

const defaultSiteData: SiteData = {
  profileImage: "/placeholder.svg?height=128&width=128",
  name: "Aakash Rajbanshi",
  title: "Flutter Developer",
  email: "aakashrajbanshi58...",
  phone: "+977 9816******",
  location: "Kathmandu, Nepal",
  about:
    "A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state management solutions.",
  socialLinks: {
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  theme: {
    primaryColor: "#f59e0b", // amber-500
    secondaryColor: "#18181b", // zinc-900
    accentColor: "#3b82f6", // blue-500
  },
  skills: [
    { id: "1", name: "Flutter", logo: "/placeholder.svg?height=64&width=64&text=Flutter", level: 90 },
    { id: "2", name: "Dart", logo: "/placeholder.svg?height=64&width=64&text=Dart", level: 85 },
    { id: "3", name: "Firebase", logo: "/placeholder.svg?height=64&width=64&text=Firebase", level: 80 },
    { id: "4", name: "REST API", logo: "/placeholder.svg?height=64&width=64&text=API", level: 75 },
  ],
  services: [
    {
      id: "1",
      title: "Mobile Apps",
      description: "Professional development of applications for Android and iOS.",
      icon: "smartphone",
    },
    {
      id: "2",
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
      icon: "layout",
    },
    {
      id: "3",
      title: "UI/UX Design",
      description: "The most modern and high-quality design made at a professional level.",
      icon: "pen-tool",
    },
    {
      id: "4",
      title: "Backend Development",
      description: "High-performance backend services designed for scalability and seamless user experience.",
      icon: "server",
    },
  ],
  education: [
    {
      id: "1",
      institution: "Niharika College Of Management And Information Technology",
      degree: "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
      period: "2017 — 2021",
    },
    {
      id: "2",
      institution: "Greenland International College",
      degree: "+2 Science",
      period: "2015 — 2017",
    },
  ],
  experience: [
    {
      id: "1",
      position: "Mid-Level Flutter Developer",
      company: "Takmo Technologies",
      period: "Aug, 2023 — Present • 8 mos",
      description: [
        "Developed new features and implemented UI designs into code using Flutter.",
        "Designed and created custom e-form features including scanning features and data entries.",
        "Organized and managed state using Provider and GetX.",
        "Designed dynamic functionalities using the BLOC design pattern.",
        "Integrated APIs for seamless data communication and backend functionality.",
        "Implemented payment gateway integration like Khalti for secure transactions.",
        "Collaborated with other developers and backend team to deliver features.",
        "Participated in team meetings to discuss new features and project updates.",
        "Ensured smooth functionality and user-friendly experiences throughout the app.",
        "Performed code review and deployed the app in Playstore and Appstore.",
      ],
    },
    {
      id: "2",
      position: "Flutter Developer",
      company: "Infocore Technology",
      period: "Oct, 2022 — Aug, 2023 • 11 mos",
      description: [
        "Developed new features and transformed UI designs into fully functional user interfaces.",
        "Implemented payment solution like esewa for secure and seamless transactions.",
        "Optimized application performance to ensure a smooth and engaging user experience.",
        "Supported fellow team members initiatives by developing solutions to common problems and sharing those solutions.",
        "Identified and resolved bugs, improving app stability and performance.",
        "Wrote clean, maintainable, and testable code following best practices.",
        "Integrated CI/CD pipelines and automated testing to ensure backend compatibility.",
        "Collaborated with backend developers, designers, and cross-functional teams to deliver scalable, high-quality solutions.",
        "Performed code review and deployed the app in Playstore and Appstore.",
      ],
    },
    {
      id: "3",
      position: "Flutter Developer Intern",
      company: "YAJ Tech Pvt. Ltd.",
      period: "May, 2022 — Sep, 2022 • 5 mos",
      description: [
        "Assisted in developing and maintaining Flutter applications, ensuring seamless functionality and user-friendly interfaces.",
        "Supported the implementation of visually appealing UI designs that aligned with client requirements and design principles.",
        "Collaborated with cross-functional teams, including back-end developers and designers, to deliver scalable solutions.",
        "Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user experience.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Nagrik App",
      category: "application",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "2",
      title: "Ambition Guru",
      category: "application",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    { id: "3", title: "Sooka", category: "application", image: "/placeholder.svg?height=200&width=300", link: "#" },
    { id: "4", title: "Takmo", category: "application", image: "/placeholder.svg?height=200&width=300", link: "#" },
    { id: "5", title: "Saara", category: "application", image: "/placeholder.svg?height=200&width=300", link: "#" },
    { id: "6", title: "iFood", category: "application", image: "/placeholder.svg?height=200&width=300", link: "#" },
    { id: "7", title: "MeroDate", category: "application", image: "/placeholder.svg?height=200&width=300", link: "#" },
    {
      id: "8",
      title: "Weather App",
      category: "application",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    { id: "9", title: "Music App", category: "application", image: "/placeholder.svg?height=200&width=300", link: "#" },
    {
      id: "10",
      title: "Movie App",
      category: "application",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "11",
      title: "GitHub Users Search App",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "12",
      title: "Car Zone",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "13",
      title: "Movie",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "14",
      title: "Fitness Zone",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "15",
      title: "E-Commerce",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "16",
      title: "Netflix Clone",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    { id: "17", title: "Houseman", category: "ui-ux", image: "/placeholder.svg?height=200&width=300", link: "#" },
  ],
  videos: [
    {
      id: "1",
      title: "Flutter Vs. Flock: Cross-Platform Evaluation",
      date: "Nov 18, 2023",
      description:
        "Explore the differences between Flutter and Flock, a new tool focused on faster development and compatibility with cross-platform frameworks.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-blue-900 to-purple-900",
      link: "#",
    },
    {
      id: "2",
      title: "Flutter's Impact On Future Cross-Platform Apps",
      date: "Nov 15, 2023",
      description:
        "Explore Flutter's growing influence on cross-platform app development in 2024 and its future potential across mobile and IoT platforms.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-purple-800 to-purple-600",
      link: "#",
    },
    {
      id: "3",
      title: "Building Responsive UIs with Flutter",
      date: "Oct 22, 2023",
      description:
        "Learn how to create beautiful, responsive user interfaces that work across multiple screen sizes using Flutter's flexible layout system.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-cyan-800 to-blue-600",
      link: "#",
    },
    {
      id: "4",
      title: "State Management in Flutter: A Complete Guide",
      date: "Oct 10, 2023",
      description:
        "A comprehensive overview of different state management approaches in Flutter, from simple solutions to advanced patterns.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-amber-700 to-orange-600",
      link: "#",
    },
  ],
  customSocialLinks: [
    { id: "1", name: "GitHub", url: "#", icon: "github", enabled: true },
    { id: "2", name: "LinkedIn", url: "#", icon: "linkedin", enabled: true },
    { id: "3", name: "Twitter", url: "#", icon: "twitter", enabled: true },
    { id: "4", name: "Instagram", url: "#", icon: "instagram", enabled: false },
    { id: "5", name: "Facebook", url: "#", icon: "facebook", enabled: false },
    { id: "6", name: "YouTube", url: "#", icon: "youtube", enabled: false },
    { id: "7", name: "Dribbble", url: "#", icon: "dribbble", enabled: false },
    { id: "8", name: "Behance", url: "#", icon: "behance", enabled: false },
    { id: "9", name: "Medium", url: "#", icon: "medium", enabled: false },
    { id: "10", name: "CodePen", url: "#", icon: "codepen", enabled: false },
  ],
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminData, setAdminData] = useState<AdminData>({ name: "Admin", password: "admin123" })
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData)

  // Load data from localStorage on component mount
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const storedAdminData = localStorage.getItem("adminData")
      const storedSiteData = localStorage.getItem("siteData")

      if (storedAdminData) {
        setAdminData(JSON.parse(storedAdminData))
      } else {
        // Set default admin credentials if none exist
        localStorage.setItem("adminData", JSON.stringify(adminData))
      }

      if (storedSiteData) {
        setSiteData(JSON.parse(storedSiteData))
      } else {
        // Set default site data if none exists
        localStorage.setItem("siteData", JSON.stringify(defaultSiteData))
      }
    }
  }, [])

  const login = (name: string, password: string) => {
    if (name === adminData.name && password === adminData.password) {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const updateAdminCredentials = (oldName: string, oldPassword: string, newName: string, newPassword: string) => {
    if (oldName === adminData.name && oldPassword === adminData.password) {
      const newAdminData = { name: newName, password: newPassword }
      setAdminData(newAdminData)
      localStorage.setItem("adminData", JSON.stringify(newAdminData))
      return true
    }
    return false
  }

  const updateSiteData = (newData: Partial<SiteData>) => {
    const updatedData = { ...siteData, ...newData }
    setSiteData(updatedData)
    localStorage.setItem("siteData", JSON.stringify(updatedData))
  }

  const updateSection = <T,>(sectionName: keyof SiteData, data: T) => {
    const updatedData = { ...siteData, [sectionName]: data }
    setSiteData(updatedData)

    // Log the update for debugging
    console.log(`Updating section ${sectionName}:`, data)

    // Ensure we're saving the complete updated data
    localStorage.setItem("siteData", JSON.stringify(updatedData))
  }

  const exportDataToJSON = () => {
    const dataStr = JSON.stringify(siteData, null, 2)
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`

    const exportFileDefaultName = "portfolio-data.json"
    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  const importDataFromJSON = (jsonData: string) => {
    try {
      const parsedData = JSON.parse(jsonData)
      setSiteData(parsedData)
      localStorage.setItem("siteData", jsonData)
      return true
    } catch (error) {
      console.error("Error importing data:", error)
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        updateAdminCredentials,
        siteData,
        updateSiteData,
        updateSection,
        exportDataToJSON,
        importDataFromJSON,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

