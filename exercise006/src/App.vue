<template>
    <div class="container">
        <header>
            <server-status></server-status>
        </header>
        <hr>
        <div class="row">
            <servers-list></servers-list>
            <servers-details></servers-details>
        </div>
        <hr>
        <footer>
            <servers-manager></servers-manager>
        </footer>
    </div>
</template>

<script>
    import ServersList from "./ServersList.vue"
    import ServerDetails from "./ServerDetails.vue"
    import ServersManager from "./ServersManager.vue"
    import ServerStatus from "./ServerStatus.vue"

    export default {
        components: {
            'servers-list': ServersList,
            'servers-details': ServerDetails,
            'servers-manager': ServersManager,
            'server-status': ServerStatus,
        }
    }
</script>