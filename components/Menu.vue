<template>
    <transition name="show">
        <nav v-show="isActive" class="menu">
            <transition name="fadedown">
                <div v-show="isActive" class="menu__content">
                    <div class="wrap menu__wrap">
                        <div class="menu__block">
                            <p class="menu__title">Skins</p>
                            <ul class="menu__list">
                                <li><a href="/ps5/skins">Playstation 5</a></li>
                                <li><a href="/ps5de/skins">Playstation 5 digital edition</a></li>
                                <li><a href="/ps4/skins">Playstation 4</a></li>
                                <li><a href="/ps4pro/skins">Playstation 4 pro</a></li>
                                <li><a href="/ps4slim/skins">Playstation 4 slim</a></li>
                            </ul>
                        </div>
                        <div class="menu__block">
                            <p class="menu__title">Accessories</p>
                            <ul class="menu__list">
                                <li><a href="/ps5/accessories">Playstation 5</a></li>
                                <li><a href="/ps5de/accessories">Playstation 5 digital edition</a></li>
                                <li><a href="/ps4/accessories">Playstation 4</a></li>
                                <li><a href="/ps4pro/accessories">Playstation 4 pro</a></li>
                                <li><a href="/ps4slim/accessories">Playstation 4 slim</a></li>
                            </ul>
                        </div>
                        <div class="menu__block">
                            <p class="menu__title">Games</p>
                            <ul class="menu__list">
                                <li><a href="/ps5/games">Playstation 5</a></li>
                                <li><a href="/ps5de/games">Playstation 5 digital edition</a></li>
                                <li><a href="/ps4/games">Playstation 4</a></li>
                                <li><a href="/ps4pro/games">Playstation 4 pro</a></li>
                                <li><a href="/ps4slim/games">Playstation 4 slim</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
    </transition>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            isActive: Boolean,
            default: false
        }
    }
</script>

<style>
    .menu {
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
    .menu__content {
        position: relative;
        top: 0;
        max-height: 100%;
        padding: 20px 0;
        overflow: auto;
        background: #fafafa;
    }
    .menu__wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }
    .menu__block {
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 20px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0 0 5px 0 #ccc;
    }
    .menu__title {
        margin: 0 0 15px;
        font-weight: 700;
        font-family: 'Play';
        font-size: 22px;
        font-weight: 700;
    }
    .menu__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .menu__list li {
        margin: 5px 0 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
        color: #0070d1;
    }
    .menu__list a {
        text-decoration: none;
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

    @media (min-width: 768px) {
        .menu__block {
            width: calc((100% - 30px) / 3);
            margin: 0;
        }
    }
</style>
