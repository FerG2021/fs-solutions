<script>
export default {
	props: {
		image: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		technologies: {
			type: String,
			required: true
		}
	}
};
</script>

<template>
	<div class="project-item-main-container">
		<div class="image-container">
			<img :src="image">
		</div>
		<div class="title-subtitle-container">
			<p class="title"> {{ title }} </p>
			<p class="subtitle"> {{ description }} </p>
			<p class="technologies"> {{ technologies }} </p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.project-item-main-container {
		border: 2px solid var(--grey);
		background-color: var(--purple-light);
		height: 100%;
		width: 30vw;
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