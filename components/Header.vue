<template>
    <div class="head">
        <header class="header">
            <div class="wrap header__wrap">
                <button :class="['header__button', {'header__button_active': isMenuActive}]" @click="menuShow" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <a class="logo header__logo" href="/" title="">
                    <img :src="require(`@/assets/img/logo.svg`)" alt="">PS <span>covers</span>
                </a>
                <button :class="['header__button', {'header__button_active': isSearchActive}]" @click="searchShow" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>
        <Menu :isActive="isMenuActive"/>
        <Search :isActive="isSearchActive"/>
    </div>
</template>

<script>
    import Menu from "@/components/Menu";
    import Search from "@/components/Search";

	export default {
	    components: {
	        Menu,
            Search
        },
		data() {
			return {
				isMenuActive: false,
                isSearchActive: false
			}
		},
		methods: {
            menuShow() {
                this.isMenuActive = !this.isMenuActive;
                this.isSearchActive = false;
            },
            searchShow() {
                this.isSearchActive = !this.isSearchActive;
                this.isMenuActive = false;
            }
		},
        head () {
            return {
                bodyAttrs: {
                    class: this.isMenuActive || this.isSearchActive ? 'body_locked' : ''
                }
            }
        }
	}
</script>

<style>
    .head {
        position: sticky;
        top: 0;
        z-index: 10;
    }
	.header {
        position: relative;
        z-index: 10;
        padding: 5px 0;
        background: #fff;
        box-shadow: 0 0 5px 0 #ccc;
	}
    .header__wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

	.header__button {
		display: flex;
        justify-content: center;
        align-items: center;
		width: 50px;
		height: 50px;
		padding: 0;
		border: none;
        border-radius: 5px;
		background: #fff;
        cursor: pointer;
        transition: .3s;
	}
    .header__button:hover {
        background: #fafafa;
    }
    .header__button svg {
        width: 32px;
        height: 32px;
    }
    .header__button svg:last-child {
        display: none;
    }
    .header__button_active svg:first-child {
        display: none;
    }
    .header__button_active svg:last-child {
        display: block;
    }

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Play';
		font-size: 26px;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		color: #000000;
	}
	.logo img {
		height: 36px;
		margin: 0 5px 0 0;
	}
	.logo span {
		color: #0070d1;
        margin: 0 0 0 5px;
	}

    @media (min-width: 576px) {
        .logo {
            font-size: 36px;
        }
        .logo img {
            height: 50px;
            margin: 0 10px 0 0;
        }
    }
</style>
