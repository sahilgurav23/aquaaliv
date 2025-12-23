import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firebaseConfigured, getDb } from './firebase'

export const DEFAULT_SITE_CONTACT = {
  phoneDisplay: '+91 96891 02762',
  phoneTel: '+919689102762',
  email: 'aquaaliv@gmail.com',
  address: 'AquaaLiv, Office No 02, Bhakti-Desai Heights, Near Bank of Maharashtra, Akurdi - 035',
  hours: 'Mon–Sat, 9:00 AM – 7:00 PM',
}

export async function getSiteContact() {
  if (!firebaseConfigured) return DEFAULT_SITE_CONTACT

  const db = getDb()
  const ref = doc(db, 'site', 'contact')
  const snap = await getDoc(ref)

  if (!snap.exists()) return DEFAULT_SITE_CONTACT
  const data = snap.data() || {}

  return {
    ...DEFAULT_SITE_CONTACT,
    ...data,
  }
}

export async function saveSiteContact(payload) {
  if (!firebaseConfigured) throw new Error('Firebase is not configured')

  const db = getDb()
  const ref = doc(db, 'site', 'contact')
  const data = {
    ...payload,
    updatedAt: serverTimestamp(),
  }

  await setDoc(ref, data, { merge: true })
}
