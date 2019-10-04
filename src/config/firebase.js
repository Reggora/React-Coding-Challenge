import * as firebase from "firebase";

const FirebaseConfig = {
  apiKey: "AIzaSyDyxoj8x9M4VVycAtS9FjfY987Oq7ILP9k",
  authDomain: "catdex-f6fb3.firebaseapp.com",
  databaseURL: "https://catdex-f6fb3.firebaseio.com",
  projectId: "catdex-f6fb3",
  storageBucket: "",
  messagingSenderId: "672549844818",
  appId: "1:672549844818:web:60bee94aa6745345bfac8b",
  measurementId: "G-GEX6W303KQ"
};

firebase.initializeApp(FirebaseConfig);

var databaseRef = firebase.database().ref();
export const catsRef = databaseRef;