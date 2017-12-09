<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 header">
                <span id="stock-name">{{name}}</span>
                <span id="stock-price">(Price: {{price | currency}})</span>
            </div>
            <div class="col-xs-4 content">
                <input type="number" class="form-control">
            </div>
            <div class="col-xs-4 col-xs-offset-4 content">
                <button type="submit" class="btn btn-success">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'price', 'name'
        ]
    };
</script>

<style scoped>
    .content {
        padding: 10px;
        text-align: right;
    }
    .header {
        background-color: lightgreen;
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
        color: gray;
    }
</style>
