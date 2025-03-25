"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Download, FileText } from "lucide-react"

// Google Drive API client ID
const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID" // Replace with your Google API client ID
const API_KEY = "YOUR_GOOGLE_API_KEY" // Replace with your Google API key
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
const SCOPES = "https://www.googleapis.com/auth/drive.file"

export function GoogleDriveStorage() {
  const { siteData } = useAuth()
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [fileId, setFileId] = useState("")
  const [fileName, setFileName] = useState("portfolio-data.json")
  const [gapi, setGapi] = useState<any>(null)

  useEffect(() => {
    // Load the Google API client library
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/api.js"
    script.async = true
    script.defer = true
    script.onload = initClient
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const initClient = () => {
    const gapiInstance = (window as any).gapi
    setGapi(gapiInstance)

    gapiInstance.load("client:auth2", () => {
      gapiInstance.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          // Listen for sign-in state changes
          gapiInstance.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

          // Handle the initial sign-in state
          updateSigninStatus(gapiInstance.auth2.getAuthInstance().isSignedIn.get())
        })
        .catch((error: any) => {
          console.error("Error initializing Google API client:", error)
          setMessage({ type: "error", text: "Failed to initialize Google API client" })
        })
    })
  }

  const updateSigninStatus = (isSignedIn: boolean) => {
    setIsSignedIn(isSignedIn)
  }

  const handleSignIn = () => {
    if (gapi) {
      gapi.auth2.getAuthInstance().signIn()
    }
  }

  const handleSignOut = () => {
    if (gapi) {
      gapi.auth2.getAuthInstance().signOut()
    }
  }

  const saveToGoogleDrive = async () => {
    if (!isSignedIn) {
      setMessage({ type: "error", text: "Please sign in to Google Drive first" })
      return
    }

    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      const fileContent = JSON.stringify(siteData, null, 2)
      const file = new Blob([fileContent], { type: "application/json" })

      const metadata = {
        name: fileName,
        mimeType: "application/json",
      }

      if (fileId) {
        // Update existing file
        const res = await gapi.client.drive.files.update({
          fileId: fileId,
          media: {
            mimeType: "application/json",
            body: file,
          },
        })

        setMessage({ type: "success", text: "File updated successfully in Google Drive!" })
      } else {
        // Create new file
        const res = await gapi.client.drive.files.create({
          resource: metadata,
          media: {
            mimeType: "application/json",
            body: file,
          },
          fields: "id",
        })

        setFileId(res.result.id)
        setMessage({ type: "success", text: `File created successfully in Google Drive! File ID: ${res.result.id}` })
      }
    } catch (error) {
      console.error("Google Drive save error:", error)
      setMessage({ type: "error", text: "Failed to save to Google Drive" })
    } finally {
      setIsLoading(false)
    }
  }

  const loadFromGoogleDrive = async () => {
    if (!isSignedIn) {
      setMessage({ type: "error", text: "Please sign in to Google Drive first" })
      return
    }

    if (!fileId) {
      setMessage({ type: "error", text: "Please provide a file ID" })
      return
    }

    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      // Get the file metadata
      const metadataResponse = await gapi.client.drive.files.get({
        fileId: fileId,
        fields: "name,mimeType",
      })

      // Get the file content
      const response = await gapi.client.drive.files.get({
        fileId: fileId,
        alt: "media",
      })

      // Create a download link
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(response.result, null, 2))}`
      const link = document.createElement("a")
      link.setAttribute("href", dataUri)
      link.setAttribute("download", metadataResponse.result.name || "portfolio-data-from-drive.json")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setMessage({ type: "success", text: "Data downloaded from Google Drive successfully! You can now import it." })
    } catch (error) {
      console.error("Google Drive load error:", error)
      setMessage({ type: "error", text: "Failed to load from Google Drive" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-zinc-800/50">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center">
          <FileText className="h-5 w-5 mr-2" /> Google Drive Integration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400 mb-4">
          Store your portfolio data in Google Drive. You'll need to sign in with your Google account.
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
          {!isSignedIn ? (
            <Button onClick={handleSignIn} className="bg-red-600 hover:bg-red-700 text-white">
              Sign in to Google Drive
            </Button>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-400">Signed in to Google Drive</span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">File Name</label>
                <Input
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="bg-zinc-900/80 border-zinc-700"
                  placeholder="portfolio-data.json"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">File ID (for loading existing file)</label>
                <Input
                  value={fileId}
                  onChange={(e) => setFileId(e.target.value)}
                  className="bg-zinc-900/80 border-zinc-700"
                  placeholder="Google Drive File ID"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={saveToGoogleDrive}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isLoading}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Saving..." : "Save to Drive"}
                </Button>

                <Button
                  onClick={loadFromGoogleDrive}
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
                  disabled={isLoading || !fileId}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {isLoading ? "Loading..." : "Load from Drive"}
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

