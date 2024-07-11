import { Request,Response } from "express"
import { AuthenticatedRequest } from "../middleware/authMiddleware"
import { Ebook } from "../models/ebook.model"
import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../errors/customErrors"
import { uploadOnCloudinary } from "../utils/cloudinary"

export const createEbook = async (req : AuthenticatedRequest,res : Response)=>{
    const {auther , book_name , pages, tags} = req.body
    


    

    const publishedby = req.user?.id

    // upload file on cloudinary
    const url = await uploadOnCloudinary("./")
    

    const newbook = {auther,book_name,pages,file : url,publishedby,tags}

    const createdEbook = await Ebook.create(newbook)

    res.status(StatusCodes.CREATED).json({message : createEbook})
}


export const getALlEbooks = async (req : Request,res : Response)=>{

    const books = await Ebook.find()
    res.status(StatusCodes.OK).json({data : books})

}


export const getSingleEbook = (req : Request,res : Response)=>{
    res.json({message : "single book details"})

}


export const updateEbookDetails = (req : Request,res : Response)=>{
    res.json({message : "update book details"})

}

export const deleteEbook = (req : Request,res : Response)=>{
    res.json({message : "book deleted sucesfully"})

}