import apiService from '@/api/apiService'

const state = {
	parameters: [],
}

const mutations = {
	setParameters(state, parameters) {
		state.parameters = parameters
	},
	addParameter(state, parameter) {
		state.parameters.push(parameter)
	}
}

const actions = {
	async fetchParameters({ commit }) {
		try {
			const response = await apiService.getAllParameters()
			commit('setParameters', response.data)
		} catch (error) {
			console.error('Error fetching parameters:', error)
		}
	},
	async createParameter({ commit }) {
		try {
			const response = await apiService.createParameter(data)
			commit('addParameter', response.data)
		} catch (error) {
			console.error('Error creating parameter:', error)
		}
	}
}

const getters = {
	parameters: (state) => state.parameters,
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}
