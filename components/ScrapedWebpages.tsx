import React, { useState } from "react"

interface Webpage {
  id: number
  url: string
  status: "scraped" | "pending"
}

interface ScrapedWebpagesProps {
  webpages: Webpage[]
}

export default function ScrapedWebpages({ webpages }: ScrapedWebpagesProps) {
  const [selectedWebpage, setSelectedWebpage] = useState<Webpage | null>(null)

  const handleWebpageClick = (webpage: Webpage) => {
    setSelectedWebpage(webpage)
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Scraped Webpages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {webpages.map((webpage) => (
          <div
            key={webpage.id}
            className={`p-4 border rounded cursor-pointer transition-colors duration-300 ${
              webpage.status === "scraped" ? "bg-green-100 border-green-300" : "bg-yellow-100 border-yellow-300"
            }`}
            onClick={() => handleWebpageClick(webpage)}
          >
            <p className="font-medium">{webpage.url}</p>
            <p className="text-sm text-gray-600">Status: {webpage.status}</p>
          </div>
        ))}
      </div>
      {selectedWebpage && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">Data Chunks for {selectedWebpage.url}</h4>
          <div className="bg-white p-4 rounded border">
            <p>Dummy data chunk 1</p>
            <p>Dummy data chunk 2</p>
            <p>Dummy data chunk 3</p>
          </div>
        </div>
      )}
    </div>
  )
}

