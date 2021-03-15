<template>
    <nav class="menu" :class="{ menu_active: isActive }">
        <div class="wrap">
            <ul class="menu__list">
                <li><a href="/ps5">Playstation 5</a></li>
                <li><a href="/ps5de">Playstation 5 digital edition</a></li>
                <li><a href="/ps4">Playstation 4</a></li>
                <li><a href="/ps4pro">Playstation 4 pro</a></li>
                <li><a href="/ps4slim">Playstation 4 slim</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            isActive: Boolean
        }
    }
</script>

<style>
    .menu {
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
    .menu__list {
        margin: 0;
        padding: 30px;
        list-style: none;
        background: #fff;
    }

    .menu_active {
        display: block;
    }
    .menu_active .header__button svg:first-child {
        display: none;
    }
    .menu_active .header__button svg:last-child {
        display: block;
    }
</style>
