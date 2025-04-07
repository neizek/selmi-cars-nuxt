<script lang="ts" setup>

	const loginData = ref({
		email: '',
		password: ''
	})

	function handleLogin() {
		fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData.value)
		})
	}
</script>

<template>
	<q-card class="absolute-center" style="width: 400px;">
			<q-card-section>
				<div class="text-h6 text-center">Selmi Cars</div>
				<div class="text-center text-caption text-grey-7">Используйте форму, чтобы войти в свой аккаунт</div>
			</q-card-section>
			<q-card-section class="col q-gutter-y-sm">
				<q-input label="Эл. почта или номер телефона" v-model="loginData.email">
					<template v-slot:prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input type="password" label="Пароль" v-model="loginData.password">
					<template v-slot:prepend>
						<q-icon name="lock" />
					</template>
				</q-input>
			</q-card-section>
			<q-card-section>
				<q-btn class="full-width" label="Войти" color="primary" unelevated @click="handleLogin"/>
			</q-card-section>
			<q-separator dark inset />
			<q-card-section>
				<q-item>Нет аккаунта? Регистрация.</q-item>
			</q-card-section>
	</q-card>
</template>