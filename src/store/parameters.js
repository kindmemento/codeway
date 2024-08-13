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
		removeParameter(state, parameter) {
			state.parameters = state.parameters.filter(param => param.id !== id)
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
		async deleteParameter({ commit }, id) {
			try {
				await apiService.deleteParameter(id)
				commit('removeParameter', id)
			} catch (error) {
				console.error('Error deleting parameter:', error)
				throw error
			}
		},
	},
	getters: {
		parameters: state => state.parameters,
	},
}
