document.addEventListener("DOMContentLoaded", () => {
  // Check if user is authenticated
  if (localStorage.getItem("isAuthenticated") !== "true") {
    window.location.href = "index.html"
    return
  }

  // Load site data from localStorage or use default data
  const defaultData = {
    name: "Aakash Rajbanshi",
    title: "Flutter Developer",
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
      login: true,
    },
    credentials: {
      username: "admin",
      password: "password123",
    },
  }

  let siteData = JSON.parse(localStorage.getItem("portfolioData")) || defaultData

  // Ensure sectionVisibility exists in the loaded data
  if (!siteData.sectionVisibility) {
    siteData.sectionVisibility = defaultData.sectionVisibility
  }

  // Initialize the admin dashboard
  initializeAdminDashboard()

  // Tab navigation
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Update active tab button
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Show active tab content
      tabContents.forEach((content) => {
        content.classList.remove("active")
        if (content.id === `${tabId}-section`) {
          content.classList.add("active")
        }
      })
    })
  })

  // Save all changes
  document.getElementById("save-all-button").addEventListener("click", () => {
    saveAllChanges()
    alert("All changes saved successfully!")
  })

  // Export data
  document.getElementById("export-data-button").addEventListener("click", () => {
    exportData()
  })

  // Import data
  document.getElementById("import-data-button").addEventListener("click", () => {
    document.getElementById("import-file").click()
  })

  document.getElementById("import-file").addEventListener("change", (e) => {
    importData(e)
  })

  // Generate script.js
  document.getElementById("generate-script-button").addEventListener("click", () => {
    generateScriptFile()
  })

  // Individual section save buttons
  document.getElementById("save-profile-button").addEventListener("click", () => {
    saveProfileSection()
    alert("Profile information saved successfully!")
  })

  document.getElementById("save-about-button").addEventListener("click", () => {
    saveAboutSection()
    alert("About information saved successfully!")
  })

  document.getElementById("save-skills-button").addEventListener("click", () => {
    saveSkillsSection()
    alert("Skills saved successfully!")
  })

  document.getElementById("save-experience-button").addEventListener("click", () => {
    saveExperienceSection()
    alert("Experience saved successfully!")
  })

  document.getElementById("save-portfolio-button").addEventListener("click", () => {
    savePortfolioSection()
    alert("Portfolio projects saved successfully!")
  })

  document.getElementById("save-videos-button").addEventListener("click", () => {
    saveVideosSection()
    alert("Videos saved successfully!")
  })

  document.getElementById("save-social-button").addEventListener("click", () => {
    saveSocialSection()
    alert("Social links saved successfully!")
  })

  document.getElementById("save-visibility-button").addEventListener("click", () => {
    saveVisibilitySection()
    alert("Section visibility saved successfully!")
  })

  document.getElementById("save-settings-button").addEventListener("click", () => {
    saveSettingsSection()
  })

  // Add new item buttons
  document.getElementById("add-skill-button").addEventListener("click", () => {
    showAddSkillModal()
  })

  document.getElementById("add-experience-button").addEventListener("click", () => {
    showAddExperienceModal()
  })

  document.getElementById("add-project-button").addEventListener("click", () => {
    showAddProjectModal()
  })

  document.getElementById("add-video-button").addEventListener("click", () => {
    showAddVideoModal()
  })

  document.getElementById("add-social-button").addEventListener("click", () => {
    showAddSocialModal()
  })

  // Storage options
  document.getElementById("clear-storage-button").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all data? This action cannot be undone.")) {
      localStorage.removeItem("portfolioData")
      alert("All data has been cleared. The page will now reload with default data.")
      window.location.reload()
    }
  })

  document.getElementById("export-button").addEventListener("click", () => {
    exportData()
  })

  document.getElementById("import-button").addEventListener("click", () => {
    document.getElementById("import-file").click()
  })

  // Modal close button
  document.querySelector(".close-button").addEventListener("click", () => {
    closeModal()
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal")
    if (e.target === modal) {
      closeModal()
    }
  })

  // Helper functions
  function initializeAdminDashboard() {
    // Profile section
    document.getElementById("profile-name").value = siteData.name
    document.getElementById("profile-title").value = siteData.title
    document.getElementById("profile-email").value = siteData.email
    document.getElementById("profile-phone").value = siteData.phone
    document.getElementById("profile-location").value = siteData.location
    document.getElementById("profile-image").value = siteData.profileImage

    // About section
    document.getElementById("about-content").value = siteData.about

    // Skills section
    renderSkillsList()

    // Experience section
    renderExperienceList()

    // Portfolio section
    renderProjectsList()

    // Videos section
    renderVideosList()

    // Social links section
    renderSocialLinksList()

    // Section visibility
    renderSectionVisibility()

    // Settings section
    document.getElementById("admin-username").value = siteData.credentials.username
    document.getElementById("admin-password").value = ""
    document.getElementById("admin-confirm-password").value = ""
  }

  function saveAllChanges() {
    saveProfileSection()
    saveAboutSection()
    saveSkillsSection()
    saveExperienceSection()
    savePortfolioSection()
    saveVideosSection()
    saveSocialSection()
    saveVisibilitySection()
    // Don't save settings automatically as it requires password confirmation
  }

  function saveProfileSection() {
    siteData.name = document.getElementById("profile-name").value
    siteData.title = document.getElementById("profile-title").value
    siteData.email = document.getElementById("profile-email").value
    siteData.phone = document.getElementById("profile-phone").value
    siteData.location = document.getElementById("profile-location").value
    siteData.profileImage = document.getElementById("profile-image").value

    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveAboutSection() {
    siteData.about = document.getElementById("about-content").value

    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveSkillsSection() {
    // Skills are updated in real-time when adding/editing/deleting
    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveExperienceSection() {
    // Experience items are updated in real-time when adding/editing/deleting
    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function savePortfolioSection() {
    // Projects are updated in real-time when adding/editing/deleting
    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveVideosSection() {
    // Videos are updated in real-time when adding/editing/deleting
    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveSocialSection() {
    // Social links are updated in real-time when adding/editing/deleting
    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveVisibilitySection() {
    // Get all section visibility checkboxes
    const visibilityCheckboxes = document.querySelectorAll(".section-visibility-checkbox")

    // Update siteData.sectionVisibility based on checkbox values
    visibilityCheckboxes.forEach((checkbox) => {
      const sectionId = checkbox.getAttribute("data-section")
      siteData.sectionVisibility[sectionId] = checkbox.checked
    })

    localStorage.setItem("portfolioData", JSON.stringify(siteData))
  }

  function saveSettingsSection() {
    const username = document.getElementById("admin-username").value
    const password = document.getElementById("admin-password").value
    const confirmPassword = document.getElementById("admin-confirm-password").value

    if (!username) {
      alert("Username cannot be empty")
      return
    }

    if (password) {
      if (password !== confirmPassword) {
        alert("Passwords do not match")
        return
      }

      siteData.credentials.password = password
    }

    siteData.credentials.username = username

    localStorage.setItem("portfolioData", JSON.stringify(siteData))
    alert("Settings saved successfully!")
  }

  function renderSkillsList() {
    const skillsList = document.getElementById("skills-list")
    skillsList.innerHTML = ""

    siteData.skills.forEach((skill) => {
      const skillCard = document.createElement("div")
      skillCard.className = "item-card"
      skillCard.innerHTML = `
        <div class="item-header">
          <div class="item-title">${skill.name}</div>
          <div class="item-actions">
            <button class="edit-button" data-id="${skill.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="delete-button" data-id="${skill.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="item-content">
          <div class="item-field">
            <div class="item-field-label">Logo URL</div>
            <div class="item-field-value">${skill.logo || "No logo"}</div>
          </div>
        </div>
      `
      skillsList.appendChild(skillCard)

      // Add event listeners for edit and delete buttons
      skillCard.querySelector(".edit-button").addEventListener("click", function () {
        const skillId = this.getAttribute("data-id")
        const skill = siteData.skills.find((s) => s.id === skillId)
        if (skill) {
          showEditSkillModal(skill)
        }
      })

      skillCard.querySelector(".delete-button").addEventListener("click", function () {
        const skillId = this.getAttribute("data-id")
        if (confirm("Are you sure you want to delete this skill?")) {
          siteData.skills = siteData.skills.filter((s) => s.id !== skillId)
          localStorage.setItem("portfolioData", JSON.stringify(siteData))
          renderSkillsList()
        }
      })
    })
  }

  function renderExperienceList() {
    const experienceList = document.getElementById("experience-list")
    experienceList.innerHTML = ""

    siteData.experience.forEach((exp) => {
      const expCard = document.createElement("div")
      expCard.className = "item-card"

      let descriptionHTML = ""
      if (exp.description && exp.description.length > 0) {
        descriptionHTML = `
          <div class="item-field">
            <div class="item-field-label">Description</div>
            <div class="item-field-value">
              <ul>
                ${exp.description.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        `
      }

      expCard.innerHTML = `
        <div class="item-header">
          <div class="item-title">${exp.title}</div>
          <div class="item-actions">
            <button class="edit-button" data-id="${exp.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="delete-button" data-id="${exp.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="item-content">
          <div class="item-field">
            <div class="item-field-label">Company</div>
            <div class="item-field-value">${exp.company}</div>
          </div>
          <div class="item-field">
            <div class="item-field-label">Period</div>
            <div class="item-field-value">${exp.period}</div>
          </div>
          ${descriptionHTML}
        </div>
      `
      experienceList.appendChild(expCard)

      // Add event listeners for edit and delete buttons
      expCard.querySelector(".edit-button").addEventListener("click", function () {
        const expId = this.getAttribute("data-id")
        const exp = siteData.experience.find((e) => e.id === expId)
        if (exp) {
          showEditExperienceModal(exp)
        }
      })

      expCard.querySelector(".delete-button").addEventListener("click", function () {
        const expId = this.getAttribute("data-id")
        if (confirm("Are you sure you want to delete this experience?")) {
          siteData.experience = siteData.experience.filter((e) => e.id !== expId)
          localStorage.setItem("portfolioData", JSON.stringify(siteData))
          renderExperienceList()
        }
      })
    })
  }

  function renderProjectsList() {
    const projectsList = document.getElementById("projects-list")
    projectsList.innerHTML = ""

    siteData.projects.forEach((project) => {
      const projectCard = document.createElement("div")
      projectCard.className = "item-card"
      projectCard.innerHTML = `
        <div class="item-header">
          <div class="item-title">${project.title}</div>
          <div class="item-actions">
            <button class="edit-button" data-id="${project.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="delete-button" data-id="${project.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="item-content">
          <div class="item-field">
            <div class="item-field-label">Category</div>
            <div class="item-field-value">${project.category.replace("-", " ")}</div>
          </div>
          <div class="item-field">
            <div class="item-field-label">Image URL</div>
            <div class="item-field-value">${project.image || "No image"}</div>
          </div>
        </div>
      `
      projectsList.appendChild(projectCard)

      // Add event listeners for edit and delete buttons
      projectCard.querySelector(".edit-button").addEventListener("click", function () {
        const projectId = this.getAttribute("data-id")
        const project = siteData.projects.find((p) => p.id === projectId)
        if (project) {
          showEditProjectModal(project)
        }
      })

      projectCard.querySelector(".delete-button").addEventListener("click", function () {
        const projectId = this.getAttribute("data-id")
        if (confirm("Are you sure you want to delete this project?")) {
          siteData.projects = siteData.projects.filter((p) => p.id !== projectId)
          localStorage.setItem("portfolioData", JSON.stringify(siteData))
          renderProjectsList()
        }
      })
    })
  }

  function renderVideosList() {
    const videosList = document.getElementById("videos-list")
    videosList.innerHTML = ""

    siteData.videos.forEach((video) => {
      const videoCard = document.createElement("div")
      videoCard.className = "item-card"
      videoCard.innerHTML = `
        <div class="item-header">
          <div class="item-title">${video.title}</div>
          <div class="item-actions">
            <button class="edit-button" data-id="${video.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="delete-button" data-id="${video.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="item-content">
          <div class="item-field">
            <div class="item-field-label">Date</div>
            <div class="item-field-value">${video.date}</div>
          </div>
          <div class="item-field">
            <div class="item-field-label">Description</div>
            <div class="item-field-value">${video.description}</div>
          </div>
          <div class="item-field">
            <div class="item-field-label">Gradient</div>
            <div class="item-field-value">${video.gradient}</div>
          </div>
        </div>
      `
      videosList.appendChild(videoCard)

      // Add event listeners for edit and delete buttons
      videoCard.querySelector(".edit-button").addEventListener("click", function () {
        const videoId = Number.parseInt(this.getAttribute("data-id"))
        const video = siteData.videos.find((v) => v.id === videoId)
        if (video) {
          showEditVideoModal(video)
        }
      })

      videoCard.querySelector(".delete-button").addEventListener("click", function () {
        const videoId = Number.parseInt(this.getAttribute("data-id"))
        if (confirm("Are you sure you want to delete this video?")) {
          siteData.videos = siteData.videos.filter((v) => v.id !== videoId)
          localStorage.setItem("portfolioData", JSON.stringify(siteData))
          renderVideosList()
        }
      })
    })
  }

  function renderSocialLinksList() {
    const socialLinksList = document.getElementById("social-links-list")
    socialLinksList.innerHTML = ""

    siteData.customSocialLinks.forEach((link) => {
      const linkCard = document.createElement("div")
      linkCard.className = "item-card"
      linkCard.innerHTML = `
        <div class="item-header">
          <div class="item-title">${link.name}</div>
          <div class="item-actions">
            <button class="edit-button" data-id="${link.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="delete-button" data-id="${link.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="item-content">
          <div class="item-field">
            <div class="item-field-label">Icon</div>
            <div class="item-field-value">${link.icon}</div>
          </div>
          <div class="item-field">
            <div class="item-field-label">URL</div>
            <div class="item-field-value">${link.url}</div>
          </div>
          <div class="item-field">
            <div class="item-field-label">Status</div>
            <div class="item-field-value">${link.enabled ? "Enabled" : "Disabled"}</div>
          </div>
        </div>
      `
      socialLinksList.appendChild(linkCard)

      // Add event listeners for edit and delete buttons
      linkCard.querySelector(".edit-button").addEventListener("click", function () {
        const linkId = this.getAttribute("data-id")
        const link = siteData.customSocialLinks.find((l) => l.id === linkId)
        if (link) {
          showEditSocialModal(link)
        }
      })

      linkCard.querySelector(".delete-button").addEventListener("click", function () {
        const linkId = this.getAttribute("data-id")
        if (confirm("Are you sure you want to delete this social link?")) {
          siteData.customSocialLinks = siteData.customSocialLinks.filter((l) => l.id !== linkId)
          localStorage.setItem("portfolioData", JSON.stringify(siteData))
          renderSocialLinksList()
        }
      })
    })
  }

  function renderSectionVisibility() {
    const visibilitySection = document.getElementById("visibility-list")
    visibilitySection.innerHTML = ""

    // Create checkboxes for each section
    Object.keys(siteData.sectionVisibility).forEach((sectionId) => {
      const isVisible = siteData.sectionVisibility[sectionId]
      const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1) // Capitalize first letter

      const visibilityItem = document.createElement("div")
      visibilityItem.className = "visibility-item"
      visibilityItem.innerHTML = `
        <label class="visibility-label">
          <input type="checkbox" class="section-visibility-checkbox" data-section="${sectionId}" ${isVisible ? "checked" : ""}>
          <span>${sectionName} Section</span>
        </label>
      `

      visibilitySection.appendChild(visibilityItem)
    })
  }

  function showAddSkillModal() {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Add New Skill</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="skill-name">Skill Name</label>
          <input type="text" id="skill-name" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="skill-logo">Logo URL</label>
          <input type="text" id="skill-logo" class="form-input" placeholder="/placeholder.svg?height=64&width=64">
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-skill">Cancel</button>
          <button class="confirm-button" id="confirm-skill">Add Skill</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-skill").addEventListener("click", closeModal)
    document.getElementById("confirm-skill").addEventListener("click", () => {
      const name = document.getElementById("skill-name").value
      const logo = document.getElementById("skill-logo").value

      if (!name) {
        alert("Skill name is required")
        return
      }

      const newSkill = {
        id: Date.now().toString(),
        name: name,
        logo: logo || "/placeholder.svg?height=64&width=64",
      }

      siteData.skills.push(newSkill)
      localStorage.setItem("portfolioData", JSON.stringify(siteData))
      renderSkillsList()
      closeModal()
    })
  }

  function showEditSkillModal(skill) {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Edit Skill</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="skill-name">Skill Name</label>
          <input type="text" id="skill-name" class="form-input" value="${skill.name}" required>
        </div>
        <div class="form-group">
          <label for="skill-logo">Logo URL</label>
          <input type="text" id="skill-logo" class="form-input" value="${skill.logo || ""}">
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-skill">Cancel</button>
          <button class="confirm-button" id="confirm-skill">Update Skill</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-skill").addEventListener("click", closeModal)
    document.getElementById("confirm-skill").addEventListener("click", () => {
      const name = document.getElementById("skill-name").value
      const logo = document.getElementById("skill-logo").value

      if (!name) {
        alert("Skill name is required")
        return
      }

      const skillIndex = siteData.skills.findIndex((s) => s.id === skill.id)
      if (skillIndex !== -1) {
        siteData.skills[skillIndex] = {
          ...siteData.skills[skillIndex],
          name: name,
          logo: logo || "/placeholder.svg?height=64&width=64",
        }

        localStorage.setItem("portfolioData", JSON.stringify(siteData))
        renderSkillsList()
        closeModal()
      }
    })
  }

  function showAddExperienceModal() {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Add New Experience</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="exp-title">Job Title</label>
          <input type="text" id="exp-title" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="exp-company">Company</label>
          <input type="text" id="exp-company" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="exp-period">Period</label>
          <input type="text" id="exp-period" class="form-input" placeholder="e.g. Jan, 2022 — Dec, 2022 • 12 mos" required>
        </div>
        <div class="form-group">
          <label for="exp-description">Description (one item per line)</label>
          <textarea id="exp-description" class="form-textarea" rows="6"></textarea>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-exp">Cancel</button>
          <button class="confirm-button" id="confirm-exp">Add Experience</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-exp").addEventListener("click", closeModal)
    document.getElementById("confirm-exp").addEventListener("click", () => {
      const title = document.getElementById("exp-title").value
      const company = document.getElementById("exp-company").value
      const period = document.getElementById("exp-period").value
      const description = document.getElementById("exp-description").value

      if (!title || !company || !period) {
        alert("Title, company, and period are required")
        return
      }

      const descriptionItems = description.split("\n").filter((item) => item.trim() !== "")

      const newExp = {
        id: Date.now().toString(),
        title: title,
        company: company,
        period: period,
        description: descriptionItems,
      }

      siteData.experience.push(newExp)
      localStorage.setItem("portfolioData", JSON.stringify(siteData))
      renderExperienceList()
      closeModal()
    })
  }

  function showEditExperienceModal(exp) {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    const descriptionText = exp.description ? exp.description.join("\n") : ""

    modalContent.innerHTML = `
      <h3>Edit Experience</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="exp-title">Job Title</label>
          <input type="text" id="exp-title" class="form-input" value="${exp.title}" required>
        </div>
        <div class="form-group">
          <label for="exp-company">Company</label>
          <input type="text" id="exp-company" class="form-input" value="${exp.company}" required>
        </div>
        <div class="form-group">
          <label for="exp-period">Period</label>
          <input type="text" id="exp-period" class="form-input" value="${exp.period}" required>
        </div>
        <div class="form-group">
          <label for="exp-description">Description (one item per line)</label>
          <textarea id="exp-description" class="form-textarea" rows="6">${descriptionText}</textarea>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-exp">Cancel</button>
          <button class="confirm-button" id="confirm-exp">Update Experience</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-exp").addEventListener("click", closeModal)
    document.getElementById("confirm-exp").addEventListener("click", () => {
      const title = document.getElementById("exp-title").value
      const company = document.getElementById("exp-company").value
      const period = document.getElementById("exp-period").value
      const description = document.getElementById("exp-description").value

      if (!title || !company || !period) {
        alert("Title, company, and period are required")
        return
      }

      const descriptionItems = description.split("\n").filter((item) => item.trim() !== "")

      const expIndex = siteData.experience.findIndex((e) => e.id === exp.id)
      if (expIndex !== -1) {
        siteData.experience[expIndex] = {
          ...siteData.experience[expIndex],
          title: title,
          company: company,
          period: period,
          description: descriptionItems,
        }

        localStorage.setItem("portfolioData", JSON.stringify(siteData))
        renderExperienceList()
        closeModal()
      }
    })
  }

  function showAddProjectModal() {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Add New Project</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="project-title">Project Title</label>
          <input type="text" id="project-title" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="project-category">Category</label>
          <select id="project-category" class="form-select" required>
            <option value="application">Application</option>
            <option value="web-development">Web Development</option>
            <option value="ui-ux">UI/UX</option>
          </select>
        </div>
        <div class="form-group">
          <label for="project-image">Image URL</label>
          <input type="text" id="project-image" class="form-input" placeholder="/placeholder.svg?height=200&width=300">
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-project">Cancel</button>
          <button class="confirm-button" id="confirm-project">Add Project</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-project").addEventListener("click", closeModal)
    document.getElementById("confirm-project").addEventListener("click", () => {
      const title = document.getElementById("project-title").value
      const category = document.getElementById("project-category").value
      const image = document.getElementById("project-image").value

      if (!title || !category) {
        alert("Title and category are required")
        return
      }

      const newProject = {
        id: Date.now().toString(),
        title: title,
        category: category,
        image: image || "/placeholder.svg?height=200&width=300",
      }

      siteData.projects.push(newProject)
      localStorage.setItem("portfolioData", JSON.stringify(siteData))
      renderProjectsList()
      closeModal()
    })
  }

  function showEditProjectModal(project) {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Edit Project</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="project-title">Project Title</label>
          <input type="text" id="project-title" class="form-input" value="${project.title}" required>
        </div>
        <div class="form-group">
          <label for="project-category">Category</label>
          <select id="project-category" class="form-select" required>
            <option value="application" ${project.category === "application" ? "selected" : ""}>Application</option>
            <option value="web-development" ${project.category === "web-development" ? "selected" : ""}>Web Development</option>
            <option value="ui-ux" ${project.category === "ui-ux" ? "selected" : ""}>UI/UX</option>
          </select>
        </div>
        <div class="form-group">
          <label for="project-image">Image URL</label>
          <input type="text" id="project-image" class="form-input" value="${project.image || ""}">
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-project">Cancel</button>
          <button class="confirm-button" id="confirm-project">Update Project</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-project").addEventListener("click", closeModal)
    document.getElementById("confirm-project").addEventListener("click", () => {
      const title = document.getElementById("project-title").value
      const category = document.getElementById("project-category").value
      const image = document.getElementById("project-image").value

      if (!title || !category) {
        alert("Title and category are required")
        return
      }

      const projectIndex = siteData.projects.findIndex((p) => p.id === project.id)
      if (projectIndex !== -1) {
        siteData.projects[projectIndex] = {
          ...siteData.projects[projectIndex],
          title: title,
          category: category,
          image: image || "/placeholder.svg?height=200&width=300",
        }

        localStorage.setItem("portfolioData", JSON.stringify(siteData))
        renderProjectsList()
        closeModal()
      }
    })
  }

  function showAddVideoModal() {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Add New Video</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="video-title">Video Title</label>
          <input type="text" id="video-title" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="video-date">Date</label>
          <input type="text" id="video-date" class="form-input" placeholder="e.g. Nov 18, 2023" required>
        </div>
        <div class="form-group">
          <label for="video-description">Description</label>
          <textarea id="video-description" class="form-textarea" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="video-gradient">Gradient Style</label>
          <select id="video-gradient" class="form-select" required>
            <option value="blue-purple">Blue to Purple</option>
            <option value="purple">Purple</option>
            <option value="cyan-blue">Cyan to Blue</option>
            <option value="amber-orange">Amber to Orange</option>
          </select>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-video">Cancel</button>
          <button class="confirm-button" id="confirm-video">Add Video</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-video").addEventListener("click", closeModal)
    document.getElementById("confirm-video").addEventListener("click", () => {
      const title = document.getElementById("video-title").value
      const date = document.getElementById("video-date").value
      const description = document.getElementById("video-description").value
      const gradient = document.getElementById("video-gradient").value

      if (!title || !date) {
        alert("Title and date are required")
        return
      }

      const newVideo = {
        id: Date.now(),
        title: title,
        date: date,
        description: description,
        gradient: gradient,
      }

      siteData.videos.push(newVideo)
      localStorage.setItem("portfolioData", JSON.stringify(siteData))
      renderVideosList()
      closeModal()
    })
  }

  function showEditVideoModal(video) {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Edit Video</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="video-title">Video Title</label>
          <input type="text" id="video-title" class="form-input" value="${video.title}" required>
        </div>
        <div class="form-group">
          <label for="video-date">Date</label>
          <input type="text" id="video-date" class="form-input" value="${video.date}" required>
        </div>
        <div class="form-group">
          <label for="video-description">Description</label>
          <textarea id="video-description" class="form-textarea" rows="4">${video.description}</textarea>
        </div>
        <div class="form-group">
          <label for="video-gradient">Gradient Style</label>
          <select id="video-gradient" class="form-select" required>
            <option value="blue-purple" ${video.gradient === "blue-purple" ? "selected" : ""}>Blue to Purple</option>
            <option value="purple" ${video.gradient === "purple" ? "selected" : ""}>Purple</option>
            <option value="cyan-blue" ${video.gradient === "cyan-blue" ? "selected" : ""}>Cyan to Blue</option>
            <option value="amber-orange" ${video.gradient === "amber-orange" ? "selected" : ""}>Amber to Orange</option>
          </select>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-video">Cancel</button>
          <button class="confirm-button" id="confirm-video">Update Video</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-video").addEventListener("click", closeModal)
    document.getElementById("confirm-video").addEventListener("click", () => {
      const title = document.getElementById("video-title").value
      const date = document.getElementById("video-date").value
      const description = document.getElementById("video-description").value
      const gradient = document.getElementById("video-gradient").value

      if (!title || !date) {
        alert("Title and date are required")
        return
      }

      const videoIndex = siteData.videos.findIndex((v) => v.id === video.id)
      if (videoIndex !== -1) {
        siteData.videos[videoIndex] = {
          ...siteData.videos[videoIndex],
          title: title,
          date: date,
          description: description,
          gradient: gradient,
        }

        localStorage.setItem("portfolioData", JSON.stringify(siteData))
        renderVideosList()
        closeModal()
      }
    })
  }

  function showAddSocialModal() {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Add New Social Link</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="social-name">Name</label>
          <input type="text" id="social-name" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="social-icon">Icon</label>
          <select id="social-icon" class="form-select" required>
            <option value="github">GitHub</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="youtube">YouTube</option>
            <option value="dribbble">Dribbble</option>
            <option value="website">Website</option>
            <option value="codepen">CodePen</option>
            <option value="figma">Figma</option>
          </select>
        </div>
        <div class="form-group">
          <label for="social-url">URL</label>
          <input type="url" id="social-url" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="social-enabled" checked>
            Enabled
          </label>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-social">Cancel</button>
          <button class="confirm-button" id="confirm-social">Add Social Link</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-social").addEventListener("click", closeModal)
    document.getElementById("confirm-social").addEventListener("click", () => {
      const name = document.getElementById("social-name").value
      const icon = document.getElementById("social-icon").value
      const url = document.getElementById("social-url").value
      const enabled = document.getElementById("social-enabled").checked

      if (!name || !icon || !url) {
        alert("Name, icon, and URL are required")
        return
      }

      const newSocial = {
        id: Date.now().toString(),
        name: name,
        icon: icon,
        url: url,
        enabled: enabled,
      }

      siteData.customSocialLinks.push(newSocial)
      localStorage.setItem("portfolioData", JSON.stringify(siteData))
      renderSocialLinksList()
      closeModal()
    })
  }

  function showEditSocialModal(link) {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
      <h3>Edit Social Link</h3>
      <div class="modal-form">
        <div class="form-group">
          <label for="social-name">Name</label>
          <input type="text" id="social-name" class="form-input" value="${link.name}" required>
        </div>
        <div class="form-group">
          <label for="social-icon">Icon</label>
          <select id="social-icon" class="form-select" required>
            <option value="github" ${link.icon === "github" ? "selected" : ""}>GitHub</option>
            <option value="linkedin" ${link.icon === "linkedin" ? "selected" : ""}>LinkedIn</option>
            <option value="twitter" ${link.icon === "twitter" ? "selected" : ""}>Twitter</option>
            <option value="instagram" ${link.icon === "instagram" ? "selected" : ""}>Instagram</option>
            <option value="facebook" ${link.icon === "facebook" ? "selected" : ""}>Facebook</option>
            <option value="youtube" ${link.icon === "youtube" ? "selected" : ""}>YouTube</option>
            <option value="dribbble" ${link.icon === "dribbble" ? "selected" : ""}>Dribbble</option>
            <option value="website"
  ${link.icon === "website" ? "selected" : ""}>Website</option>
            <option value="codepen" ${link.icon === "codepen" ? "selected" : ""}>CodePen</option>
            <option value="figma" ${link.icon === "figma" ? "selected" : ""}>Figma</option>
          </select>
        </div>
        <div class="form-group">
          <label for="social-url">URL</label>
          <input type="url" id="social-url" class="form-input" value="${link.url}" required>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="social-enabled" ${link.enabled ? "checked" : ""}>
            Enabled
          </label>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" id="cancel-social">Cancel</button>
          <button class="confirm-button" id="confirm-social">Update Social Link</button>
        </div>
      </div>
    `

    modal.style.display = "block"

    document.getElementById("cancel-social").addEventListener("click", closeModal)
    document.getElementById("confirm-social").addEventListener("click", () => {
      const name = document.getElementById("social-name").value
      const icon = document.getElementById("social-icon").value
      const url = document.getElementById("social-url").value
      const enabled = document.getElementById("social-enabled").checked

      if (!name || !icon || !url) {
        alert("Name, icon, and URL are required")
        return
      }

      const linkIndex = siteData.customSocialLinks.findIndex((l) => l.id === link.id)
      if (linkIndex !== -1) {
        siteData.customSocialLinks[linkIndex] = {
          ...siteData.customSocialLinks[linkIndex],
          name: name,
          icon: icon,
          url: url,
          enabled: enabled,
        }

        localStorage.setItem("portfolioData", JSON.stringify(siteData))
        renderSocialLinksList()
        closeModal()
      }
    })
  }

  function closeModal() {
    const modal = document.getElementById("modal")
    modal.style.display = "none"
  }

  function exportData() {
    const dataStr = JSON.stringify(siteData, null, 2)
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`

    const exportFileDefaultName = "portfolio-data.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  function importData(e) {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result)

        // Validate imported data
        if (!importedData.name || !importedData.title) {
          throw new Error("Invalid data format")
        }

        // Ensure sectionVisibility exists in the imported data
        if (!importedData.sectionVisibility) {
          importedData.sectionVisibility = defaultData.sectionVisibility
        }

        siteData = importedData
        localStorage.setItem("portfolioData", JSON.stringify(siteData))

        alert("Data imported successfully! The page will now reload.")
        window.location.reload()
      } catch (error) {
        alert("Error importing data: " + error.message)
      }
    }
    reader.readAsText(file)
  }

  function generateScriptFile() {
    // Generate a script.js file with the current data
    const scriptContent = `document.addEventListener('DOMContentLoaded', function() {
  // Site data
  const siteData = ${JSON.stringify(siteData, null, 2)};

  // Initialize the site with data
  initializeSite(siteData);

  // Navigation
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Update navigation based on section visibility
  updateNavigationVisibility(siteData.sectionVisibility);

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      
      // Update active link
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      
      // Show active section
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
          section.classList.add('active');
        }
      });
    });
  });

  // Portfolio filters
  const portfolioFilters = document.querySelectorAll('.portfolio-filter');
  const portfolioGrid = document.getElementById('portfolio-grid');

  portfolioFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active filter
      portfolioFilters.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      renderPortfolioItems(filterValue);
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent successfully!');
      this.reset();
    });
  }

  // Login form
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-container');
  const adminPanel = document.getElementById('admin-panel');
  const logoutButton = document.getElementById('logout-button');

  if (loginForm) {
    // Check if already logged in
    if (localStorage.getItem('isAuthenticated') === 'true') {
      loginContainer.classList.add('hidden');
      adminPanel.classList.remove('hidden');
    }

    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === siteData.credentials.username && password === siteData.credentials.password) {
        localStorage.setItem('isAuthenticated', 'true');
        loginContainer.classList.add('hidden');
        adminPanel.classList.remove('hidden');
      } else {
        alert('Invalid username or password');
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      localStorage.removeItem('isAuthenticated');
      loginContainer.classList.remove('hidden');
      adminPanel.classList.add('hidden');
    });
  }

  // Helper functions
  function initializeSite(data) {
    // Update profile information
    document.getElementById('profile-name').textContent = data.name;
    document.getElementById('profile-title').textContent = data.title;
    document.getElementById('profile-email').textContent = data.email;
    document.getElementById('profile-phone').textContent = data.phone;
    document.getElementById('profile-location').textContent = data.location;
    document.getElementById('map-location').textContent = data.location;
    
    // Set profile image
    if (data.profileImage) {
      document.getElementById('profile-image').src = data.profileImage;
    }

    // Update about section
    document.getElementById('about-content').textContent = data.about;

    // Render skills
    renderSkills(data.skills);

    // Render experience
    renderExperience(data.experience);

    // Render portfolio items
    renderPortfolioItems('all');

    // Render videos
    renderVideos(data.videos);

    // Render social links
    renderSocialLinks(data.customSocialLinks);

    // Update Google Maps link
    updateGoogleMapsLink(data.location);
  }

  function updateNavigationVisibility(sectionVisibility) {
    // Update navigation links based on section visibility
    Object.keys(sectionVisibility).forEach(sectionId => {
      const navLink = document.querySelector(\`.nav-link[data-section="\${sectionId}"]\`);
      const section = document.getElementById(sectionId);
      
      if (navLink && section) {
        if (sectionVisibility[sectionId]) {
          navLink.style.display = '';
          section.style.display = '';
        } else {
          navLink.style.display = 'none';
          section.style.display = 'none';
        }
      }
    });
    
    // Make sure at least one section is visible and active
    const visibleSections = Object.keys(sectionVisibility).filter(key => sectionVisibility[key]);
    if (visibleSections.length > 0) {
      const firstVisibleSection = visibleSections[0];
      const firstVisibleNavLink = document.querySelector(\`.nav-link[data-section="\${firstVisibleSection}"]\`);
      const firstVisibleSectionElement = document.getElementById(firstVisibleSection);
      
      if (firstVisibleNavLink && firstVisibleSectionElement) {
        // Remove active class from all links and sections
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        // Add active class to first visible link and section
        firstVisibleNavLink.classList.add('active');
        firstVisibleSectionElement.classList.add('active');
      }
    }
  }

  // Other helper functions (renderSkills, renderExperience, etc.)
  // ...
});`

    // Create a download link for the script file
    const dataUri = `data:text/javascript;charset=utf-8,${encodeURIComponent(scriptContent)}`
    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", "script.js")
    linkElement.click()

    alert("Script file generated successfully! You can now upload this file to your Vercel project.")
  }
})

