import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'

const HARDCODED_USERNAME = 'admin'
const HARDCODED_PASSWORD = 'AquaaLiv@123'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')

    const u = username.trim()
    const p = password.trim()
    const ok = u === HARDCODED_USERNAME && p === HARDCODED_PASSWORD
    if (!ok) {
      setSuccess(false)
      setError('Invalid username or password')
      return
    }

    setSuccess(true)
    window.sessionStorage.setItem('aquaaliv_demo_auth', 'true')
    navigate('/admin')
  }

  return (
    <>
      <Helmet>
        <title>Login | AquaaLiv</title>
      </Helmet>

      <section className="container-p py-16">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white font-bold">A</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Welcome back</h1>
            <p className="mt-2 text-slate-600">Sign in to continue</p>
            <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700">
              <div className="font-medium text-slate-900">Demo credentials</div>
              <div className="mt-1">Username: <span className="font-mono">admin</span></div>
              <div>Password: <span className="font-mono">AquaaLiv@123</span></div>
            </div>
          </div>

          <div className="card">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  Logged in successfully.
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Login
              </button>

              <div className="pt-1 text-center text-sm text-slate-600">
                Back to{' '}
                <Link to="/" className="font-medium">
                  Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
