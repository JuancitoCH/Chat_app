import app from "./app";
import { Server } from 'socket.io'
import http from 'http'
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*'
    }
})


io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    (socket as any).username = username;
    next();
});

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
})


server.listen(process.env.PORT, () => {
    console.log("- [Server] :  Listen on Port " + process.env.PORT)
})
