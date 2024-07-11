
import { v2 as cloudinary } from "cloudinary";


const options = { 
    cloud_name: 'dfldifk81', 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET, 
    secure : true
}
// const options = { 
//     cloud_name: 'dfldifk81', 
//     api_key: "785977471721285", 
//     api_secret: "CHpd-lgQpeJLCOpQB1zoJ-Bls9U", 
//     secure : true
// }

cloudinary.config(options);






export const uploadOnCloudinary = async (localPath : string)=>{
    console.log(options);
    console.log("values : ",process.env.CLOUDINARY_API_SECRET , process.env.CLOUDINARY_API_KEY);
    
    try {
        if (!localPath) return null

        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localPath,{
            resource_type : "auto",
        }) 

        console.log("upload file sucessfully",response);
        return response

    } catch (error) {
        // fs.unlinkSync(localPath) // remove temp file on server
        console.log(error);
        
        return null
    }
}




