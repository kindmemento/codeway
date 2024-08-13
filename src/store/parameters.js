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
		removeParameter(state, id) {
			state.parameters = state.parameters.filter(param => param.id !== id)
		},
		updateParameter(state, updatedParam) {
			const index = state.parameters.findIndex(param => param.id === updatedParam.id)
			if (index !== -1) {
				state.parameters.splice(index, 1, updatedParam)
			}
		}
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
		async updateParameter({ commit }, { id, data }) {
			try {
				console.log("param id", id)
				console.log("req body", data)
				const response = await apiService.updateParameter(id, data)
				commit('updateParameter', response.data)
			} catch (error) {
				if (error.response && error.response.status === 409) {
					alert('Conflict detected: This parameter was updated by another user. Please reload and try again.')
				} else {
					console.error(`Error updating parameter with id ${id}`, error)
					throw error
				}
			}
		}
	},
	getters: {
		parameters: state => state.parameters,
	},
}
