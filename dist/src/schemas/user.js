"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
class UserSchema {
    userName;
    email;
    password;
    userRole;
    constructor(userName, email, password, userRole) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    }
}
exports.UserSchema = UserSchema;
