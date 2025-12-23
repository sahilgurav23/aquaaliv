import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'
import { DEFAULT_SITE_CONTACT, getSiteContact } from '../lib/siteContact'

export default function Contact() {
  const [contact, setContact] = useState(DEFAULT_SITE_CONTACT)

  useEffect(() => {
    let alive = true

    ;(async () => {
      try {
        const data = await getSiteContact()
        if (!alive) return
        setContact(data)
      } catch {
        if (!alive) return
        setContact(DEFAULT_SITE_CONTACT)
      }
    })()

    return () => {
      alive = false
    }
  }, [])

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
                <li>Phone: <a className="hover:underline" href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a></li>
                <li>Email: <a className="hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>Address: {contact.address}</li>
                <li>Hours: {contact.hours}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-slate-900">Location</h3>
              <div className="mt-3 rounded-xl overflow-hidden">
                <div className="aspect-[4/3] sm:aspect-[16/9] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.1357851602702!2d73.78094344907674!3d18.651805682144744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b98ab095146b%3A0xea72838264435b8d!2sAquaaLiv%20Water%20Solution!5e0!3m2!1sen!2sin!4v1766249965364!5m2!1sen!2sin"
                    title="AquaaLiv Water Solution location map"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>
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
