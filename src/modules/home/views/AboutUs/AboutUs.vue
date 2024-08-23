<script>
import DynamicButton from '../../../../components/DynamicButton.vue';
import SectionTitle from '../../../../components/SectionTitle.vue';

import LineTimeItem from './LineTimeItem.vue';

export default {
	components: {
		SectionTitle,
		DynamicButton,
		LineTimeItem
	},
	data() {
		return {
			lineTimeItems: [
				{
					year: this.$t('LINE_TIME.FIRST_TIME.YEAR'),
					title: this.$t('LINE_TIME.FIRST_TIME.TITLE'),
					description: this.$t('LINE_TIME.FIRST_TIME.DESCRIPTION')
				},
				{
					year: this.$t('LINE_TIME.SECOND_TIME.YEAR'),
					title: this.$t('LINE_TIME.SECOND_TIME.TITLE'),
					description: this.$t('LINE_TIME.SECOND_TIME.DESCRIPTION')
				},
				{
					year: this.$t('LINE_TIME.THIRD_TIME.YEAR'),
					title: this.$t('LINE_TIME.THIRD_TIME.TITLE'),
					description: this.$t('LINE_TIME.THIRD_TIME.DESCRIPTION')
				},
				{
					year: this.$t('LINE_TIME.FOURTH_TIME.YEAR'),
					title: this.$t('LINE_TIME.FOURTH_TIME.TITLE'),
					description: this.$t('LINE_TIME.FOURTH_TIME.DESCRIPTION')
				}
			]
		};
	}
};
</script>

<template>
	<div class="about-us-main-container">
		<div class="description-container">
			<SectionTitle
				:color="'primary-dark'"
				:label="$t('ABOUT_US_SECTION.HEADER')"
			/>

			<div class="title-container">
				<p class="title">
					{{ $t('ABOUT_US_SECTION.TITLE') }}
				</p>
				<p class="description">
					{{ $t('ABOUT_US_SECTION.FG_DESCRIPTION') }}
				</p>
			</div>

			<div class="button-container">
				<DynamicButton
					:type="'primary'"
					:label="$t('ABOUT_US_SECTION.WORK_TOGETHER')"
					:showIcon="true"
					:icon="'arrow-up-right'"
				/>
			</div>
		</div>
		<div class="line-time-container">
			<template v-for="item in lineTimeItems" :key="item">
				<LineTimeItem
					:year="item.year"
					:title="item.title"
					:description="item.description"
				/>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.about-us-main-container {
		background: var(--background-invert);
		background: var(--background-gradient-invert);
		height: 100vh;
		color: var(--white);
		padding: 40px 40px;
		display: flex;
		align-items: center;
		.description-container {
			width: 50%;
			height: 100%;
			.title-container {
				display: flex;
				flex-direction: column;
				margin-top: 40px;
				.title {
					font-size: 2rem;
				}
				.description {
					width: 100%;
					padding: 10px;
				}
			}
			.button-container {
				margin-top: 40px;
			}
		}
		.line-time-container {
			margin-top: 80px;
			width: 50%;
			height: 100vh;
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.about-us-main-container {
		background: var(--background-invert);
		background: var(--background-gradient-invert);
		height: 100%;
		color: var(--white);
		padding: 20px 40px;
		.description-container {
			margin-top: 20px;
			.title-container {
				display: flex;
				flex-direction: column;
				.title {
					font-size: 2rem;
				}
				.description {
					width: 100%;
					padding: 10px;
				}
			}
		}
		.line-time-container {
			margin-top: 40px;
		}
	}
}
</style>