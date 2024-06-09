import mongoose from "mongoose"

export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL!).then(()=>{
            console.log('DB connected Sucessfully');
        })
    } catch (error) {
        console.log(error);
    }
}