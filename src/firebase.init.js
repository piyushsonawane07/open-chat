import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLeOA6AcAGkaVSVL9UW1vjj3d98xQCrP0",
    authDomain: "open-chat-cd9cd.firebaseapp.com",
    projectId: "open-chat-cd9cd",
    storageBucket: "open-chat-cd9cd.appspot.com",
    messagingSenderId: "475912353739",
    appId: "1:475912353739:web:dd22a7952f3e506554a84e",
    measurementId: "G-SNPNH2ZN06"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }