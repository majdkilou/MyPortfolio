import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeWR8uJ1PTijTu2bdA0Khc7bA7abgjciI',
  authDomain: 'contact-me-dcdd8.firebaseapp.com',
  projectId: 'contact-me-dcdd8',
  storageBucket: 'contact-me-dcdd8.appspot.com',
  messagingSenderId: '184674215533',
  appId: '1:184674215533:web:a992276c615e0c7908c164',
  measurementId: 'G-FDEJBVTQWN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
