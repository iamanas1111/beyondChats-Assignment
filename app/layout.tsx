import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Assignment BeyondChats - Chatbot Setup",
  description: "Set up your intelligent chatbot with BeyondChats",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">{children}</main>
      </body>
    </html>
  )
}

