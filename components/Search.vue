<template>
    <div class="search" :class="{ search_active: isActive }">
        <div class="search__content">
            <div class="wrap">
                <form class="search__form">
                    <input type="search" ref="searchInput" placeholder="Search skin, accessory, game" required="">
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        props: {
            isActive: Boolean
        },
        watch: {
            isActive(value) {
                if (value) {
                    setTimeout(() => {
                        this.$refs.searchInput.focus()
                    }, 100)
                }
            }
        }
    }
</script>

<style>
    .search {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        display: none;
        width: 100%;
        height: 100%;
        padding: 60px 0 0;
        background: rgba(0,0,0, .4);
    }
    .search__content {
        padding: 20px 0;
        background: #fff;
    }
    .search__form {
        position: relative;
        margin: 0;
    }
    .search__form input {
        display: block;
        width: 100%;
        height: 50px;
        padding: 0 50px 0 15px;
        border-radius: 5px;
        background: #fff;
        box-shadow: inset 0 0 5px 0 #ccc;
    }
    .search__form button {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 13px;
        border-radius: 5px;
        color: #ccc;
        background: none;
    }

    .search_active {
        display: block;
    }
    .search_active .header__button svg:first-child {
        display: none;
    }
    .search_active .header__button svg:last-child {
        display: block;
    }
</style>
