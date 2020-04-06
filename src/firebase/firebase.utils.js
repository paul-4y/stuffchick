import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCRLiv_dvbZPeDEq5-pWl_recSrfbIuCVQ',
    authDomain: 'stuffchick-2736b.firebaseapp.com',
    databaseURL: 'https://stuffchick-2736b.firebaseio.com',
    projectId: 'stuffchick-2736b',
    storageBucket: 'stuffchick-2736b.appspot.com',
    messagingSenderId: '831457532496',
    appId: '1:831457532496:web:8a95d5b0653e47bbc94f55',
    measurementId: 'G-B4FF7SBQ9M',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapSHot = await userRef.get();
    if (!snapSHot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('createUserProfileDocument -> error', error.message);
        }
    }

    console.log('createUserProfileDocument -> snapSHot', snapSHot);
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
