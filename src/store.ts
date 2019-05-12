import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    getTasks: (state, getters) => () => {
      return state.tasks
    }
  },
  mutations: {
    getTasks (state, payload) {
      state.tasks = payload.tasks
    }
  },
  actions: {
    async getTasksAction (context) {
      const payload = {
        tasks: []
      }
      await axios.get('http://localhost:3000')
        .then((res) => {
          payload.tasks = res.data
        })
      context.commit('getTasks', payload)
    }
  }
})
