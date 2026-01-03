import { Suspense, lazy, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import CallFloatingButton from './components/CallFloatingButton'
import ScrollToTop from './routes/ScrollToTop'
import RequireDemoAuth from './routes/RequireDemoAuth'
import TopBar from './components/TopBar'

const Home = lazy(() => import('./pages/Home'))
const HomeWithCTA = lazy(() => import('./pages/HomeWithCTA'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Login = lazy(() => import('./pages/Login'))
const Admin = lazy(() => import('./pages/Admin'))
const AddReview = lazy(() => import('./pages/AddReview'))
const Reviews = lazy(() => import('./pages/Reviews'))
const ReviewAdmin = lazy(() => import('./pages/ReviewAdmin'))

function NotFound() {
  return (
    <div className="container-p py-16">
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for does not exist. You can continue browsing from the home page.
      </p>
      <div className="mt-6">
        <a href="/" className="btn-primary">
          Go to Home
        </a>
      </div>
    </div>
  )
}

const GLOBAL_WATER_CONFIG = {
  dropFrequency: 0.35,
  minDropSizeVw: 0.4,
  maxDropSizeVw: 0.9,
  minDurationMs: 4200,
  maxDurationMs: 7200,
  color: 'rgba(56,189,248,0.55)',
  maxOpacity: 0.55,
  speedFactor: 0.9,
  enableSound: false,
  soundUrl: '',
  soundVolume: 0.16,
}

function GlobalWaterOverlay() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (typeof window === 'undefined' || typeof window.requestAnimationFrame !== 'function') {
      return
    }

    const reducedMotionQuery =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null

    if (reducedMotionQuery && reducedMotionQuery.matches) {
      return
    }

    const config = { ...GLOBAL_WATER_CONFIG }

    const nav = typeof navigator !== 'undefined' ? navigator : null
    const connection = nav && nav.connection
    const saveData = connection && connection.saveData === true
    const deviceMemory = nav && nav.deviceMemory
    const hardwareConcurrency = nav && nav.hardwareConcurrency
    const lowMemory = typeof deviceMemory === 'number' && deviceMemory <= 2
    const lowCpu = typeof hardwareConcurrency === 'number' && hardwareConcurrency <= 4
    const lowPower = saveData || lowMemory || lowCpu

    if (lowPower) {
      config.dropFrequency *= 0.5
      config.speedFactor *= 0.85
    }

    if (typeof document !== 'undefined') {
      const root = document.documentElement
      if (root && typeof config.maxOpacity === 'number') {
        root.style.setProperty('--water-drop-max-opacity', String(config.maxOpacity))
      }
    }

    const settings = {
      dropFrequency: config.dropFrequency,
      minDropSizeVw: config.minDropSizeVw,
      maxDropSizeVw: config.maxDropSizeVw,
      minDurationMs: config.minDurationMs,
      maxDurationMs: config.maxDurationMs,
      color: config.color,
      speedFactor: config.speedFactor,
      enableSound: config.enableSound,
      soundUrl: config.soundUrl,
      soundVolume: config.soundVolume,
    }

    let frameId
    let lastTime = performance.now()
    let accumulator = 0
    let destroyed = false
    let lastSoundTime = 0

    let audio
    if (settings.enableSound && settings.soundUrl && typeof Audio === 'function') {
      audio = new Audio(settings.soundUrl)
      audio.volume =
        typeof settings.soundVolume === 'number' ? settings.soundVolume : 0.15
    }

    const baseFrequency = Math.max(settings.dropFrequency, 0.04)

    function playSound(now) {
      if (!audio) return
      if (now - lastSoundTime < 350) return
      lastSoundTime = now
      audio.currentTime = 0
      audio.play()
    }

    function createRipple(leftPercent) {
      const ripple = document.createElement('div')
      ripple.className = 'water-drop-ripple'
      ripple.style.left = `${leftPercent}%`
      ripple.style.bottom = '2vh'
      ripple.addEventListener('animationend', () => {
        if (ripple.parentElement === container) {
          container.removeChild(ripple)
        }
      })
      container.appendChild(ripple)
    }

    function createDrop(now) {
      if (!container) return

      const drop = document.createElement('div')
      drop.className = 'water-drop'

      const sizeVw =
        settings.minDropSizeVw +
        Math.random() * (settings.maxDropSizeVw - settings.minDropSizeVw)
      const leftPercent = Math.random() * 100
      const baseDuration =
        settings.minDurationMs +
        Math.random() * (settings.maxDurationMs - settings.minDurationMs)
      const durationMs =
        baseDuration / (settings.speedFactor > 0 ? settings.speedFactor : 1)

      drop.style.width = `${sizeVw}vw`
      drop.style.height = `${sizeVw * 1.6}vw`
      drop.style.left = `${leftPercent}%`
      drop.style.top = '-12vh'
      drop.style.animationDuration = `${durationMs}ms`
      drop.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), ${settings.color})`

      drop.addEventListener('animationend', () => {
        if (drop.parentElement === container) {
          container.removeChild(drop)
        }
      })

      container.appendChild(drop)

      createRipple(leftPercent)
      playSound(now)
    }

    function animationLoop(now) {
      if (destroyed) return

      const delta = now - lastTime
      lastTime = now
      accumulator += delta

      const intervalMs = 1000 / baseFrequency

      while (accumulator >= intervalMs) {
        accumulator -= intervalMs
        createDrop(now)
      }

      frameId = window.requestAnimationFrame(animationLoop)
    }

    frameId = window.requestAnimationFrame(animationLoop)

    return () => {
      destroyed = true
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      if (container) {
        container.innerHTML = ''
      }
      if (audio) {
        audio.pause()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="water-drops-overlay"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      <GlobalWaterOverlay />
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="container-p py-16">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeWithCTA />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<RequireDemoAuth><Admin /></RequireDemoAuth>} />
            <Route path="/add-review" element={<AddReview />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/review-admin" element={<RequireDemoAuth><ReviewAdmin /></RequireDemoAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloatingButton phoneNumber="+919689142762" />
      <CallFloatingButton phoneNumber="+919689102762" />
    </div>
  )
}

export default App
