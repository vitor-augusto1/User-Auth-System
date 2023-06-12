import { IUser, UserRole } from "../interfaces/IUser";


class UserSchema implements IUser {
  userName: string;
  email: string;
  password: string;
  userRole: UserRole | undefined;
   
  constructor(
    userName: string, email: string, 
    password: string, userRole: UserRole | undefined
  ) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.userRole = userRole
  }
}
