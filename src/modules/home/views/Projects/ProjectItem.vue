<script>
export default {
	props: {
		image: {
			type: String,
			required: true
		},
		hoverImage: {
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
		return { currentImage: this.image };
	},
	methods: {
		onHoverImage() {
			if (this.hoverImage) {
				this.currentImage = this.hoverImage;
			}
		},
		unhoverImage() {
			this.currentImage = this.image;
		}
	}
};
</script>

<template>
	<div
		class="project-item-main-container"
	>
		<div class="image-container">
			<img
				:src="currentImage"
				@mouseover="onHoverImage"
				@mouseout="unhoverImage"
				class="animate__animated animate__fadeIn"
				alt="project-image"
			>
		</div>
		<div class="title-subtitle-container">
			<p class="title"> {{ title }} </p>
		</div>
		<div class="description-container">
			<p class="subtitle"> {{ description }} </p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.project-item-main-container {
		min-height: 550px;
		width: 30vw;
		border: 2px solid var(--grey);
		border-radius: 10px;
		padding: 20px;
		background-color: var(--purple-light);
		.image-container {
			height: 300px;
			border: 1px solid var(--grey);
			border-radius: 5px;
			display: flex;
			justify-content: center;
			img {
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}
		.title-subtitle-container {
			.title {
				font-size: 20px;
				font-weight: 600;
			}
		}
	}

	// .project-item-main-container {
	// 	border: 2px solid var(--grey);
	// 	background-color: var(--purple-light);
	// 	width: 30vw;
	// 	border-radius: 10px;
	// 	display: flex;
	// 	flex-direction: column;
	// 	justify-content: space-around;
	// 	align-items: center;
	// 	padding: 40px 20px;
	// 	border: 1px solid red;
	// 	.image-container {
	// 		height: 40vh;
	// 		width: 90%;
	// 		border: 2px solid var(--grey);
	// 		border-radius: 10px;
	// 		img {
	// 			width: 100%;
	// 			height: 100%;
	// 			object-fit: contain;
	// 			padding: 10px;
	// 		}
	// 	}
	// 	.title-subtitle-container {
	// 		width: 90%;
	// 		padding: 5px;
	// 		border: 1px solid red;
	// 		.title {
	// 			font-weight: 600;
	// 			font-size: 18px;
	// 		}
	// 		.technologies {
	// 			font-weight: 600;
	// 		}
	// 	}
	// 	.expand-button-container {
	// 		cursor: pointer;
	// 	}
	// }
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.project-item-main-container {
		border: 2px solid var(--grey);
		background-color: var(--purple-light);
		width: 100%;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 40px 20px;
		.image-container {
			height: 40vh;
			width: 90%;
			border: 2px solid var(--grey);
			border-radius: 10px;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				padding: 10px;
			}
		}
		.title-subtitle-container {
			width: 90%;
			padding: 5px;
			.subtitle {
				color: var(--grey);
			}
			.technologies {
				color: var(--grey);
				font-weight: 600;
			}
		}
	}
}

</style>