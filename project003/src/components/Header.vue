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
                <li><a @click="goToNextDay">End Day</a></li>
                <li>
                    <a @click="toggleSaveLoad">
                        Save & Load <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" 
                        :style="{display: (this.saveLoadIsVisible == true ? 'initial' : 'none')}">
                        <li><a @click="saveData(); toggleSaveLoad();">Save</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a @click="loadData(); toggleSaveLoad();">Load</a></li>
                    </ul>
                </li>
                <li><a><b>Funds: {{getFunds | currency}}</b></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
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
            ...mapActions('availablestocks', {
                goToNextDay: 'calculateNextDay'
            }),
            toggleSaveLoad(event){
                this.saveLoadIsVisible = !this.saveLoadIsVisible;
            }
        }
    };
</script>

<style scoped>
    a {
        cursor: pointer;
    }
    .navbar {
        margin-top: 15px;
    }
</style>
