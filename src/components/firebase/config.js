// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: 'AIzaSyBOZZ1xYHs8Iz7X79vqAG9S8kQJwJLCAqo',
 authDomain: 'affiliated-f82ce.firebaseapp.com',
 projectId: 'affiliated-f82ce',
 storageBucket: 'affiliated-f82ce.appspot.com',
 messagingSenderId: '88100302862',
 appId: '1:88100302862:web:c279764a0ca7a5db52cc5f',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
