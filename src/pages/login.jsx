import React from 'react'

function LoginForm() {
  return (
   
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-md shadow-md border border-blue-200">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please login using account detail bellow.
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Forgot password */}
        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
            Forgot your password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition-colors">
          Sign In
        </button>

        {/* Footer link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an Account?
          <a href="#" className="text-pink-500 hover:underline ml-1">
            Create account
          </a>
        </p>
      </div>
    </div>

 
  )
}

export default LoginForm