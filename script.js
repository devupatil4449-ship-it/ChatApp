const messageInput = document.querySelector("#messageInput");
const sendBtn = document.querySelector("#sendBtn");
const messages = document.querySelector("#messages");

function sendMessage() {

    const text = messageInput.value.trim();

    if(text === ""){
        return;
    }

    const messageBubble = document.createElement("div");

    messageBubble.classList.add("message");
    messageBubble.classList.add("sent");

    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    messageBubble.innerHTML = `
        ${text}
        <br>
        <small>${time}</small>
    `;

    messages.appendChild(messageBubble);

    messageInput.value = "";

    messageBubble.scrollIntoView({
        behavior: "smooth"
    });
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});