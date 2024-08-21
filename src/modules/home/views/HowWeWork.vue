<script>
import Figma from '../../../assets/figma.webp';
import FinishProject from '../../../assets/finish-project.png';
import FirstMeet from '../../../assets/first-meet.png';
import HTML from '../../../assets/html.webp';
import JS from '../../../assets/js.png';
import StartProject from '../../../assets/start-project.png';
import Vue from '../../../assets/vue.svg';
import DynamicButton from '../../../components/DynamicButton.vue';
import { goToCalendly } from '../../../utils/utils';

import Steps from './Steps.vue';

export default {
	components: {
		Steps,
		DynamicButton
	},
	data() {
		return {
			figma: Figma,
			vue: Vue,
			js: JS,
			html: HTML,
			firstMeet: FirstMeet,
			startProject: StartProject,
			finishProject: FinishProject,
			isFirstStepHovered: false,
			isSecondStepHovered: false,
			isThirdStepHovered: false
		};
	},
	computed: {
		steps() {
			return [
				{
					id: 1,
					icon: 'camera',
					title: this.$t('FIRST_STEP.TITLE'),
					description: this.$t('FIRST_STEP.DESCRIPTION')
				},
				{
					id: 2,
					icon: 'bullseye',
					title: this.$t('SECOND_STEP.TITLE'),
					description: this.$t('SECOND_STEP.DESCRIPTION')
				},
				{
					id: 3,
					icon: 'file-check',
					title: this.$t('THIRD_STEP.TITLE'),
					description: this.$t('THIRD_STEP.DESCRIPTION')
				}
			];
		}
	},
	methods: {
		onHover(status, step) {
			if (step.id === 1) {
				this.isFirstStepHovered = status;
			} else if (step.id === 2) {
				this.isSecondStepHovered = status;
			} else {
				this.isThirdStepHovered = status;
			}
		},
		clickGoToCalendly() {
			goToCalendly();
		}
	}
};
</script>

<template>
	<div class="how-we-work-main-container">
		<div class="information-container">
			<div class="information">
				<p class="how-we-work-legend">
					{{ $t('HOW_WE_WORK') }}
				</p>

				<p class="how-we-work-information">
					{{ $t('HOW_WE_WORK_INFORMATION') }}
				</p>
			</div>
			<div class="steps-container">
				<template v-for="step in steps" :key="step">
					<Steps
						:icon="step.icon"
						:title="step.title"
						:description="step.description"
						@mouseover="onHover(true, step)"
						@mouseleave="onHover(false, step)"
						class="steps"
					/>
				</template>
			</div>
			<div class="button-container">
				<DynamicButton
					:type="'primary'"
					:label="$t('BOOK_A_MEETING')"
					:showIcon="true"
					:icon="'calendar'"
					class="dynamic-button"
					@click="clickGoToCalendly()"
				/>
			</div>
		</div>
		<div class="images-container">
			<div class="images">
				<img
					v-if="isFirstStepHovered"
					:src="firstMeet"
					alt="Imagen"
					class="animated-image animate__animated animate__zoomIn"
				/>

				<img
					v-if="isSecondStepHovered"
					:src="startProject"
					alt="Imagen"
					class="animated-image animate__animated animate__zoomIn"
				/>

				<img
					v-if="isThirdStepHovered"
					:src="finishProject"
					alt="Imagen"
					class="animated-image animate__animated animate__zoomIn"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.how-we-work-main-container {
		background: var(--background);
		background: var(--background-gradient);
		height: calc(100vh - 50px);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		display: flex;
		.information-container {
			width: 70%;
			padding: 30px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.steps-container {
				.steps {
					margin-bottom: 20px;
				}
			}
			.how-we-work-legend {
				font-size: 2rem;
			}
			.how-we-work-information {
				margin-top: 20px;
			}
		}
		.images-container {
			width: 30%;
			display: flex;
			align-items: center;
			justify-content: center;
			.images {
				height: calc((100vh - 50px) - 30%);
				width: 80%;
				border-radius: 20px;
				background-color: var(--primary);
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				img {
					height: 50%;
				}
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.how-we-work-main-container {
		background: var(--background);
		background: var(--background-gradient);
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		display: flex;
		flex-direction: column;
		.information-container {
			width: 100%;
			padding: 30px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.information {
				.how-we-work-legend {
					font-weight: 600;
				}
			}
			.steps-container {
				.steps {
					margin-top: 20px;
					margin-bottom: 20px;
				}
			}
			.how-we-work-legend {
				font-size: 2rem;
			}
			.how-we-work-information {
				margin-top: 20px;
			}
		}
		.button-container {
			.dynamic-button {
				height: 40px;
			}
		}
		.images-container {
			width: 100%;
			height: 50vh;
			display: flex;
			align-items: center;
			justify-content: center;
			.images {
				// height: calc((100vh - 50px) - 60%);
				height: 40vh;
				width: 80%;
				border-radius: 20px;
				background-color: var(--primary);
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				img {
					height: 150px;
				}
			}
		}
	}
}
</style>