"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express_validator_1 = require("express-validator");
const findUser_1 = require("../model/User/findUser");
const UserCreation_1 = require("../model/User/UserCreation");
const jsonwebtoken_1 = require("jsonwebtoken");
const jwtAuth = {
    secret: String(process.env.SECRET),
    expires: '1h',
};
async function login(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    const thereIsErrorsInTheRequest = !errors.isEmpty();
    if (thereIsErrorsInTheRequest) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const userDocument = await (0, findUser_1.findUserbyEmail)(email);
    if (!userDocument) {
        return res.status(404).json({ error: "User not found." });
    }
    const storedHashedPassword = userDocument.password;
    if (!await (0, UserCreation_1.userHasAvalidPassword)(password, storedHashedPassword)) {
        return res.status(401).json({ error: "Wrong credentials" });
    }
    const token = (0, jsonwebtoken_1.sign)({
        email: email,
    }, jwtAuth.secret, {
        expiresIn: jwtAuth.expires,
    });
    return res.status(200).json({ token });
}
exports.login = login;
