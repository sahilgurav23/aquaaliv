import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_SITE_CONTACT, getSiteContact, saveSiteContact } from '../lib/siteContact'
import { firebaseConfigured } from '../lib/firebase'

// Validation functions
const validatePhone = (phone) => /^\d{10}$/.test(phone)
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function Admin() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState({
    phoneDisplay: '',
    phoneTel: '',
    email: ''
  })

  const [phoneDisplay, setPhoneDisplay] = useState(DEFAULT_SITE_CONTACT.phoneDisplay)
  const [phoneTel, setPhoneTel] = useState(DEFAULT_SITE_CONTACT.phoneTel)
  const [email, setEmail] = useState(DEFAULT_SITE_CONTACT.email)
  const [address, setAddress] = useState(DEFAULT_SITE_CONTACT.address)
  const [hours, setHours] = useState(DEFAULT_SITE_CONTACT.hours)

  const disabled = useMemo(() => saving || !firebaseConfigured, [saving, firebaseConfigured])

  useEffect(() => {
    let alive = true

    ;(async () => {
      setLoading(true)
      setError('')
      setMessage('')

      try {
        const data = await getSiteContact()
        if (!alive) return

        setPhoneDisplay(data.phoneDisplay || DEFAULT_SITE_CONTACT.phoneDisplay)
        setPhoneTel(data.phoneTel || DEFAULT_SITE_CONTACT.phoneTel)
        setEmail(data.email || DEFAULT_SITE_CONTACT.email)
        setAddress(data.address || DEFAULT_SITE_CONTACT.address)
        setHours(data.hours || DEFAULT_SITE_CONTACT.hours)
      } catch (e) {
        if (!alive) return
        setError(e?.message || 'Failed to load details')
      } finally {
        if (!alive) return
        setLoading(false)
      }
    })()

    return () => {
      alive = false
    }
  }, [])

  const onSave = async (e) => {
    e.preventDefault()
    
    // Reset previous errors
    const newErrors = {
      phoneDisplay: '',
      phoneTel: '',
      email: ''
    }
    
    // Validate phone display (10 digits, numbers only)
    const phoneDisplayValue = phoneDisplay.replace(/\D/g, '')
    if (!phoneDisplayValue) {
      newErrors.phoneDisplay = 'Phone number is required'
    } else if (!validatePhone(phoneDisplayValue)) {
      newErrors.phoneDisplay = 'Please enter a valid 10-digit phone number'
    }
    
    // Validate phone tel (10 digits, numbers only)
    const phoneTelValue = phoneTel.replace(/\D/g, '')
    if (!phoneTelValue) {
      newErrors.phoneTel = 'Phone number is required'
    } else if (!validatePhone(phoneTelValue)) {
      newErrors.phoneTel = 'Please enter a valid 10-digit phone number'
    }
    
    // Validate email
    const emailValue = email.trim()
    if (!emailValue) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(emailValue)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Set validation errors and stop if any
    setValidationErrors(newErrors)
    if (Object.values(newErrors).some(error => error)) {
      return
    }
    
    setSaving(true)
    setError('')
    setMessage('')

    try {
      await saveSiteContact({
        phoneDisplay: phoneDisplayValue,
        phoneTel: phoneTelValue,
        email: emailValue,
        address: address.trim(),
        hours: hours.trim(),
      })
      setMessage('Saved successfully')
    } catch (err) {
      setError(err?.message || 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const onLogout = () => {
    window.sessionStorage.removeItem('aquaaliv_demo_auth')
    navigate('/')
  }

  return (
    <>
      <Helmet>
        <title>Admin | AquaaLiv</title>
      </Helmet>

      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin</h1>
            <p className="mt-2 text-slate-600">Edit Contact details shown across the website</p>
          </div>
          <button type="button" onClick={onLogout} className="btn-secondary">
            Logout
          </button>
        </div>

        {!firebaseConfigured && (
          <div className="mb-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Firebase is not configured. Add Vite env vars (VITE_FIREBASE_...) and restart the dev server.
          </div>
        )}

        <div className="card max-w-2xl">
          {loading ? (
            <div className="text-slate-600">Loading...</div>
          ) : (
            <form onSubmit={onSave} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700" htmlFor="phoneDisplay">Phone (display)</label>
                  <input
                    id="phoneDisplay"
                    value={phoneDisplay}
                    onChange={(e) => {
                      // Only allow numbers and limit to 10 digits
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10)
                      setPhoneDisplay(value)
                      // Clear error when user types
                      if (validationErrors.phoneDisplay) {
                        setValidationErrors(prev => ({ ...prev, phoneDisplay: '' }))
                      }
                    }}
                    className={`mt-2 w-full rounded-md border ${validationErrors.phoneDisplay ? 'border-red-300' : 'border-slate-200'} px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200`}
                    placeholder="9876543210"
                    disabled={disabled}
                    required
                  />
                  {validationErrors.phoneDisplay && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.phoneDisplay}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700" htmlFor="phoneTel">Phone (tel link)</label>
                  <input
                    id="phoneTel"
                    value={phoneTel}
                    onChange={(e) => {
                      // Only allow numbers and limit to 10 digits
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10)
                      setPhoneTel(value)
                      // Clear error when user types
                      if (validationErrors.phoneTel) {
                        setValidationErrors(prev => ({ ...prev, phoneTel: '' }))
                      }
                    }}
                    className={`mt-2 w-full rounded-md border ${validationErrors.phoneTel ? 'border-red-300' : 'border-slate-200'} px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200`}
                    placeholder="9876543210"
                    disabled={disabled}
                    required
                  />
                  {validationErrors.phoneTel && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.phoneTel}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    // Clear error when user types
                    if (validationErrors.email) {
                      setValidationErrors(prev => ({ ...prev, email: '' }))
                    }
                  }}
                  className={`mt-2 w-full rounded-md border ${validationErrors.email ? 'border-red-300' : 'border-slate-200'} px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200`}
                  placeholder="name@example.com"
                  disabled={disabled}
                  required
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="address">Address</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 w-full min-h-24 rounded-md border border-slate-200 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  disabled={disabled}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="hours">Hours</label>
                <input
                  id="hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  disabled={disabled}
                />
              </div>

              {error && (
                <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {error}
                </div>
              )}

              {message && (
                <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  {message}
                </div>
              )}

              <button type="submit" className="btn-primary" disabled={disabled}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
