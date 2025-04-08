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
        <q-space></q-space>
		<q-btn
			:label="$t('addAd')"
			icon="add"
			:to="$localePath('/ads/new')"
		/>
		<q-btn
			:label="$t('signUp')"
			v-if="!loggedIn"
			:to="$localePath('/user/signup')"
			icon="person"
			outline
		/>
		<q-btn
			v-if="loggedIn"
			icon="person"
			flat
		>
			<ProfileMenu />
		</q-btn>
		<q-btn
			icon="translate"
			flat
		>
			<q-menu>
				<q-list>
					<q-item
						v-for="locale in locales"
						@click="setLocale(locale.code)"
						clickable
					>
						<q-item-section>{{ locale.name }}</q-item-section>
					</q-item>
				</q-list>
			</q-menu>
		</q-btn>
      </q-toolbar>
    </q-header>
</template>