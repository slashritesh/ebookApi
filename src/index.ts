import express from 'express';
import * as dotenv from 'dotenv';
import notfoundMiddleware from './middleware/notfoundMiddleware';

dotenv.config();
const app = express();
app.use(express.json());


// not found middleware
app.use(notfoundMiddleware);



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
})