import { Request,Response,NextFunction } from "express";
import { CustomError } from "../../error/Error";

export default function (Error:CustomError,req:Request,res:Response,next:NextFunction){
    res.status(Error.status).json({
        code:Error.status,
        success:false,
        error:{
            message:Error.message
        }
    })
}