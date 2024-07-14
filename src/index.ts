import * as dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction } from 'express';
import { connectDb } from './db/connetdb';
import authroutes from './routes/auth.route'
import morgan from 'morgan'
import { Response,Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMiddleware from './middleware/errorMiddleware';
import cookieParser from 'cookie-parser';
import ebookRoutes from './routes/ebook.routes'



const app = express();
app.use(express.urlencoded({extended:true }))
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static("public"))
app.use(cookieParser())


//routes 

app.use('/api/auth',authroutes);
app.use('/api/ebook',ebookRoutes);

app.use("*",(req : Request,res : Response)=>{
    res.status(StatusCodes.NOT_FOUND).json({
        message : "route not found"
    })
})


app.use(errorMiddleware);




const port = process.env.PORT || 5000;

const start = async ()=>{try {
    await connectDb();
    app.listen(port,()=>{
        console.log(`server is running on port : ${port}`);
    })
} catch (error) {
    console.log(error);
}}

start();