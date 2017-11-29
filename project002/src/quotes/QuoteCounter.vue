<template>
    <div>
        <h2>Quotes Added</h2>
        <div class="progression-bar" id="back">
            <div class="progression-bar" id="front" :style="{width: calculateProgression}">
                <span v-if="countedQuotes > 0">{{countedQuotes}} / {{maxQuotes}}</span>
            </div>
        </div>
    </div>
</template>

<script>
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

        transition: width 1s;
    }
    .progression-bar#back{
        background-color: lightgray;
    }
    .progression-bar#front{
        background-color: #7272ff;
    }
</style>
