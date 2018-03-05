const state = {
    ticket: {},
}

const getters = {
    getTicket: state => state.ticket,
}

const actions = {
  updateTicketStatus ({ commit }, status) {
    commit('UPDATE_STATUS', status);
  },
}

const mutations = {
    UPDATE_STATUS (state, status) {
        state.ticket = {
            ...state.ticket,
            status,
        }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
