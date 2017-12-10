<template>
    <div>
        <div class="col-xs-6 stock" v-for="stock in getAvailableStocks" :key="i">
            <cmp-stock :name="stock.name" :price="stock.price"></cmp-stock>
        </div>
    </div>
</template>

<script>
    import Stock from "./Stock.vue"
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters('availablestocks', {
                getAvailableStocks: 'getAvailableStocks'
            })
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
