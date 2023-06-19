import { UserSchema } from "../../schemas/user";
import { firestoreInstance } from "../firestore";
import bcrypt from "bcrypt";


async function encryptUserPassword(userPassword: string): Promise<string | boolean> {
}


  const userEmail = newUser.email;
  const documentReference = firestoreInstance.collection('users').doc(userEmail);
  await documentReference.set({
    userName: newUser.userName,
    email: userEmail,
    password: " ", //Encrypt user's password before storing it
    userRole: newUser.userRole,
  });
}
