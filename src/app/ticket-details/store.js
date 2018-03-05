const state = {
    ticket: {
    },
}

const getters = {
    getTicket: (state) =>  {
        return state.ticket;
    }
}

const actions = {
  updateTicketStatus ({ commit }, ticketStatus) {
    commit('UPDATE_STATUS', ticketStatus);
  },
}

const mutations = {
    UPDATE_STATUS (state, status) {
        state.ticket = {
            ...state.ticket,
            status,
        };
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}