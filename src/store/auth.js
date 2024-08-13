import firebase from 'firebase/app'

export default {
	namespaced: true,
	state: {
		user: null,
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
	},
	actions: {
		async signIn({ commit }, { email, password }) {
			const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
			commit('setUser', userCredential.user)
		},
		async signOut({ commit }) {
			await firebase.auth().signOut()
			commit('setUser', null)
		},
	},
	getters: {
		isAuthenticated(state) {
			return !!state.user
		},
	},
}
