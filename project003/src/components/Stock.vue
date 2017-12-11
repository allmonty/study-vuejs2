<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 header">
                <span id="stock-name">{{name}}</span>
                <span id="stock-price">(Price: {{price | currency}})</span>
            </div>
            <div class="col-xs-4 content">
                <input type="number" v-model="quantity" class="form-control" min="0">
            </div>
            <div class="col-xs-4 col-xs-offset-4 content">
                <button type="submit" @click="buyStock" class="btn btn-success">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: [
            'price', 'name'
        ],
        data(){
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions('wallet', {
                buy: 'buy'
            }),
            buyStock(){
                this.buy({
                    name: this.name,
                    price: Number(this.price),
                    quantity: Number(this.quantity)
                });
            }
        }
    };
</script>

<style scoped>
    .content {
        padding: 10px;
        text-align: right;
    }
    .header {
        background-color: lightblue;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    #stock-name{
        font-weight: bold;
        font-size: 1.5em;
    }
    #stock-price{
        font-size: 1em;
        color: #000486;
    }
</style>
