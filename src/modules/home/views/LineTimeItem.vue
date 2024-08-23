<script>
export default {
	props: {
		year: {
			type: String,
			required: false,
			default: ' '
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	}
};
</script>

<template>
	<div class="life-time-main-container">
		<div class="circle-container">
			<div class="circle"></div>
			<div class="line"></div>
		</div>
		<div class="information-container">
			<div class="information">
				<div class="year">
					{{ year }}
				</div>
				<div class="title">
					{{ title }}
				</div>
				<div class="description">
					{{ description }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.life-time-main-container {
		padding-left: 20px;
		display: flex;
		height: 20%;
		.circle-container {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 10px;
			.circle {
				border: 1px solid var(--white);
				border-radius: 50%;
				height: 10px;
				width: 10px;
				background: var(--white);
			}
			.line {
				display: flex;
				border: 1px solid var(--white);
				height: 100%;
				width: 3px;
				background-color: var(--white);
			}
		}
		.information-container {
			display: flex;
			margin-top: -25px;
			.line-container {
				width: 5%;
				display: flex;
				align-items: center;
				justify-content: center;
				.line {
					border: 1px solid var(--white);
					height: 100%;
					width: 3px;
					background-color: var(--white);
				}
			}
			.information {
				margin-left: 10px;
				margin-bottom: 20px;
				width: 95%;
				.year {
					height: 20px;
					color: var(--grey);
				}
				.title {
					font-weight: 600;
				}
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.life-time-main-container {
		padding-left: 20px;
		display: flex;
		.circle-container {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 10px;
			.circle {
				border: 1px solid var(--white);
				border-radius: 50%;
				height: 10px;
				width: 10px;
				background: var(--white);
			}
			.line {
				display: flex;
				border: 1px solid var(--white);
				height: 100%;
				width: 3px;
				background-color: var(--white);
			}
		}
		.information-container {
			display: flex;
			margin-top: -25px;
			padding-bottom: 30px;
			.line-container {
				width: 5%;
				display: flex;
				align-items: center;
				justify-content: center;
				.line {
					border: 1px solid var(--white);
					height: 100%;
					width: 3px;
					background-color: var(--white);
				}
			}
			.information {
				margin-left: 10px;
				margin-bottom: 20px;
				width: 95%;
				.year {
					height: 20px;
					color: var(--grey);
				}
				.title {
					font-weight: 600;
				}
			}
		}
	}
}

</style>