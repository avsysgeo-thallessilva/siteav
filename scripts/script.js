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

$(document).ready(function(){
	$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
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
