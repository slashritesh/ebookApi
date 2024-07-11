import { NextFunction, Request, Response } from "express-serve-static-core";
import { UnauthenticationError } from "../errors/customErrors";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { User } from "../models/user.model";
import { userDoc } from "../dtos/user.dtos";

export interface AuthenticatedRequest extends Request {
    user?: userDoc | null;
}


export const authenticatedUser = async (req : AuthenticatedRequest,res : Response,next : NextFunction)=>{

    
    const accessToken = req.cookies.accessToken
    const refeshToken = req.cookies.refeshToken
    

    if(!accessToken && !refeshToken){
        throw new UnauthenticationError("User is Not Authenticated")
    }

    

    const isvalid = await jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET!)

    
    
    if(!isvalid) throw new UnauthenticationError("User is Not Authenticated , Token is Invalid")
    

    const {id} = isvalid as JwtPayload

    const user = await User.findById(id).select("-password -refreshToken")

    
    if(!user) throw new UnauthenticationError("Token error is not valid")

    req.user  = user
    
    next()
}