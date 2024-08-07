<script>
export default {
	name: 'StepsComponent',
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
		iconClass() {
			return `pi pi-${this.icon}`;
		}
	}
};
</script>

<template>
	<div class="step-container">
		<div class="icon-container">
			<div class="icon">
				<i :class="iconClass" style="font-size: 1rem"></i>
			</div>
		</div>
		<div class="legend-container">
			<p class="title">
				{{ title }}
			</p>
			<p class="description">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.step-container {
	display: flex;
	align-items: center;
	padding: 10px;
	border-radius: 20px;
	transition: background-color 0.5s ease;
	transition: scale 0.5s ease;
	min-height: 100px;
	&:hover {
		cursor: pointer;
		background-color: var(--primary-dark);
		scale: 1.01;
	}
	.icon-container {
		.icon {
			height: 50px;
			width: 50px;
			border-radius: 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: var(--primary-light);
		}
	}
	.legend-container {
		margin-left: 30px;
		.title {
			font-size: 18px;
		}
		.description {
			color: var(--grey);
		}
	}
}
</style>