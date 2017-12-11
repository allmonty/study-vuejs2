import {mapGetters, mapActions} from 'vuex';

export const DataConnectionMixin = {
    data() {
        return {
            resource: {}
        };
    },
    computed: {
        ...mapGetters('wallet', {
            getFunds: 'getFunds',
            getPortifolio: 'getPurchasedStocks'
        }),
        ...mapGetters('availablestocks', {
            getStocks: 'getAvailableStocks'
        })
    },
    methods: {
        ...mapActions('wallet', {
            setWallet: 'setWallet'
        }),
        ...mapActions('availablestocks', {
            setStocks: 'setStocks'
        }),
        saveData() {
            let funds       = this.getFunds;
            let portifolio  = this.getPortifolio;
            let stocks      = this.getStocks;

            this.resource.save({
                funds,
                portifolio,
                stocks
            });
        },
        loadData() {
            this.resource.load()
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setWallet({
                    funds: response.funds,
                    stocks: response.portifolio
                });
                this.setStocks(response.stocks);
            });
        }
    },
    created() {
        const dataBaseActions = {
            save: { method: 'PUT', url: 'userData.json' },
            load: { method: 'GET', url: 'userData.json'},
        };
        this.resource = this.$resource('', {}, dataBaseActions);
    }
}