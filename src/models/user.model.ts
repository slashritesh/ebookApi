import mongoose, { Schema } from "mongoose";
import { user } from "../dtos/user.dtos";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';



const UserSchema  = new mongoose.Schema<user>(
    {
        email : {
            type : String,
            unique : true,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        avatar : {
            type : String,
            required : false
        },
        refeshToken : {
            type : String
        }
    },
    {
        timestamps : true
    }
)

// hooks 
UserSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt)
        return next()
    }
    return next()
})

// methods 
UserSchema.methods.isCorrectPassword = async function(password : string) : Promise<boolean>{
    const isCorrect = await bcrypt.compare(password,this.password)
    return isCorrect
}


UserSchema.methods.generateAcessToken = async function (){
    const token = await jwt.sign({
        id : this.id,
        email : this.email
    },
    process.env.ACCESS_TOKEN_SECRET!,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    });

    return token
}

UserSchema.methods.generateRefreshToken = async function (){
    const token = await jwt.sign({
        id : this.id,
    },
    process.env.REFRESH_TOKEN_SECRET!,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    });

    return token
}




export const User = mongoose.model("User",UserSchema);