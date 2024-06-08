import { Response } from "express"

const notfoundMiddleware = (res : Response)=>{
    return res.status(404).json({message : "route not found"})
}

export default notfoundMiddleware