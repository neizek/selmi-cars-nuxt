<script setup lang="ts">
</script>

<template>
	<AdCardsSection :ads="Array(4)">
		<template #header>
			<span class="text-h4">Новые объявления</span>
		</template>
	</AdCardsSection>
	<AdCardsSection :ads="Array(8)">
		<template #header>
			<span class="text-h4">Популярные объявления</span>
		</template>
	</AdCardsSection>
  </template>