"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
async function authorize(req, res, next) {
    try {
        const tokenHeader = req.headers.authorization.split(" ")[1];
        console.log(`This is the authorization header: ${tokenHeader}`);
        const decodeToken = (0, jsonwebtoken_1.verify)(tokenHeader, String(process.env.SECRET));
        req.body.user = decodeToken;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: "Invalid request" });
    }
}
exports.authorize = authorize;
