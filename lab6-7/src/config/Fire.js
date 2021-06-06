import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq2NJJDLa1V7mlbJUHL2Do_L0mDQ0V0e0",
  authDomain: "piw-lab6-pizzeria.firebaseapp.com",
  projectId: "piw-lab6-pizzeria",
  storageBucket: "piw-lab6-pizzeria.appspot.com",
  messagingSenderId: "743361556771",
  appId: "1:743361556771:web:7a3365ad57e5c9af695c96",
  measurementId: "G-TYGV30ZLMC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export default fire;

export const addUserData = async (user, userData) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .set({
      ...userData,
    });
};

export const getUserData = async (user) => {
  return firestore.collection("users").doc(user.uid).get();
};

export const updateUserData = async (user, userData) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .update({
      ...userData,
    });
};

export const addPizza = (user, postData) => {

  firestore.collection("pizza").add({
      owner: user.uid,
      dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
      pizza: postData
  });
}

