// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2A7LSznC6SgprHXv90ux0ECdqyno53M",
  authDomain: "formsubmission-3297b.firebaseapp.com",
  databaseURL: "https://formsubmission-3297b-default-rtdb.firebaseio.com",
  projectId: "formsubmission-3297b",
  storageBucket: "formsubmission-3297b.appspot.com",
  messagingSenderId: "163135751704",
  appId: "1:163135751704:web:66129d0f07f61a603fa56d"
};

// Initialize Firebase
var firebaseDB=firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();