
      
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
      
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD1qXSPYZ0SN9dIwFZsJUumllNfWEg5TRY",

  authDomain: "taller-eaml.firebaseapp.com",

  projectId: "taller-eaml",

  storageBucket: "taller-eaml.appspot.com",

  messagingSenderId: "617190663264",

  appId: "1:617190663264:web:be30399fc657e9f87bcf05",

  measurementId: "G-MS1KG7X2NW"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth= getAuth(app);

