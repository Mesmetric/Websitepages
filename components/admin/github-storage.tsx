"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Save, Download } from "lucide-react"

export function GitHubStorage() {
  const { siteData } = useAuth()
  const [githubToken, setGithubToken] = useState("")
  const [githubRepo, setGithubRepo] = useState("")
  const [githubPath, setGithubPath] = useState("portfolio-data.json")
  const [message, setMessage] = useState({ type: "", text: "" })
  const [isLoading, setIsLoading] = useState(false)

  const saveToGitHub = async () => {
    if (!githubToken || !githubRepo) {
      setMessage({ type: "error", text: "Please provide GitHub token and repository" })
      return
    }

    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      // First, check if file exists to get the SHA (needed for update)
      const checkResponse = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${githubPath}`, {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      })

      let sha = ""
      if (checkResponse.status === 200) {
        const fileData = await checkResponse.json()
        sha = fileData.sha
      }

      // Prepare the content
      const content = Buffer.from(JSON.stringify(siteData, null, 2)).toString("base64")

      // Create or update the file
      const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${githubPath}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Update portfolio data",
          content,
          sha: sha || undefined,
        }),
      })

      if (response.status === 200 || response.status === 201) {
        setMessage({ type: "success", text: "Data saved to GitHub successfully!" })
      } else {
        const error = await response.json()
        throw new Error(error.message || "Failed to save to GitHub")
      }
    } catch (error) {
      console.error("GitHub save error:", error)
      setMessage({
        type: "error",
        text: `Failed to save to GitHub: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const loadFromGitHub = async () => {
    if (!githubToken || !githubRepo) {
      setMessage({ type: "error", text: "Please provide GitHub token and repository" })
      return
    }

    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${githubPath}`, {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      })

      if (response.status === 200) {
        const data = await response.json()
        const content = atob(data.content)

        // Parse and validate the content
        try {
          JSON.parse(content)

          // Create a download link
          const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(content)}`
          const link = document.createElement("a")
          link.setAttribute("href", dataUri)
          link.setAttribute("download", "portfolio-data-from-github.json")
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          setMessage({ type: "success", text: "Data downloaded from GitHub successfully! You can now import it." })
        } catch (e) {
          throw new Error("Invalid JSON data in the GitHub file")
        }
      } else {
        const error = await response.json()
        throw new Error(error.message || "Failed to load from GitHub")
      }
    } catch (error) {
      console.error("GitHub load error:", error)
      setMessage({
        type: "error",
        text: `Failed to load from GitHub: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-zinc-800/50">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center">
          <Github className="h-5 w-5 mr-2" /> GitHub Integration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400 mb-4">
          Store your portfolio data in a GitHub repository. You'll need a personal access token with repo scope.
        </p>

        {message.text && (
          <div
            className={`mb-4 p-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-200"
                : "bg-red-500/20 border border-red-500/50 text-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">GitHub Personal Access Token</label>
            <Input
              type="password"
              value={githubToken}
              onChange={(e) => setGithubToken(e.target.value)}
              className="bg-zinc-900/80 border-zinc-700"
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Repository (username/repo)</label>
            <Input
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
              className="bg-zinc-900/80 border-zinc-700"
              placeholder="username/repository"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">File Path</label>
            <Input
              value={githubPath}
              onChange={(e) => setGithubPath(e.target.value)}
              className="bg-zinc-900/80 border-zinc-700"
              placeholder="portfolio-data.json"
            />
          </div>

          <div className="flex gap-4">
            <Button onClick={saveToGitHub} className="bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? "Saving..." : "Save to GitHub"}
            </Button>

            <Button
              onClick={loadFromGitHub}
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
              disabled={isLoading}
            >
              <Download className="h-4 w-4 mr-2" />
              {isLoading ? "Loading..." : "Load from GitHub"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

