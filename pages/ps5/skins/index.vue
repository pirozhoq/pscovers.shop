<template>
	<div>
		<main class="main">
			<div class="wrap">
				<h1 class="title">Playstation 5 skins</h1>
                <div v-if="loadingStatus" class="product_list">
                    <ProductItemSkeleton v-for="(item,index) in 4" :item="item" :key="index">{{index}}</ProductItemSkeleton>
                </div>
				<div v-else class="product_list">
					<ProductItem v-for="(item,index) in allSkins" :item="item" :key="index"></ProductItem>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
    import ProductItem from "@/components/ProductItem";
    import ProductItemSkeleton from "@/components/ProductItemSkeleton";
    import { mapGetters, mapActions } from 'vuex';

	export default {
        head() {
            return {
                title: 'Skins for Playstation 5'
            }
        },
        methods: {
            ...mapActions({
                getFromApi: 'skins/getFromApi'
            })
        },
        created() {
            this.getFromApi()
        },
        computed: {
		    ...mapGetters({
                allSkins: 'skins/getSkins',
                loadingStatus: 'skins/loadingStatus'
            })
        },
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
