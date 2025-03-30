    import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../JWT_SECRET.js";
const {verify } = jwt;
interface extendedRequest extends Request {
    userId?:number
}

export function AuthMiddleware(req:extendedRequest,res:Response,next:NextFunction){
   try{
    const jwt = req.headers.authorization
    if (!jwt) {
        res.status(401).json({ msg: "You are not logged in" });
        return
     }
     const data =  verify(jwt, JWT_SECRET)
    //@ts-ignore
    req.userId = data.userId
    console.log(req.userId);
    
    next()
} catch (error) {
    // Return "Invalid request" if token verification fails
    res.status(400).json({ msg: "Invalid request" });
    return 
  }
}