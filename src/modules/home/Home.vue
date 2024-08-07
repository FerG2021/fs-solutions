<script>
import AboutUs from './views/AboutUs.vue';
import ContactUs from './views/ContactUs.vue';
import FollowUs from './views/FollowUs.vue';
import HowWeWork from './views/HowWeWork.vue';
import MainSection from './views/MainSection.vue';
import Projects from './views/Projects.vue';
import Services from './views/Services.vue';

export default {
	name: 'HomeComponent',
	components: {
		MainSection,
		HowWeWork,
		Services,
		Projects,
		AboutUs,
		FollowUs,
		ContactUs
	}
};
</script>

<template>
	<div class="main-container">
		<section id="MainSection">
			<MainSection />
		</section>
		<section id="HowWeWork">
			<HowWeWork />
		</section>
		<section id="Services">
			<Services />
		</section>
		<section id="Projects">
			<Projects />
		</section>
		<section id="AboutUs">
			<AboutUs />
		</section>
		<section id="FollowUs">
			<FollowUs />
		</section>
		<section id="ContactUs">
			<ContactUs />
		</section>
	</div>
</template>

<style>

</style>