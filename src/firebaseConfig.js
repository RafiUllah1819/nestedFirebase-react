import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5d2GzvGk9EvgftbkFM40OHNKs_DSAJdk",
    authDomain: "product-bda53.firebaseapp.com",
    projectId: "product-bda53",
    storageBucket: "product-bda53.appspot.com",
    messagingSenderId: "358833073898",
    appId: "1:358833073898:web:0c93009d5746eee084f193",
    measurementId: "G-PETSNB6K7Y"
  };
   

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  
  export {db} 