export class CustomError extends Error{
    public status: number;
    constructor(message:string,Status_code:number){
        super(message)
        this.status=Status_code
    }
}