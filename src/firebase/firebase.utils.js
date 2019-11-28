import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
  apiKey: "AIzaSyBrmwPtWzCrtzymjZgUIBLuYvdHYWQKif8",
    authDomain: "e-commerce-db-5bf47.firebaseapp.com",
      databaseURL: "https://e-commerce-db-5bf47.firebaseio.com",
        projectId: "e-commerce-db-5bf47",
          storageBucket: "e-commerce-db-5bf47.appspot.com",
            messagingSenderId: "832259597379",
              appId: "1:832259597379:web:f347c732ae2f26c6e360f6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






