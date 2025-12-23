import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyAMz4Hx2guBhn-TRN_9ocFe1MfhPywO6Hk",
  authDomain: "fir-c2859.firebaseapp.com",
  projectId: "fir-c2859",
  storageBucket: "fir-c2859.firebasestorage.app",
  messagingSenderId: "760731234192",
  appId: "1:760731234192:web:b649ae08aa3386c6450d15",
  measurementId: "G-NP1W21N6PG"
}

export const firebaseConfigured = Object.values(firebaseConfig).every(Boolean)

let db = null

if (firebaseConfigured) {
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
  db = getFirestore(app)
  const analytics = getAnalytics(app)
}

export function getDb() {
  return db
}
