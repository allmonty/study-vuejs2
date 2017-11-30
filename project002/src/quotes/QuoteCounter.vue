<template>
    <div class="container-fluid">
        <div class="row">
            <h2>Quotes Added</h2>
            <div class="progression-bar" id="back">
                <div class="progression-bar" id="front" :style="{width: calculateProgression}">
                    <span v-if="countedQuotes > 0">{{countedQuotes}} / {{maxQuotes}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {QuoteEventBus} from "./QuoteEventBus"

    export default {
        data: function(){
            return {
                countedQuotes: 0,
                maxQuotes: 10,
            }
        },
        computed: {
            calculateProgression(){
                return (this.countedQuotes * 100) / this.maxQuotes + "%"
            }
        },
        created(){
            QuoteEventBus.$on('CreateQuote', (quote) => {
                if(this.countedQuotes < this.maxQuotes)
                    this.countedQuotes++;
            });
            QuoteEventBus.$on('RemoveQuote', (quote) => {
                if(this.countedQuotes > 0)
                    this.countedQuotes--;
            });
        }
    }
</script>

<style scoped>
    .progression-bar{
        width: 100%;
        height: 25px;
        border-radius: 5px;

        text-align: center;
        line-height: 25px;
        font-weight: bold;
        color: white;

        transition: width 0.5s;
    }
    .progression-bar#back{
        background-color: #ccc;
    }
    .progression-bar#front{
        background-color: #7272ff;
    }
</style>
