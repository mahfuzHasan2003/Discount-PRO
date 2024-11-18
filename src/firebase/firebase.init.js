// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBmzj9KpuLuI0wVjJkbL8XtLjOB3EzCaBI",
   authDomain: "discount-pro-dbdd9.firebaseapp.com",
   projectId: "discount-pro-dbdd9",
   storageBucket: "discount-pro-dbdd9.firebasestorage.app",
   messagingSenderId: "179885363643",
   appId: "1:179885363643:web:3f0f531647f6f9efbe749e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
