import mongoose from "mongoose";

interface ebookDoc {
    publishedby?: string,
    author?: string,
    book_name?: string,
    pages?: string,
    file?: string,
    tags?: [
        {
            name : string
        }
    ]
}



const ebookSchema = new mongoose.Schema<ebookDoc>({
    publishedby : mongoose.SchemaTypes.ObjectId,
    author : String,
    book_name : String,
    pages : String, // derived value from the pdf 
    file : String,
    tags : [
        {
            name : String,
        }
    ],
    
},{timestamps : true})



export const Ebook = mongoose.model("Ebook",ebookSchema)