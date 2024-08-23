<script>
import AboutUs from './views/AboutUs/AboutUs.vue';
import ContactUs from './views/ContactUs/ContactUs.vue';
import FinalMessage from './views/FinalMessage/FinalMessage.vue';
import FollowUs from './views/FollowUs/FollowUs.vue';
import FooterVue from './views/Footer/Footer.vue';
import HowWeWork from './views/HowWeWork/HowWeWork.vue';
import MainSection from './views/MainSection/MainSection.vue';
import Projects from './views/Projects/Projects.vue';
import Services from './views/Services/Services.vue';

export default {
	name: 'HomeComponent',
	components: {
		MainSection,
		HowWeWork,
		Services,
		Projects,
		AboutUs,
		FollowUs,
		ContactUs,
		FinalMessage,
		FooterVue
	},
	data() {
		return {
			itemsSection: [
				'MainSection',
				'HowWeWork',
				'Services',
				'Projects',
				'AboutUs',
				'FollowUs',
				'ContactUs',
				'FinalMessage',
				'FooterVue'
			]
		};
	}
};
</script>

<template>
	<main class="main-container">
		<template
			v-for="item in itemsSection"
			:key="item"
		>
			<section :id="item">
				<component :is='item' />
			</section>
		</template>
	</main>
</template>

<style>

</style>