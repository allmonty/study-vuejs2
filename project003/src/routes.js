import Home from './components/Home.vue';

const Portifolio = resolve => {
    require.ensure(['./components/Portifolio.vue'], () => {
        resolve(require('./components/Portifolio.vue'));
    });
};
const Stocks = resolve => {
    require.ensure(['./components/Stocks.vue'], () => {
        resolve(require('./components/Stocks.vue'));
    });
};

export const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/portifolio', name: 'portifolio', component: Portifolio },
    { path: '/stocks', name: 'stocks', component: Stocks },
    { path: '*', redirect: '/' }
];