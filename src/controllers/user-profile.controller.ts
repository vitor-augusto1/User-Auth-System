import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { findUserbyEmail } from "../model/User/findUser";

export async function profile(req: Request, res: Response) {
  const errors = validationResult(req);
  const thereIsErrorsInTheRequest = !errors.isEmpty();
  if (thereIsErrorsInTheRequest) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email } = req.body.user;
  const user = await findUserbyEmail(email);
  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }
  return res.status(200).json({ success: "User found", user: user });
}
