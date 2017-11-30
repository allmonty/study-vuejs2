<template>
    <div class="container">
        <app-quote-counter></app-quote-counter>
        <div class="spacer"></div>
        <app-quote-creator></app-quote-creator>
        <div class="spacer"></div>
        <app-quote-list></app-quote-list>
    </div>
</template>

<script>
    import QuoteCounter from "./quotes/QuoteCounter.vue";
    import QuoteCreator from "./quotes/QuoteCreator.vue";
    import QuoteList from "./quotes/QuoteList.vue";

    export default {
        components: {
            appQuoteCounter: QuoteCounter,
            appQuoteCreator: QuoteCreator,
            appQuoteList: QuoteList
        }
    }
</script>

<style scoped>
    .spacer{
        padding: 5px 0px;
    }
</style>
