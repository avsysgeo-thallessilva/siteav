let verificador = false;

const interface_porcentagem = () => {
	let projetos = 0;
	let empresas = 0;

	const escrevendo_projetos = setInterval(() => {
		if(projetos <= 1500) {
			const text = document.querySelector('#porcentagem-projetos')
			text.innerText = `+${projetos}`
			projetos += 100;
		}
		if(projetos >= 1600) clearInterval(escrevendo_projetos);
	}, 70);

	const escrevendo_empresas = setInterval(() => {
		if(empresas <= 100) {
			const text = document.querySelector('#porcentagem-empresas')
			text.innerText = `+${empresas}`
			empresas += 10;
		}
		if(empresas >= 110) clearInterval(escrevendo_empresas);
	}, 70);
}

const animateClass = (container) => {
  const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4);
  if(windowTop > container.offsetTop && !verificador) {
		verificador = true;
		interface_porcentagem();
	}
}

(() => {
	const header = document.querySelector('.start-style');

	window.addEventListener('scroll', () => {
		const scroll = window.scrollY;
		if (scroll >= 10) {
			header.classList.remove('start-style');
			header.classList.add('scroll-on');
		} else {
			header.classList.add('start-style');
			header.classList.remove('scroll-on');
		}
	})

	window.addEventListener('scroll', () => {
		const container = document.querySelector('.progress-container')
		if(container !== null) {
			animateClass(container);
		}
	});
	
})();

$(document).ready(function () {


	$('.tecnologias').slick({
		slidesToShow: 6,/*o numero de slides que aparece na tela */
		/*mostra o slide no centro */
		swipeToSlide: true,/*permite arrastar o slide */
		slidesToScroll: 1,
		draggable: true,
		infinite:true,
		prevArrow:"<svg fill='#9CD439' class='tamanho-svg-prev slick-prev-tecnologia slick-arrow-tecnologia' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' stroke='#9CD439' stroke-width='32.768'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z'></path></g></svg>"/*muda o que está escrito no button */,
		nextArrow:"<svg fill='#9CD439' class='tamanho-svg-next slick-next-tecnologia slick-arrow-tecnologia' viewBox='0 0 1024.00 1024.00' xmlns='http://www.w3.org/2000/svg' stroke='#9CD439' stroke-width='32.768'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z'></path></g></svg>",
		/*prevArrow:"<img class='a-left control-c prev slick-prev' src='YOUR LEFT ARROW IMAGE URL'>", */
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		pauseOnHover: false,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});

	$('.clientes').slick({
		slidesToShow: 6,/*o numero de slides que aparece na tela */
		/*mostra o slide no centro */
		swipeToSlide: true,/*permite arrastar o slide */
		slidesToScroll: 1,
		draggable: true,
		infinite:true,
		prevArrow:"<svg fill='#9CD439' class='tamanho-svg-prev slick-prev-clientes slick-arrow-clientes' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' stroke='#9CD439' stroke-width='32.768'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z'></path></g></svg>"/*muda o que está escrito no button */,
		nextArrow:"<svg fill='#9CD439' class='tamanho-svg-next slick-next-clientes slick-arrow-clientes' viewBox='0 0 1024.00 1024.00' xmlns='http://www.w3.org/2000/svg' stroke='#9CD439' stroke-width='32.768'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z'></path></g></svg>",
		/*prevArrow:"<img class='a-left control-c prev slick-prev' src='YOUR LEFT ARROW IMAGE URL'>", */
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		pauseOnHover: false,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});
});

