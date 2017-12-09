import Vue from 'vue';
import Vuex from 'vuex';

import funds from './modules/funds'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        funds
    }
});