import jwt from 'jsonwebtoken'
import { user } from '../dtos/user.dtos'

export const createToken = async (payload : user)=>{
    const token = await jwt.sign(payload,process.env.JWT_SECRET!,{ expiresIn : 60 * 60 * 60})
    return token
}

export const verifyToken= async(token : string)=>{
    const isvalid = await jwt.verify(token,process.env.JWT_SECRET!)
    return isvalid
}

