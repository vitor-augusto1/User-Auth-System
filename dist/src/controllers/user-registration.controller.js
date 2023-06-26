"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const express_validator_1 = require("express-validator");
const user_1 = require("../schemas/user");
const UserCreation_1 = require("../model/User/UserCreation");
async function registerUser(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    const thereIsErrorsInTheRequest = !errors.isEmpty();
    if (thereIsErrorsInTheRequest) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userName, email, password, userRole } = req.body;
    const newUser = new user_1.UserSchema(userName, email, password, userRole);
    if (await (0, UserCreation_1.createNewUserDocument)(newUser)) {
        return res.status(200).json({ success: "User registered successfully!" });
    }
    else {
        return res.status(422).json({ error: "Error trying to register user!" });
    }
}
exports.registerUser = registerUser;
