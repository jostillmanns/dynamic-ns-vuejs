// Shared getters should not contain any logic. Their only purpose
// is to call the correct getter

const getters = {
    getTicket: function(state, getters, rootState, wtf) {
        const storeNs = `${rootState.route.name}Store`;
        const currentFuncName = Object.keys(getters)[0];
        return wtf[`${storeNs}/${currentFuncName}`];
    }
}

export default {
  namespaced: true,
  state: {},
  getters,
  actions: {},
  mutations: {},
}