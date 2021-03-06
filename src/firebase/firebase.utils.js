import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC8t3CUHX2TVJvbnbszE7-gyy-j7WJOuFw",
    authDomain: "onlineshop-3a650.firebaseapp.com",
    databaseURL: "https://onlineshop-3a650.firebaseio.com",
    projectId: "onlineshop-3a650",
    storageBucket: "onlineshop-3a650.appspot.com",
    messagingSenderId: "421048397151",
    appId: "1:421048397151:web:5a9f703b837dc28bc29aea",
    measurementId: "G-0M3LG5DCBV"
  };

firebase.initializeApp(config);

export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
            displayName,
             email, 
             createdAt,
            ...additionalData
        });

        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToList = collections => {
    return collections.docs.map(doc => doc.data())}

//   const transformedCollection = collections.docs.map(doc => {
//     const { title, items } = doc.data();

//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items
//     };
//   });

//   return transformedCollection.reduce((accumulator, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});
// };




export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle= () =>auth.signInWithPopup(provider);

export default  firebase;
