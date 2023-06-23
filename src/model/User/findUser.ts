import { firestoreInstance } from "../firestore";


type FirestoreDocument = FirebaseFirestore.DocumentData | undefined;


export async function findUserbyEmail(email: string): Promise<boolean | FirestoreDocument> {
  const docSnapshot = await firestoreInstance
                              .collection('users')
                              .doc(email).get();
  const documentDoesNotExist: boolean = !docSnapshot.exists;
  if (documentDoesNotExist) {
    console.log("User does not exists");
    return false;
  }
  const userData: FirestoreDocument = docSnapshot.data();
  console.log(`User found: ${userData}`);
  return userData;
}
