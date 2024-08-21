<script>
import { goToGoogleMaps, goToWhatsApp } from '../../../utils/utils';

import ContactForm from './ContactForm.vue';
import ContactUsItem from './ContactUsItem.vue';

export default {
	components: {
		ContactUsItem,
		ContactForm
	},
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
	},
	methods: {
		clickContactItem(key) {
			console.log('clickContactItem()', key);

			switch (key) {
					case 'whatsapp':
						goToWhatsApp();
						break;
					case 'envelope':
						goToWhatsApp();
						break;
					case 'map-marker':
						goToGoogleMaps();
						break;

					default:
						break;
			}
		}
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
					@click="clickContactItem(contactItem.icon)"
				/>
			</template>
		</div>
		<div class="contact-form-container">
			<div class="title">
				{{  $t('CONTACT_US_SECTION.FORM.TITLE')  }}
			</div>
			<div class="subtitle">
				{{  $t('CONTACT_US_SECTION.FORM.SUBTITLE')  }}
			</div>
			<div class="contact-form">
				<ContactForm />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.contact-us-main-container {
		background: var(--background);
		background: var(--background-gradient-invert);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		display: flex;
		.contact-items-container {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			margin-left: 10vw;
			.contact-us-item {
				width: fit-content;
				&:hover {
					cursor: pointer;
				}
			}
		}
		.contact-form-container {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title {
				font-size: 3rem;
			}
			.subtitle {
				font-size: 2rem;
			}
			.contact-form {
				margin-top: 20px;
				width: 50%;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.contact-us-main-container {
		background: var(--background);
		background: var(--background-gradient-invert);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--white);
		padding: 20px;
		.contact-items-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			margin: 20px 0;
		}
		.contact-form-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title {
				text-align: center;
				font-size: 2.5rem;
			}
			.subtitle {
				font-size: 1.5rem;
			}
			.contact-form {
				margin-top: 20px;
			}
		}
	}
}
</style>