import { Request, Response } from "express-serve-static-core"
import { user } from "../dtos/user.dtos"


export const register =(req : Request<{},{},user>,res : Response)=> {
    const {email , password} = req.body
    
    if (email && password) {
        return res.json({message : ""})
    }
}

export const login = (req : Request,res : Response) => {

}