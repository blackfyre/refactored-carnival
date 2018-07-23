import Vue from 'vue';
import Vuex from 'vuex';
import PublishingStore from './modules/Publishings/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        PublishingStore
    }
});
