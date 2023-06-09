export enum UserRole {
  Admin = "Admin",
  User = "User",
}


export interface IUser {
  userName: string;
  email: string;
  password: string;
  userRole: UserRole | undefined;
}
