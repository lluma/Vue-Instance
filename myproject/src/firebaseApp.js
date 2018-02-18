import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBODQ-QdW4MvOariyZSMQNPJHF84BPVpH4',
  authDomain: 'vue-instan.firebaseapp.com',
  databaseURL: 'https://vue-instan.firebaseio.com',
  projectId: 'vue-instan',
  storageBucket: 'vue-instan.appspot.com',
  messagingSenderId: '983743184665'
}
export const firebaseApp = firebase.initializeApp(config)
export const newsRef = firebaseApp.database().ref().child('news')
