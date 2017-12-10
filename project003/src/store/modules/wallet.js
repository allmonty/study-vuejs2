import Vue from 'vue';

const state = {
    funds: 10000.00,
    stocks: []
};

const getters = {
    getFunds(state) {
        return state.funds;
    },
    getPurchasedStocks(state, getters, rootState, rootGetters) {
        let response = []

        let availableStocks = rootState.availablestocks.availableStocks;

        for (var key in state.stocks) {
            let stock = state.stocks[key];
            response.push(
                {
                    name: stock.name,
                    quantity: stock.quantity,
                    price: availableStocks[stock.name].price
                }
            );
        }
        
        return response;
    }
};

const mutations = {
    subtractFund(state, payload) {
        if (!isNaN(payload))
            state.funds -= payload;
    },
    addStock(state, payload) {
        let stock = state.stocks.find( value => {
            return value.name == payload.name;
        });

        if (!stock)
            state.stocks.push({
                name: payload.name,
                quantity: payload.quantity
            });
        else
            stock.quantity += payload.quantity;
    }
};

const actions = {
    buy({ commit }, payload) {
        let totalPrice = payload.quantity * payload.price;

        if (totalPrice <= state.funds) {
            commit('addStock', payload);
            commit('subtractFund', totalPrice);
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}