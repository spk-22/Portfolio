"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ResumeViewer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Your Google Drive file ID
  const fileId = "10uT9Ux_IVtmUUNTsLdj7JpLwd8TqJb0E"

  // Google Drive embed URL format
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`

  useEffect(() => {
    // Check if the embed URL is valid
    const checkEmbedUrl = async () => {
      try {
        const response = await fetch(embedUrl, { method: "HEAD" })
        if (!response.ok) {
          setError(true)
        }
      } catch (err) {
        console.error("Error checking embed URL:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    // Simulate loading for better UX
    const timer = setTimeout(() => {
      checkEmbedUrl()
    }, 1000)

    return () => clearTimeout(timer)
  }, [embedUrl])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Siya P Kurandwad - Resume</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 flex flex-col items-center">
        {loading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="w-full max-w-4xl my-8">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error loading resume</AlertTitle>
              <AlertDescription>
                The Google Drive file could not be accessed. Please make sure the file exists and is shared with the
                proper permissions.
              </AlertDescription>
            </Alert>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Troubleshooting steps:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Check if the Google Drive file exists</li>
                <li>Make sure the file is shared with "Anyone with the link" can view</li>
                <li>Try generating a new sharing link from Google Drive</li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative pb-[150%] h-0">
              <iframe
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                title="Resume"
              ></iframe>
            </div>
            <div className="p-4 text-center bg-gray-50">
              <p className="text-sm text-gray-500">
                This is a view-only version of the resume. The document cannot be downloaded or printed.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
