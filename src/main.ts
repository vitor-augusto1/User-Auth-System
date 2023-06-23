import express, { Express } from "express";
import userRegistrationRouter from "./routes/user-registration.router";
import userLoginRouter from "./routes/user-login.router";

const app: Express = express();
const serverPort: number = 3333;

app.use(express.json());

app.use(userRegistrationRouter);
app.use(userLoginRouter);

app.get('/', (req, res) => {
  return res.status(200).json({ hello: "World" });
})

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
})
