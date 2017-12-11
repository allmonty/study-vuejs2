<template>
    <div>
        <div class="col-xs-6 stock" v-for="stock in getPurchasedStocksWithPrice" :key="stock.name">
            <cmp-purchased-stock :name="stock.name" :price="stock.price" :quantity="stock.quantity"></cmp-purchased-stock>
        </div>
    </div>
</template>

<script>
    import PurchasedStock from "./PurchasedStock.vue"
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters('wallet', {
                getPurchasedStocksWithPrice: 'getPurchasedStocksWithPrice'
            })
        },
        components:{
            "cmpPurchasedStock": PurchasedStock
        }
    };
</script>

<style scoped>
    .stock {
        padding: 10px;
    }
</style>
