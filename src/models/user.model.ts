import mongoose, { Schema } from "mongoose";
import { user } from "../dtos/user.dtos";


const UserSchema : Schema<user> = new mongoose.Schema(
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
    },
    {
        timestamps : true
    }
)


export const User = mongoose.model("User",UserSchema);