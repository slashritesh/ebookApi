import { Document } from "mongoose";
import {  userDoc } from "../dtos/user.dtos";
import * as express from "express-serve-static-core"


declare global {
    namespace Express {
        interface Request {
            user? : userDoc | null
        }
    }
}