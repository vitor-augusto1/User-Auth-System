import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { IUserLogin } from "../interfaces/IUser";
import { findUserbyEmail } from "../model/User/findUser";
import { userHasAvalidPassword } from "../model/User/UserCreation";
import { sign } from "jsonwebtoken";


const jwtAuth = {
  secret: String(process.env.SECRET),
  expires: '1h',
};


export async function login(req: Request, res: Response) {
  const errors = validationResult(req);
  const thereIsErrorsInTheRequest = !errors.isEmpty();
  if (thereIsErrorsInTheRequest) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password }: IUserLogin = req.body;
  const userDocument: any = await findUserbyEmail(email);
  if (!userDocument) {
    return res.status(404).json({ error: "User not found." });
  }
  const storedHashedPassword = userDocument.password;
  if (! await userHasAvalidPassword(password, storedHashedPassword)) {
    return res.status(401).json({ error: "Wrong credentials" });
  }
  const token = sign(
    {
      email: email,
    },
    jwtAuth.secret,
    {
      expiresIn: jwtAuth.expires,
    }
  );
  return res.status(200).json({ token });
}
