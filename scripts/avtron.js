const chatButton = document.getElementById("button-body");
const chatContainer = document.getElementById("chatContainer");
const minimizeButton = document.getElementById("minimize-button");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("conversation-group");
const sendButton = document.getElementById("SentButton");


const btns = document.getElementsByClassName("btn");

for(const bts_ of btns){
   
   bts_.onclick = function(){
      
      // seleciona todos os botões com a classe .btn dentro de #methodlearn
      const childs = document.querySelectorAll("#methodlearn .btn");
      let index = 0;
      
      // determina o index do botão com base 0
      for(const el of childs){
         if(this == el) break;
         index++;
      }
      
      const contents = document.getElementsByClassName("content");
      
      // esconde todos
      for(const cts_ of contents){
         cts_.style.display = "none";
      }
      
      // mostra só a div do botão que foi clicado
      contents[index].style.display = "block";
      
   }
   
}

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
    newMessage.innerHTML = message;
    chatMessages.appendChild(newMessage);
    return newMessage;
}

function chatbotResponse() {
    const Whatsapp = "https://wa.me/553198203810";
    const messages = `Caso sua dúvida não tenha sido esclarecida, basta clicar aqui que você será redirecionado para o nosso <a href="${Whatsapp}" style="color: #337029"; target="_blank">Whatsapp</a>`;
    const message = messages;
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


let tempo_msg_posso_ajudar = 10000; //concertar função do temporizador.

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
