import { Request,Response } from "express";
import { CustomError } from "../error/Error";

const init = {
    intit(req:Request,res:Response){
        res.json({
            success:true,
            message:"It Work"
        })
    },
    error(req:Request,res:Response){
        throw new CustomError("Error Test",500)
    }
}
export default init