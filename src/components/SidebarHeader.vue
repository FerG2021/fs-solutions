<script>
import { goToCalendly } from '../utils/utils';

import DynamicButton from './DynamicButton.vue';

export default {
	components: { DynamicButton },
	props: {
		itemsSection: {
			type: Array,
			required: true
		}
	},
	data() {
		return { visibleRight: false };
	},
	methods: {
		openSideBar() {
			this.visibleRight = !this.visibleRight;
		},
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

			this.openSideBar();
		},
		clickMeetButton() {
			goToCalendly();
		}
	}
};
</script>

<template>
	<Sidebar
		v-model:visible="visibleRight"
		position="right"
	>
		<template #container="{  }">
			<div class="sidebar-container">
				<div class="header">
					<button
						class="close-button"
						@click="openSideBar()"
					>
						<i
							class="pi pi-times-circle icon"
						/>
					</button>
				</div>

				<div class="content-container">
					<template v-for="item in itemsSection" :key="item">
						<a
							class="item"
							:href="item.href"
							@click.prevent="scrollTo(`${item.href}`)"
						>
							{{ item.label }}
						</a>
					</template>

					<div class="iteraction-buttons-container">
						<div class="dynamic-button-container">
							<DynamicButton
								:type="'primary'"
								:label="$t('BOOK_A_MEETING')"
								:showIcon="true"
								:icon="'calendar'"
								@click="clickMeetButton()"
								class="button"
							/>
						</div>
					</div>
				</div>

			</div>
		</template>
	</Sidebar>
</template>

<style lang="scss" scoped>
.sidebar-container {
	background-color: var(--dark);
	height: 100%;
	.header {
		padding: 20px 10px;
		display: flex;
		justify-content: flex-end;
		height: 60px;
		.close-button {
			background-color: transparent;
			color: var(--white);
			border: none;
			.icon {
				font-size: 1.5rem
			}
		}
	}
	.content-container {
		color: var(--white);
		height: calc(100vh - 60px);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.item {
			margin-left: 20px;
			text-decoration: none;
			color: var(--white);
		}
		.iteraction-buttons-container {
			display: flex;
			justify-content: center;
			.dynamic-button-container {
				width: 70%;
				display: flex;
				flex-direction: column;
				.button {
					margin-bottom: 10px;
					height: 40px;
				}
			}
		}
	}
}
</style>