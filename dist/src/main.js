"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_registration_router_1 = __importDefault(require("./routes/user-registration.router"));
const user_login_router_1 = __importDefault(require("./routes/user-login.router"));
const user_profile_router_1 = __importDefault(require("./routes/user-profile.router"));
const app = (0, express_1.default)();
const serverPort = 3333;
app.use(express_1.default.json());
app.use(user_registration_router_1.default);
app.use(user_login_router_1.default);
app.use(user_profile_router_1.default);
app.get('/', (req, res) => {
    return res.status(200).json({ hello: "World" });
});
app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});
