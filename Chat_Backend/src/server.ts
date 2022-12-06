import app from "./app";

app.listen(process.env.PORT,()=>{
    console.log("- [Server] :  Listen on Port " + process.env.PORT)
})
