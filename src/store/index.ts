import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guests: new Array(),
  },
  mutations: {
    addGuest(state, guest){
      state.guests.unshift(guest);
    },
    deleteGuest(state, index){
      state.guests.splice(index, 1);
    },
  },
  actions: {
  },
  modules: {
  }
})
