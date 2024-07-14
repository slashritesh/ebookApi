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
    publishedby :{
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    book_name : {
        type : String,
        required : true
    },
    pages : {
        type : String,
        required : true
    }, // derived value from the pdf 
    file : {
        type : String,
        required : true
    },
    tags : [
        {
            name : {
                type : String,
                required : true
            },
        },
    ],
    
},{timestamps : true})



export const Ebook = mongoose.model("Ebook",ebookSchema)