<template>
	<main class="main">
		<div class="wrap">
			<div class="new">
				<div class="new_item">
					<p class="new_item_title">
						<a href="/ps5" title="Playstaton 5 catalog">Playstation 5<span></span></a>
					</p>
					<ul class="new_item_list">
						<li><a href="/ps5/skins" title="Playstation 5 skins">Skins</a></li>
						<li><a href="/ps5/accessories" title="Playstation 5 accessories">Accessories</a></li>
						<li><a href="/ps5/games" title="Playstation 5 games">Games</a></li>
					</ul>
					<div class="new_item_image">
						<img :src="require('@/static/image/ps5.png')" alt="">
					</div>
					<div class="new_item_bg"></div>
				</div>
				<div class="new_item">
					<p class="new_item_title">
						<a href="/ps5de" title="Playstaton 5 digital edition catalog">Playstation 5<span>digital edition</span></a>
					</p>
					<ul class="new_item_list">
                        <li><a href="/ps5de/skins" title="Playstation 5 digital edition skins">Skins</a></li>
                        <li><a href="/ps5de/accessories" title="Playstation 5 digital edition accessories">Accessories</a></li>
                        <li><a href="/ps5de/games" title="Playstation 5 digital edition games">Games</a></li>
					</ul>
					<div class="new_item_image">
						<img :src="require('@/static/image/ps5_de.png')" alt="">
					</div>
					<div class="new_item_bg"></div>
				</div>
			</div>
			<div class="catalog">
				<CatalogItem v-for="(item,index) in catalog_items" :item="item" :key="index"></CatalogItem>
			</div>
			<div class="skin">
				<p class="title">Skins for PS5</p>
			</div>
			<div class="gear">
				<p class="title">Accessories for PS5</p>
				<div class="owl-carousel"></div>
			</div>
			<div class="game">
				<p class="title">PS5 Games</p>
				<div class="owl-carousel"></div>
			</div>
		</div>
	</main>
</template>

<script>
	import ProductItem from '@/components/ProductItem';
	import CatalogItem from '@/components/CatalogItem';

	export default {
		components: {
            ProductItem,
            CatalogItem
		},
		data() {
			return {
				sliderOption: {
					slidesPerView: 1,
					spaceBetween: 15,
					loop: true,
					loopFillGroupWithBlank: false,
					pagination: {
						el: '.slider_pagination',
						clickable: true
					},
					effect: 'fade'
				},
				product_items: [
					{
						name: 'Виниловая наклейка на PS5, Marvel, Капитан Америка',
						image: [{ url: require('@/static/image/ps5_games.png') }],
						price: '39',
						link: '#'
					}
				],
				catalog_items: [
					{
						title: 'Playstation 4',
						text: '',
						image: require('@/static/image/ps4.jpg'),
						url: '/ps4'
					},
					{
						title: 'Playstation 4',
						text: 'pro',
						image: require('@/static/image/ps4_pro.jpg'),
						url: '/ps4pro'
					},
					{
						title: 'Playstation 4',
						text: 'slim',
						image: require('@/static/image/ps4_slim.jpg'),
						url: '/ps4slim'
					}
				]
			}
		}
	}
</script>

<style>
	.new {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		margin: 0 -7.5px;
	}
	.new_item {
		position: relative;
		display: block;
		width: 100%;
		height: 180px;
		margin: 0 7.5px 15px;
		padding: 15px 20px;
		border-radius: 10px;
		overflow: hidden;
		text-decoration: none;
		color: #000000;
		background: #ffffff;
		box-shadow: 0 0 5px 0 #ccc;
	}
	.new_item_title {
		margin: 0 0 15px;
		font-family: 'Play';
		font-size: 30px;
		font-weight: 700;
	}
	.new_item_title a {
		text-decoration: none;
	}
	.new_item_title span {
		display: block;
		margin: 5px 0 0;
		font-size: 15px;
	}
	.new_item_list {
		position: absolute;
		bottom: 15px;
		left: 20px;
		z-index: 1;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.new_item_list li {
		margin: 5px 0 0;
		font-size: 14px;
		font-weight: 500;
		line-height: 1.4;
		color: #0070d1;
	}
	.new_item_list li a {
		text-decoration: none;
	}
	.new_item_image {
		position: absolute;
		top: 10px;
		right: 20px;
		z-index: 2;
		width: auto;
		height: 160px;
	}
	.new_item_image img {
		display: block;
	}
	.new_item_bg {
		position: absolute;
		top: 0;
		right: -70px;
		z-index: 1;
		width: 140px;
		height: 200px;
		background: #012E89;
		transform: skew(-35deg, 0deg);
	}
	.new_item_bg::before {
		content: '';
		position: absolute;
		top: 0;
		left: -149px;
		z-index: 1;
		width: 150px;
		height: 100%;
		background: linear-gradient(to left, rgba(1,46,137,1) 0%, rgba(1,46,137,0.738) 19%, rgba(1,46,137,0.541) 34%, rgba(1,46,137,0.382) 47%, rgba(1,46,137,0.278) 56.5%, rgba(1,46,137,0.194) 65%, rgba(1,46,137,0.126) 73%, rgba(1,46,137,0.075) 80.2%, rgba(1,46,137,0.042) 86.1%, rgba(1,46,137,0.021) 91%, rgba(1,46,137,0.008) 95.2%, rgba(1,46,137,0.002) 98.2%, transparent 100%);
	}

	.catalog {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		margin: 0 -7.5px 25px;
	}

	.skin {
		margin: 0 0 40px;
	}

    @media (min-width: 768px) {
        .new_item {
            width: calc((100% - 30px) / 2);
            height: 200px;
        }
        .new_item_image {
            height: 180px;
        }
    }
</style>
