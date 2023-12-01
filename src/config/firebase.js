import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getMessaging } from 'firebase/messaging'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCophaZ6DTWRizq383S-PbodSnog_h4p2M",
  authDomain: "fitfashion-store.firebaseapp.com",
  projectId: "fitfashion-store",
  storageBucket: "fitfashion-store.appspot.com",
  messagingSenderId: "76990165874",
  appId: "1:76990165874:web:d27b06e8e5d60d0c65a3eb",
  measurementId: "G-H1SB4RH71V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app)
export const messaging = getMessaging(app)