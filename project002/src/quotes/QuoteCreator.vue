<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3"></div>
            <div class="col-xs-6">
                <textarea class="form-control" v-model="quoteText" 
                    placeholder="Write your quote here :)">
                </textarea>
            </div>
            <div class="col-xs-3"></div>
        </div>
        <div class="row">
            <div class="col-xs-3"></div>
            <div class="col-xs-6 text-right">
                <button class="btn btn-default" @click="createQuote">Add</button>
            </div>
        </div>
    </div>
</template>

<script>

    import {QuoteEventBus} from "./QuoteEventBus"

    export default {
        data: function(){
            return {
                quoteText: ""
            }
        },
        methods: {
            createQuote(){
                if(this.quoteText != "")
                    QuoteEventBus.$emit('CreateQuote', this.quoteText);
            }
        }
    }
</script>

<style scoped>
    textarea{
        resize: none;
        height: 20vh;
    }
</style>
