import { Request,Response } from "express"

export const createEbook = (req : Request,res : Response)=>{
    res.json({message : "book is created"})
    
}
export const getALlEbooks = (req : Request,res : Response)=>{
    res.json({message : "all books"})

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