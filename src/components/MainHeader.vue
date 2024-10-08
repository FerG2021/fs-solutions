<script>
import LogoIcon from '../assets/logo.png';
import { goToCalendly, scrollTo } from '../utils/utils';

import DynamicButton from './DynamicButton.vue';
import SidebarHeader from './SidebarHeader.vue';

export default {
	components: {
		DynamicButton,
		SidebarHeader
	},
	data() {
		return {
			logo: LogoIcon,
			itemsSections: [
				{
					label: this.$t('SECTIONS.HOW_WORK'),
					href: 'HowWeWork'
				},
				{
					label: this.$t('SECTIONS.SERVICES'),
					href: 'Services'
				},
				{
					label: this.$t('SECTIONS.PROJECTS'),
					href: 'Projects'
				},
				{
					label: this.$t('SECTIONS.ABOUT_US'),
					href: 'AboutUs'
				},
				{
					label: this.$t('SECTIONS.FOLLOW_US'),
					href: 'FollowUs'
				}
			],
			isScrolled: false
		};
	},
	computed: {
		primaryButtonLegend() {
			return this.$t('BOOK_A_MEETING');
		},
		secondaryButtonLegend() {
			return this.$t('MEET_US');
		}
	},
	methods: {
		handleScroll() {
			this.isScrolled = window.scrollY > 0;
		},
		clickScrollTo(sectionId) {
			scrollTo(sectionId);
		},
		clickOpenSideBar() {
			this.$refs.sidebarheader.openSideBar();
		},
		clickGoToCalendly() {
			goToCalendly();
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

};
</script>

<template>
	<header
		class="header-container"
		:class="{'header-scrolled': isScrolled}"
	>
		<div class="logo-container">
			<img
				:src="logo"
				class="logo"
				@click.prevent="clickScrollTo(`MainSection`)"
				alt="logo"
			>
		</div>
		<div class="sections-container">
			<div
				v-for="item in itemsSections"
				:key="item"
				class="section-item"
			>
				<a
					:href="item.href"
					@click.prevent="clickScrollTo(`${item.href}`)"
				>
					{{ item.label }}
				</a>
			</div>
		</div>
		<div class="buttons-container">
			<DynamicButton
				:type="'secondary'"
				:label="secondaryButtonLegend"
				:showIcon="false"
				@click.prevent="clickScrollTo(`ContactUs`)"
			/>

			<DynamicButton
				:type="'primary'"
				:label="primaryButtonLegend"
				:showIcon="true"
				:icon="'calendar'"
				@click="clickGoToCalendly()"
			/>
		</div>
		<div class="burguer-button-container">
			<button
				class="burguer-button"
				@click="clickOpenSideBar()"
			>
				<i class="pi pi-align-justify" />
			</button>
		</div>
	</header>

	<SidebarHeader
		ref="sidebarheader"
		:itemsSection="itemsSections"
	/>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.header-container {
		height: 50px;
		background-color: var(--dark);
		color: var(--grey);
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		transition: background-color 0.5s ease;
		backdrop-filter: blur(5px);
		.logo-container {
			width: 20%;
			display: flex;
			.logo {
				height: 40px;
				margin-left: 40px;
				&:hover {
					cursor: pointer;
				}
			}
		}
		.sections-container {
			width: 55%;
			display: flex;
			justify-content: space-evenly;
			.section-item {
				cursor: pointer;
				a {
					text-decoration: none;
					color: var(--grey);
					&:hover {
						color: var(--white);
					}
				}

			}
		}
		.buttons-container {
			width: 25%;
			display: flex;
			justify-content: space-evenly;
		}
		.burguer-button-container {
			display: none;
		}
	}
	.header-scrolled {
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(5px);
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.header-container {
		height: 50px;
		background-color: var(--dark);
		color: var(--grey);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		transition: background-color 0.5s ease;
		backdrop-filter: blur(5px);
		.logo-container {
			width: 20%;
			display: flex;
			.logo {
				height: 100%;
				height: 50px;
			}
		}
		.sections-container {
			display: none;
		}
		.buttons-container {
			display: none;
		}
		.burguer-button-container {
			margin-right: 20px;
			.burguer-button {
				background-color: transparent;
				border: none;
				color: var(--white);
			}
		}
	}
	.header-scrolled {
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(5px);
	}
}
</style>