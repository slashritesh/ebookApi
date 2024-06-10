import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err : Error,req : Request,res : Response,next : NextFunction)=>{
    console.log(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Something went wrong,try Later'
    
    res.status(statusCode).json({message,statusCode})
}

export default errorMiddleware