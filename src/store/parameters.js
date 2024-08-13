import apiService from '@/api/apiService'

export default {
  namespaced: true,
  state: {
    parameters: [],
  },
  mutations: {
    setParameters(state, parameters) {
      state.parameters = parameters
    },
    addParameter(state, parameter) {
      state.parameters.push(parameter)
    },
  },
  actions: {
    async fetchParameters({ commit }) {
      try {
        const response = await apiService.getAllParameters()
        commit('setParameters', response.data)
      } catch (error) {
        console.error('Error fetching parameters:', error)
        throw error
      }
    },
    async createParameter({ commit }, data) {
      try {
        const response = await apiService.createParameter(data)
        commit('addParameter', response.data)
      } catch (error) {
        console.error('Error creating parameter:', error)
        throw error
      }
    },
  },
  getters: {
    parameters: state => state.parameters,
  },
}
