import { firestoreInstance } from "../firestore";


type FirestoreDocument = FirebaseFirestore.DocumentData | undefined;


export async function findUserbyEmail(email: string): Promise<boolean | FirestoreDocument> {
}
