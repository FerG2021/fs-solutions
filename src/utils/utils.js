export const goToCalendly = () => {
	window.open('https://calendly.com/fssolutions-jm/discovery-meeting', '_blank');
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