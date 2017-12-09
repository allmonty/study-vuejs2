<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "./components/Header.vue"

    export default {
        components: {
            "appHeader" : Header
        }
    }
</script>

<style>
    .row{
        border: 1px solid #e7e7e7;
        border-radius: 4px;
    }
</style>
