// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBagDIsWUSWi8qJj7qUYe0MkxY-Tsruf54",
    authDomain: "tesla-native-project.firebaseapp.com",
    databaseURL: "https://tesla-native-project-default-rtdb.firebaseio.com",
    projectId: "tesla-native-project",
    storageBucket: "tesla-native-project.appspot.com",
    messagingSenderId: "683080154065",
    appId: "1:683080154065:web:e2d30e8a4c70021dc43ef0"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export { auth, db };