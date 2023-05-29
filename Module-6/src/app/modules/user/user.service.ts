import { IUser } from "./user.interface";
import User from "./user.model";

// post user service

export const createUserToDb = async(payload: IUser): Promise<IUser> => {
    const user = await new User (payload
      
    )
    
    await user.save();
    // console.log(user.fullName())
   return user
   
  }
// get all users service
  export const getUsersFromDb =async (): Promise<IUser[]> => {
    const users = await User.find();
    return users

  }
// get  user By Id service
  export const getUserByIdFromDb =async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1}) // it is called field filtering
    return user

  }
// get  user By Id service
  // export const getUserByIdFromDb =async (payload: string): Promise<IUser | null> => {
  //   const user = await User.findOne({id: payload}, {name: 1}) // it is called field filtering
  //   return user

  // }
  