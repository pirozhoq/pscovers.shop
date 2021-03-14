<template>
	<div class="product">
		<a class="image product_image" :href="item.link" target="_blank">
			<img :src="item.image.url" alt="">
			<div class="product_image_zoom">
				<img src="~/assets/img/expand.svg" alt="">
			</div>
		</a>
		<p class="product_name">
			<a :href="item.link" target="_blank">{{ item.name }}</a>
		</p>
		<div class="product_price"><sup>$</sup>{{ item.price }}</div>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style>
	.product {
		width: calc((100% - 60px) / 4);
		margin: 0 7.5px 15px;
		padding: 12px 15px;
		border-radius: 10px;
		background: #ffffff;
		box-shadow: 0 0 5px 0 #ccc;
	}
	.product_image {
		position: relative;
		height: 200px;
		margin: 0 0 15px;
	}
	.product_image_zoom {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
		width: 15px;
		height: 15px;
	}
	.product_name {
		margin: 0 0 20px;
		font-size: 13px;
		font-weight: 500;
		line-height: 1.4;
		color: #0070d1;
	}
	.product_name a {
		text-decoration: none;
	}
	.product_price {
		position: relative;
		font-size: 20px;
		padding: 0 0 0 12px;
	}
	.product_price sup {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 14px;
		line-height: 16px;
	}
</style>
