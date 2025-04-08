<script setup lang="ts">
	const user = ref({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		repeatPassword: ''
	});

	function handleSignUp() {

	}
</script>

<template>
	<q-card class="absolute-center q-py-lg" style="width: 350px;">
		<q-form @submit="handleSignUp">
			
		</q-form>
	</q-card>
</template>