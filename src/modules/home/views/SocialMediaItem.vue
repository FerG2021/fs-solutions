<script>
export default {
	props: {
		icon: {
			type: String,
			required: false,
			default: ''
		}
	},
	computed: {
		classIcon() {
			return `pi pi-${this.icon} ${this.icon}`;
		}
	}
};
</script>

<template>
	<div class="social-media-main-container">
		<i
			class="icon"
			:class="classIcon"
		/>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.social-media-main-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30vh;
		width: 15vw;
		border: 1px solid var(--grey);
		border-radius: 10px;
		background-color: var(--grey-light);
		.icon {
			cursor: pointer;
			font-size: 6rem;
			transition: transform 0.3s ease;
			&:hover {
				transform: scale(1.2);
			}
		}
		.facebook {
			&:hover {
				color: var(--facebook);
			}
		}
		.linkedin {
			&:hover {
				color: var(--linkedin);
			}
		}
		.instagram {
			&:hover {
				color: var(--instagram);
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.social-media-main-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 12vh;
		width: 50%;
		border: 1px solid var(--grey);
		border-radius: 10px;
		background-color: var(--grey-light);
		margin: 10px 0px;
		.icon {
			cursor: pointer;
			font-size: 5rem;
		}
		.facebook {
			&:hover {
				color: var(--facebook);
			}
		}
		.linkedin {
			&:hover {
				color: var(--linkedin);
			}
		}
		.instagram {
			&:hover {
				color: var(--instagram);
			}
		}
	}
}

</style>