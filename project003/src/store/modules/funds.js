const state = {
    funds: 10000.00
};

const getters = {
    getFunds (state) {
        return state.funds;
    }
};

const mutations = {
    add (state, payload) {
        if(!isNaN(payload))
            state.funds += payload;
    },
    subtract (state, payload) {
        if (!isNaN(payload))
            state.funds -= pauload;
    }
};

const actions = {
    add ({ commit }, payload) {
        commit('add', payload);
    },
    subtract ({ commit }, payload) {
        commit('subtract', payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}