"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../../components/Button"
import ScrapedWebpages from "@/components/ScrapedWebpages"

const dummyWebpages = [
  { id: 1, url: "https://example.com", status: "scraped" },
  { id: 2, url: "https://example.com/about", status: "scraped" },
  { id: 3, url: "https://example.com/products", status: "pending" },
  { id: 4, url: "https://example.com/contact", status: "pending" },
] as const

export default function SetupOrganization() {
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [companyDescription, setCompanyDescription] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission and redirect
    router.push("/chatbot-integration")
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Setup Your Organization</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="url"
          placeholder="Company Website URL"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
        />
        <textarea
          placeholder="Company Description"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        ></textarea>
        <Button type="submit" className="w-full">
          Continue to Chatbot Integration
        </Button>
      </form>

      <ScrapedWebpages webpages={dummyWebpages.slice()} />
    </div>
  )
}

