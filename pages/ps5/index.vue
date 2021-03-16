<template>
	<div>
		<main class="main">
			<div class="wrap">
				<h1 class="title">Playstation 5</h1>
				<div class="catalog">
					<CatalogItem v-for="(item,index) in catalog_items" :item="item" :key="index"></CatalogItem>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import CatalogItem from '@/components/CatalogItem';

	export default {
		components: {
            CatalogItem
		},
		data() {
			return {
				catalog_items: [
					{
						title: 'Skins',
						text: '',
						image: require('@/static/image/ps5_skins.png'),
						url: '/ps5/skins'
					},
					{
						title: 'Accessories',
						text: '',
						image: require('@/static/image/ps5_accessories.png'),
						url: '/ps5/accessories'
					},
					{
						title: 'Games',
						text: '',
						image: require('@/static/image/ps5_games.png'),
						url: '/ps5/games'
					}
				]
			}
		}
	}
</script>

<style>
	.catalog {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		margin: 0 -7.5px 25px;
	}
</style>
