import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIRESTORE_API_ID
});

const db = getFirestore(app);

export default db;