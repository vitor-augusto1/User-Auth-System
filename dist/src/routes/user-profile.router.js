"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_auth_middleware_1 = require("../middlewares/user-auth.middleware");
const user_profile_controller_1 = require("../controllers/user-profile.controller");
const userProfileRouter = (0, express_1.Router)();
userProfileRouter.get("/api/v1/me", user_auth_middleware_1.authorize, user_profile_controller_1.profile);
exports.default = userProfileRouter;
