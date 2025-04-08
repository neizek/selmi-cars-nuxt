<script setup lang="ts">
	import ProfileMenu from '~/components/ProfileMenu.vue';

	const { loggedIn } = useUserSession();
	const { locales, setLocale, getBrowserLocale} = useI18n()

	console.log(getBrowserLocale())
</script>

<template>
    <q-header class="bg-white">
      <q-toolbar class="q-pa-sm q-gutter-sm">
		<NuxtLink :to="$localePath('/')" style="display: flex; width: 100px;">
			<img src="~/assets/logo.svg" />
		</NuxtLink>
		<q-btn-group outline>
			<q-btn
				v-for="locale in locales"
				flat
				:label="locale.name"
				@click="setLocale(locale.code)"
			/>
		</q-btn-group>
        <q-space></q-space>
		<q-btn
			:label="$t('addAd')"
			icon="add"
			color="secondary"
			no-caps
			unelevated
			:to="$localePath('/ads/new')"
		/>
		<q-btn
			:label="$t('signUp')"
			v-if="!loggedIn"
			:to="$localePath('/user/signup')"
			icon="person"
			color="secondary"
			outline
		/>
		<q-btn
			v-if="loggedIn"
			icon="person"
			color="secondary"
			outline
			dense
			round
		>
			<ProfileMenu />
		</q-btn>

      </q-toolbar>
    </q-header>
</template>