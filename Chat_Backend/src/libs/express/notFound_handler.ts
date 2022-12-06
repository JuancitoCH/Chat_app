import { Request,Response,NextFunction } from "express";

export default function (req:Request,res:Response,next:NextFunction){
    res.status(404).json({
        code:404,
        success:false,
        error:{
            message:"404 Not Found"
        }
    })
}