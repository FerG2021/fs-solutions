<script>
import SectionTitle from '../../../components/SectionTitle.vue';

import ServiceItem from './ServiceItem.vue';

export default {
	name: 'ServicesComponent',
	components: {
		SectionTitle,
		ServiceItem
	},
	data() {
		return {
			serviceItems: [
				{
					icon: 'building',
					title: this.$t('FIRST_SERVICE_ITEM.TITLE'),
					description: this.$t('FIRST_SERVICE_ITEM.DESCRIPTION')
				},
				{
					icon: 'shopping-cart',
					title: this.$t('SECOND_SERVICE_ITEM.TITLE'),
					description: this.$t('SECOND_SERVICE_ITEM.DESCRIPTION')
				},
				{
					icon: 'desktop',
					title: this.$t('THIRD_SERVICE_ITEM.TITLE'),
					description: this.$t('THIRD_SERVICE_ITEM.DESCRIPTION')
				},
				{
					icon: 'users',
					title: this.$t('FOURTH_SERVICE_ITEM.TITLE'),
					description: this.$t('FOURTH_SERVICE_ITEM.DESCRIPTION')
				}
			]
		};
	}
};
</script>

<template>
	<div class="services-main-container">
		<div class="section-title">
			<SectionTitle
				:color="'blue'"
				:label="'EXPLORAR'"
			/>
		</div>
		<div class="title-container">
			<p class="title">
				{{ $t('SERVICES.TITLE') }}
			</p>
			<p class="description">
				{{ $t('SERVICES.DESCRIPTION') }}
			</p>
		</div>
		<div class="services-container">
			<template v-for="item in serviceItems" :key="item">
				<ServiceItem
					:icon="item.icon"
					:title="item.title"
					:description="item.description"
					class="service-item"
				/>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.services-main-container {
		// background-image: url('../img/background-invert.svg');
		background: var(--background-invert);
		background: var(--background-gradient-invert);
		height: calc(100vh - 50px);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.section-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 8%;
		}
		.title-container {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 17%;
			.title {
				font-size: 2rem;
			}
			.description {
				width: 50%;
			}
		}
		.services-container {
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
			height: 75%;
			.service-item {
				width: 40%;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.services-main-container {
		background-image: url('../img/background-invert.svg');
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.section-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 8%;
		}
		.title-container {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 17%;
			.title {
				font-size: 2rem;
			}
			.description {
				width: 50%;
			}
		}
		.services-container {
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
			.service-item {
				width: 90%;
				margin-top: 20px;
			}
		}
	}
}

</style>