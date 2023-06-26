"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUserDocument = exports.userHasAvalidPassword = void 0;
const firestore_1 = require("../firestore");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function encryptUserPassword(userPassword) {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt_1.default.hash(userPassword, saltRounds);
        console.log(`Hashed password: ${hashedPassword}`);
        return hashedPassword;
    }
    catch (error) {
        console.log(`Error hashing the password: ${error}`);
        return false;
    }
}
async function userHasAvalidPassword(userPassword, hash) {
    const isUserPassowordValid = await bcrypt_1.default.compare(userPassword, hash);
    return isUserPassowordValid;
}
exports.userHasAvalidPassword = userHasAvalidPassword;
async function createNewUserDocument(newUser) {
    const encryptedUserPassword = await encryptUserPassword(newUser.password);
    if (!encryptedUserPassword) {
        return false;
    }
    const userEmail = newUser.email;
    const documentReference = firestore_1.firestoreInstance.collection('users').doc(userEmail);
    await documentReference.set({
        userName: newUser.userName,
        email: userEmail,
        password: encryptedUserPassword,
        userRole: newUser.userRole,
    });
    return true;
}
exports.createNewUserDocument = createNewUserDocument;
