import {  NextFunction, Request,Response } from "express"
import { AuthenticatedRequest } from "../middleware/authMiddleware"
import { Ebook } from "../models/ebook.model"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, notFoundError } from "../errors/customErrors"
import { Folders, uploadOnCloudinary } from "../utils/cloudinary"

export const createEbook = async (req : AuthenticatedRequest,res : Response)=>{
    const {author , book_name , pages} = req.body
    const pdfLocalPath = req.file?.path

    const publishedby = req.user?.id

    const pdfuploaded = await uploadOnCloudinary(pdfLocalPath!,Folders.pdfs) 
    
    const newbook = { author, book_name , pages, publishedby, file : pdfuploaded?.url }

    const createdEbook = await Ebook.create(newbook)

    res.status(StatusCodes.CREATED).json({message : createdEbook})
}

export const getALlEbooks = async (req : Request,res : Response)=>{
    const books = await Ebook.find().populate('publishedby')
    res.status(StatusCodes.OK).json({data : books})
}


export const getSingleEbook = async (req : Request,res : Response,next : NextFunction)=>{
    try {
        const {id } = req.params
        console.log(`Looking for ebook with id: ${id}`);
        const singleBook = await Ebook.findById(id)
    
        if (!singleBook) {
            throw new notFoundError(`not found the book with this id : ${id} `)
        }  
        res.status(StatusCodes.OK).json({data : singleBook})

    } catch (error) {
        next(error)
    }
   
}


export const updateEbookDetails = (req : Request,res : Response)=>{
    
}

export const deleteEbook = async (req : Request,res : Response,next : NextFunction)=>{
    try {
        const {id } = req.params
        const deletedbook = await Ebook.findOneAndDelete({_id : id})

        if (!deletedbook) {
            throw new notFoundError(`not found the book with this id : ${id} `)
        }  

        res.status(StatusCodes.OK).json({message : `book deleted sucessfully ${deletedbook?.id}`})

    } catch (error) {
        next(error)
    }
}