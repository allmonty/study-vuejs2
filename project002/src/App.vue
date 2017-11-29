<template>
    <div class="container">
        <app-quote-counter></app-quote-counter>
    </div>
</template>

<script>
    import QuoteCounter from "./quotes/QuoteCounter.vue";

    export default {
        components: {
            appQuoteCounter: QuoteCounter
        }
    }
</script>

<style>
</style>
