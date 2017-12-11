const state = {
    availableStocks: [
        { name: 'Google', price: 100 },
        { name: 'Twitter', price: 50 },
        { name: 'Microsoft', price: 75 },
        { name: 'Apple', price: 90 }
    ]
};

const getters = {
    getAvailableStocks(state) {
        return state.availableStocks;
    }
};

const mutations = {
    setStocks(state, payload) {
        state.availableStocks = payload;
    },
};

const actions = {
    setStocks({ commit }, payload) {
        for(var stockId in payload){
            if(!payload[stockId].name && !payload[stockId].price)
            return
        }
        
        commit('setStocks', payload);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}