"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  LogOut,
  Save,
  RefreshCw,
  Key,
  Plus,
  Trash2,
  Edit,
  X,
  Check,
  Smartphone,
  Layout,
  PenTool,
  Server,
  ImageIcon,
  Eye,
  EyeOff,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Dribbble,
  Globe,
  Codepen,
  Figma,
  Upload,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { GitHubStorage } from "./github-storage"
import { GoogleDriveStorage } from "./google-drive-storage"

// Social media icon mapping
const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
  youtube: <Youtube className="h-4 w-4" />,
  dribbble: <Dribbble className="h-4 w-4" />,
  website: <Globe className="h-4 w-4" />,
  codepen: <Codepen className="h-4 w-4" />,
  figma: <Figma className="h-4 w-4" />,
}

export default function AdminDashboard() {
  const {
    logout,
    siteData,
    updateSiteData,
    updateSection,
    updateAdminCredentials,
    exportDataToJSON,
    importDataFromJSON,
  } = useAuth()
  const [profileData, setProfileData] = useState({
    name: siteData.name,
    title: siteData.title,
    email: siteData.email,
    phone: siteData.phone,
    location: siteData.location,
    about: siteData.about,
    profileImage: siteData.profileImage,
  })

  const [credentialsData, setCredentialsData] = useState({
    oldName: "",
    oldPassword: "",
    newName: "",
    newPassword: "",
  })

  const [themeData, setThemeData] = useState({
    primaryColor: siteData.theme.primaryColor,
    secondaryColor: siteData.theme.secondaryColor,
    accentColor: siteData.theme.accentColor,
  })

  const [message, setMessage] = useState({ type: "", text: "" })
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [importFile, setImportFile] = useState<File | null>(null)

  // State for editing sections
  const [skills, setSkills] = useState([...siteData.skills])
  const [services, setServices] = useState([...siteData.services])
  const [education, setEducation] = useState([...siteData.education])
  const [experience, setExperience] = useState([...siteData.experience])
  const [projects, setProjects] = useState([...siteData.projects])
  const [videos, setVideos] = useState([...siteData.videos])
  const [socialLinks, setSocialLinks] = useState([...siteData.customSocialLinks])

  // State for editing items
  const [editingSkill, setEditingSkill] = useState<any>(null)
  const [editingService, setEditingService] = useState<any>(null)
  const [editingEducation, setEditingEducation] = useState<any>(null)
  const [editingExperience, setEditingExperience] = useState<any>(null)
  const [editingProject, setEditingProject] = useState<any>(null)
  const [editingVideo, setEditingVideo] = useState<any>(null)
  const [editingSocialLink, setEditingSocialLink] = useState<any>(null)

  // State for new items
  const [newSkill, setNewSkill] = useState({ name: "", logo: "", level: 75 })
  const [newService, setNewService] = useState({ title: "", description: "", icon: "smartphone" })
  const [newEducation, setNewEducation] = useState({ institution: "", degree: "", period: "" })
  const [newExperience, setNewExperience] = useState({ position: "", company: "", period: "", description: "" })
  const [newProject, setNewProject] = useState({ title: "", category: "application", image: "", link: "" })
  const [newVideo, setNewVideo] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
    gradient: "from-blue-900 to-purple-900",
    link: "",
  })
  const [newSocialLink, setNewSocialLink] = useState({ name: "", url: "", icon: "website", enabled: true })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentialsData({
      ...credentialsData,
      [e.target.name]: e.target.value,
    })
  }

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThemeData({
      ...themeData,
      [e.target.name]: e.target.value,
    })
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    updateSiteData({
      name: profileData.name,
      title: profileData.title,
      email: profileData.email,
      phone: profileData.phone,
      location: profileData.location,
      about: profileData.about,
      profileImage: profileData.profileImage,
    })

    setMessage({ type: "success", text: "Profile updated successfully! Refresh to see changes." })
    setTimeout(() => setMessage({ type: "", text: "" }), 5000)
  }

  const handleThemeSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    updateSiteData({
      theme: {
        primaryColor: themeData.primaryColor,
        secondaryColor: themeData.secondaryColor,
        accentColor: themeData.accentColor,
      },
    })

    setMessage({ type: "success", text: "Theme updated successfully! Refresh to see changes." })
    setTimeout(() => setMessage({ type: "", text: "" }), 5000)
  }

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const success = updateAdminCredentials(
      credentialsData.oldName,
      credentialsData.oldPassword,
      credentialsData.newName,
      credentialsData.newPassword,
    )

    if (success) {
      setMessage({ type: "success", text: "Admin credentials updated successfully!" })
      setCredentialsData({
        oldName: "",
        oldPassword: "",
        newName: "",
        newPassword: "",
      })
    } else {
      setMessage({ type: "error", text: "Current credentials are incorrect. Please try again." })
    }

    setTimeout(() => setMessage({ type: "", text: "" }), 5000)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const handleImportData = (e: React.FormEvent) => {
    e.preventDefault()

    if (!importFile) {
      setMessage({ type: "error", text: "Please select a file to import" })
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        const success = importDataFromJSON(event.target.result as string)
        if (success) {
          setMessage({ type: "success", text: "Data imported successfully! Refreshing..." })
          setTimeout(() => window.location.reload(), 1500)
        } else {
          setMessage({ type: "error", text: "Failed to import data. Invalid format." })
        }
      }
    }
    reader.readAsText(importFile)
  }

  // Skills handlers
  const addSkill = () => {
    if (!newSkill.name) return

    const updatedSkills = [...skills, { id: Date.now().toString(), ...newSkill }]
    setSkills(updatedSkills)
    setNewSkill({ name: "", logo: "", level: 75 })
  }

  const updateSkill = (id: string, updatedSkill: any) => {
    const updatedSkills = skills.map((skill) => (skill.id === id ? { ...skill, ...updatedSkill } : skill))
    setSkills(updatedSkills)
    setEditingSkill(null)
  }

  const deleteSkill = (id: string) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id)
    setSkills(updatedSkills)
  }

  const saveSkills = () => {
    updateSection("skills", skills)
    setMessage({ type: "success", text: "Skills updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Services handlers
  const addService = () => {
    if (!newService.title || !newService.description) return

    const updatedServices = [...services, { id: Date.now().toString(), ...newService }]
    setServices(updatedServices)
    setNewService({ title: "", description: "", icon: "smartphone" })
  }

  const updateService = (id: string, updatedService: any) => {
    const updatedServices = services.map((service) => (service.id === id ? { ...service, ...updatedService } : service))
    setServices(updatedServices)
    setEditingService(null)
  }

  const deleteService = (id: string) => {
    const updatedServices = services.filter((service) => service.id !== id)
    setServices(updatedServices)
  }

  const saveServices = () => {
    updateSection("services", services)
    setMessage({ type: "success", text: "Services updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Education handlers
  const addEducation = () => {
    if (!newEducation.institution || !newEducation.degree) return

    const updatedEducation = [...education, { id: Date.now().toString(), ...newEducation }]
    setEducation(updatedEducation)
    setNewEducation({ institution: "", degree: "", period: "" })
  }

  const updateEducation = (id: string, updatedEdu: any) => {
    const updatedEducation = education.map((edu) => (edu.id === id ? { ...edu, ...updatedEdu } : edu))
    setEducation(updatedEducation)
    setEditingEducation(null)
  }

  const deleteEducation = (id: string) => {
    const updatedEducation = education.filter((edu) => edu.id !== id)
    setEducation(updatedEducation)
  }

  const saveEducation = () => {
    updateSection("education", education)
    setMessage({ type: "success", text: "Education updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Experience handlers
  const addExperience = () => {
    if (!newExperience.position || !newExperience.company) return

    const updatedExperience = [
      ...experience,
      {
        id: Date.now().toString(),
        ...newExperience,
        description: newExperience.description.split("\n").filter((item) => item.trim() !== ""),
      },
    ]
    setExperience(updatedExperience)
    setNewExperience({ position: "", company: "", period: "", description: "" })
  }

  const updateExperience = (id: string, updatedExp: any) => {
    const processedExp = {
      ...updatedExp,
      description:
        typeof updatedExp.description === "string"
          ? updatedExp.description.split("\n").filter((item: string) => item.trim() !== "")
          : updatedExp.description,
    }

    const updatedExperience = experience.map((exp) => (exp.id === id ? { ...exp, ...processedExp } : exp))
    setExperience(updatedExperience)
    setEditingExperience(null)
  }

  const deleteExperience = (id: string) => {
    const updatedExperience = experience.filter((exp) => exp.id !== id)
    setExperience(updatedExperience)
  }

  const saveExperience = () => {
    updateSection("experience", experience)
    setMessage({ type: "success", text: "Experience updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Projects handlers
  const addProject = () => {
    if (!newProject.title || !newProject.image) return

    const updatedProjects = [...projects, { id: Date.now().toString(), ...newProject }]
    setProjects(updatedProjects)
    setNewProject({ title: "", category: "application", image: "", link: "" })
  }

  const updateProject = (id: string, updatedProj: any) => {
    const updatedProjects = projects.map((proj) => (proj.id === id ? { ...proj, ...updatedProj } : proj))
    setProjects(updatedProjects)
    setEditingProject(null)
  }

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter((proj) => proj.id !== id)
    setProjects(updatedProjects)
  }

  const saveProjects = () => {
    updateSection("projects", projects)
    setMessage({ type: "success", text: "Projects updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Videos handlers
  const addVideo = () => {
    if (!newVideo.title || !newVideo.description) return

    const updatedVideos = [...videos, { id: Date.now().toString(), ...newVideo }]
    setVideos(updatedVideos)
    setNewVideo({
      title: "",
      date: "",
      description: "",
      image: "",
      gradient: "from-blue-900 to-purple-900",
      link: "",
    })
  }

  const updateVideo = (id: string, updatedVid: any) => {
    const updatedVideos = videos.map((vid) => (vid.id === id ? { ...vid, ...updatedVid } : vid))
    setVideos(updatedVideos)
    setEditingVideo(null)
  }

  const deleteVideo = (id: string) => {
    const updatedVideos = videos.filter((vid) => vid.id !== id)
    setVideos(updatedVideos)
  }

  const saveVideos = () => {
    updateSection("videos", videos)
    setMessage({ type: "success", text: "Videos updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Social Links handlers
  const addSocialLink = () => {
    if (!newSocialLink.name || !newSocialLink.url) return

    const updatedSocialLinks = [...socialLinks, { id: Date.now().toString(), ...newSocialLink }]
    setSocialLinks(updatedSocialLinks)
    setNewSocialLink({ name: "", url: "", icon: "website", enabled: true })
  }

  const updateSocialLink = (id: string, updatedLink: any) => {
    const updatedSocialLinks = socialLinks.map((link) => (link.id === id ? { ...link, ...updatedLink } : link))
    setSocialLinks(updatedSocialLinks)
    setEditingSocialLink(null)
  }

  const deleteSocialLink = (id: string) => {
    const updatedSocialLinks = socialLinks.filter((link) => link.id !== id)
    setSocialLinks(updatedSocialLinks)
  }

  const toggleSocialLink = (id: string) => {
    const updatedSocialLinks = socialLinks.map((link) => (link.id === id ? { ...link, enabled: !link.enabled } : link))
    setSocialLinks(updatedSocialLinks)
  }

  const saveSocialLinks = () => {
    updateSection("customSocialLinks", socialLinks)
    setMessage({ type: "success", text: "Social links updated successfully!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  // Helper function to render icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "smartphone":
        return <Smartphone className="h-5 w-5" />
      case "layout":
        return <Layout className="h-5 w-5" />
      case "pen-tool":
        return <PenTool className="h-5 w-5" />
      case "server":
        return <Server className="h-5 w-5" />
      default:
        return <Smartphone className="h-5 w-5" />
    }
  }

  // Helper function to render social media icon
  const renderSocialIcon = (iconName: string) => {
    return socialIcons[iconName] || <Globe className="h-4 w-4" />
  }

  const debugLocalStorage = () => {
    try {
      // Check if localStorage is available
      if (typeof window === "undefined" || !window.localStorage) {
        setMessage({ type: "error", text: "localStorage is not available in this browser" })
        return
      }

      // Check localStorage size
      let totalSize = 0
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) || ""
        const value = localStorage.getItem(key) || ""
        totalSize += key.length + value.length
      }

      const siteDataSize = JSON.stringify(siteData).length
      const maxSize = 5 * 1024 * 1024 // 5MB is a common limit

      setMessage({
        type: "success",
        text: `localStorage usage: ${(totalSize / 1024).toFixed(2)}KB / ~5MB (${((totalSize / maxSize) * 100).toFixed(2)}%). Site data size: ${(siteDataSize / 1024).toFixed(2)}KB.`,
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: `localStorage error: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    }
  }

  return (
    <div className="w-full">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-700/30">
        <div className="flex justify-between items-center mb-4 px-4 pt-4">
          <Button variant="ghost" onClick={logout} className="text-gray-300 hover:text-white hover:bg-zinc-700">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>

          <Button
            type="button"
            onClick={handleRefresh}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
            {isRefreshing ? "Refreshing..." : "Refresh Site"}
          </Button>
        </div>

        {message.text && (
          <div
            className={`mx-4 mb-4 p-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-200"
                : "bg-red-500/20 border border-red-500/50 text-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-7 mx-4 mb-4 bg-zinc-900">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="p-4">
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Profile Image URL</label>
                  <div className="flex gap-2">
                    <Input
                      name="profileImage"
                      value={profileData.profileImage}
                      onChange={handleProfileChange}
                      className="bg-zinc-900/80 border-zinc-700"
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Upload Profile Image</DialogTitle>
                          <DialogDescription>Enter a URL for your profile image or upload a file</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="image-url">Image URL</Label>
                            <Input
                              id="image-url"
                              placeholder="https://example.com/image.jpg"
                              value={profileData.profileImage}
                              onChange={(e) => setProfileData({ ...profileData, profileImage: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="image-upload">Or upload an image</Label>
                            <Input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  // In a real app, you'd upload this file to a server
                                  // For this demo, we'll just use a placeholder
                                  setProfileData({
                                    ...profileData,
                                    profileImage: `/placeholder.svg?height=128&width=128&text=${encodeURIComponent(e.target.files[0].name)}`,
                                  })
                                }
                              }}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            type="button"
                            onClick={() => {
                              // In a real app, you'd handle the upload here
                              setMessage({ type: "success", text: "Image URL updated!" })
                              setTimeout(() => setMessage({ type: "", text: "" }), 3000)
                            }}
                          >
                            Update Image
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    className="bg-zinc-900/80 border-zinc-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Title</label>
                  <Input
                    name="title"
                    value={profileData.title}
                    onChange={handleProfileChange}
                    className="bg-zinc-900/80 border-zinc-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="bg-zinc-900/80 border-zinc-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone</label>
                  <Input
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="bg-zinc-900/80 border-zinc-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Location</label>
                  <Input
                    name="location"
                    value={profileData.location}
                    onChange={handleProfileChange}
                    className="bg-zinc-900/80 border-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">About</label>
                <Textarea
                  name="about"
                  value={profileData.about}
                  onChange={handleProfileChange}
                  className="min-h-[100px] bg-zinc-900/80 border-zinc-700"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Save className="h-4 w-4 mr-2" /> Save Profile
                </Button>
              </div>
            </form>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social" className="p-4">
            <Card className="bg-zinc-800/50 mb-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Social Media Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Add new social link */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Platform Name</label>
                      <Input
                        value={newSocialLink.name}
                        onChange={(e) => setNewSocialLink({ ...newSocialLink, name: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="e.g. GitHub"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">URL</label>
                      <Input
                        value={newSocialLink.url}
                        onChange={(e) => setNewSocialLink({ ...newSocialLink, url: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Icon</label>
                      <Select
                        value={newSocialLink.icon}
                        onValueChange={(value) => setNewSocialLink({ ...newSocialLink, icon: value })}
                      >
                        <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                          <SelectValue placeholder="Select an icon" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="github">GitHub</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="twitter">Twitter</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="dribbble">Dribbble</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="codepen">CodePen</SelectItem>
                          <SelectItem value="figma">Figma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={addSocialLink} className="bg-green-600 hover:bg-green-700 text-white">
                    <Plus className="h-4 w-4 mr-2" /> Add Social Link
                  </Button>
                </div>

                {/* Existing social links */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-3">Your Social Links</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <div key={link.id} className="flex items-center justify-between p-3 bg-zinc-800 rounded-md">
                        {editingSocialLink?.id === link.id ? (
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                            <Input
                              value={editingSocialLink.name}
                              onChange={(e) => setEditingSocialLink({ ...editingSocialLink, name: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                            />
                            <Input
                              value={editingSocialLink.url}
                              onChange={(e) => setEditingSocialLink({ ...editingSocialLink, url: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                            />
                            <Select
                              value={editingSocialLink.icon}
                              onValueChange={(value) => setEditingSocialLink({ ...editingSocialLink, icon: value })}
                            >
                              <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                                <SelectValue placeholder="Select an icon" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="github">GitHub</SelectItem>
                                <SelectItem value="linkedin">LinkedIn</SelectItem>
                                <SelectItem value="twitter">Twitter</SelectItem>
                                <SelectItem value="instagram">Instagram</SelectItem>
                                <SelectItem value="facebook">Facebook</SelectItem>
                                <SelectItem value="youtube">YouTube</SelectItem>
                                <SelectItem value="dribbble">Dribbble</SelectItem>
                                <SelectItem value="website">Website</SelectItem>
                                <SelectItem value="codepen">CodePen</SelectItem>
                                <SelectItem value="figma">Figma</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700 text-zinc-300">
                              {renderSocialIcon(link.icon)}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{link.name}</div>
                              <div className="text-xs text-zinc-400 truncate">{link.url}</div>
                            </div>
                          </div>
                        )}
                        <div className="flex gap-2 ml-4">
                          {editingSocialLink?.id === link.id ? (
                            <>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => updateSocialLink(link.id, editingSocialLink)}
                              >
                                <Check className="h-4 w-4 text-green-500" />
                              </Button>
                              <Button size="icon" variant="ghost" onClick={() => setEditingSocialLink(null)}>
                                <X className="h-4 w-4 text-red-500" />
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => toggleSocialLink(link.id)}
                                title={link.enabled ? "Disable" : "Enable"}
                              >
                                {link.enabled ? (
                                  <Eye className="h-4 w-4 text-green-500" />
                                ) : (
                                  <EyeOff className="h-4 w-4 text-zinc-500" />
                                )}
                              </Button>
                              <Button size="icon" variant="ghost" onClick={() => setEditingSocialLink({ ...link })}>
                                <Edit className="h-4 w-4 text-blue-500" />
                              </Button>
                              <Button size="icon" variant="ghost" onClick={() => deleteSocialLink(link.id)}>
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={saveSocialLinks} className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Save className="h-4 w-4 mr-2" /> Save Social Links
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Theme Tab */}
          <TabsContent value="theme" className="p-4">
            <form onSubmit={handleThemeSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Primary Color</label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      name="primaryColor"
                      value={themeData.primaryColor}
                      onChange={handleThemeChange}
                      className="w-12 h-10 p-1 bg-zinc-900/80 border-zinc-700"
                    />
                    <Input
                      name="primaryColor"
                      value={themeData.primaryColor}
                      onChange={handleThemeChange}
                      className="bg-zinc-900/80 border-zinc-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Secondary Color</label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      name="secondaryColor"
                      value={themeData.secondaryColor}
                      onChange={handleThemeChange}
                      className="w-12 h-10 p-1 bg-zinc-900/80 border-zinc-700"
                    />
                    <Input
                      name="secondaryColor"
                      value={themeData.secondaryColor}
                      onChange={handleThemeChange}
                      className="bg-zinc-900/80 border-zinc-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Accent Color</label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      name="accentColor"
                      value={themeData.accentColor}
                      onChange={handleThemeChange}
                      className="w-12 h-10 p-1 bg-zinc-900/80 border-zinc-700"
                    />
                    <Input
                      name="accentColor"
                      value={themeData.accentColor}
                      onChange={handleThemeChange}
                      className="bg-zinc-900/80 border-zinc-700"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Save className="h-4 w-4 mr-2" /> Save Theme
                </Button>
              </div>
            </form>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="skills">
                <AccordionTrigger className="text-lg font-semibold">Skills</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {/* Add new skill */}
                    <Card className="bg-zinc-800/50">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Add New Skill</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Skill Name</label>
                            <Input
                              value={newSkill.name}
                              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. Flutter"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Skill Level (0-100)</label>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={newSkill.level}
                              onChange={(e) => setNewSkill({ ...newSkill, level: Number.parseInt(e.target.value) })}
                              className="bg-zinc-900/80 border-zinc-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Logo URL</label>
                            <div className="flex gap-2">
                              <Input
                                value={newSkill.logo}
                                onChange={(e) => setNewSkill({ ...newSkill, logo: e.target.value })}
                                className="bg-zinc-900/80 border-zinc-700"
                                placeholder="https://example.com/logo.png"
                              />
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="icon">
                                    <ImageIcon className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Upload Skill Logo</DialogTitle>
                                    <DialogDescription>
                                      Enter a URL for your skill logo or upload a file
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="logo-url">Logo URL</Label>
                                      <Input
                                        id="logo-url"
                                        placeholder="https://example.com/logo.png"
                                        value={newSkill.logo}
                                        onChange={(e) => setNewSkill({ ...newSkill, logo: e.target.value })}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="logo-upload">Or upload an image</Label>
                                      <Input
                                        id="logo-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                          if (e.target.files && e.target.files[0]) {
                                            // In a real app, you'd upload this file to a server
                                            // For this demo, we'll just use a placeholder
                                            setNewSkill({
                                              ...newSkill,
                                              logo: `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(e.target.files[0].name)}`,
                                            })
                                          }
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button
                                      type="button"
                                      onClick={() => {
                                        // In a real app, you'd handle the upload here
                                        setMessage({ type: "success", text: "Logo URL updated!" })
                                        setTimeout(() => setMessage({ type: "", text: "" }), 3000)
                                      }}
                                    >
                                      Update Logo
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                        <Button onClick={addSkill} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                          <Plus className="h-4 w-4 mr-2" /> Add Skill
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Existing skills */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Existing Skills</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {skills.map((skill) => (
                          <div key={skill.id} className="flex items-center justify-between p-3 bg-zinc-800 rounded-md">
                            {editingSkill?.id === skill.id ? (
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                                <Input
                                  value={editingSkill.name}
                                  onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                                  className="bg-zinc-900/80 border-zinc-700"
                                />
                                <Input
                                  type="number"
                                  min="0"
                                  max="100"
                                  value={editingSkill.level}
                                  onChange={(e) =>
                                    setEditingSkill({ ...editingSkill, level: Number.parseInt(e.target.value) })
                                  }
                                  className="bg-zinc-900/80 border-zinc-700"
                                />
                                <Input
                                  value={editingSkill.logo}
                                  onChange={(e) => setEditingSkill({ ...editingSkill, logo: e.target.value })}
                                  className="bg-zinc-900/80 border-zinc-700"
                                />
                              </div>
                            ) : (
                              <div className="flex-1 flex items-center gap-3">
                                <div className="w-10 h-10 bg-zinc-700 rounded-md overflow-hidden flex items-center justify-center">
                                  <img
                                    src={skill.logo || "/placeholder.svg?height=40&width=40"}
                                    alt={skill.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div>
                                  <span className="font-medium">{skill.name}</span>
                                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                                    <div
                                      className="h-full rounded-full bg-amber-500"
                                      style={{ width: `${skill.level}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="flex gap-2 ml-4">
                              {editingSkill?.id === skill.id ? (
                                <>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => updateSkill(skill.id, editingSkill)}
                                  >
                                    <Check className="h-4 w-4 text-green-500" />
                                  </Button>
                                  <Button size="icon" variant="ghost" onClick={() => setEditingSkill(null)}>
                                    <X className="h-4 w-4 text-red-500" />
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button size="icon" variant="ghost" onClick={() => setEditingSkill({ ...skill })}>
                                    <Edit className="h-4 w-4 text-blue-500" />
                                  </Button>
                                  <Button size="icon" variant="ghost" onClick={() => deleteSkill(skill.id)}>
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button onClick={saveSkills} className="bg-amber-500 hover:bg-amber-600 text-black">
                          <Save className="h-4 w-4 mr-2" /> Save Skills
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services">
                <AccordionTrigger className="text-lg font-semibold">Services</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {/* Add new service */}
                    <Card className="bg-zinc-800/50">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Add New Service</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Service Title</label>
                            <Input
                              value={newService.title}
                              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. Mobile Apps"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Icon</label>
                            <Select
                              value={newService.icon}
                              onValueChange={(value) => setNewService({ ...newService, icon: value })}
                            >
                              <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                                <SelectValue placeholder="Select an icon" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="smartphone">Smartphone</SelectItem>
                                <SelectItem value="layout">Layout</SelectItem>
                                <SelectItem value="pen-tool">Pen Tool</SelectItem>
                                <SelectItem value="server">Server</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2 mt-4">
                          <label className="text-xs text-gray-400">Description</label>
                          <Textarea
                            value={newService.description}
                            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                            className="min-h-[80px] bg-zinc-900/80 border-zinc-700"
                            placeholder="Describe the service..."
                          />
                        </div>
                        <Button onClick={addService} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                          <Plus className="h-4 w-4 mr-2" /> Add Service
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Existing services */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Existing Services</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <div key={service.id} className="p-3 bg-zinc-800 rounded-md">
                            {editingService?.id === service.id ? (
                              <div className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  <Input
                                    value={editingService.title}
                                    onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                                    className="bg-zinc-900/80 border-zinc-700"
                                  />
                                  <Select
                                    value={editingService.icon}
                                    onValueChange={(value) => setEditingService({ ...editingService, icon: value })}
                                  >
                                    <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                                      <SelectValue placeholder="Select an icon" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="smartphone">Smartphone</SelectItem>
                                      <SelectItem value="layout">Layout</SelectItem>
                                      <SelectItem value="pen-tool">Pen Tool</SelectItem>
                                      <SelectItem value="server">Server</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <Textarea
                                  value={editingService.description}
                                  onChange={(e) =>
                                    setEditingService({ ...editingService, description: e.target.value })
                                  }
                                  className="min-h-[80px] bg-zinc-900/80 border-zinc-700"
                                />
                                <div className="flex justify-end gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateService(service.id, editingService)}
                                  >
                                    <Check className="h-4 w-4 mr-1 text-green-500" /> Save
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => setEditingService(null)}>
                                    <X className="h-4 w-4 mr-1 text-red-500" /> Cancel
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-md bg-amber-500/20 text-amber-500">
                                      {renderIcon(service.icon)}
                                    </div>
                                    <span className="font-medium">{service.title}</span>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      onClick={() => setEditingService({ ...service })}
                                    >
                                      <Edit className="h-4 w-4 text-blue-500" />
                                    </Button>
                                    <Button size="icon" variant="ghost" onClick={() => deleteService(service.id)}>
                                      <Trash2 className="h-4 w-4 text-red-500" />
                                    </Button>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-400 mt-2">{service.description}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button onClick={saveServices} className="bg-amber-500 hover:bg-amber-600 text-black">
                          <Save className="h-4 w-4 mr-2" /> Save Services
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Resume Tab */}
          <TabsContent value="resume" className="p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="education">
                <AccordionTrigger className="text-lg font-semibold">Education</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {/* Add new education */}
                    <Card className="bg-zinc-800/50">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Add New Education</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-xs text-gray-400">Institution</label>
                            <Input
                              value={newEducation.institution}
                              onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. University Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Period</label>
                            <Input
                              value={newEducation.period}
                              onChange={(e) => setNewEducation({ ...newEducation, period: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. 2017 — 2021"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 mt-4">
                          <label className="text-xs text-gray-400">Degree</label>
                          <Input
                            value={newEducation.degree}
                            onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="e.g. Bachelor of Science"
                          />
                        </div>
                        <Button onClick={addEducation} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                          <Plus className="h-4 w-4 mr-2" /> Add Education
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Existing education */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Education History</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {education.map((edu) => (
                          <div key={edu.id} className="p-3 bg-zinc-800 rounded-md">
                            {editingEducation?.id === edu.id ? (
                              <div className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                  <div className="md:col-span-2">
                                    <Input
                                      value={editingEducation.institution}
                                      onChange={(e) =>
                                        setEditingEducation({ ...editingEducation, institution: e.target.value })
                                      }
                                      className="bg-zinc-900/80 border-zinc-700"
                                    />
                                  </div>
                                  <Input
                                    value={editingEducation.period}
                                    onChange={(e) =>
                                      setEditingEducation({ ...editingEducation, period: e.target.value })
                                    }
                                    className="bg-zinc-900/80 border-zinc-700"
                                  />
                                </div>
                                <Input
                                  value={editingEducation.degree}
                                  onChange={(e) => setEditingEducation({ ...editingEducation, degree: e.target.value })}
                                  className="bg-zinc-900/80 border-zinc-700"
                                />
                                <div className="flex justify-end gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateEducation(edu.id, editingEducation)}
                                  >
                                    <Check className="h-4 w-4 mr-1 text-green-500" /> Save
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => setEditingEducation(null)}>
                                    <X className="h-4 w-4 mr-1 text-red-500" /> Cancel
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-medium text-amber-400">{edu.institution}</div>
                                    <div className="text-sm">{edu.degree}</div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="text-sm text-zinc-400">{edu.period}</div>
                                    <div className="flex gap-1">
                                      <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => setEditingEducation({ ...edu })}
                                      >
                                        <Edit className="h-4 w-4 text-blue-500" />
                                      </Button>
                                      <Button size="icon" variant="ghost" onClick={() => deleteEducation(edu.id)}>
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button onClick={saveEducation} className="bg-amber-500 hover:bg-amber-600 text-black">
                          <Save className="h-4 w-4 mr-2" /> Save Education
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="experience">
                <AccordionTrigger className="text-lg font-semibold">Experience</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {/* Add new experience */}
                    <Card className="bg-zinc-800/50">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Add New Experience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Position</label>
                            <Input
                              value={newExperience.position}
                              onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. Flutter Developer"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Company</label>
                            <Input
                              value={newExperience.company}
                              onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. Company Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400">Period</label>
                            <Input
                              value={newExperience.period}
                              onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
                              className="bg-zinc-900/80 border-zinc-700"
                              placeholder="e.g. Jan 2022 - Present"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 mt-4">
                          <label className="text-xs text-gray-400">Description (one point per line)</label>
                          <Textarea
                            value={newExperience.description}
                            onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                            className="min-h-[120px] bg-zinc-900/80 border-zinc-700"
                            placeholder="Enter responsibilities and achievements, one per line"
                          />
                        </div>
                        <Button onClick={addExperience} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                          <Plus className="h-4 w-4 mr-2" /> Add Experience
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Existing experience */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Experience History</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {experience.map((exp) => (
                          <div key={exp.id} className="p-3 bg-zinc-800 rounded-md">
                            {editingExperience?.id === exp.id ? (
                              <div className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                  <Input
                                    value={editingExperience.position}
                                    onChange={(e) =>
                                      setEditingExperience({ ...editingExperience, position: e.target.value })
                                    }
                                    className="bg-zinc-900/80 border-zinc-700"
                                  />
                                  <Input
                                    value={editingExperience.company}
                                    onChange={(e) =>
                                      setEditingExperience({ ...editingExperience, company: e.target.value })
                                    }
                                    className="bg-zinc-900/80 border-zinc-700"
                                  />
                                  <Input
                                    value={editingExperience.period}
                                    onChange={(e) =>
                                      setEditingExperience({ ...editingExperience, period: e.target.value })
                                    }
                                    className="bg-zinc-900/80 border-zinc-700"
                                  />
                                </div>
                                <Textarea
                                  value={
                                    Array.isArray(editingExperience.description)
                                      ? editingExperience.description.join("\n")
                                      : editingExperience.description
                                  }
                                  onChange={(e) =>
                                    setEditingExperience({ ...editingExperience, description: e.target.value })
                                  }
                                  className="min-h-[120px] bg-zinc-900/80 border-zinc-700"
                                />
                                <div className="flex justify-end gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateExperience(exp.id, editingExperience)}
                                  >
                                    <Check className="h-4 w-4 mr-1 text-green-500" /> Save
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => setEditingExperience(null)}>
                                    <X className="h-4 w-4 mr-1 text-red-500" /> Cancel
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-medium text-amber-400">{exp.position}</div>
                                    <div className="text-sm">{exp.company}</div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="text-sm text-zinc-400">{exp.period}</div>
                                    <div className="flex gap-1">
                                      <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => setEditingExperience({ ...exp })}
                                      >
                                        <Edit className="h-4 w-4 text-blue-500" />
                                      </Button>
                                      <Button size="icon" variant="ghost" onClick={() => deleteExperience(exp.id)}>
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-400">
                                  {exp.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button onClick={saveExperience} className="bg-amber-500 hover:bg-amber-600 text-black">
                          <Save className="h-4 w-4 mr-2" /> Save Experience
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="p-4">
            <div className="space-y-4">
              {/* Add new project */}
              <Card className="bg-zinc-800/50">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Add New Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Project Title</label>
                      <Input
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="e.g. Mobile App"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Category</label>
                      <Select
                        value={newProject.category}
                        onValueChange={(value) => setNewProject({ ...newProject, category: value })}
                      >
                        <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="application">Application</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="ui-ux">UI/UX</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Image URL</label>
                      <div className="flex gap-2">
                        <Input
                          value={newProject.image}
                          onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                          className="bg-zinc-900/80 border-zinc-700"
                          placeholder="https://example.com/image.jpg"
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="icon">
                              <ImageIcon className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Upload Project Image</DialogTitle>
                              <DialogDescription>Enter a URL for your project image or upload a file</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="project-image-url">Image URL</Label>
                                <Input
                                  id="project-image-url"
                                  placeholder="https://example.com/image.jpg"
                                  value={newProject.image}
                                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="project-image-upload">Or upload an image</Label>
                                <Input
                                  id="project-image-upload"
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                      // In a real app, you'd upload this file to a server
                                      // For this demo, we'll just use a placeholder
                                      setNewProject({
                                        ...newProject,
                                        image: `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(e.target.files[0].name)}`,
                                      })
                                    }
                                  }}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                type="button"
                                onClick={() => {
                                  // In a real app, you'd handle the upload here
                                  setMessage({ type: "success", text: "Image URL updated!" })
                                  setTimeout(() => setMessage({ type: "", text: "" }), 3000)
                                }}
                              >
                                Update Image
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Project Link</label>
                      <Input
                        value={newProject.link}
                        onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                  <Button onClick={addProject} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                    <Plus className="h-4 w-4 mr-2" /> Add Project
                  </Button>
                </CardContent>
              </Card>

              {/* Existing projects */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Existing Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-zinc-800 rounded-md overflow-hidden">
                      {editingProject?.id === project.id ? (
                        <div className="p-3 space-y-3">
                          <Input
                            value={editingProject.title}
                            onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Project title"
                          />
                          <Select
                            value={editingProject.category}
                            onChange={(value) => setEditingProject({ ...editingProject, category: value })}
                          >
                            <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="application">Application</SelectItem>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="ui-ux">UI/UX</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            value={editingProject.image}
                            onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Image URL"
                          />
                          <Input
                            value={editingProject.link}
                            onChange={(e) => setEditingProject({ ...editingProject, link: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Project link"
                          />
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateProject(project.id, editingProject)}
                            >
                              <Check className="h-4 w-4 mr-1 text-green-500" /> Save
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingProject(null)}>
                              <X className="h-4 w-4 mr-1 text-red-500" /> Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="aspect-[4/3] w-full overflow-hidden relative group">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="bg-white/20 border-white/50 text-white hover:bg-white/30"
                                onClick={() => setEditingProject({ ...project })}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="outline"
                                className="bg-white/20 border-white/50 text-white hover:bg-white/30"
                                onClick={() => deleteProject(project.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium">{project.title}</h3>
                            <p className="text-xs text-gray-400 capitalize">{project.category.replace("-", " ")}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <Button onClick={saveProjects} className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Save className="h-4 w-4 mr-2" /> Save Projects
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="p-4">
            <div className="space-y-4">
              {/* Add new video */}
              <Card className="bg-zinc-800/50">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Add New Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Video Title</label>
                      <Input
                        value={newVideo.title}
                        onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="e.g. Flutter Tutorial"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Date</label>
                      <Input
                        value={newVideo.date}
                        onChange={(e) => setNewVideo({ ...newVideo, date: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="e.g. Nov 18, 2023"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <label className="text-xs text-gray-400">Description</label>
                    <Textarea
                      value={newVideo.description}
                      onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                      className="min-h-[80px] bg-zinc-900/80 border-zinc-700"
                      placeholder="Describe the video..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Thumbnail URL</label>
                      <div className="flex gap-2">
                        <Input
                          value={newVideo.image}
                          onChange={(e) => setNewVideo({ ...newVideo, image: e.target.value })}
                          className="bg-zinc-900/80 border-zinc-700"
                          placeholder="https://example.com/image.jpg"
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="icon">
                              <ImageIcon className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Upload Video Thumbnail</DialogTitle>
                              <DialogDescription>
                                Enter a URL for your video thumbnail or upload a file
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="video-image-url">Image URL</Label>
                                <Input
                                  id="video-image-url"
                                  placeholder="https://example.com/image.jpg"
                                  value={newVideo.image}
                                  onChange={(e) => setNewVideo({ ...newVideo, image: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="video-image-upload">Or upload an image</Label>
                                <Input
                                  id="video-image-upload"
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                      // In a real app, you'd upload this file to a server
                                      // For this demo, we'll just use a placeholder
                                      setNewVideo({
                                        ...newVideo,
                                        image: `/placeholder.svg?height=200&width=350&text=${encodeURIComponent(e.target.files[0].name)}`,
                                      })
                                    }
                                  }}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                type="button"
                                onClick={() => {
                                  // In a real app, you'd handle the upload here
                                  setMessage({ type: "success", text: "Thumbnail URL updated!" })
                                  setTimeout(() => setMessage({ type: "", text: "" }), 3000)
                                }}
                              >
                                Update Thumbnail
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400">Video Link</label>
                      <Input
                        value={newVideo.link}
                        onChange={(e) => setNewVideo({ ...newVideo, link: e.target.value })}
                        className="bg-zinc-900/80 border-zinc-700"
                        placeholder="https://example.com/video"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <label className="text-xs text-gray-400">Background Gradient</label>
                    <Select
                      value={newVideo.gradient}
                      onChange={(e) => setNewVideo({ ...newVideo, gradient: e.target.value })}
                    >
                      <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                        <SelectValue placeholder="Select a gradient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="from-blue-900 to-purple-900">Blue to Purple</SelectItem>
                        <SelectItem value="from-purple-800 to-purple-600">Purple</SelectItem>
                        <SelectItem value="from-cyan-800 to-blue-600">Cyan to Blue</SelectItem>
                        <SelectItem value="from-amber-700 to-orange-600">Amber to Orange</SelectItem>
                        <SelectItem value="from-green-800 to-green-600">Green</SelectItem>
                        <SelectItem value="from-red-800 to-red-600">Red</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={addVideo} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                    <Plus className="h-4 w-4 mr-2" /> Add Video
                  </Button>
                </CardContent>
              </Card>

              {/* Existing videos */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Existing Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {videos.map((video) => (
                    <div key={video.id} className="bg-zinc-800 rounded-md overflow-hidden">
                      {editingVideo?.id === video.id ? (
                        <div className="p-3 space-y-3">
                          <Input
                            value={editingVideo.title}
                            onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Video title"
                          />
                          <Input
                            value={editingVideo.date}
                            onChange={(e) => setEditingVideo({ ...editingVideo, date: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Date"
                          />
                          <Textarea
                            value={editingVideo.description}
                            onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                            className="min-h-[80px] bg-zinc-900/80 border-zinc-700"
                            placeholder="Description"
                          />
                          <Input
                            value={editingVideo.image}
                            onChange={(e) => setEditingVideo({ ...editingVideo, image: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Thumbnail URL"
                          />
                          <Input
                            value={editingVideo.link}
                            onChange={(e) => setEditingVideo({ ...editingVideo, link: e.target.value })}
                            className="bg-zinc-900/80 border-zinc-700"
                            placeholder="Video link"
                          />
                          <Select
                            value={editingVideo.gradient}
                            onChange={(e) => setEditingVideo({ ...editingVideo, gradient: e.target.value })}
                          >
                            <SelectTrigger className="bg-zinc-900/80 border-zinc-700">
                              <SelectValue placeholder="Select a gradient" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="from-blue-900 to-purple-900">Blue to Purple</SelectItem>
                              <SelectItem value="from-purple-800 to-purple-600">Purple</SelectItem>
                              <SelectItem value="from-cyan-800 to-blue-600">Cyan to Blue</SelectItem>
                              <SelectItem value="from-amber-700 to-orange-600">Amber to Orange</SelectItem>
                              <SelectItem value="from-green-800 to-green-600">Green</SelectItem>
                              <SelectItem value="from-red-800 to-red-600">Red</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" onClick={() => updateVideo(video.id, editingVideo)}>
                              <Check className="h-4 w-4 mr-1 text-green-500" /> Save
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingVideo(null)}>
                              <X className="h-4 w-4 mr-1 text-red-500" /> Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div
                            className={`aspect-video w-full overflow-hidden bg-gradient-to-r ${video.gradient} p-6 flex items-center justify-center relative group`}
                          >
                            <h3 className="text-xl font-bold text-white text-center">{video.title}</h3>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="bg-white/20 border-white/50 text-white hover:bg-white/30"
                                onClick={() => setEditingVideo({ ...video })}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="outline"
                                className="bg-white/20 border-white/50 text-white hover:bg-white/30"
                                onClick={() => deleteVideo(video.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="p-3">
                            <div className="flex items-center text-sm text-zinc-400 mb-2">
                              <Calendar size={14} className="mr-1" />
                              <span>{video.date}</span>
                            </div>
                            <p className="text-sm text-zinc-300 mb-4 line-clamp-2">{video.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <Button onClick={saveVideos} className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Save className="h-4 w-4 mr-2" /> Save Videos
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-4 border-t border-zinc-700/30 mt-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Security Settings</span>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const securityTab = document.querySelector('[data-state="security"]')
                if (securityTab) {
                  securityTab.click()
                }
              }}
              className="text-zinc-300 hover:text-white hover:bg-zinc-700"
            >
              <Key className="h-4 w-4 mr-2" /> Update Admin Credentials
            </Button>
          </div>

          <div className="mt-4">
            <form onSubmit={handleCredentialsSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Current Admin Name</label>
                  <Input
                    name="oldName"
                    value={credentialsData.oldName}
                    onChange={handleCredentialsChange}
                    className="bg-zinc-900/80 border-zinc-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Current Password</label>
                  <Input
                    name="oldPassword"
                    type="password"
                    value={credentialsData.oldPassword}
                    onChange={handleCredentialsChange}
                    className="bg-zinc-900/80 border-zinc-700"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">New Admin Name</label>
                  <Input
                    name="newName"
                    value={credentialsData.newName}
                    onChange={handleCredentialsChange}
                    className="bg-zinc-900/80 border-zinc-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">New Password</label>
                  <Input
                    name="newPassword"
                    type="password"
                    value={credentialsData.newPassword}
                    onChange={handleCredentialsChange}
                    className="bg-zinc-900/80 border-zinc-700"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Key className="h-4 w-4 mr-2" /> Update Credentials
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-700/30 mt-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Data Management</span>
            </div>
            <Button
              onClick={debugLocalStorage}
              variant="outline"
              size="sm"
              className="text-zinc-300 hover:text-white hover:bg-zinc-700"
            >
              Debug Storage
            </Button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4">
            <GitHubStorage />
            <GoogleDriveStorage />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-zinc-800/50">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Export Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 mb-4">
                    Export all your portfolio data to a JSON file. You can use this file to backup your data or transfer
                    it to another installation.
                  </p>
                  <Button onClick={exportDataToJSON} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save className="h-4 w-4 mr-2" /> Export to JSON
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Import Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleImportData}>
                    <p className="text-sm text-zinc-400 mb-4">
                      Import portfolio data from a JSON file. This will replace all your current data.
                    </p>
                    <div className="space-y-4">
                      <Input
                        type="file"
                        accept=".json"
                        className="bg-zinc-900/80 border-zinc-700"
                        onChange={(e) => e.target.files && setImportFile(e.target.files[0])}
                      />
                      <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black">
                        <Upload className="h-4 w-4 mr-2" /> Import Data
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

