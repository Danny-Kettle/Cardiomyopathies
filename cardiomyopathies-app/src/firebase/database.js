import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth'
import {
  getFirestore,
  serverTimestamp,
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
  limit,
  getDocs,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDtHDqAiZSBSSe5S5U4FLQxcoStC6jW8FI',
  authDomain: 'cardiomyopathy-ada0f.firebaseapp.com',
  projectId: 'cardiomyopathy-ada0f',
  storageBucket: 'cardiomyopathy-ada0f.appspot.com',
  messagingSenderId: '66124791357',
  appId: '1:66124791357:web:7dd55dbc50febdda77b454',
  measurementId: 'G-X03WBZWS2B'
}

// Read database once ?
const app = initializeApp(firebaseConfig)
const firebaseAuthentication = getAuth()
const firebaseFireStore = getFirestore()
const timestamp = serverTimestamp()

export {
  app,
  firebaseAuthentication,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getFirestore,
  updateProfile,
  firebaseFireStore,
  timestamp,
  collection,
  onSnapshot,
  limit,
  sendPasswordResetEmail,
  serverTimestamp,
  query,
  addDoc,
  where,
  deleteDoc,
  getDocs,
  getDoc,
  setDoc,
  doc
}
