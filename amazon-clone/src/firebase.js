import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnSLEncajiv7Qcl6dBFYv_GINkcd5-GCQ",
  authDomain: "clone-challenge-4d02f.firebaseapp.com",
  databaseURL: "https://clone-challenge-4d02f.firebaseio.com",
  projectId: "clone-challenge-4d02f",
  storageBucket: "clone-challenge-4d02f.appspot.com",
  messagingSenderId: "635633925047",
  appId: "1:635633925047:web:aacc53ad5838cdd8ef4632",
  measurementId: "G-V5PZB6HZG9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};