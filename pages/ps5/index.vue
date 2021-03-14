<template>
	<div>
		<main class="main">
			<div class="wrap">
				<h1 class="title">Playstation 5</h1>
				<div class="catalog">
					<catalog v-for="(item,index) in catalog_items" :item="item" :key="index"></catalog>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import { Catalog } from '~/components/catalog';

	export default {
		components: {
			Catalog
		},
		data() {
			return {
				catalog_items: [
					{
						title: 'Наклейки',
						text: '',
						image: require('~/assets/img/ps5_skins.png'),
						url: '/ps5/skins'
					},
					{
						title: 'Аксессуары',
						text: '',
						image: require('~/assets/img/ps5_accessories.png'),
						url: '/ps5/accessories'
					},
					{
						title: 'Игры',
						text: '',
						image: require('~/assets/img/ps5_games.png'),
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
