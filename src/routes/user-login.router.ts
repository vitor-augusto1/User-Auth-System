import { Router } from "express";
import { login } from "../controllers/user-login.controller";

const userLoginRouter: Router = Router();

userLoginRouter.post("/api/v1/login", login);

export default userLoginRouter;
