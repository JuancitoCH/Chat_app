import { io } from 'socket.io-client'

const socket = io("http://localhost:4000", {
    autoConnect:false
})

socket.onAny((event, ...args) => {
    console.log(event, args);
});

export function destroyed(){
    socket.off("connect_error");
}

export default socket