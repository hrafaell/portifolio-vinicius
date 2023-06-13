import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDjokjjolCbLAzfT8MiogiZHTOnbVLSUVA',
  authDomain: 'react-portifolio-dashboard.firebaseapp.com',
  projectId: 'react-portifolio-dashboard',
  storageBucket: 'react-portifolio-dashboard.appspot.com',
  messagingSenderId: '966115651515',
  appId: '1:966115651515:web:fcfad7ef173c3564319e9e',
  measurementId: 'G-ESNMJKLJ6T',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
