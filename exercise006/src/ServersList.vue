<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in numberOfServers">
                <single-server :server-number="index"></single-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import SingleServer from "./SingleServer.vue"

    export default {
        data: function(){
            return {
                numberOfServers: 5
            }
        },
        components: {
            'single-server': SingleServer
        }
    }
</script>