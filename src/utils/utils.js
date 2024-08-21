export const goToCalendly = () => {
	window.open('https://calendly.com/fssolutions-jm/discovery-meeting', '_blank');
};

export const goToWhatsApp = () => {
	window.open('https://wa.me/5493843401553?text=Hola', '_blank');
};

export const goToGoogleMaps = () => {
	window.open('https://www.google.com/maps/place/Buenos+Aires,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6158238,-58.4332985,12z/data=!3m1!4b1!4m6!3m5!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591!16zL20vMDFseTVt?authuser=0&entry=ttu', '_blank');
};

export const scrollTo = (sectionId) => {
	const element = document.getElementById(sectionId);

	if (element) {
		const offset = 50;
		const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
};