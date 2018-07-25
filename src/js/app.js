import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import store from './store/Publisings';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Multiselect from 'vue-multiselect';
import jQuery from 'jquery';
import LuxonDateTime from './components/custom_fields/dateTime.vue';

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

window.$ = jQuery;

Vue.use(VueRouter);
Vue.use(VueFormGenerator);
Vue.component('fieldLuxonDateTime', LuxonDateTime);
Vue.component('multiselect', Multiselect);
Vue.prototype.$http = require('axios');
Vue.prototype.$eventBus = new Vue({});

new Vue({
    router,
    store,
    el: '#app',
    components: {
        App
    },
    template: '<app/>'
});
