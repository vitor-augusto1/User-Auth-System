import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import * as serviceAccount from '../../serviceAccountKey.json' assert { type: "json" };

initializeApp({
  credential: cert(
    {
      // Your credentials
    }
  )
});

export const firestoreInstance = getFirestore();

//const docRef = db.collection('users').doc('alovelace');
//
//await docRef.set({
//  first: 'Ada',
//  last: 'Lovelace',
//  born: 1815
//});
