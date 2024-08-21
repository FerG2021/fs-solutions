<script>
import Logo from '../../../assets/fs-solutions.png';

export default {
	name: 'FooterComponent',
	data() {
		return {
			logo: Logo,
			itemsSectionsTitle: 'MAPA DEL SITIO',
			itemsSections: [
				{
					label: this.$t('SECTIONS.HOME'),
					href: 'MainSection'
				},
				{
					label: this.$t('SECTIONS.HOW_WORK'),
					href: 'HowWeWork'
				},
				{
					label: this.$t('SECTIONS.SERVICES'),
					href: 'Services'
				},
				{
					label: this.$t('SECTIONS.PROJECTS'),
					href: 'Projects'
				},
				{
					label: this.$t('SECTIONS.ABOUT_US'),
					href: 'AboutUs'
				},
				{
					label: this.$t('SECTIONS.FOLLOW_US'),
					href: 'FollowUs'
				},
				{
					label: this.$t('SECTIONS.CONTACT_US'),
					href: 'ContactUs'
				}
			],
			comunityTitle: 'COMUNIDAD',
			comunityItems: [
				{
					label: this.$t('FOOTER_SECTION.COMUNITY_ITEMS.INSTAGRAM'),
					href: 'https://www.instagram.com/'
				},
				{
					label: this.$t('FOOTER_SECTION.COMUNITY_ITEMS.FACEBOOK'),
					href: 'https://www.facebook.com/'
				},
				{
					label: this.$t('FOOTER_SECTION.COMUNITY_ITEMS.LINKEDIN'),
					href: 'https://www.linkedin.com/'
				}
			],
			resourcesTitle: 'Recursos',
			resourcesItems: [{ label: this.$t('FOOTER_SECTION.RESOURCES_ITEMS.PRIVACY_POLICIES') }]
		};
	},
	methods: {
		scrollTo(sectionId) {
			const element = document.getElementById(sectionId);

			if (element) {
				const offset = 50;
				const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
				const offsetPosition = elementPosition - offset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		}
	}
};
</script>

<template>
	<div class="footer-main-container">
		<div class="footer-container">
			<div class="content-container">
				<img :src="logo" class="logo">
				<p> {{  $t('FOOTER_SECTION.MESSAGE')  }} </p>
			</div>
			<div class="content-links-containers">
				<div class="items-sections">
					<div class="title">
						{{  itemsSectionsTitle  }}
					</div>
					<template v-for="item in itemsSections" :key="item">
						<div class="item">
							<a
								:href="item.href"
								@click.prevent="scrollTo(`${item.href}`)"
							>
								{{  item.label  }}
							</a>
						</div>
					</template>
				</div>

				<div class="comunity-section">
					<div class="title">
						{{  comunityTitle  }}
					</div>
					<template v-for="item in comunityItems" :key="item">
						<div class="item">
							<a
								:href="item.href"
								target="_blank"
							>
								{{  item.label  }}
							</a>
						</div>
					</template>
				</div>

				<div class="resources-section">
					<div class="title">
						{{ resourcesTitle }}
					</div>
					<template v-for="item in resourcesItems" :key="item">
						<div class="item">
							<a>
								{{  item.label  }}
							</a>
						</div>
					</template>
				</div>
			</div>
		</div>
		<div class="copy-container">
			<div class="copy">
				<span>
					{{ $t('FOOTER_SECTION.COPYRIGHT.COPYRIGHT') }}
				</span>
			</div>
			<div class="rights-reserved">
				<span>
					{{ $t('FOOTER_SECTION.COPYRIGHT.RIGHTS_RESERVED') }}
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.footer-main-container {
		background: var(--footer-color);
		color: var(--white);
		padding: 50px;
		.footer-container {
			border-top: 1px solid var(--grey);
			border-bottom: 1px solid var(--grey);
			display: flex;
			.content-container {
				width: 50%;
				margin: 20px 0;
				p {
					font-size: 1.5rem;
				}
			}
			.content-links-containers {
				padding: 50px;
				width: 50%;
				display: flex;
				justify-content: space-evenly;
				.items-sections {
					.item {
						cursor: pointer;
						a {
							text-decoration: none;
							color: var(--grey);
							&:hover {
								color: var(--white);
							}
						}
					}
				}
			}
			.comunity-section {
				.item {
					cursor: pointer;
					a {
						text-decoration: none;
						color: var(--grey);
						&:hover {
							color: var(--white);
						}
					}
				}
			}
			.resources-section {
				.item {
					cursor: pointer;
					a {
						text-decoration: none;
						color: var(--grey);
						&:hover {
							color: var(--white);
						}
					}
				}
			}
		}
		.copy-container {
			display: flex;
			justify-content: space-between;
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.footer-main-container {
		background: var(--footer-color);
		color: var(--white);
		padding: 30px;
		.footer-container {
			border-top: 1px solid var(--grey);
			border-bottom: 1px solid var(--grey);
			.content-container {
				width: 100%;
				margin: 20px 0;
				.logo {
					height: 100px;
				}
				p {
					font-size: 1.5rem;
				}
			}
			.content-links-containers {
				padding: 20px;
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				.items-sections {
					margin-bottom: 20px;
					.item {
						cursor: pointer;
						a {
							text-decoration: none;
							color: var(--grey);
							&:hover {
								color: var(--white);
							}
						}
					}
				}
			}
			.comunity-section {
				margin-bottom: 20px;
				.item {
					cursor: pointer;
					a {
						text-decoration: none;
						color: var(--grey);
						&:hover {
							color: var(--white);
						}
					}
				}
			}
			.resources-section {
				.item {
					cursor: pointer;
					a {
						text-decoration: none;
						color: var(--grey);
						&:hover {
							color: var(--white);
						}
					}
				}
			}
		}
		.copy-container {
			margin-top: 5px;
			display: flex;
			justify-content: space-between;
			font-size: .8rem;
		}
	}
}

</style>