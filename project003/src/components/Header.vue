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
                <li>
                    <a @click="toggleSaveLoad" href="#">
                        Save & Load <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" 
                        :style="{display: (this.saveLoadIsVisible == true ? 'initial' : 'none')}">
                        <li><a @click="saveData(); toggleSaveLoad();" href="#">Save</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a @click="loadData(); toggleSaveLoad();" href="#">Load</a></li>
                    </ul>
                </li>
                <li><a><b>Funds: {{getFunds | currency}}</b></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {DataConnectionMixin} from '../Mixins/DataConnectionMixin.js';

    export default {
        mixins: [DataConnectionMixin],
        data(){
            return {
                saveLoadIsVisible: false,
            }
        },
        computed: {
            ...mapGetters('wallet', {
                getFunds: 'getFunds'
            })
        },
        methods: {
            toggleSaveLoad(event){
                this.saveLoadIsVisible = !this.saveLoadIsVisible;
            }
        }
    };
</script>

<style>
    .navbar {
        margin-top: 15px;
    }
</style>
