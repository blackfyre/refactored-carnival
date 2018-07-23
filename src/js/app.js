import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import store from './store/Publisings';

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

Vue.use(VueRouter);
Vue.prototype.$http = require('axios');

new Vue({
    router,
    store,
    el: '#app',
    components: {
        App
    },
    template: '<app/>'
});
