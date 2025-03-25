document.addEventListener("DOMContentLoaded", () => {
  // Load site data from localStorage or use default data
  const defaultData = {
    name: "Michael Awojide",
    title: "Global Finance Associate",
    email: "contact@aakashrajbanshi.com.np",
    phone: "+977 9812345678",
    location: "Kathmandu, Nepal",
    profileImage: "/placeholder.svg",
    about:
      "I am a skilled Flutter developer with over 3 years of experience in building cross-platform mobile applications. My expertise includes working with REST APIs, implementing complex UI/UX designs, and utilizing various state management solutions.",
    skills: [
      { id: "1", name: "Flutter", logo: "/placeholder.svg?height=64&width=64" },
      { id: "2", name: "Dart", logo: "/placeholder.svg?height=64&width=64" },
      { id: "3", name: "Firebase", logo: "/placeholder.svg?height=64&width=64" },
      { id: "4", name: "React", logo: "/placeholder.svg?height=64&width=64" },
      { id: "5", name: "Node.js", logo: "/placeholder.svg?height=64&width=64" },
      { id: "6", name: "JavaScript", logo: "/placeholder.svg?height=64&width=64" },
      { id: "7", name: "HTML/CSS", logo: "/placeholder.svg?height=64&width=64" },
      { id: "8", name: "Git", logo: "/placeholder.svg?height=64&width=64" },
    ],
    experience: [
      {
        id: "1",
        title: "Mid-Level Flutter Developer",
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
        title: "Flutter Developer",
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
        title: "Flutter Developer Intern",
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
      { id: "1", title: "Nagrik App", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "2", title: "Ambition Guru", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "3", title: "Sooka", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "4", title: "Takmo", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "5", title: "Saara", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "6", title: "iFood", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "7", title: "MeroDate", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "8", title: "Weather App", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "9", title: "Music App", category: "application", image: "/placeholder.svg?height=200&width=300" },
      { id: "10", title: "Movie App", category: "application", image: "/placeholder.svg?height=200&width=300" },
      {
        id: "11",
        title: "GitHub Users Search App",
        category: "web-development",
        image: "/placeholder.svg?height=200&width=300",
      },
      { id: "12", title: "Car Zone", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
      { id: "13", title: "Movie", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
      { id: "14", title: "Fitness Zone", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
      { id: "15", title: "E-Commerce", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
      { id: "16", title: "Netflix Clone", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
      { id: "17", title: "Houseman", category: "ui-ux", image: "/placeholder.svg?height=200&width=300" },
    ],
    videos: [
      {
        id: 1,
        title: "Flutter Vs. Flock: Cross-Platform Evaluation",
        date: "Nov 18, 2023",
        description:
          "Explore the differences between Flutter and Flock, a new tool focused on faster development and compatibility with cross-platform frameworks.",
        gradient: "blue-purple",
      },
      {
        id: 2,
        title: "Flutter's Impact On Future Cross-Platform Apps",
        date: "Nov 15, 2023",
        description:
          "Explore Flutter's growing influence on cross-platform app development in 2024 and its future potential across mobile and IoT platforms.",
        gradient: "purple",
      },
      {
        id: 3,
        title: "Building Responsive UIs with Flutter",
        date: "Oct 22, 2023",
        description:
          "Learn how to create beautiful, responsive user interfaces that work across multiple screen sizes using Flutter's flexible layout system.",
        gradient: "cyan-blue",
      },
      {
        id: 4,
        title: "State Management in Flutter: A Complete Guide",
        date: "Oct 10, 2023",
        description:
          "A comprehensive overview of different state management approaches in Flutter, from simple solutions to advanced patterns.",
        gradient: "amber-orange",
      },
    ],
    customSocialLinks: [
      { id: "1", name: "GitHub", icon: "github", url: "https://github.com/aakashrajbanshi", enabled: true },
      { id: "2", name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/aakashrajbanshi", enabled: true },
      { id: "3", name: "Twitter", icon: "twitter", url: "https://twitter.com/aakashrajbanshi", enabled: true },
      { id: "4", name: "Instagram", icon: "instagram", url: "https://instagram.com/aakashrajbanshi", enabled: false },
      { id: "5", name: "Facebook", icon: "facebook", url: "https://facebook.com/aakashrajbanshi", enabled: true },
    ],
    sectionVisibility: {
      about: true,
      resume: true,
      portfolio: true,
      videos: true,
      contact: true,
    },
  }

  // Try to load data from localStorage, if not available use default data
  let siteData = defaultData
  try {
    const storedData = localStorage.getItem("portfolioData")
    if (storedData) {
      siteData = JSON.parse(storedData)

      // Ensure sectionVisibility exists in the loaded data
      if (!siteData.sectionVisibility) {
        siteData.sectionVisibility = defaultData.sectionVisibility
      }
    }
  } catch (error) {
    console.error("Error loading data from localStorage:", error)
  }

  // Initialize the site with data
  initializeSite(siteData)

  // Navigation
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".section")

  // Update navigation based on section visibility
  updateNavigationVisibility(siteData.sectionVisibility)

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")

      // Update active link
      navLinks.forEach((link) => link.classList.remove("active"))
      this.classList.add("active")

      // Show active section
      sections.forEach((section) => {
        section.classList.remove("active")
        if (section.id === sectionId) {
          section.classList.add("active")
        }
      })
    })
  })

  // Portfolio filters
  const portfolioFilters = document.querySelectorAll(".portfolio-filter")
  const portfolioGrid = document.getElementById("portfolio-grid")

  portfolioFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter")

      // Update active filter
      portfolioFilters.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter projects
      renderPortfolioItems(filterValue)
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Message sent successfully!")
      this.reset()
    })
  }

  // Scroll event for navigation shadow
  window.addEventListener("scroll", () => {
    const navigation = document.querySelector(".navigation")
    if (window.scrollY > 50) {
      navigation.classList.add("scrolled")
    } else {
      navigation.classList.remove("scrolled")
    }
  })

  // Helper functions
  function initializeSite(data) {
    // Update profile information
    document.getElementById("profile-name").textContent = data.name
    document.getElementById("profile-title").textContent = data.title
    document.getElementById("profile-email").textContent = data.email
    document.getElementById("profile-phone").textContent = data.phone
    document.getElementById("profile-location").textContent = data.location
    document.getElementById("map-location").textContent = data.location

    // Set profile image
    if (data.profileImage) {
      document.getElementById("profile-image").src = data.profileImage
    }

    // Update about section
    document.getElementById("about-content").textContent = data.about

    // Render skills
    renderSkills(data.skills)

    // Render experience
    renderExperience(data.experience)

    // Render portfolio items
    renderPortfolioItems("all")

    // Render videos
    renderVideos(data.videos)

    // Render social links
    renderSocialLinks(data.customSocialLinks)

    // Update Google Maps link
    updateGoogleMapsLink(data.location)
  }

  function updateNavigationVisibility(sectionVisibility) {
    // Update navigation links based on section visibility
    Object.keys(sectionVisibility).forEach((sectionId) => {
      const navLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`)
      const section = document.getElementById(sectionId)

      if (navLink && section) {
        if (sectionVisibility[sectionId]) {
          navLink.style.display = ""
          section.style.display = ""
        } else {
          navLink.style.display = "none"
          section.style.display = "none"
        }
      }
    })

    // Make sure at least one section is visible and active
    const visibleSections = Object.keys(sectionVisibility).filter((key) => sectionVisibility[key])
    if (visibleSections.length > 0) {
      const firstVisibleSection = visibleSections[0]
      const firstVisibleNavLink = document.querySelector(`.nav-link[data-section="${firstVisibleSection}"]`)
      const firstVisibleSectionElement = document.getElementById(firstVisibleSection)

      if (firstVisibleNavLink && firstVisibleSectionElement) {
        // Remove active class from all links and sections
        navLinks.forEach((link) => link.classList.remove("active"))
        sections.forEach((section) => section.classList.remove("active"))

        // Add active class to first visible link and section
        firstVisibleNavLink.classList.add("active")
        firstVisibleSectionElement.classList.add("active")
      }
    }
  }

  function renderSkills(skills) {
    const skillsGrid = document.getElementById("skills-grid")
    skillsGrid.innerHTML = ""

    skills.forEach((skill) => {
      const skillCard = document.createElement("div")
      skillCard.className = "skill-card"
      skillCard.innerHTML = `
        <div class="skill-logo">
          <img src="${skill.logo || "/placeholder.svg?height=64&width=64"}" alt="${skill.name}">
        </div>
        <span class="skill-name">${skill.name}</span>
      `
      skillsGrid.appendChild(skillCard)
    })
  }

  function renderExperience(experience) {
    const experienceTimeline = document.getElementById("experience-timeline")
    experienceTimeline.innerHTML = ""

    experience.forEach((job) => {
      const timelineItem = document.createElement("div")
      timelineItem.className = "timeline-item"

      let descriptionHTML = ""
      if (job.description && job.description.length > 0) {
        descriptionHTML = `
          <div class="timeline-details">
            <ul>
              ${job.description.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `
      }

      timelineItem.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div class="timeline-title">${job.title}</div>
            <div class="timeline-date">${job.period}</div>
          </div>
          <div class="timeline-description">${job.company}</div>
          ${descriptionHTML}
        </div>
      `
      experienceTimeline.appendChild(timelineItem)
    })
  }

  function renderPortfolioItems(filter) {
    const portfolioGrid = document.getElementById("portfolio-grid")
    portfolioGrid.innerHTML = ""

    const filteredProjects =
      filter === "all" ? siteData.projects : siteData.projects.filter((project) => project.category === filter)

    filteredProjects.forEach((project) => {
      const portfolioItem = document.createElement("div")
      portfolioItem.className = "portfolio-item"
      portfolioItem.innerHTML = `
        <div class="portfolio-image">
          <img src="${project.image || "/placeholder.svg?height=200&width=300"}" alt="${project.title}">
        </div>
        <div class="portfolio-overlay">
          <h3 class="portfolio-title">${project.title}</h3>
          <p class="portfolio-category">${project.category.replace("-", " ")}</p>
          <a href="#" class="portfolio-link">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      `
      portfolioGrid.appendChild(portfolioItem)
    })
  }

  function renderVideos(videos) {
    const videosGrid = document.getElementById("videos-grid")
    videosGrid.innerHTML = ""

    videos.forEach((video) => {
      const videoCard = document.createElement("div")
      videoCard.className = "video-card"

      let gradientClass = ""
      switch (video.gradient) {
        case "blue-purple":
          gradientClass = "bg-gradient-blue-purple"
          break
        case "purple":
          gradientClass = "bg-gradient-purple"
          break
        case "cyan-blue":
          gradientClass = "bg-gradient-cyan-blue"
          break
        case "amber-orange":
          gradientClass = "bg-gradient-amber-orange"
          break
      }

      videoCard.innerHTML = `
        <div class="video-header ${gradientClass}">
          <h3 class="video-title">${video.title}</h3>
        </div>
        <div class="video-content">
          <div class="video-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>${video.date}</span>
          </div>
          <p class="video-description">${video.description}</p>
          <div class="video-footer">
            <span class="video-category">Videos</span>
            <a href="#" class="video-link">
              Watch Video
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      `
      videosGrid.appendChild(videoCard)
    })
  }

  function renderSocialLinks(socialLinks) {
    const socialLinksContainer = document.getElementById("social-links")
    socialLinksContainer.innerHTML = ""

    // Filter enabled social links
    const enabledLinks = socialLinks.filter((link) => link.enabled)

    // Social media icon mapping
    const socialIcons = {
      github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
      linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`,
      instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
      facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
      website: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    }

    enabledLinks.forEach((link) => {
      const socialLink = document.createElement("a")
      socialLink.href = link.url
      socialLink.target = "_blank"
      socialLink.rel = "noopener noreferrer"
      socialLink.className = "social-link"
      socialLink.title = link.name

      // Get icon or use default
      socialLink.innerHTML = socialIcons[link.icon] || socialIcons.website

      socialLinksContainer.appendChild(socialLink)
    })
  }

  function updateGoogleMapsLink(location) {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
    const googleMapsLink = document.getElementById("google-maps-link")
    if (googleMapsLink) {
      googleMapsLink.href = googleMapsUrl
    }
  }
})

