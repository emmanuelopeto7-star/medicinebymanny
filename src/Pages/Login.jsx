import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, createUserWithGoogle } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isNewUser, setIsNewUser] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await createUserWithGoogle()
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div style={{background: 'linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96">
        <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-6">
          {isNewUser ? ' Sign Up' : ' Welcome Back!'}
        </h2>
        {error && <p className="bg-red-100 text-red-600 text-sm p-3 rounded-xl mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border-2 border-purple-300 p-3 rounded-2xl mb-4 focus:outline-none focus:border-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder=" Password"
            className="w-full border-2 border-purple-300 p-3 rounded-2xl mb-4 focus:outline-none focus:border-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold p-3 rounded-2xl hover:scale-105 transition-transform shadow-lg">
            {isNewUser ? ' Sign Up' : ' Login'}
          </button>
        </form>
        <button onClick={handleGoogleSignIn} className="w-full mt-4 border-2 border-pink-300 text-pink-600 font-bold p-3 rounded-2xl hover:scale-105 transition-transform shadow">
           Sign in with Google
        </button>
        <p className="text-center mt-4 text-sm text-gray-500">
          {isNewUser ? 'Already have an account?' : 'New here?'}
          <button onClick={() => setIsNewUser(!isNewUser)} className="text-purple-600 font-bold ml-1 hover:underline">
            {isNewUser ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login