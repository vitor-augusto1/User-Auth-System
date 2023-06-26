"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_login_controller_1 = require("../controllers/user-login.controller");
const userLoginRouter = (0, express_1.Router)();
userLoginRouter.post("/api/v1/login", user_login_controller_1.login);
exports.default = userLoginRouter;
