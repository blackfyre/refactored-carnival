import _ from 'lodash';
export default {
    latestPublications(state) {
        return state.latestPublications;
    },
    singlePublication(state) {
        return (id) => {
            return _.find(state.latestPublications, {
                'id': id
            });
        };
    }
};
