import firebase from "firebase";


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApI7o-xhr1DjF2v-adxEthz3WmhrCnWWQ",
    authDomain: "react-portfolio-8aaae.firebaseapp.com",
    projectId: "react-portfolio-8aaae",
    storageBucket: "react-portfolio-8aaae.appspot.com",
    messagingSenderId: "503753508495",
    appId: "1:503753508495:web:65673366a926bcef20d2fa",
  });
  
  var db = firebaseApp.firestore();

export { db };