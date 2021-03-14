<template>
	<div>
		<main class="main">
			<div class="wrap">
				<h1 class="title">Playstation 5 skins</h1>
				<div class="product_list">
					<product v-for="(item,index) in ps5_skins_items" :item="item" :key="index"></product>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ps5_skins_items: []
			}
		},
		async fetch() {
			await this.$strapi.login({ identifier: 'reader', password: '7iN5L2kXn9Su' });
			this.ps5_skins_items = await this.$strapi.find('products', { 'category.name': ['en/ps5/skins'] });
		}
	}
</script>

<style>
	.product_list {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0 -7.5px 25px;
	}
</style>
