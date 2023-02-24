let tempo_msg_posso_ajudar = 10000;

const msg_boas_vindas = () => {
	let index = 0;
	const textoum   = "Olá, tudo bem? Eu sou o AVTRON, assistente virtual da AVSystemGEO".split('');
	

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


