import Vue from 'vue';

const state = {
    funds: 10000.00,
    stocks: []
};

const getters = {
    getFunds: state => {
        return state.funds;
    },
    getPurchasedStocks : state => {
        return state.stocks;
    },
    getPurchasedStocksWithPrice: (state, getters, rootState, rootGetters) => {
        if(state.stocks.length == 0) return [];

        let availablestocks = rootState.availablestocks.availableStocks;
        let stocksDict = {};

        availablestocks.forEach(element => {
            stocksDict[element.name] = element.price;
        });
        
        state.stocks.forEach(element => {
            element['price'] = stocksDict[element.name];
        });

        console.log(state.stocks);
        
        return state.stocks;
    }
};

const mutations = {
    setFunds(state, payload) {
        if (!isNaN(payload))
            state.funds = payload;
    },
    setStocks(state, payload) {
        state.stocks = payload;
    },
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
        
        console.log(state.stocks);
    },
    removeStock(state, payload) {
        let stock = state.stocks.find(value => {
            return value.name == payload.name;
        });

        if (stock && payload.quantityToSell <= stock.quantity) {
            let totalPrice = payload.quantityToSell * payload.price;
            state.funds += totalPrice;
            stock.quantity -= payload.quantityToSell;
            if(stock.quantity <= 0)
                state.stocks.splice(state.stocks.indexOf(stock), 1);
        }
    }
};

const actions = {
    setWallet({commit}, payload) {
        if (isNaN(payload.funds)){
            console.warn("SetWalletProblem: Problem with funds");
            return; //problem...shouldn't save
        }
        for (var stockId in payload.stocks) {
            if (!payload.stocks[stockId].name && !payload.stocks[stockId].quantity){
                console.warn("SetWalletProblem: Problem with portifolio");
                return; //problem...shouldn't save
            }
        }

        commit('setFunds', payload.funds);
        commit('setStocks', payload.stocks);
    },
    buy({ commit }, payload) {
        let totalPrice = payload.quantity * payload.price;

        if (totalPrice <= state.funds) {
            commit('addStock', payload);
            commit('subtractFund', totalPrice);
        }
    },
    sell({ commit, rootState }, payload) {
        let stock = rootState.availablestocks.availableStocks.find(value => {
            return value.name == payload.name;
        });

        let newPayload = {
            price : stock.price,
            ...payload
        }

        commit('removeStock', newPayload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}