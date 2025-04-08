<script lang="ts" setup>

	const credentials = ref({
		email: '',
		password: '',
		rememberMe: false,
	})

	const { fetch: refreshSession } = useUserSession();

	const showPassword = ref(false);
	const isLoading = ref(false);
	const signInError = ref('')

	function handleLogin() {
		signInError.value = '';
		isLoading.value = true;
		fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials.value)
		})
		.then(async response => {
			if (response.status === 200) {
				await refreshSession()
				await navigateTo('/')
			}
			if (response.status === 401) {
				signInError.value = 'Неверные данные'
			}
		})
		.finally(() => {
			isLoading.value = false;
		})
	}
</script>

<template>
	<q-card class="absolute-center q-py-lg" style="width: 350px;">
		<q-form @submit="handleLogin">
			<q-card-section>
				<div class="text-h6 text-center">
					<img src="~/assets/logo.svg" style="height: 36px;" />
				</div>
				<div class="text-center text-caption text-grey-7">{{ $t('signInPage.useThisFormToSignIn') }}</div>
			</q-card-section>
			<q-card-section class="col q-gutter-y-sm">
				<q-banner
					v-if="signInError !== ''"
					class="bg-red-1 text-red rounded-borders"
				>
					{{ signInError }}
				</q-banner>
				<q-input
					:label="`${$t('email')} ${$t('or')} ${$t('phoneNumber').toLowerCase()}`"
					v-model="credentials.email"
				>
					<template v-slot:prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input
					:type="showPassword ? 'text' : 'password'"
					:label="$t('password')"
					v-model="credentials.password"
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
				<div class="row">
					<q-checkbox v-model="credentials.rememberMe" :label="$t('signInPage.rememberMe')" />
					<q-space />
					<NuxtLink to="/restorepassword" style="align-content: center;">
						{{ $t('signInPage.forgotPassword') }}
					</NuxtLink>
				</div>
			</q-card-section>
			<q-card-section class="col q-gutter-y-sm">
				<q-btn
					type="submit"
					:loading="isLoading"
					class="full-width"
					:label="$t('signIn')"
					icon="login"
					color="primary"
					@click="handleLogin"
				/>
			</q-card-section>
			<q-separator />
			<q-card-section class="col q-gutter-y-md">
				<div class="q-gutter-y-sm">
					<q-btn
						class="full-width"
						label="Apple Account"
						outline
					/>
					<q-btn
						class="full-width"
						label="Google Account"
						outline
					/>
				</div>
				<div class="text-center text-grey-7">{{ $t('signInPage.dontHaveAcc') }} 
					<NuxtLink :to="$localePath('/user/signup')">
						{{ $t('signUp') }}
					</NuxtLink>
				</div>
			</q-card-section>
		</q-form>
	</q-card>
</template>