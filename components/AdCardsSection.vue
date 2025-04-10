<script setup lang="ts">
	defineProps(['ads'])
</script>

<template>
	<div class="q-col-gutter-lg">
		<slot name="header"></slot>
		<div class="row q-col-gutter-md">
			<div class="col-md-3 col-6" v-for="ad in ads" >
				<SingleAdCard />
			</div>
		</div>	
	</div>
</template>