import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserSchema } from "../schemas/user";
import { createNewUserDocument } from "../model/User/UserCreation";

export async function registerUser(req: Request, res: Response) {
  const errors = validationResult(req);
  const thereIsErrorsInTheRequest = !errors.isEmpty();
  if (thereIsErrorsInTheRequest) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userName, email, password, userRole }: UserSchema = req.body;
  const newUser = new UserSchema(userName, email, password, userRole);
  if (await createNewUserDocument(newUser)) {
    return res.status(200).json({ success: "User registered successfully!" });
  } else {
    return res.status(422).json({ error: "Error trying to register user!" });
  }
} 
