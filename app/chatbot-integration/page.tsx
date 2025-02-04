"use client"

import { useRouter } from "next/navigation"
import Button from "../../components/Button"

export default function ChatbotIntegration() {
  const router = useRouter()

  const handleTestChatbot = () => {
    // Implement chatbot testing logic here
    alert("Chatbot testing functionality would be implemented here")
  }

  const handleIntegrate = () => {
    // Simulate integration process
    setTimeout(() => {
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Chatbot Integration & Testing</h1>
      <div className="space-y-8">
        <div>
          <Button onClick={handleTestChatbot} className="w-full mb-4">
            Test Chatbot
          </Button>
          <p className="text-sm text-gray-600 text-center">Open your website with a dummy chatbot integration</p>
        </div>
        <div>
          <Button onClick={handleIntegrate} className="w-full mb-4">
            Integrate on Your Website
          </Button>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Integration Instructions</h3>
            <p className="text-sm mb-2">Copy and paste the following code within the {"<head>"} tag of your website:</p>
            <pre className="bg-gray-200 p-2 rounded text-sm overflow-x-auto">
              {'<script src="https://viu.com/widget.js"></script>'}
            </pre>
          </div>
        </div>
        <div>
          <Button onClick={() => router.push("/test-integration")} className="w-full">
            Test Integration
          </Button>
        </div>
      </div>
    </div>
  )
}

