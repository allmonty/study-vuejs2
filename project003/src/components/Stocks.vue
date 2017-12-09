<template>
    <div>
        <div class="col-xs-6 stock" v-for="stock in stocks" :key="i">
            <cmp-stock :name="stock.name" :price="stock.price"></cmp-stock>
        </div>
    </div>
</template>

<script>
    import Stock from "./Stock.vue"

    export default {
        data(){
            return {
                stocks: [
                    {name: 'Google', price: '100'},
                    {name: 'Twitter', price: '50'},
                    {name: 'Microsoft', price: '75'},
                    {name: 'Apple', price: '90'},
                ]
            }
        },
        components:{
            "cmpStock": Stock
        }
    };
</script>

<style scoped>
    .stock {
        padding: 10px;
    }
</style>
