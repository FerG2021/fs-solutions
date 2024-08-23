<script>
import MainHeader from './components/MainHeader.vue';
import Home from './modules/home/Home.vue';

export default {
	components: {
		MainHeader,
		Home
	}
};
</script>

<template>
	<div class="main-container">
		<MainHeader />
		<Home />
	</div>
</template>

<style lang="scss">
@import url('./assets/colors.css');

body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Inter", sans-serif;
	.p-button-label {
		padding: 5px;
	}
}
</style>
