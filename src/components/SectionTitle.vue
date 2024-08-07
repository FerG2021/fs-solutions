<script>
export default {
	props: {
		color: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		}
	},
	computed: {
		sectionTitleStyles() {
			return { backgroundColor: `var(--${this.color})` };
		}
	}
};
</script>

<template>
	<span
		class="section-title-main-container"
		:style="sectionTitleStyles"
	>
		{{ label }}
	</span>
</template>

<style lang="scss" scoped>
.section-title-main-container {
	padding: 5px 20px;
	border-radius: 200px;
}
</style>