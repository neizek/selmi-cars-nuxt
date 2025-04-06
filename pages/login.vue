<script lang="ts" setup>
	const email = ref('')
</script>

<template>
	<q-card>
		<q-card-section>
			<q-item>Login</q-item>
		</q-card-section>
		<q-card-section>
			<q-input label="Email" v-model="email"></q-input>
		</q-card-section>
	</q-card>
</template>