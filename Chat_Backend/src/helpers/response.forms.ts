import {Response} from 'express'
import { CustomError } from '../error/Error'


enum Status{
    OK=200,
    NotFound=404,
    ServerError=500,
    Create=201,
    UserError=400
}
interface Response_Interface{
    code:Number,
    success:Boolean,
    data?:Object,
}

const Response_Format = {
    OK(res:Response,data:any){
        const json:Response_Interface={
            code:Status.OK,
            success:true,
            data:data
        }
        return res.status(Status.OK).json(json)
    },
    serverError(res:Response,data:any){
        throw new CustomError("Server Error",Status.ServerError)
    },
    Create(res:Response,data:any){
        const json:Response_Interface={
            code:Status.Create,
            success:true,
            data:data
        }
        return res.status(Status.Create).json(json)
    },
    NotFound(res:Response){
        throw new CustomError("Route Not Found",Status.NotFound)
    },
    Html(res:Response,content:string){
        return res.status(Status.OK).send(
            `<h1>${content}</h1>`
        )
    },
}

export {
    Status,
    Response_Format,
    Response_Interface
}