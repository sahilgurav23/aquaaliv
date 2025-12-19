import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | AquaaLiv</title>
        <meta name="description" content="Contact AquaaLiv for water purifier installation, repair, AMC, and filter replacement. Phone, email, and location details." />
      </Helmet>
      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Get in Touch</h1>
          <p className="mt-2 text-slate-600">We’re here to help with installation, service, and product enquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-slate-600 text-sm">Describe your requirement and we’ll contact you shortly.</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
              <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                <li>Phone: <a className="hover:underline" href="tel:+919689102762">+91 96891 42762</a></li>
                <li>Email: <a className="hover:underline" href="mailto:aquaaliv@gmail.com">aquaaliv@gmail.com</a></li>
                <li>Address: AquaaLiv, Office No 02, Bhakti-Desai Heights, Near Bank of Maharashtra, Akurdi - 035 </li>
                <li>Hours: Mon–Sat, 9:00 AM – 7:00 PM</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-slate-900">Location</h3>
              <div className="mt-3 h-64 w-full rounded-xl bg-slate-100 grid place-items-center text-slate-500 text-sm">
                Google Map placeholder
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+919999999999&text=Hello%20AquaaLiv%2C%20I%27d%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
