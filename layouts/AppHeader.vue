<script setup lang="ts">
function goBack() {}
</script>

<template>
    <q-header class="bg-white">
      <q-toolbar class="q-pa-sm q-gutter-sm">
        <!-- <q-img :src="LogoSVG" fit="contain" height="36px" width="100px" /> -->
		<q-toolbar-title class="text-primary">
			Selmi
		</q-toolbar-title>
        <q-space></q-space>
		<q-btn
			label="Добавить объявление"
			icon="add"
			color="accent"
			no-caps
			unelevated
		/>
		<q-btn
			label="Регистрация"
			icon="person"
			color="accent"
			no-caps
			unelevated
			outline
		/>
      </q-toolbar>
    </q-header>
</template>