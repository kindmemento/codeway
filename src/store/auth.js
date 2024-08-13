import { auth } from '@/auth/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

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
			try {
				const userCredential = await signInWithEmailAndPassword(auth, email, password)
				commit('setUser', userCredential.user)
			} catch (error) {
				console.error('Error during sign in:', error)
				throw error
			}
		},
		async signOut({ commit }) {
			try {
				await signOut(auth)
				commit('setUser', null)
			} catch (error) {
				console.error('Error during sign out:', error)
				throw error
			}
		},
	},
	getters: {
		isAuthenticated(state) {
			return !!state.user
		},
	},
}
