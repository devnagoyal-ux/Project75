import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyATfXr40SD6HCjcHugicIqQo56ue5bzXGM",
    authDomain: "newsletter-2c097.firebaseapp.com",
    databaseURL: "https://newsletter-2c097.firebaseio.com",
    projectId: "newsletter-2c097",
    storageBucket: "newsletter-2c097.appspot.com",
    messagingSenderId: "360385737741",
    appId: "1:360385737741:web:ccf19de4d949ac24f09144"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();