<script lang="ts" setup>
	const slide = ref(1);
</script>

<template>
	<q-card flat>
		<div style="aspect-ratio: 16 / 9; width: 100%;">
			<q-carousel
				animated
				v-model="slide"
				infinite
				arrows
				style="width: 100%; height: 100%;"
				transition-prev="slide-right"
				transition-next="slide-left"
			>
				<q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
				<q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
				<q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
				<q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
			</q-carousel>
		</div>
		<q-card-section>
			Mountain dew
		</q-card-section>
	</q-card>
</template>