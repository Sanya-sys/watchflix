import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC01fODYLJyfFqf6izz4vruR1JASFjOGRw",
  authDomain: "watchflix-72aa8.firebaseapp.com",
  projectId: "watchflix-72aa8",
  storageBucket: "watchflix-72aa8.appspot.com",
  messagingSenderId: "944830053594",
  appId: "1:944830053594:web:3e61b3dc6fb3edfb70b9e3",
  measurementId: "G-7YYJXHM9Q0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();



// 'Used to access firebase from our project'

// used to connect to db.