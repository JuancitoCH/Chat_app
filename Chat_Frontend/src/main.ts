import './style.css'
import { io } from 'socket.io-client'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<ul id="messages"></ul>
<form id="form" action="">
  <input id="input" autocomplete="off" /><button>Send</button>
</form>
`



const socket = io("http://localhost:4000", {
  // autoConnect:false
})

let messages = document.getElementById('messages') as HTMLUListElement;
let form = document.getElementById('form') as HTMLFormElement
let input = document.getElementById('input') as HTMLInputElement

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input?.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
})

socket.on('chat message', function(msg) {
  let item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

