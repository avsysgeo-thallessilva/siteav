const chatButton = document.getElementById("button-body");
const chatContainer = document.getElementById("chatContainer");
const minimizeButton = document.getElementById("minimize-button");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("conversation-group");
const sendButton = document.getElementById("SentButton");

if (chatButton) {
    chatButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.add("open");
            chatButton.classList.add("clicked");
        }
    });
}

if (minimizeButton) {
    minimizeButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.remove("open");
            chatButton.classList.remove("clicked");
        }
    });
}

function createMessage(message, isUser = true) {
    const newMessage = document.createElement('div');
    newMessage.classList.add(isUser ? 'sentText' : 'botText');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    return newMessage;
}

function chatbotResponse() {
    const messages = ["Só um instante, por favor.", "Se tiver mais dúvidas, estou a disposição"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    const botMessage = createMessage(message, false);
    botMessage.scrollIntoView();
}

chatInput.addEventListener("input", function (event) {
    if (event.target.value) {
        sendButton.classList.add("svgsent");
    } else {
        sendButton.classList.remove("svgsent");
    }
});

chatInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    }
});

if (sendButton) {
    sendButton.addEventListener("click", function () {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    });
}
let tempo_msg_posso_ajudar = 10000;

const msg_boas_vindas = () => {
	let index = 0;
	const textoum   = "Olá, tudo bem?Eu sou o AVTRON ssistente virtual a AVSYSTEMgeo".split('');
	// const textoum[x] é o local de cada letra
	//a quebra de linha pelo array,pode ser responsavel pelo bug das palavras embaralhadas
	textoum[14] = '<br>E'
	textoum[29] = '<br>a'
	textoum[47] = '<br>d'

	const escrevendo_inicio = setInterval(() => {
		if(index < textoum.length) {
			document.querySelector('.typewriter p').innerHTML += textoum[index];
			index += 1;
		}
		if(index == textoum.length) clearInterval(escrevendo_inicio);
	}, 100);

	setTimeout(() => msg_posso_ajudar(), tempo_msg_posso_ajudar);
}

const msg_posso_ajudar = () => {
	document.querySelector('.typewriter p').innerHTML = '';
	let index = 0;
	const textoum   = "Posso ajudar?".split('');
	const escrevendo_inicio = setInterval(() => {
		if(index < textoum.length) {
			document.querySelector('.typewriter p').innerHTML += textoum[index];
			index += 1;
		}
		if(index == textoum.length) clearInterval(escrevendo_inicio);
	}, 100);
}
const movendo_robo = () => {
	let moveBot = 0, moving = true;
  setInterval(() => {
    document.querySelector('.robo-container-img').style.marginBottom = `${(moving) ? moveBot += 1 : moveBot -= 1}px`;
    if(moveBot >= 5) {
      moving = false;
    } else if(moveBot <= 0) {
      moving = true;
    }
  }, 100);
}

(() => {
	msg_boas_vindas();
	movendo_robo();
})();
