<script>
import SectionTitle from '../../../components/SectionTitle.vue';
import BurgerHover from '../img/burguer-hover.png';
import Burger from '../img/burguer.png';
import LalaHover from '../img/lala-hover.png';
import Lala from '../img/lala.png';
import LaloHover from '../img/lalo-hover.png';
import Lalo from '../img/lalo.png';
import ModularHover from '../img/modular-hover.png';
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
					image: Lala,
					hoverImage: LalaHover,
					title: 'Lala Deco Kids',
					description: this.$t('PROJECTS_SECTION.LALA.DESCRIPTION'),
					technologies: this.$t('PROJECTS_SECTION.LALA.TECHNOLOGIES')
				},
				{
					image: Modular,
					hoverImage: ModularHover,
					title: 'ModulAr',
					description: this.$t('PROJECTS_SECTION.MODULAR.DESCRIPTION'),
					technologies: this.$t('PROJECTS_SECTION.MODULAR.TECHNOLOGIES')
				},
				{
					image: Lalo,
					hoverImage: LaloHover,
					title: 'Lalo Automotores',
					description: this.$t('PROJECTS_SECTION.LALO.DESCRIPTION'),
					technologies: this.$t('PROJECTS_SECTION.LALO.TECHNOLOGIES')
				},
				{
					image: Burger,
					hoverImage: BurgerHover,
					title: 'Burger Bliss',
					description: this.$t('PROJECTS_SECTION.BURGUER.DESCRIPTION'),
					technologies: this.$t('PROJECTS_SECTION.BURGUER.TECHNOLOGIES')
				}
			]
		};
	},
	methods: {
		clickExpandButton(data) {
			this.projectItems[data].expand = !this.projectItems[data].expand;
		}
	}
};
</script>

<template>
	<div class="projects-main-container">
		<div class="section-title">
			<SectionTitle
				:color="'blue'"
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
			<div
				v-for="item, index in projectItems"
				:key="item"
				class="project-item-container"
			>
				<ProjectItem
					:image="item.image"
					:hoverImage="item.hoverImage"
					:title="item.title"
					:subtitle="item.subtitle"
					:description="item.description"
					:technologies="item.technologies"
					:expand="item.expand"
					:index="index"
					@click-expand-button="clickExpandButton"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.projects-main-container {
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
				view-timeline-name: --reveal;
				animation-name: show;
				animation-fill-mode: both;
				animation-timeline: --reveal;
				animation-range: entry 25% cover 50%;
			}

			@keyframes show {
				from {
					opacity: 0; scale: 10%;
				}
				to {
					opacity: 1; scale: 100%;
				}
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.projects-main-container {
		background: var(--background);
		background: var(--background-gradient);
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 40px 20px;
		display: flex;
		flex-direction: column;
		.section-title {
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center;
		}
		.title-container {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center;
			margin-top: 20px;
			.title {
				font-size: 2rem;
				text-align: start;
				width: 90%;
			}
			.description {
				width: 100%;
				text-align: start;
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
				view-timeline-name: --reveal;
				animation-name: show;
				animation-fill-mode: both;
				animation-timeline: --reveal;
				animation-range: entry 25% cover 50%;
			}
			@keyframes show {
				from {
					opacity: 0; scale: 10%;
				}
				to {
					opacity: 1; scale: 100%;
				}
			}
		}
	}
}

</style>