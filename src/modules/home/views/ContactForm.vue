<script>
export default {
	data() {
		return {
			name: null,
			email: null,
			phone: null,
			message: null,
			loadingSubmitButton: false
		};
	},
	computed: {
		submitLegend() {
			return this.$t('CONTACT_US_SECTION.FORM.SUBMIT');
		},
		envAPI() {
			const apiUrl = `${import.meta.env.VITE_URL}`;

			return apiUrl;
		}
	},
	methods: {
		handleSubmit(event) {
			this.loadingSubmitButton = true;

			const form = event.target;
			const formData = new FormData(form);

			fetch('https://formsubmit.co/ajax/fssolutions.jm@gmail.com', {
				method: 'POST',
				body: formData,
				headers: { 'Accept': 'application/json' }
			})
				.then(response => {
					if (response.status === 200) {
						this.$toast.add({
							severity: 'success',
							summary: '¡El formulario se ha enviado exitosamente!',
							detail: 'En breve nos pondremos en contacto para brindarte más información',
							life: 5000
						});
						this.resetForm();
					} else {
						this.$toast.add({
							severity: 'error',
							summary: '¡Hubo un problema al enviar el formulario!',
							detail: 'Por favor, volvé a intentar en unos instantes',
							life: 5000
						});
					}
				})
				.catch(error => {
					this.$toast.error('Hubo un problema al enviar el formulario.');
				})
				.finally(() => {
					this.loadingSubmitButton = false;
					this.name = null;
					this.email = null;
					this.phone = null;
					this.message = null;
				});
		}
	}
};
</script>

<template>
	<div class="contact-form-main-container">
		<form @submit.prevent="handleSubmit">

			<FloatLabel class="form-item">
				<InputText
					id="name"
					v-model="name"
					name="name"
					class="input-item"
				/>
				<label
					for="name"
				>
					{{ $t('CONTACT_US_SECTION.FORM.NAME') }}
				</label>
			</FloatLabel>

			<FloatLabel class="form-item">
				<InputText
					id="email"
					v-model="email"
					name="email"
					class="input-item"
				/>
				<label
					for="email"
				>
					{{ $t('CONTACT_US_SECTION.FORM.EMAIL') }}
				</label>
			</FloatLabel>

			<FloatLabel class="form-item">
				<InputNumber
					id="phone"
					v-model="phone"
					name="phone"
					class="input-item"
					:useGrouping="false"
				/>
				<label
					for="phone"
				>
					{{ $t('CONTACT_US_SECTION.FORM.PHONE') }}
				</label>
			</FloatLabel>

			<FloatLabel class="form-item">
				<Textarea
					id="message"
					v-model="message"
					name="message"
					class="input-item"
					rows="5"
					cols="23"
				/>
				<label
					for="message"
				>
					{{ $t('CONTACT_US_SECTION.FORM.MESSAGE') }}
				</label>
			</FloatLabel>

			<!-- <input type="hidden" name="_captcha" value="false"> -->
			<!-- <input type="hidden" name="_next" :value="envAPI"> -->

			<div class="submit-button-container">
				<Button
					class="form-item submit-button"
					:label="submitLegend"
					type="submit"
					:loading="loadingSubmitButton"
				/>
			</div>
		</form>

		<Toast />

	</div>
</template>

<style lang="scss" scoped>
.contact-form-main-container {
	.form-item {
		margin-top: 30px;
		.input-item {
			width: 100%;
		}
	}
	.submit-button-container {
		display: flex;
		justify-content: start;
		.submit-button {
			background-color: var(--primary);
		}
	}

}
</style>