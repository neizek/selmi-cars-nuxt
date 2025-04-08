<script setup lang="ts">
	import ProfileMenu from '~/components/ProfileMenu.vue';

	const { loggedIn } = useUserSession();
</script>

<template>
    <q-header class="bg-white">
      <q-toolbar class="q-pa-sm q-gutter-sm">
        <!-- <q-img :src="LogoSVG" fit="contain" height="36px" width="100px" /> -->
		<q-toolbar-title class="text-primary">
			<NuxtLink to="/">
				<img src="~/assets/logo.svg" style="height: 24px;"/>
			</NuxtLink>
		</q-toolbar-title>
        <q-space></q-space>
		<q-btn
			:label="$t('addAd')"
			icon="add"
			color="secondary"
			no-caps
			unelevated
			to="/signin"
		/>
		<q-btn
			:label="$t('signUp')"
			v-if="!loggedIn"
			icon="person"
			color="secondary"
			no-caps
			unelevated
			outline
		/>
		<q-btn
			v-if="loggedIn"
			icon="person"
			color="secondary"
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