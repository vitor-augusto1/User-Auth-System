"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestoreInstance = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount = __importStar(require("../../serviceAccountKey.json"));
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)({
        "type": "service_account",
        "project_id": "user-auth-system-db",
        "private_key_id": "bf6e0ee9580df47220cc3ed1093b7431bf9fe697",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDzamZeGNDGhxlO\nEdit76/51Z6DLKI2bbbu7mg8dPaeOGddusUHCjQrGhZdx6gxtQ/BfDusoK1OfG0H\nEKLTCXqWtMzKMv7BRxGtd3tDIcu/Nu0u33P6yibLXyJ8z0CaSByM3Df5wNdGVoJG\n7JuFRlri7s2DjV+Ernzz7Q9lo9xKjDJ6JCim+L2WOJl6rORnsvgqJ+aVDcsqcadj\nLeb9kav6ulvl2KlRqHUXVoMPjo1BrwfvYg2SYSR63tGbso02DWUq43EspIkpxiuj\nam+eed/GpBNvAVRQDFAxz+6pPkj9Zm9SNvvJlM0kPmj3DPL+B3327YO3SEZ7DkZx\n0n4QyYhZAgMBAAECggEAGatUR+2yV+VCVWR2Ea2k70ydjolj7SfNHU2V6h45gv5B\nZEsrC5mCCTOTPT4uA1lBOURqdJjDKJ41edkWxU41bR7RjoHUh2RWaGZ2YLd31DPX\nd6nH13V++X5lqtIeUXFzqqUZ4A7RL5E1jtjVHmJeI5qkSzsFjNPryGYXnr5/dNA3\nEfDfa9qTQDvyrJQSTWlcule4n8jLHbWHBJW8Z2kj+LL6egrXVbCIhrtO1iLw03G3\n+whFnvGXHDL3qEE38MO6fh4T/7CeLlN+e6qEnlw9dzZ+Soe4/LmFNFBSt16//bla\njOZd3RX/JdPAZtOlIoqZdcYAn0ZLH0HNpfMhNvRAQwKBgQD7JK4TL4dTvulWGTzE\ngsEGqVP/xG1SzPYqSVACUsSDkHo+gCacUump6nHF6av/QNV9g+Alh8aRtqU2Z8Q4\nfWTquO48DdyWm4WU37/EzIhZ1nK+mbneLZfN8BY1ZbK9mEYO8ii1rBaL1cjqkOYr\ntGMKtm5aYxCIYtSLAQ0KfeCQAwKBgQD4H3aKJSSihx0TSykoUNKG6jZzpxgRi0XQ\nNKaVojsWzTPXZn+neCjtluZr9hQt6m6MkkfR1U48JYYlP5ENnuuc2AkR3YWd+sou\nM9vyVU3UtXCyZ781txcMr94MRdryt5MCfxmAA0kK4WmZ4xjPHweg90LJo/iiQyJ6\n1Kydft2dcwKBgQChDgjELPqv7gJdQJoDu4Zl6zj/EMy7CM3kmFdC5ik35fM/GZep\nMFLAsKR9szil3MIMWAHqj4P79hFFLo5bW67YB/hfctQ/kUS9EDA+2JuoYSn8qUDV\nBpAPdSQI4ksZ4wkqlIke2FktG9BY/Mtew7OwLwXd2SHFFPwQmH/wdoEIWQKBgAut\nD1r43Hx5dzjNNKadBwsqQl224z8QGrztfVlVRQqRpXrha+hpkyN7EmTKM7Dlc0ZS\nK+cH7qKN8X4XO7A0Zkn/MI4SqpMAljsOXa9NrFfyIdeDYlAYyZDjRcO2FdOOJ/Da\nIk0P2oQUj2+abDRy9VzxxcbPXIfmON0m3Oica7lZAoGBANRbZaL9dQY+lE6dCVtb\n3NZ3zd+j9muRXN0V+arFoonOOMGenPHN+DncHlMuJmwN0MfybMz77WteJTd8qBH/\n7cwmfsBPOtcWle4OIhw+GeFsTp4ASbjVRLipeWkOtn5/HWHVtXK9v3zGF8nV9INw\ny1wQzUuQQiFynl06UXwGgdS5\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-li3vr@user-auth-system-db.iam.gserviceaccount.com",
        "client_id": "105985874956754725993",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-li3vr%40user-auth-system-db.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    })
});
exports.firestoreInstance = (0, firestore_1.getFirestore)();
//const docRef = db.collection('users').doc('alovelace');
//
//await docRef.set({
//  first: 'Ada',
//  last: 'Lovelace',
//  born: 1815
//});
