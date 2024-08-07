<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
	computed: {
		itemIcon() {
			return `pi pi-${this.icon}`;
		}
	}
};
</script>

<template>
	<div class="service-item-container">
		<div class="icon-container">
			<i :class="itemIcon" style="font-size: 1rem"></i>
		</div>
		<div class="description-container">
			<div class="title-container">
				<p class="title">
					{{ title }}
				</p>
				<p class="description">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-item-container {
	background-color: var(--purple-light);
	padding: 20px;
	border-radius: 20px;
	border: 1px solid var(--white);
	.icon-container {
		i {
			border: 1px solid var(--white);
			padding: 10px;
			border-radius: 10px;
		}
	}
	.description-container {
		margin-top: 20px;
		border-left: 1px solid var(--white);
		.title-container {
			margin-left: 20px;
			.description {
				color: var(--grey);
			}
		}
	}
}
</style>