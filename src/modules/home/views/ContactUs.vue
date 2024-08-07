<script>
import ContactUsItem from './ContactUsItem.vue';

export default {
	components: { ContactUsItem },
	data() {
		return {
			contactItems: [
				{
					icon: 'whatsapp',
					title: this.$t('CONTACT_US_SECTION.WHATSAPP.TITLE'),
					subtitle: this.$t('CONTACT_US_SECTION.WHATSAPP.SUBTITLE')
				},
				{
					icon: 'envelope',
					title: this.$t('CONTACT_US_SECTION.EMAIL.TITLE'),
					subtitle: 'fssolutions.jm@gmail.com'
				},
				{
					icon: 'map-marker',
					title: this.$t('CONTACT_US_SECTION.LOCATION.TITLE'),
					subtitle: this.$t('CONTACT_US_SECTION.LOCATION.SUBTITLE')
				}
			]
		};
	}
};
</script>

<template>
	<div class="contact-us-main-container">
		<div class="contact-items-container">
			<template
				v-for="contactItem in contactItems"
				:key="contactItem"
			>
				<ContactUsItem
					:icon="contactItem.icon"
					:title="contactItem.title"
					:subtitle="contactItem.subtitle"
					class="contact-us-item"
				/>
			</template>
		</div>
		<div class="contact-form-container">
			contact
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.contact-us-main-container {
		border: 1px solid red;
		background: var(--background);
		background: var(--background-gradient-invert);
		height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		.contact-items-container {
			width: 50%;
			border: 1px solid blue;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			.contact-us-item {
				width: 50%;
			}
		}
		.contact-form-container {
			width: 50%;
			border: 1px solid blue;

		}
	}
}
</style>