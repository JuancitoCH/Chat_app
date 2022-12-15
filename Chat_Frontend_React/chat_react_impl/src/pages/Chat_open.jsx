import '../assets/chat.css'
import socket from '../libs/socket';
import { useUserContext } from '../context/user.context'

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
    const {setUserData} = useUserContext()
    socket.on("connect_error", (err) => {
        if (err.message === "invalid username") {
          setUserData({
            usernameAlreadySelected :false
          })
          console.log("ERROR CONENLASN")
    
        }
      });
    return (

        <section>
            {/* <button onClick={destroyed}>x</button> */}
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
