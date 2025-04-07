<script setup lang="ts">
	import ProfileMenu from '~/components/ProfileMenu.vue';

	const { loggedIn } = useUserSession();
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
			href="/login"
		/>
		<q-btn
			label="Регистрация"
			v-if="!loggedIn"
			icon="person"
			color="accent"
			no-caps
			unelevated
			outline
		/>
		<q-btn
			v-if="loggedIn"
			icon="person"
			color="accent"
			no-caps
			unelevated
			outline
			dense
			round
		>
			<ProfileMenu />
		</q-btn>
      </q-toolbar>
    </q-header>
</template>