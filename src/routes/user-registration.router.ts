import { Router } from "express";
import { registerUser } from "../controllers/user-registration.controller";

const userRegistrationRouter: Router = Router();

userRegistrationRouter.post("/api/v1/users", registerUser);

export default userRegistrationRouter;
