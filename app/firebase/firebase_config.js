// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_PUBLIC_SSO_API_KEY,
  authDomain: process.env.FIREBASE_PUBLIC_SSO_AUTH_DOMAIN,
  databaseURL: FIREBASE_PUBLIC_SSO_DATA_BASE_URL,
  projectId: FIREBASE_PUBLIC_SSO_PROJECT_ID,
  storageBucket: FIREBASE_PUBLIC_SSO_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_PUBLIC_SSO_MESSAGING_SENDER_ID,
  appId: FIREBASE_PUBLIC_SSO_APP_ID,
  measurementId: FIREBASE_PUBLIC_SSO_MEASUREMENT_ID
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

export { app, auth}
