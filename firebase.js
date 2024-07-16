import { initializeApp } from 'firebase/app';


const FIREBASE_API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY ,
    authDomain: "food-delivery-app-a51fd.firebaseapp.com",
    projectId: "food-delivery-app-a51fd",
    storageBucket: "food-delivery-app-a51fd.appspot.com",
    messagingSenderId: "90091292403",
    appId: "1:90091292403:web:80523b3a06376531349986"
  };


  const app = initializeApp(firebaseConfig);


  export default app;