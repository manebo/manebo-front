import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    loading: false
  },
  getters: {
    getTasks: (state, getters) => () => {
      return state.tasks
    },
    getLoadingStatus: (state, getters) => () => {
      return state.loading
    }
  },
  mutations: {
    setTasksFromApi (state, payload) {
      state.tasks = payload.tasks
    },
    setLoadingStatus (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async getTasksFromApi (context) {
      const payload = {
        tasks: []
      }
      context.commit('setLoadingStatus', true)
      await sleep(2000)
      await axios.get('http://localhost:3000/tasks')
        .then((res) => {
          payload.tasks = res.data
          context.commit('setTasksFromApi', payload)
          context.commit('setLoadingStatus', false)
        })
    }
  }
})

function sleep (milliseconds: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), milliseconds)
  })
}
