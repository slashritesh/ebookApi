import { Request, Response } from "express-serve-static-core"
import { user } from "../dtos/user.dtos"
import { BadRequestError } from "../errors/customErrors"


export const register =(req : Request<{},{},user>,res : Response)=> {
    const {email,password} = req.body
    if(!email && !password){
        throw new BadRequestError('credentials required');
    }
    res.json({email,password})
}

export const login = (req : Request,res : Response) => {

}