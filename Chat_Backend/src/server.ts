import app from "./app";
import {Server} from 'socket.io'
import http from 'http'
const server = http.createServer(app)
const io = new Server(server)

io.on('connection',(socket) => {
    console.log('a user connected')
})

server.listen(process.env.PORT,()=>{
    console.log("- [Server] :  Listen on Port " + process.env.PORT)
})
