import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBidoDhtfgvz2yfPZv5V7uY0CBGHda3AO4',
  authDomain: 'jiujitsuapp-a2807.firebaseapp.com',
  projectId: 'jiujitsuapp-a2807',
  storageBucket: 'jiujitsuapp-a2807.appspot.com',
  messagingSenderId: '343392498477',
  appId: '1:343392498477:web:1e6b2246a4a277e67799a4',
  measurementId: 'G-KG68850H4Q',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
