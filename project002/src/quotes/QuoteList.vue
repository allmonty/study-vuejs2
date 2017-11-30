<template>
    <div class="container-fluid">
        <div class="row clearfix">
            <div class="col-xs-3 padding" v-for="(quote, key) in quotes" 
                                    v-bind:key="key" @click="removeQuote(key)">
                <div class="quote round">
                    {{quote}}
                </div>
            </div>
        </div>
        <div class="row text-center bg-warning round">
            Click on a quote to remove it.
        </div>
    </div>
</template>

<script>

    import {QuoteEventBus} from "./QuoteEventBus"

    export default {
        data: function(){
            return {
                maxQuotes: 10,
                quotes: []
            }
        },
        methods: {
            removeQuote(quoteIndex){
                this.quotes.splice(quoteIndex, 1);
                QuoteEventBus.$emit('RemoveQuote', quoteIndex);
            }
        },
        created(){
            QuoteEventBus.$on('CreateQuote', (quote) => {
                if(this.quotes.length < this.maxQuotes)
                    this.quotes.push(quote);
            });
        }
    }
</script>

<style scoped>
    .padding{
        padding: 5px;
    }
    .round{
        border-radius: 5px;
    }
    .quote{
        border: 1px solid #ccc;
        text-align: center;
        word-wrap: break-word;
        font-family: 'Indie Flower', cursive;
        font-size: large;
        font-weight: bold;
    }

</style>
