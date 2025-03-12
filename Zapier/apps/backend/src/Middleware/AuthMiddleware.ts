import { NextFunction,Request,Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../JWT_SECRET";
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
    console.log(data);
    //@ts-ignore
    req.userId = Number(data.id)
    next()
} catch (error) {
    // Return "Invalid request" if token verification fails
    res.status(400).json({ msg: "Invalid request" });
    return 
  }
}