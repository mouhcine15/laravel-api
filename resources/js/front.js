require('./bootstrap');

window.Vue = require('vue'); //importare libreria Vue

import App from './components/App.vue'; //importare componente base App.vue e assegnazione variabile App


const app = new Vue({
    el: '#root', //id componente nel file HTML dove opera Vue
    render: h => h(App) //montare App nell'elemento root
});
