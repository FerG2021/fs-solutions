<script>
import SectionTitle from '../../../components/SectionTitle.vue';

import SocialMediaItem from './SocialMediaItem.vue';

export default {
	components: {
		SectionTitle,
		SocialMediaItem
	}
};
</script>

<template>
	<div class="follow-us-main-container">
		<div class="section-title">
			<SectionTitle
				:color="'blue'"
				:label="'SEGUINOS'"
			/>
		</div>

		<div class="title-container">
			<p class="title">
				{{ $t('FOLLOW_US_SECTION.TITLE') }}
			</p>
			<p class="description">
				{{ $t('FOLLOW_US_SECTION.DESCRIPTION') }}
			</p>
		</div>

		<div class="social-media-container">
			<div class="social-media">
				<SocialMediaItem
					class="social-media-item"
					:icon="'instagram'"
				/>
				<SocialMediaItem
					class="social-media-item"
					:icon="'facebook'"
				/>
				<SocialMediaItem
					class="social-media-item"
					:icon="'linkedin'"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.follow-us-main-container {
		background: var(--background);
		background: var(--background-gradient);
		height: calc(100vh - 50px);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
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
				font-size: 3rem;
			}
			.description {
				width: 50%;
				font-size: 1.5rem;
			}
		}
		.social-media-container {
			height: 60%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			.social-media {
				height: 80%;
				width: 80%;
				border: 1px solid var(--grey);
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.follow-us-main-container {
		background: var(--background);
		background: var(--background-gradient);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.section-title {
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center;
			width: 100%;
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
				text-align: start;
			}
		}
		.social-media-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 20px;
			.social-media {
				height: 80%;
				width: 80%;
				border: 1px solid var(--grey);
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				padding: 20px 0;
			}
		}
	}
}
</style>