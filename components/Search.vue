<template>
    <div class="search" :class="{ search_active: isActive }">
        <div class="wrap">
            <form class="search__form">
                <input type="search" placeholder="Search...">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        props: {
            isActive: Boolean
        }
    }
</script>

<style>
    .search {
        display: none;
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
