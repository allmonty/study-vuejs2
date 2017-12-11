<template>
    <div class="container">
        <app-header></app-header>
        <transition name="page-anim" mode="out-in">
            <router-view></router-view>
        </transition>
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

    .page-anim-enter{
        opacity: 0;
    }
    .page-anim-enter-active{
        -webkit-transition: opacity 0.3s;
        -moz-transition: opacity 0.3s;
        transition: opacity 0.3s;
        animation: slide-in 0.3s ease-out forwards;
    }
    .page-anim-enter-to{
        opacity: 1;
    }
    .page-anim-leave{
        opacity: 1;
    }
    .page-anim-leave-active{
        -webkit-transition: opacity 0.3s;
        -moz-transition: opacity 0.3s;
        transition: opacity 0.3s;
        animation: slide-out 0.3s ease-out forwards;
    }
    .page-anim-leave-to{
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
