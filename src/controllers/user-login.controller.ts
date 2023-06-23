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


