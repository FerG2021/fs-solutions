<script>
export default {
	props: {
		icon: {
			type: String,
			required: false,
			default: ''
		},
		title: {
			type: String,
			required: false,
			default: ''
		},
		subtitle: {
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
	<div class="contact-us-item">
		<div class="icon-container">
			<i
				class="icon"
				:class="classIcon"
			/>
		</div>
		<div class="information-container">
			<div class="title">
				{{ title }}
			</div>
			<div class="subtitle">
				{{ subtitle }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.contact-us-item {
		display: flex;
		.icon-container {
			padding: 10px;
			.icon {
				font-size: 3rem;
			}
		}
		.information-container {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 10px;
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.contact-us-item {
		display: flex;
		.icon-container {
			padding: 10px;
			.icon {
				font-size: 3rem;
			}
		}
		.information-container {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 10px;
		}
	}
}

</style>