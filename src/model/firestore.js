import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import * as serviceAccount from '../../serviceAccountKey.json' assert { type: "json" };

