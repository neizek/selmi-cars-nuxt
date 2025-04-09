<script setup lang="ts">
	const { clear, user } = useUserSession();

	async function handleLogout() {
		await clear();
	}

	const profileMenuItems = [
		{icon: 'description', label: 'Мои объявления'},
		{icon: 'settings', label: 'Редактировать профиль'}
	]
</script>

<template>
	<q-menu style="width: 250px;" v-if="user">
		<q-list>
			<q-item class="row q-gutter-x-md">
				<q-avatar>
					<q-icon name="account_circle" size="48px" class="text-grey-7" />
				</q-avatar>
				<div class="column">
					<div class="text-subtitle1">{{ user.firstName }} {{ user.lastName }}</div>
					<div class="text-caption text-grey-7">{{ user.email }}</div>
				</div>
			</q-item>
			<q-separator />
			<q-item v-for="menuItem in profileMenuItems" clickable v-ripple>
				<q-item-section avatar>
					<q-icon :name="menuItem.icon" color="primary" />
				</q-item-section>
				<q-item-section>{{ menuItem.label }}</q-item-section>
			</q-item>
			<q-separator />
			<q-item>
				<q-btn
					color="primary"
					icon="logout"
					:label="$t('signOut')"
					class="full-width"
					v-close-popup
					@click="handleLogout"
				/>
			</q-item>
		</q-list>
	</q-menu>
</template>