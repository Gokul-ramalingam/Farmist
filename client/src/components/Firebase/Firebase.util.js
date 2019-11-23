import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCzsHRw5PuEEsnBX084bOgWGheko7rC-vY",
    authDomain: "farmist-fe2dd.firebaseapp.com",
    databaseURL: "https://farmist-fe2dd.firebaseio.com",
    projectId: "farmist-fe2dd",
    storageBucket: "farmist-fe2dd.appspot.com",
    messagingSenderId: "943792151871",
    appId: "1:943792151871:web:6f4dce4462b46c22cc478a",
    measurementId: "G-DXNQZLZN1C"
}

firebase.initializeApp(config)


export const auth = firebase.auth();


export default firebase;