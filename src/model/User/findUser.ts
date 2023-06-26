import { UserSchema } from "../../schemas/user";
import { firestoreInstance } from "../firestore";


export type FirestoreDocument = FirebaseFirestore.DocumentData | undefined | UserSchema;


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
  console.log(`User found: ${docSnapshot}`);
  return userData;
}
