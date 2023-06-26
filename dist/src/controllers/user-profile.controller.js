"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
const express_validator_1 = require("express-validator");
const findUser_1 = require("../model/User/findUser");
async function profile(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    const thereIsErrorsInTheRequest = !errors.isEmpty();
    if (thereIsErrorsInTheRequest) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body.user;
    const user = await (0, findUser_1.findUserbyEmail)(email);
    if (!user) {
        return res.status(404).json({ error: "User not found." });
    }
    return res.status(200).json({ success: "User found", user: user });
}
exports.profile = profile;
