const state = {
    availableStocks: {
        'Google':       { price: 100 },
        'Twitter':      { price: 50 },
        'Microsoft':    { price: 75 },
        'Apple':        { price: 90 }
    }
};

const getters = {
    getAvailableStocks(state) {
        let response = []

        for (var stock in state.availableStocks) {
            response.push(
                {
                    name: stock,
                    price: state.availableStocks[stock].price
                }
            );
        }

        return response;
    }
};

const mutations = {};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}