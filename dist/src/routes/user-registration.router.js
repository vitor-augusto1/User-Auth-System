"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_registration_controller_1 = require("../controllers/user-registration.controller");
const userRegistrationRouter = (0, express_1.Router)();
userRegistrationRouter.post("/api/v1/users", user_registration_controller_1.registerUser);
exports.default = userRegistrationRouter;
