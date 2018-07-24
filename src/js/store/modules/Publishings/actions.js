export default {
    storeInitialPublishings({
        commit
    }, payload) {
        commit('storeInitialPublishings', payload);
    },
    deletePublication({
        commit
    }, payload) {
        commit('deletePublication', payload);
    }
};
