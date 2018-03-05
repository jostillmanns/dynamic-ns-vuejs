// Shared getters should not contain any logic. Their only purpose
// is to call the correct getter


const muxGetter = (namespace, getter, getters) => {
    return getters[`${namespace}/${getter}`];
}

const getters = {
    getTicket: function(state, getters, rootState, wtf) {
        return muxGetter(
            rootState.route.meta.storeNs,
            'getTicket',
            wtf
        );
    }
}

export default {
  namespaced: true,
  state: {},
  getters,
  actions: {},
  mutations: {},
}
