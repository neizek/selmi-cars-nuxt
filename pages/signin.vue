<script lang="ts" setup>

	const loginData = ref({
		email: '',
		password: ''
	})

	const showPassword = ref(false)

	function handleLogin() {
		fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData.value)
		})
		.then(response => {
			if (response.status === 200) {
				refreshNuxtData();
			}
		})
	}
</script>

<template>
	<q-card class="absolute-center" style="width: 350px;">
			<q-card-section>
				<div class="text-h6 text-center q-pa-md">
					<img src="~/assets/logo.svg" style="height: 36px;"/>
				</div>
				<div class="text-center text-caption text-grey-7">{{ $t('signInPage.useThisFormToSignIn') }}</div>
			</q-card-section>
			<q-form
				@submit="handleLogin"
				class="q-gutter-md"
			>
			<q-card-section class="col q-gutter-y-sm">
				<q-input
					:label="`${$t('email')} ${$t('or')} ${$t('phoneNumber').toLowerCase()}`"
					v-model="loginData.email"
				>
					<template v-slot:prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input
					:type="showPassword ? 'text' : 'password'"
					:label="$t('password')"
					v-model="loginData.password"
				>
					<template v-slot:prepend>
						<q-icon name="lock" />
					</template>
					<template v-slot:append>
						<q-icon
							:name="showPassword ? 'visibility' : 'visibility_off'"
							class="cursor-pointer"
							@click="showPassword = !showPassword"
						/>
					</template>
				</q-input>
			</q-card-section>
			<q-card-section>
				<q-btn
					type="submit" 
					class="full-width"
					:label="$t('signIn')"
					icon="login"
					color="primary"
					unelevated
					no-caps
					@click="handleLogin"
				/>
			</q-card-section>
		</q-form>
			<q-card-section class="text-grey-7">
				<div class="text-center">{{ $t('signInPage.dontHaveAcc') }} 
					<NuxtLink to="/signup">
						{{ $t('signUp') }}
					</NuxtLink>
				</div>
			</q-card-section>
	</q-card>
</template>