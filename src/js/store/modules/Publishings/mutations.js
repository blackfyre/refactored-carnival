import _ from 'lodash';

export default {
    storeInitialPublishings(state, payload) {
        state.latestPublications = payload;
    },
    deletePublication(state, payload) {
        _.remove(state.latestPublications, (row) => {
            return row.id === payload;
        });
    }
};
