"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserbyEmail = void 0;
const firestore_1 = require("../firestore");
async function findUserbyEmail(email) {
    const docSnapshot = await firestore_1.firestoreInstance
        .collection('users')
        .doc(email).get();
    const documentDoesNotExist = !docSnapshot.exists;
    if (documentDoesNotExist) {
        console.log("User does not exists");
        return false;
    }
    const userData = docSnapshot.data();
    console.log(`User found: ${docSnapshot}`);
    return userData;
}
exports.findUserbyEmail = findUserbyEmail;
