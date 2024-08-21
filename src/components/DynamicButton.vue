<script>
export default {
	props: {
		type: {
			type: String,
			required: false,
			default: 'primary'
		},
		label: {
			type: String,
			required: true
		},
		showIcon: {
			type: Boolean,
			required: false,
			default: false
		},
		icon: {
			type: String,
			required: false,
			default: ''
		}
	},
	computed: {
		classIcon() {
			return `pi pi-${this.icon}`;
		}
	}
};
</script>

<template>
	<Button :class="type" class="button">
		<span class="label">{{ label }}</span>
		<i
			v-if="showIcon"
			class="icon"
			:class="classIcon"
		/>
	</Button>
</template>

<style lang="scss" scoped>
button {
	color: var(--white);
	border: none;
	border-radius: 6px;
	padding: 5px 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-around;
	.label {
		font-size: 16px;
	}
}
.primary {
	background-color: var(--primary);
}
.secondary {
	background-color: var(--grey);
}
.icon {
	font-size: 1rem;
	margin-left: 5px;
}
</style>