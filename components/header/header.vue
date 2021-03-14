<template>
	<header class="header">
		<div class="head">
			<div class="head_wrap">
				<div class="head_menu">
					<button class="head_button" @click="menuShow" type="button">
						<img src="~/assets/img/menu.svg" alt="">
					</button>
				</div>
				<a class="head_title" href="/" title="">
					<img src="~/assets/img/logo.svg" alt="">PS <span>covers</span>
				</a>
				<div class="head_search">
					<button class="head_button" type="button">
						<img src="~/assets/img/search.svg" alt="">
					</button>
				</div>
			</div>
		</div>
		<nav class="menu" :class="{ menu_active: isMenuActive }">
			<div class="wrap">
				<ul class="menu_list">
					<li><a href="/ps5">Playstation 5</a></li>
					<li><a href="/ps5de">Playstation 5 digital edition</a></li>
					<li><a href="/ps4">Playstation 4</a></li>
					<li><a href="/ps4pro">Playstation 4 pro</a></li>
					<li><a href="/ps4slim">Playstation 4 slim</a></li>
				</ul>
			</div>
		</nav>
		<div class="search"></div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				isMenuActive: this.$store.state.isMenuActive
			}
		},
		methods: {
			menuShow() {
				this.isMenuActive = !this.isMenuActive;
				this.$store.commit('menuToggle', this.isMenuActive);
			}
		}
	}
</script>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 9;
	}

	.head {
		position: relative;
		z-index: 2;
		padding: 5px 0;
		background: #ffffff;
		box-shadow: 0 0 5px 0 #ccc;
	}
	.head_wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 15px;
	}
	.head_menu {}
	.head_button {
		display: block;
		width: 50px;
		height: 50px;
		padding: 14px;
		border: none;
		background: none;
	}
	.head_title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Play';
		font-size: 36px;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		color: #000000;
	}
	.head_title img {
		height: 50px;
		margin: 0 10px 0 0;
	}
	.head_title span {
		margin: 0 0 0 5px;
		color: #0070d1;
	}
	.head_search {}

	.menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		display: none;
		width: 100%;
		height: 100%;
		padding: 80px 0 0;
		background: #ffffff;
	}
	.menu_active {
		display: block;
	}

	.search {
		display: none;
	}
	.search_active {
		display: block;
	}
</style>
