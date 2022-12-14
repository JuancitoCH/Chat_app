import '../assets/chat.css'
import { io } from 'socket.io-client'

const socket = io("http://localhost:4000", {
    // autoConnect:false
})

socket.on('chat message', function (msg) {
    const messages = document.getElementById('messages')
    let item = document.createElement('li');
    item.classList.add('message')
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
function sendMessage(e) {
    e.preventDefault()
    if (e.target.message?.value) {
        socket.emit('chat message', e.target.message.value);
        e.target.message.value = '';
    }
}
export default function Chat_open() {

    return (

        <section>
            <div className='chat'>
                <ul id='messages'></ul>
            </div>
            <form onSubmit={sendMessage}>
                <input name='message' type="text" />
                <button>Send</button>
            </form>
        </section>
    )
}
