import { Router } from "express";
import { Request,Response } from "express";
const router = Router()

router.get("/",(req:Request,res:Response)=>{
    res.json({
        success:true,
        message:"It Work"
    })
})

export default router