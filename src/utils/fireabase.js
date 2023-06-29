// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAPdZdAlOzFocCvdvC2wRGErA72QYr2-MU",
  authDomain: "piechart-68e2d.firebaseapp.com",
  projectId: "piechart-68e2d",
  storageBucket: "piechart-68e2d.appspot.com",
  messagingSenderId: "946782847386",
  appId: "1:946782847386:web:a5d93e49c84b6dfd783a23",
  measurementId: "G-H5K848B66P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider()
const auth = getAuth(app);
export {app,auth,provider}