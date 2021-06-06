import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBq2NJJDLa1V7mlbJUHL2Do_L0mDQ0V0e0",
//   authDomain: "piw-lab6-pizzeria.firebaseapp.com",
//   projectId: "piw-lab6-pizzeria",
//   storageBucket: "piw-lab6-pizzeria.appspot.com",
//   messagingSenderId: "743361556771",
//   appId: "1:743361556771:web:7a3365ad57e5c9af695c96",
//   measurementId: "G-TYGV30ZLMC"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA1kqqf-KeGxgfArWoj9IsJ0hoy3voJJms",
  authDomain: "piw-lab6-7-pizzeria.firebaseapp.com",
  projectId: "piw-lab6-7-pizzeria",
  storageBucket: "piw-lab6-7-pizzeria.appspot.com",
  messagingSenderId: "770474741148",
  appId: "1:770474741148:web:4299e31cdd4f97de280c59",
  measurementId: "G-GPRPL4V10C"
} 

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

export const addPizza = async (user, pizza) => {
  return firestore
    .collection("Pizza").add({
      Pizza_name: pizza.typedPizzaName,
      Pizzas_number: pizza.typedNumber,
      uid: user.uid
    });
}

export const getPizzas = async(user) => {
  let pizzasArray = [];
  const posts  = await firestore.collection("Pizza").where('uid', '==', user.uid).get();
  posts.forEach(doc => {
      pizzasArray.push({id:doc.id, data: doc.data()});
  });
  return pizzasArray;
}

export const deletePizza = async(pizzaName) => {
  const deletePizzass = await firestore.collection("Pizza").doc(pizzaName).delete().then(() => {
      console.log("Pizza successfully deleted!");
  }).catch((error) => {
      console.error("Error removing pizza: ", error);
  });
}
