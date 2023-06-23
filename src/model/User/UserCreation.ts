import { UserSchema } from "../../schemas/user";
import { firestoreInstance } from "../firestore";
import bcrypt from "bcrypt";


async function encryptUserPassword(userPassword: string): Promise<string | boolean> {
  const saltRounds: number = 10;
  try {
    const hashedPassword: string = await bcrypt.hash(userPassword, saltRounds);
    console.log(`Hashed password: ${hashedPassword}`);
    return hashedPassword;
  } catch (error) {
    console.log(`Error hashing the password: ${error}`);
    return false;
  }
}


export async function userHasAvalidPassword(userPassword: string, hash: string): Promise<boolean> {
  const isUserPassowordValid: boolean = await bcrypt.compare(userPassword, hash);
  return isUserPassowordValid;
}


export async function createNewUserDocument(newUser: UserSchema): Promise<boolean> {
  const encryptedUserPassword = await encryptUserPassword(newUser.password);
  if (!encryptedUserPassword) {
    return false;
  }
  const userEmail = newUser.email;
  const documentReference = firestoreInstance.collection('users').doc(userEmail);
  await documentReference.set({
    userName: newUser.userName,
    email: userEmail,
    password: encryptedUserPassword,
    userRole: newUser.userRole,
  });
  return true;
}
