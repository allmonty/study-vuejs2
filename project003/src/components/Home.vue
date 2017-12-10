<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 rnd-blk-border">
                <h1>Trade or View your Portifolio</h1>
                <p>You may Save & Load your Data</p>
                <p>Click on 'End Day' to begin a new Day!</p>
                <hr>
                <h3>Your Funds: {{getFunds | currency}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters('wallet', {
                getFunds: 'getFunds'
            })
        }
    };
</script>

<style scoped>
    h1, h3 {
        font-weight: bold;
    }
</style>
