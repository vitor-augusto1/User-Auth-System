import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export async function authorize(req: Request, res: Response, next: NextFunction) {
  try {
    const tokenHeader = req.headers.authorization!.split(" ")[1];
    console.log(`This is the authorization header: ${tokenHeader}`);
    const decodeToken = verify(tokenHeader, String(process.env.SECRET));
    req.body.user = decodeToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid request" });
  }
}
