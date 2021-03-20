<template>
    <div class="product_skeleton">
        <div class="image product_skeleton_image">
            <span class="pulse"></span>
            <div class="product_skeleton_image_zoom">
                <img :src="require('@/assets/img/expand.svg')" alt="">
            </div>
        </div>
        <p class="product_skeleton_name">
            <span class="pulse"></span>
        </p>
        <div class="product_skeleton_price">
            <span class="pulse"></span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ProductItemSkeleton"
	}
</script>

<style>
    .product_skeleton {
        width: calc((100% - 30px) / 2);
        margin: 0 7.5px 15px;
        padding: 12px 15px;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 0 5px 0 #ccc;
    }
    .product_skeleton_image {
        position: relative;
        height: 130px;
        margin: 0 0 15px;
    }
    .product_skeleton_image span {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #eee;
    }
    .product_skeleton_image_zoom {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 15px;
        height: 15px;
    }
    .product_skeleton_name {
        margin: 0 0 20px;
        font-size: 0;
    }
    .product_skeleton_name span {
        display: inline-block;
        width: 80%;
        height: 36px;
        border-radius: 5px;
        background: #eee;
    }
    .product_skeleton_price {
        font-size: 0;
    }
    .product_skeleton_price span {
        display: inline-block;
        width: 20%;
        height: 20px;
        border-radius: 5px;
        background: #eee;
    }

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: .4; }
        100% { opacity: 1; }
    }

    .pulse {
        animation-name: pulse;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @media (min-width: 576px) {
        .product_skeleton {
            width: calc((100% - 60px) / 4);
        }
        .product_skeleton_image {
            height: 200px;
        }
    }
</style>
