import { Request, Response } from "express-serve-static-core"
import { BadRequestError, UnauthenticationError } from "../errors/customErrors"
import { User } from "../models/user.model"
import { StatusCodes } from "http-status-codes"
import { NextFunction } from "express"
import { Folders, uploadOnCloudinary } from "../utils/cloudinary"

const generateTokens = async (id : string) =>{

    const user = await User.findById(id)

    if (!user) {
        console.log(user , id);
        throw new Error("user not found to create token")
    }

    const accessToken = await user.generateAcessToken()
    const refreshToken = await user.generateRefreshToken()

    user.refeshToken = refreshToken

    return { accessToken,refreshToken}
}


export const register = async (req : Request<{},{}>,res : Response,next : NextFunction)=> {
    
    const {email,password} = req.body
    console.log(req.file);
     

    if(!email && !password){
        throw new BadRequestError('credentials required');
    }

    const existinguser = await User.findOne({email})

    if(existinguser){
        throw new UnauthenticationError('existing user, please login');
    }

    const localPathOfAvatar = req.file?.path
    console.log(localPathOfAvatar);
    

    if(!localPathOfAvatar) new BadRequestError("avatar image is required !") 
    
    
    const uploadedavatar = await uploadOnCloudinary(localPathOfAvatar!,Folders.avatar) 

    

    if(!uploadedavatar) new BadRequestError("avatar image is required !")
    
    console.log(uploadedavatar);
        
    const user = await User.create({email,password,avatar : uploadedavatar?.url})

    
    const createduser = await User.findById(user.id).select("-password -refreshToken")

    if(!createduser){
        return res.json({message : "Something Went Wrong, Coudn't user created"})
    }

    return res.status(StatusCodes.CREATED).json({
        data : createduser,
        sucess : true
    })

    
}




export const login = async (req : Request<{},{}>,res : Response,next : NextFunction) => {
    try {
        const {email,password} = req.body

        if(!email && !password) throw new BadRequestError("Creadential must required")

        const existinguser = await User.findOne({email})

        if(!existinguser){
            throw new UnauthenticationError('User not found, please Sign in');
        }

        const isCorrect = await existinguser.isCorrectPassword(password);

        if(!isCorrect){
            throw new UnauthenticationError('invalid credentials , password wrong')
        }

    
        const {refreshToken,accessToken} = await generateTokens(existinguser.id)

        res.cookie('refeshToken',refreshToken,{httpOnly:true,secure: true})
        res.cookie('accessToken',accessToken,{httpOnly:true,secure: true})
        
        res.status(StatusCodes.OK).json({message : "user logged in suessfully"})
    } catch (error) {
        next(error)
    }
}