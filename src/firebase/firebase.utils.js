import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyAYc00aSZ1PRBp5YWjWCgrqj-gzAfQkn-o",
  authDomain: "ayadshop-d93dc.firebaseapp.com",
  databaseURL: "https://ayadshop-d93dc.firebaseio.com",
  projectId: "ayadshop-d93dc",
  storageBucket: "ayadshop-d93dc.appspot.com",
  messagingSenderId: "155225276886",
  appId: "1:155225276886:web:12e9b180a5971073f96477",
  measurementId: "G-Z6FG591N0T"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, otherParams) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherParams
      });
    } catch(error){
      console.log('Creating a user is impossible' , error.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}


export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;
