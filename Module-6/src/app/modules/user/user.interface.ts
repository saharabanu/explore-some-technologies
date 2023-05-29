import { Model } from "mongoose";

// interface
export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string
  }
// static methods
  interface UserModel extends Model<IUser> {
    myStaticMethod(): number;
  }
  
// interface of methods
  export interface IUserMethods {
    fullName(): string;
  }