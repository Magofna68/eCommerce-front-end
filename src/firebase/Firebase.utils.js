import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBhnVx1XWwHwiosiNmpjDDGwZw8QyKIJUY",
  authDomain: "m68-e-commerce.firebaseapp.com",
  projectId: "m68-e-commerce",
  storageBucket: "m68-e-commerce.appspot.com",
  messagingSenderId: "756447485486",
  appId: "1:756447485486:web:6f633390210d031e0409bf"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;
// string interpolation to get back the uid of authenticated user
const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();
// snapShot is the Obj. we get back from firestore that holds info; will recieve whether
// snapShot is or isnt created & valid
console.log(snapShot)

// takes properties out of userAuth and stores them in database for authenticated users
if (!snapShot.exists) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
    } catch (error) {
    console.log("error creating user", error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;