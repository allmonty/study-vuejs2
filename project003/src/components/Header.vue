<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="home"><a class="navbar-brand">Stock Trader</a></router-link>
            </div>

            <ul class="nav navbar-nav navbar-left">
                <router-link to="portifolio" tag="li" active-class="active"><a>Portifolio</a></router-link>
                <router-link to="stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li><a>End Day</a></li>
                <li><a>Save & Load</a></li>
                <li><a><b>Funds: $xx,xx</b></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
