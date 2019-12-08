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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      
      await userRef.set({ 
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
        console.log('error creating user', error.message)
    }

  } 

  return userRef;

}

export const addCollectionsAndDocuments =async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
});

return await batch.commit()
}

export const convertCollectionsSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }

  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






