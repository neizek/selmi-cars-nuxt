<script setup lang="ts">
	import type { UserSignUpPayload } from '~/types/users';

	const user: Ref<UserSignUpPayload> = ref({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		repeatPassword: ''
	});

	const isLoading: Ref<boolean> = ref(false);

	async function requestSignUp() {
		await useFetch('/api/user', {
			method: 'POST',
			body: user.value,
			onResponseError({ response }) {
				console.log(response)
			},
			onResponse({ response }) {
				console.log(response)
			}
		});
	}

	function handleSignUp() {
		isLoading.value = true;

		requestSignUp()
		.finally(() => {
			isLoading.value = false;
		});
	}
</script>

<template>
	<q-card class="absolute-center q-py-lg" style="width: 350px;">
		<q-form @submit="handleSignUp">
			<q-card-section>
				<q-input v-model="user.email" :label="$t('email')" />
				<q-input v-model="user.firstName" :label="$t('firstName')" />
				<q-input v-model="user.lastName" :label="$t('lastName')" />
				<q-input v-model="user.password" :label="$t('password')" />
				<q-input v-model="user.repeatPassword" :label="$t('repeatPassword')" />
			</q-card-section>
			<q-card-actions>
				<q-btn type="submit" :label="$t('signUp')" :loading="isLoading" />
			</q-card-actions>
		</q-form>
	</q-card>
</template>