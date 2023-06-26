import { Router } from "express";
import { authorize } from "../middlewares/user-auth.middleware";
import { profile } from "../controllers/user-profile.controller";

const userProfileRouter: Router = Router();

userProfileRouter.get("/api/v1/me", authorize, profile);

export default userProfileRouter;
