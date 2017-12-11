<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 header">
                <span id="stock-name">{{name}}</span>
                <span id="stock-info">(Price: {{price | currency}} | Qtd: {{quantity}})</span>
            </div>
            <div class="col-xs-4 content">
                <input type="number" v-model="quantityToSell" class="form-control" min="0">
            </div>
            <div class="col-xs-4 col-xs-offset-4 content">
                <button type="submit" @click="sellStock" class="btn btn-success">Sell</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: [
            'price', 'name', 'quantity'
        ],
        data(){
            return {
                quantityToSell: 0
            }
        },
        methods: {
            ...mapActions('wallet', {
                sell: 'sell'
            }),
            sellStock(){
                this.sell({
                    name: this.name,
                    quantityToSell: Number(this.quantityToSell)
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
        background-color: lightcoral;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    #stock-name{
        font-weight: bold;
        font-size: 1.5em;
    }
    #stock-info{
        font-size: 1em;
        color: #000486;
    }
</style>
