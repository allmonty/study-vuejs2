<template>
    <div>
        <p>Server #{{ id }} - Status: {{serverStatus}}</p>
    </div>
</template>

<script>
    import {ServersEventBus} from "./ServersEventBus"

    export default {
        props: ['id', 'status'],
        data: function() {
            return {
                serverStatus: this.status
            }
        },
        created(){
            ServersEventBus.$on('ChangeServerStatus', (data) => {
                if(this.id == data.id){
                    this.serverStatus = data.status;
                }
            });
        }
    }
</script>