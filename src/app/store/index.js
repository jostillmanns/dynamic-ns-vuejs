import Vue from 'vue'
import Vuex from 'vuex'
import ticketDetailsStore from '../ticket-details/store';
import checkoutDetailsStore from '../checkout-details/store';
import sharedStore from '../shared/store';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ticketDetailsStore,
    checkoutDetailsStore,
    sharedStore,
  },
  strict: debug,
})