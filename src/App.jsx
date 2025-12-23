import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import ScrollToTop from './routes/ScrollToTop'
import RequireDemoAuth from './routes/RequireDemoAuth'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Login = lazy(() => import('./pages/Login'))
const Admin = lazy(() => import('./pages/Admin'))

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="container-p py-16">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<RequireDemoAuth><Admin /></RequireDemoAuth>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloatingButton phoneNumber="+919999999999" />
    </div>
  )
}

export default App
