<script>
import DynamicButton from '../../../../components/DynamicButton.vue';
import SectionTitle from '../../../../components/SectionTitle.vue';
import { goToCalendly } from '../../../../utils/utils';

export default {
	components: {
		SectionTitle,
		DynamicButton
	},
	methods: {
		clickGoToCalendly() {
			goToCalendly();
		}
	}
};
</script>

<template>
	<div class="final-message-main-container">
		<div class="final-message-container">
			<div class="section-title-container">
				<SectionTitle
					:color="'blue'"
					:label="$t('FINAL_MESSAGE_SECTION.TITLE')"
				/>

			</div>
			<p class="final-message">
				{{  $t('FINAL_MESSAGE_SECTION.MESSAGE')  }}
			</p>
		</div>
		<div class="meet-button-container">
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
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.final-message-main-container {
		background: var(--background);
		background: var(--background-gradient);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		display: flex;
		padding: 50px;
		.final-message-container {
			width: 70%;
			font-size: 1.3rem;
			.final-message {
				font-size: 2.5rem;
			}
		}
		.meet-button-container {
			width: 30%;
			display: flex;
			align-items: center;
			justify-content: center;
			.dynamic-button {
				height: 50px;
				font-size: 20px;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.final-message-main-container {
		background: var(--background);
		background: var(--background-gradient);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 30px 20px;
		.final-message-container {
			width: 100%;
			font-size: 1rem;
			.section-title-container {
				display: flex;
				justify-content: start;
			}
			.final-message {
				text-align: start;
				font-size: 1.5rem;
			}
		}
		.meet-button-container {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			.dynamic-button {
				height: 50px;
				font-size: 20px;
			}
		}
	}
}

</style>