<script>
export default {
	props: {
		year: {
			type: String,
			required: false,
			default: ''
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
		</div>
		<div class="empty-div"></div>
		<div class="information-container">
			<div class="line-container">
				<div class="line"></div>
			</div>
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
.life-time-main-container {
	padding-left: 20px;
	.circle-container {
		display: flex;
		justify-content: center;
		width: 5%;
		.circle {
			border: 1px solid var(--white);
			border-radius: 50%;
			height: 10px;
			width: 10px;
			background: var(--white);
		}
		.empty-div {
			width: 95%;
		}
	}
	.information-container {
		display: flex;
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
				color: var(--grey);
			}
			.title {
				font-weight: 600;
			}
		}
	}
}
</style>