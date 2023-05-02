import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.GATSBY_APIKEY,
    authDomain: process.env.GATSBY_AUTHDOMAIN,
    databaseURL: process.env.GATSBY_DATABASEURL,
    projectId: process.env.GATSBY_PROJECTID,
    storageBucket: process.env.GATSBY_STORAGEBUCKET,
    messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
    appId: process.env.GATSBY_APPID,
    measurementId: process.env.GATSBY_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);