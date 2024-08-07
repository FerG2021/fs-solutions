<script>
import DynamicButton from '../../../components/DynamicButton.vue';

import Steps from './Steps.vue';

export default {
	components: {
		Steps,
		DynamicButton
	},
	computed: {
		steps() {
			return [
				{
					icon: 'camera',
					title: this.$t('FIRST_STEP.TITLE'),
					description: this.$t('FIRST_STEP.DESCRIPTION')
				},
				{
					icon: 'bullseye',
					title: this.$t('SECOND_STEP.TITLE'),
					description: this.$t('SECOND_STEP.DESCRIPTION')
				},
				{
					icon: 'file-check',
					title: this.$t('THIRD_STEP.TITLE'),
					description: this.$t('THIRD_STEP.DESCRIPTION')
				}
			];
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
				/>
			</div>
		</div>
		<div class="images-container">
			<div class="images"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.how-we-work-main-container {
		// background-image: url('../img/background.svg');
		// background: rgb(99,47,98);
		// background: linear-gradient(180deg, rgba(99,47,98,1) 24%, rgba(35,35,98,1) 100%);
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
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.how-we-work-main-container {
		background-image: url('../img/background.svg');
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
		.images-container {
			width: 100%;
			height: 80vh;
			display: flex;
			align-items: center;
			justify-content: center;
			.images {
				height: calc((100vh - 50px) - 30%);
				width: 80%;
				border-radius: 20px;
				background-color: var(--primary);
			}
		}
	}
}
</style>