"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../../components/Button"

export default function Register() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      // Simulate sending verification code
      setStep(2)
    } else {
      // Simulate verification
      router.push("/setup-organization")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Create Your Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" required />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <Button type="submit" className="w-full">
              Register
            </Button>
            <div className="text-center">
              <span className="text-gray-600">or</span>
            </div>
            <Button
              onClick={() => alert("Google sign-in not implemented in this demo")}
              className="w-full bg-red-500 hover:bg-red-600"
            >
              Continue with Google
            </Button>
          </>
        ) : (
          <>
            <p className="text-center mb-4">We have sent a verification code to {email}</p>
            <input
              type="text"
              placeholder="Verification Code"
              className="w-full p-2 border border-gray-300 rounded"
              required
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </>
        )}
      </form>
    </div>
  )
}

