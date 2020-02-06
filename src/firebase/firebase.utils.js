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

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
