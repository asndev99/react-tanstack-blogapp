import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SignIn signInUrl="/register" />
    </div>
  )
}

export default LoginPage
