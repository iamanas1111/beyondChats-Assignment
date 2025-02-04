import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to ChatBot ViU</h1>
      <p className="text-xl mb-8">Set up your intelligent chatbot in minutes!</p>
      <Link
        href="/register"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Get Started
      </Link>
    </div>
  )
}

