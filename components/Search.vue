<template>
    <transition name="show">
        <div v-show="isActive" class="search">
            <transition name="fadedown">
                <div v-show="isActive" class="search__content">
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
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Search',
        props: {
            isActive: Boolean,
            default: false
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
        display: block;
        width: 100%;
        height: 100%;
        padding: 60px 0 0;
        background: rgba(0,0,0, .4);
    }
    .search__content {
        position: relative;
        top: 0;
        padding: 20px 0;
        background: #fafafa;
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

    .show-enter-active, .show-leave-active {
        transition: .4s;
    }
    .show-enter, .show-leave-to {
        opacity: 0;
    }

    .fadedown-enter-active, .fadedown-leave-active {
        transition: .4s;
    }
    .fadedown-enter, .fadedown-leave-to {
        top: -30px;
        opacity: 0;
    }
</style>
