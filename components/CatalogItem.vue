<template>
	<a class="catalog_item" :href="item.url" :title="linkTitle">
		<div class="catalog_item_title">{{ item.title }}<span>{{ item.text }}</span></div>
		<div class="image catalog_item_image">
			<img :src="item.image" alt="">
		</div>
	</a>
</template>

<script>
	export default {
	    name: 'CatalogItem',
		props: {
			item: {
				type: Object,
				default: {}
			}
		},
		computed: {
	        linkTitle() {
	            return `${this.item.title} ${this.item.text} catalog`
            }
        }
	}
</script>

<style>
	.catalog_item {
		position: relative;
		display: block;
		width: 100%;
		height: 100px;
		margin: 0 7.5px 15px;
		padding: 12px 15px;
		border-radius: 10px;
		text-decoration: none;
		background: #ffffff;
		box-shadow: 0 0 5px 0 #ccc;
	}
	.catalog_item_title {
		font-family: 'Play';
		font-size: 22px;
		font-weight: 700;
	}
	.catalog_item_title span {
		display: block;
		margin: 5px 0 0;
		font-size: 15px;
	}
	.catalog_item_image {
		position: absolute;
		top: 10px;
		right: 20px;
		z-index: 2;
		width: 80px;
		height: 80px;
	}
	.catalog_item_image img {
		display: block;
	}

    @media (min-width: 768px) {
        .catalog_item {
            width: calc((100% - 30px) / 2);
            height: 120px;
        }
        .catalog_item_image {
            width: 100px;
            height: 100px;
        }
    }
    @media (min-width: 992px) {
        .catalog_item {
            width: calc((100% - 45px) / 3);
        }
    }
</style>
