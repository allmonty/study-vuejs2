import Vue from 'vue';
import Vuex from 'vuex';

import availablestocks from './modules/available-stocks';
import wallet from './modules/wallet';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        availablestocks,
        wallet
    }
});