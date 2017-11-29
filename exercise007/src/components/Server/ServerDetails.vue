<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <button v-if="serverId > 0" @click="changeServerStatus">Change server #{{serverId}} status</button>
        <button v-else>No server selected</button>
    </div>

</template>

<script>
    import {ServersEventBus} from "./ServersEventBus"

    export default {
        data: function(){
            return {
                serverId: 0
            }
        },
        methods: {
            changeServerStatus(){
                ServersEventBus.$emit('ChangeServerStatus', {id: this.serverId, status: 'Normal'});
            }
        },
        created(){
            ServersEventBus.$on('ServerSelection', (serverId) => {
                this.serverId = serverId;
            });
        }
    }
</script>

<style>

</style>
