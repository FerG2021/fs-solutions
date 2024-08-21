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
	data() {
		return { hoverElement: false };
	},
	computed: {
		itemIcon() {
			return `pi pi-${this.icon}`;
		},
		shakeClass() {
			return this.hoverElement ? 'animate__animated animate__swing' : '';
		},
		iconClass() {
			return `${this.itemIcon} ${this.shakeClass}`;
		}
	},
	methods: {
		onHover(status) {
			if (status) {
				this.hoverElement = true;
			} else {
				this.hoverElement = false;
			}
		}
	}
};
</script>

<template>
	<div
		class="service-item-container"
		@mouseover="onHover(true)"
		@mouseleave="onHover(false)"
	>
		<div class="icon-container">
			<i :class="iconClass" style="font-size: 1rem"></i>
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
			.title {
				font-weight: 800;
				font-size: 18px;
			}
		}
	}
}
</style>