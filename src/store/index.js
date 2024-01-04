import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connection_state: false,
    connection_address: 'http://101.33.224.43:1347'
  },
  getters: {
  },
  mutations: {
    state_change (state) {
      state.connection_state = true
    },
    address_change (state, ip) {
      state.connection_address = ip
    }
  },
  actions: {
  },
  modules: {
  }
})
