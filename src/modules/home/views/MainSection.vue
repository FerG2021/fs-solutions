<script>
import DynamicButton from '../../../components/DynamicButton.vue';
import { goToCalendly, scrollTo } from '../../../utils/utils';

export default {
	components: { DynamicButton },
	methods: {
		clickMeetButton() {
			goToCalendly();
		},
		clickScrollTo(sectionId) {
			scrollTo(sectionId);
		}
	}
};
</script>

<template>
	<div class="main-section-container">
		<div class="button-no-interaction-container">
			<DynamicButton
				:type="'secondary'"
				:label="$t('SOFTWARE_SOLUTIONS')"
				:showIcon="true"
				:icon="'sparkles'"
				class="dynamic-button"
			/>
		</div>
		<div class="main-legend-container">
			<div class="main-legend">
				{{ $t('MAIN_LEGEND') }}
				<span class="typewriter">
					{{ $t('SOFTWARE') }}
				</span>
			</div>

			<p class="secondary-legend">
				{{ $t('SECONDARY_LEGEND') }}
			</p>
		</div>
		<div class="buttons-container">
			<DynamicButton
				class="dynamic-button"
				:type="'primary'"
				:label="$t('BOOK_A_MEETING')"
				:showIcon="true"
				:icon="'calendar'"
				@click="clickMeetButton()"
			/>

			<a
				:href="'Projects'"
				class="a-button"
				@click.prevent="clickScrollTo('Projects')"
			>
				<DynamicButton
					class="dynamic-button"
					:type="'secondary'"
					:label="$t('PROJECTS')"
					:showIcon="true"
					:icon="'star'"
				/>
			</a>

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
		justify-content: space-evenly;
		.button-no-interaction-container {
			.dynamic-button {
				height: 40px;
			}
		}
		.main-legend-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			.main-legend {
				font-size: 4.5rem;
				text-align: center;
				width: 70%;
				font-weight: 600;
				.typewriter {
					font-family: monospace;
					border-right: 2px solid var(--white);
					white-space: nowrap;
					overflow: hidden;
					display: inline-block;
					max-width: 0;
					animation: typing 4s steps(30, end) 1s infinite, blink 0.75s step-end infinite;

					@keyframes typing {
						0% {
							max-width: 0;
						}
						70% {
							max-width: 40%;
						}
						100% {
							max-width: 0;
						}
					}

					@keyframes blink {
						50% {
							border-color: transparent;
						}
						100% {
							border-color: var(--white);
						}
					}
				}
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
			.a-button {
				text-decoration: none;
				.dynamic-button {
					width: 100%;
					height: 100%;
				}
			}
			.dynamic-button {
				margin-left: 10px;
				height: 40px;
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
		justify-content: space-evenly;
		.dynamic-button {
			height: 40px;
		}
		.main-legend-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			.main-legend {
				font-size: 3rem;
				text-align: center;
				padding: 5px;
				display: flex;
				flex-direction: column;
				align-items: center;
				.typewriter {
					font-family: monospace;
					border-right: 2px solid var(--white);
					white-space: nowrap;
					overflow: hidden;
					display: inline-block;
					max-width: 0;
					animation: typing 3s steps(30, end) 1s infinite, blink 0.75s step-end infinite;

					@keyframes typing {
						0% {
							max-width: 0;
						}
						70% {
							max-width: 60%;
						}
						100% {
							max-width: 0;
						}
					}

					@keyframes blink {
						50% {
							border-color: transparent;
						}
						100% {
							border-color: var(--white);
						}
					}
				}
			}
			.secondary-legend {
				margin-top: 20px;
				font-size: 1.5rem;
				text-align: center;
				padding: 10px;
			}
		}
		.buttons-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			.a-button {
				text-decoration: none;
				.dynamic-button {
					width: 100%;
					height: 100%;
				}
			}
			.dynamic-button {
				margin-bottom: 10px;
				height: 40px;
			}
		}
	}
}

</style>