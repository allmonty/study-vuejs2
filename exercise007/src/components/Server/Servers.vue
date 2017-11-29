<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" v-bind:key="server.id">
                <div @click="selectServer(server.id)">
                    <single-server :id="server.id" :status="server.status"></single-server>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import SingleServer from "./SingleServer.vue"
    import {ServersEventBus} from "./ServersEventBus"

    export default {
        data: function(){
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        },
        methods:{
            selectServer(serverId){
                ServersEventBus.$emit('ServerSelection', serverId);
            }
        },
        components:{
            "single-server": SingleServer
        }
    }
</script>
