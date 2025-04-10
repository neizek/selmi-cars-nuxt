<script lang="ts" setup>
import type { Make, Model } from '~/types/cars';

	definePageMeta({
		middleware: ['auth'],
	})

	const { data: makes } = await useFetch<Make[]>('/api/cars/make', {
		method: 'GET'
	});

	async function getModels(make: string) {
		const { data: models } = await useFetch<Model[]>('/api/cars/models', {
			method: 'POST',
			body: {
				make
			}
		});
		
		if (models.value) {
			allModels.value = Object.values(models.value).map(model => model.modelName)
		}

		allModels.value = [];
	}


	const allMakes = makes.value ? Object.values(makes.value).map(make => {
		return make.name;
	}) : undefined;

	const chosenMake = ref('');
	const chosenModel = ref('');

	const allModels = ref([]);
	// const models = await getModels(chosenMake.value);
	
	watch(chosenMake, (newMake) => getModels(newMake))
</script>

<template>
	<h3>Новое объявление</h3>
	<q-select v-model="chosenMake" :options="allMakes" label="Марка авто" />
	<q-select v-if="chosenMake !== ''" v-model="chosenModel" :options="allModels" label="Модель авто" />
</template>