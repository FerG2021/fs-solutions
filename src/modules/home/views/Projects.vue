<script>
import SectionTitle from '../../../components/SectionTitle.vue';
import BurgerBliss from '../img/burger-bliss.png';
import LalaDecoKids from '../img/lala-deco-kids.png';
import Lalo from '../img/lalo-automotores.png';
import Modular from '../img/modular.png';

import ProjectItem from './ProjectItem.vue';

export default {
	name: 'ProjectsComponent',
	components: {
		SectionTitle,
		ProjectItem
	},
	data() {
		return {
			projectItems: [
				{
					image: LalaDecoKids,
					title: 'Lala Deco Kids',
					subtitle: 'Lala Deco Kids subtitle'
				},
				{
					image: Modular,
					title: 'ModulAr',
					subtitle: 'ModulAr subtitle'
				},
				{
					image: Lalo,
					title: 'Lalo Automotores',
					subtitle: 'Lalo Automotores subtitle'
				},
				{
					image: BurgerBliss,
					title: 'Burger Bliss',
					subtitle: 'Burger Bliss subtitle'
				}
			]
		};
	}
};
</script>

<template>
	<div class="projects-main-container">
		<div class="section-title">
			<SectionTitle
				:color="'primary-dark'"
				:label="'PROYECTOS'"
			/>
		</div>

		<div class="title-container">
			<p class="title">
				{{ $t('PROJECTS_SECTION.TITLE') }}
			</p>
			<p class="description">
				{{ $t('PROJECTS_SECTION.DESCRIPTION') }}
			</p>
		</div>

		<div class="projects-container">
			<div v-for="item in projectItems" :key="item" class="project-item-container">
				<ProjectItem
					class="project-item"
					:image="item.image"
					:title="item.title"
					:subtitle="item.subtitle"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.projects-main-container {
		// background-image: url('../img/background.svg');
		background: var(--background);
		background: var(--background-gradient);
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		flex-direction: column;
		.section-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.title-container {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 20px;
			.title {
				font-size: 2rem;
			}
			.description {
				width: 50%;
			}
		}
		.projects-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 20px;
			.project-item-container {
				width: 50%;
				display: flex;
				justify-content: center;
				padding: 20px;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.projects-main-container {
		background-image: url('../img/background.svg');
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		flex-direction: column;
		.section-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.title-container {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 20px;
			.title {
				font-size: 2rem;
			}
			.description {
				width: 90%;
			}
		}
		.projects-container {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 20px;
			.project-item-container {
				width: 100%;
				display: flex;
				justify-content: center;
				padding: 20px;
			}
		}
	}
}

</style>