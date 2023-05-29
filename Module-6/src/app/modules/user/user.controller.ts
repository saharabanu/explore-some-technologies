import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUserByIdFromDb, getUsersFromDb } from "./user.service";

// crete user
export const createUser = async(req:Request, res:Response, next:NextFunction) => {
    const data = req.body;
    
    const user = await createUserToDb(data)
    res.status(200).json({
        status: "success",
        data: user
    });
       
    
    
    };
    // all get user
export const getUsers = async(req:Request, res:Response, next:NextFunction) => {
    
    const user = await getUsersFromDb()
    res.status(200).json({
        status: "success",
        data: user
    });
       
    
    
    }
    // get user by Id
export const getUserById = async(req:Request, res:Response, next:NextFunction) => {
      const {id} = req.params;
    const user = await getUserByIdFromDb(id)
    res.status(200).json({
        status: "success",
        data: user
    });
       
    
    
    }

    // // 1. Create an interface ,2.Schema ,3.Model , 4. Database Query,representing a document in MongoDB.
    // route => controller => service
    