<script>
import DynamicButton from '../../../components/DynamicButton.vue';

export default {
	components: { DynamicButton },
	computed: {
		softwareSolutions() {
			return this.$t('SOFTWARE_SOLUTIONS');
		},
		mainLegend() {
			return this.$t('MAIN_LEGEND');
		},
		secondaryLegend() {
			return this.$t('SECONDARY_LEGEND');
		},
		primaryButtonLegend() {
			return this.$t('BOOK_A_MEETING');
		},
		secondaryButtonLegend() {
			return this.$t('PROJECTS');
		}
	}
};
</script>

<template>
	<div class="main-section-container">
		<div class="button-no-interaction-container">
			<DynamicButton
				:type="'secondary'"
				:label="softwareSolutions"
				:showIcon="true"
				:icon="'sparkles'"
			/>
		</div>
		<div class="main-legend-container">
			<p class="main-legend">
				{{ mainLegend }}
			</p>

			<p class="secondary-legend">
				{{ secondaryLegend }}
			</p>
		</div>
		<div class="buttons-container">
			<DynamicButton
				class="dynamic-button"
				:type="'primary'"
				:label="primaryButtonLegend"
				:showIcon="true"
				:icon="'calendar'"
			/>

			<DynamicButton
				class="dynamic-button"
				:type="'secondary'"
				:label="secondaryButtonLegend"
				:showIcon="true"
				:icon="'star'"
			/>

		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.main-section-container {
		background-image: url('../img/main-image.svg');
		height: calc(100vh - 50px);
		margin-top: 50px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		.main-legend-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			.main-legend {
				font-size: 4.5rem;
				text-align: center;
				width: 60%;
			}
			.secondary-legend {
				margin-top: 20px;
				font-size: 1.5rem;
				text-align: center;
				width: 60%;
			}
		}
		.buttons-container {
			display: flex;
			justify-content: center;
			.dynamic-button {
				margin-left: 10px;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.main-section-container {
		background-image: url('../img/main-image.svg');
		height: calc(100vh - 50px);
		margin-top: 50px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		.main-legend-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			.main-legend {
				font-size: 3rem;
				text-align: center;
			}
			.secondary-legend {
				margin-top: 20px;
				font-size: 1rem;
				text-align: center;
			}
		}
		.buttons-container {
			display: flex;
			justify-content: center;
			.dynamic-button {
				margin-left: 10px;
			}
		}
	}
}

</style>